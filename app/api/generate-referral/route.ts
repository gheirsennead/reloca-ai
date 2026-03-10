import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if user already has a referral code
    const { data: existingCode, error: fetchError } = await supabaseAdmin
      .from('user_referral_codes')
      .select('referral_code')
      .eq('email', email)
      .single();

    if (existingCode && !fetchError) {
      // Return existing code
      const referralLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reloca.ai'}?ref=${existingCode.referral_code}`;
      return NextResponse.json({ 
        referralCode: existingCode.referral_code,
        referralLink,
        isNew: false 
      });
    }

    // Generate new referral code
    const referralCode = generateReferralCode();
    
    // Store in database
    const { error: insertError } = await supabaseAdmin
      .from('user_referral_codes')
      .insert({
        email,
        referral_code: referralCode,
        created_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Failed to store referral code:', insertError);
      return NextResponse.json({ error: 'Failed to generate referral code' }, { status: 500 });
    }

    const referralLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reloca.ai'}?ref=${referralCode}`;
    
    return NextResponse.json({
      referralCode,
      referralLink,
      isNew: true
    });

  } catch (error) {
    console.error('Generate referral error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function generateReferralCode(): string {
  // Generate a unique referral code
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'REF';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}