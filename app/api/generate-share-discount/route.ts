import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// Generate a unique coupon code
function generateCouponCode(): string {
  const prefix = 'SHARE';
  const suffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${suffix}`;
}

export async function POST(request: NextRequest) {
  try {
    const { userEmail, reportId, sharePlatform } = await request.json();

    if (!userEmail || !reportId || !sharePlatform) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Valid platforms
    const validPlatforms = ['twitter', 'facebook', 'linkedin', 'whatsapp', 'copy'];
    if (!validPlatforms.includes(sharePlatform)) {
      return NextResponse.json({ error: 'Invalid share platform' }, { status: 400 });
    }

    // Check if user already has a discount for this report
    const { data: existingDiscount } = await supabaseAdmin
      .from('share_discounts')
      .select('coupon_code')
      .eq('user_email', userEmail.toLowerCase().trim())
      .eq('report_id', reportId)
      .single();

    if (existingDiscount) {
      // Return existing discount code
      return NextResponse.json({
        success: true,
        couponCode: 'SHARE20',
        discountAmount: 20,
        message: 'You already have a share discount for this report!'
      });
    }

    // Use the global SHARE20 coupon ($20 off)
    const couponCode = 'SHARE20';

    // Save to database
    const { error: dbError } = await supabaseAdmin
      .from('share_discounts')
      .insert({
        user_email: userEmail.toLowerCase().trim(),
        report_id: reportId,
        coupon_code: couponCode,
        stripe_coupon_id: couponCode,
        discount_amount: 20.00,
        share_platform: sharePlatform,
        used: false
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ error: 'Failed to save discount' }, { status: 500 });
    }

    // Track analytics event for share
    try {
      await supabaseAdmin.from('analytics_events').insert({
        event_type: 'share_action',
        properties: {
          type: 'social_share',
          platform: sharePlatform,
          report_id: reportId,
          user_email: userEmail,
          coupon_code: couponCode,
          discount_amount: 20
        },
        session_id: `share_${reportId}_${Date.now()}`,
        timestamp: new Date().toISOString()
      });
    } catch (analyticsErr) {
      console.error('Analytics tracking failed:', analyticsErr);
      // Don't fail the request if analytics fails
    }

    return NextResponse.json({
      success: true,
      couponCode,
      discountAmount: 20,
      message: '🎉 You shared! $20 off — your report is now $29!'
    });

  } catch (error: any) {
    console.error('Generate share discount error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate discount', 
      detail: error?.message 
    }, { status: 500 });
  }
}