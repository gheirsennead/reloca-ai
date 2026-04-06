import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { processReport } from '@/app/api/generate-report/route';

export const maxDuration = 300;

// Trigger processing for a specific report (called from client)
export async function POST(request: NextRequest) {
  try {
    const { reportId } = await request.json();
    if (!reportId) {
      return NextResponse.json({ error: 'Missing reportId' }, { status: 400 });
    }

    const result = await processReport(reportId);

    // If successful, try to send email
    if (result.success) {
      const { data: report } = await supabaseAdmin
        .from('reports')
        .select('user_id')
        .eq('id', reportId)
        .single();
      if (report?.user_id) {
        await sendReportEmail(reportId, report.user_id).catch(console.error);
      }
    }

    return NextResponse.json({ reportId, ...result });
  } catch (error: any) {
    console.error('Process report error:', error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}

// Also handle GET for cron (processes oldest pending)
export async function GET() {
  try {
    const { data: pending } = await supabaseAdmin
      .from('reports')
      .select('id, user_id')
      .eq('report_type', 'pending')
      .order('created_at', { ascending: true })
      .limit(1)
      .single();

    if (!pending) return NextResponse.json({ status: 'no_pending' });

    const result = await processReport(pending.id);
    if (result.success) {
      await sendReportEmail(pending.id, pending.user_id).catch(console.error);
    }

    return NextResponse.json({ reportId: pending.id, ...result });
  } catch (error: any) {
    console.error('Process reports cron error:', error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}

async function sendReportEmail(reportId: string, userId: string) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.warn('No RESEND_API_KEY — skipping email');
    return;
  }

  const { data: user } = await supabaseAdmin
    .from('users')
    .select('email')
    .eq('id', userId)
    .single();
  if (!user?.email) return;

  const { data: report } = await supabaseAdmin
    .from('reports')
    .select('country_recommendations')
    .eq('id', reportId)
    .single();

  const matches = report?.country_recommendations || [];
  const topMatch = matches[0] ? `${matches[0].country} (${matches[0].score}% match)` : 'your top matches';
  const reportUrl = `https://reloca-ai.vercel.app/report/${reportId}`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Reloca.ai <reports@reloca.ai>',
      to: user.email,
      bcc: ['nexus_cdb@proton.me', 'myjobisamazing@gmail.com'],
      subject: `Your Relocation Plan is Ready — Top Match: ${topMatch}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(135deg,#1a365d,#2a4a7f);padding:32px;text-align:center;">
        <h1 style="color:white;margin:0;font-size:24px;">🌎 Your Relocation Plan is Ready</h1>
        <p style="color:#94b8db;margin:8px 0 0;font-size:14px;">Personalized by AI + Real Expat Experience</p>
      </div>
      <div style="padding:32px;">
        <p style="color:#333;font-size:16px;line-height:1.6;">
          Great news! Our AI has finished analyzing your profile against real relocation data from families who've made the move.
        </p>
        <div style="background:#f0f7ff;border-radius:8px;padding:20px;margin:24px 0;">
          <p style="margin:0;font-size:14px;color:#666;">Your top country match:</p>
          <p style="margin:8px 0 0;font-size:22px;font-weight:bold;color:#1a365d;">${topMatch}</p>
        </div>
        <p style="color:#333;font-size:16px;line-height:1.6;">
          Your free report includes your top 3 country matches. Unlock the full 16-section report for $49 — detailed visa pathways, cost breakdowns, property analysis, and a personalized month-by-month timeline.
        </p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:600;">
            View Your Report →
          </a>
        </div>
      </div>
    </div>
    <p style="text-align:center;color:#999;font-size:12px;margin-top:24px;">
      © 2026 Reloca.ai — Global Relocation Intelligence
    </p>
  </div>
</body>
</html>`,
    }),
  });
  console.log('Report email sent to:', user.email);
}
