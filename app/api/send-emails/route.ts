import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase';
import { POST_PURCHASE_SEQUENCE, ABANDONED_CART_SEQUENCE } from '@/lib/email-sequences';
import { POST_PURCHASE_SEQUENCE_FR, ABANDONED_CART_SEQUENCE_FR } from '@/lib/email-sequences-fr';
import { detectLanguage, getEmailFromName } from '@/lib/language-detection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reloca.ai';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || 'placeholder');
}

// Called by Vercel Cron (or manually) to send due scheduled emails
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (process.env.NODE_ENV === 'production' && process.env.CRON_SECRET) {
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const now = new Date().toISOString();

  // Get all unsent emails that are due
  const { data: dueEmails, error } = await supabaseAdmin
    .from('scheduled_emails')
    .select('id, user_id, report_id, email_index, subject, sequence_type')
    .eq('sent', false)
    .lte('scheduled_at', now)
    .order('scheduled_at')
    .limit(50);

  if (error || !dueEmails?.length) {
    return NextResponse.json({ sent: 0, message: error?.message || 'No emails due' });
  }

  let sent = 0;
  const errors: string[] = [];

  for (const row of dueEmails) {
    try {
      // Get user email, name, and language
      const { data: user } = await supabaseAdmin
        .from('users')
        .select('email, language')
        .eq('id', row.user_id)
        .single();

      if (!user?.email) {
        await supabaseAdmin.from('scheduled_emails').update({ sent: true }).eq('id', row.id);
        continue;
      }

      // Detect user language if not set
      let userLanguage = (user as any).language || 'en';
      if (!userLanguage || userLanguage === 'en') {
        userLanguage = detectLanguage({ email: user.email });
        // Update user language in background (don't await)
        if (userLanguage === 'fr') {
          supabaseAdmin.from('users').update({ language: userLanguage }).eq('id', row.user_id).then();
        }
      }

      // Get the correct email sequence based on type and language
      let sequence;
      if (row.sequence_type === 'abandoned_cart') {
        sequence = userLanguage === 'fr' ? ABANDONED_CART_SEQUENCE_FR : ABANDONED_CART_SEQUENCE;
      } else {
        sequence = userLanguage === 'fr' ? POST_PURCHASE_SEQUENCE_FR : POST_PURCHASE_SEQUENCE;
      }
      const template = sequence[row.email_index];
      if (!template) {
        await supabaseAdmin.from('scheduled_emails').update({ sent: true }).eq('id', row.id);
        continue;
      }

      const firstName = (user as any).first_name || (userLanguage === 'fr' ? 'là' : 'there');
      const reportUrl = `${SITE_URL}/report/${row.report_id}?paid=true`;
      const html = template.buildHtml(firstName, reportUrl);

      await getResend().emails.send({
        from: getEmailFromName(userLanguage as 'fr' | 'en'),
        to: user.email,
        bcc: [process.env.ADMIN_BCC_EMAIL || 'muse.adb@proton.me', 'myjobisamazing@gmail.com'],
        subject: template.subject.replace('[First Name]', firstName),
        html,
      });

      await supabaseAdmin
        .from('scheduled_emails')
        .update({ sent: true, sent_at: new Date().toISOString() })
        .eq('id', row.id);

      sent++;
    } catch (err: any) {
      errors.push(`${row.id}: ${err?.message}`);
    }
  }

  return NextResponse.json({ sent, total: dueEmails.length, errors });
}
