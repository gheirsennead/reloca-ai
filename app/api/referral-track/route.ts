import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { referrerCode, referredEmail, eventType } = await request.json();
    
    if (!referrerCode || !eventType) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const validEvents = ['click', 'quiz_complete', 'purchase'];
    if (!validEvents.includes(eventType)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    await supabaseAdmin.from('referral_events').insert({
      referrer_code: referrerCode,
      referred_email: referredEmail?.toLowerCase().trim() || null,
      event_type: eventType,
      created_at: new Date().toISOString(),
    });

    // If purchase event, credit the referrer $10
    if (eventType === 'purchase' && referredEmail) {
      // Look up referrer email from code
      const { data: referrer } = await supabaseAdmin
        .from('user_referral_codes')
        .select('email')
        .eq('referral_code', referrerCode)
        .single();

      if (referrer) {
        // Check if credit already given for this referred user
        const { data: existingCredit } = await supabaseAdmin
          .from('referral_credits')
          .select('id')
          .eq('referrer_email', referrer.email)
          .eq('referred_email', referredEmail.toLowerCase().trim())
          .single();

        if (!existingCredit) {
          await supabaseAdmin.from('referral_credits').insert({
            referrer_email: referrer.email,
            referred_email: referredEmail.toLowerCase().trim(),
            credit_amount: 10.00,
            used: false,
            created_at: new Date().toISOString(),
          });
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Referral track error:', error);
    return NextResponse.json({ ok: true }); // fail silently
  }
}
