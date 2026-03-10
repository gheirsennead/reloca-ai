import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const token = searchParams.get('token');

    if (!code) {
      return NextResponse.json({ error: 'Missing referral code' }, { status: 400 });
    }

    // Look up referrer
    const { data: referrer } = await supabaseAdmin
      .from('user_referral_codes')
      .select('email, referral_code, created_at')
      .eq('referral_code', code)
      .single();

    if (!referrer) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 404 });
    }

    // Simple token check: hash of email + code (no login needed)
    const expectedToken = Buffer.from(`${referrer.email}:${code}`).toString('base64url').slice(0, 16);
    if (token !== expectedToken) {
      return NextResponse.json({ error: 'Invalid access token' }, { status: 403 });
    }

    // Get referral events
    const { data: events } = await supabaseAdmin
      .from('referral_events')
      .select('event_type, created_at')
      .eq('referrer_code', code)
      .order('created_at', { ascending: false });

    // Get credits
    const { data: credits } = await supabaseAdmin
      .from('referral_credits')
      .select('credit_amount, used, referred_email, created_at')
      .eq('referrer_email', referrer.email)
      .order('created_at', { ascending: false });

    const totalClicks = events?.filter(e => e.event_type === 'click').length || 0;
    const totalQuizCompletions = events?.filter(e => e.event_type === 'quiz_complete').length || 0;
    const totalPurchases = events?.filter(e => e.event_type === 'purchase').length || 0;
    const totalCreditsEarned = credits?.reduce((sum, c) => sum + c.credit_amount, 0) || 0;
    const totalCreditsUsed = credits?.filter(c => c.used).reduce((sum, c) => sum + c.credit_amount, 0) || 0;
    const availableCredit = totalCreditsEarned - totalCreditsUsed;

    return NextResponse.json({
      referralCode: code,
      stats: {
        totalClicks,
        totalQuizCompletions,
        totalPurchases,
        totalCreditsEarned,
        totalCreditsUsed,
        availableCredit,
      },
      recentEvents: (events || []).slice(0, 20),
      credits: credits || [],
    });
  } catch (error) {
    console.error('Referral dashboard error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
