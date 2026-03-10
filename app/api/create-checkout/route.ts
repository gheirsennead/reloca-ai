import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY || '';
const PRICE_ID = process.env.STRIPE_REPORT_PRICE_ID || '';

export async function POST(request: NextRequest) {
  try {
    if (!STRIPE_SECRET) {
      console.error('STRIPE_SECRET_KEY not set');
      return NextResponse.json({ error: 'Payment not configured', debug: 'no_key' }, { status: 500 });
    }
    if (!PRICE_ID) {
      console.error('STRIPE_REPORT_PRICE_ID not set');
      return NextResponse.json({ error: 'Payment not configured', debug: 'no_price' }, { status: 500 });
    }

    const stripe = new Stripe(STRIPE_SECRET);
    const { reportId, userEmail, couponCode, referralCode } = await request.json();

    if (!reportId) {
      return NextResponse.json({ error: 'Missing reportId' }, { status: 400 });
    }

    const origin = request.headers.get('origin') || 'https://reloca.ai';

    // Build checkout session config
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      line_items: [{ price: PRICE_ID, quantity: 1 }],
      mode: 'payment',
      success_url: `${origin}/report/${reportId}?paid=true`,
      cancel_url: `${origin}/report/${reportId}`,
      customer_email: userEmail || undefined,
      metadata: { reportId, ...(referralCode ? { referralCode } : {}) },
    };

    let discountApplied = false;

    // 1. If user provided a coupon code, try that first
    if (couponCode) {
      // Try as Stripe coupon (exact match, then uppercase)
      for (const code of [couponCode, couponCode.toUpperCase()]) {
        if (discountApplied) break;
        try {
          const coupon = await stripe.coupons.retrieve(code);
          if (coupon.valid) {
            sessionConfig.discounts = [{ coupon: code }];
            discountApplied = true;
          }
        } catch { /* not found, try next */ }
      }
      
      // Try as promotion code
      if (!discountApplied) {
        try {
          const promoCodes = await stripe.promotionCodes.list({ code: couponCode, active: true, limit: 1 });
          if (promoCodes.data.length > 0) {
            sessionConfig.discounts = [{ promotion_code: promoCodes.data[0].id }];
            discountApplied = true;
          }
        } catch { /* not found */ }
      }
      
      if (!discountApplied) {
        return NextResponse.json({ error: 'Invalid or expired coupon code' }, { status: 400 });
      }
    }

    // 2. If referred user (has referralCode) and no coupon yet, auto-apply $10 off
    if (!discountApplied && referralCode) {
      try {
        // Create a one-time $10 Stripe coupon for this referred user
        const refCouponId = `REF10-${reportId.slice(-8)}`;
        const refCoupon = await stripe.coupons.create({
          id: refCouponId,
          name: 'Referral Discount - $10 off',
          amount_off: 1000,
          currency: 'usd',
          duration: 'once',
          max_redemptions: 1,
          metadata: { type: 'referral', referrer_code: referralCode, report_id: reportId },
        });
        sessionConfig.discounts = [{ coupon: refCoupon.id }];
        discountApplied = true;
      } catch (e) {
        console.error('Failed to create referral coupon:', e);
        // Don't block checkout if referral coupon fails
      }
    }

    // 3. If user has accumulated referral credits, apply them
    if (!discountApplied && userEmail) {
      try {
        const { data: credits } = await supabaseAdmin
          .from('referral_credits')
          .select('id, credit_amount')
          .eq('referrer_email', userEmail.toLowerCase().trim())
          .eq('used', false)
          .order('created_at', { ascending: true });

        if (credits && credits.length > 0) {
          const totalCredit = credits.reduce((sum, c) => sum + c.credit_amount, 0);
          const applyAmount = Math.min(totalCredit, 49) * 100; // Cap at price, in cents
          
          const creditCouponId = `CREDIT-${reportId.slice(-8)}`;
          const creditCoupon = await stripe.coupons.create({
            id: creditCouponId,
            name: `Referral Credit - $${Math.min(totalCredit, 49)} off`,
            amount_off: applyAmount,
            currency: 'usd',
            duration: 'once',
            max_redemptions: 1,
            metadata: { type: 'referral_credit', email: userEmail, credit_ids: credits.map(c => c.id).join(',') },
          });
          sessionConfig.discounts = [{ coupon: creditCoupon.id }];
          sessionConfig.metadata = { ...sessionConfig.metadata, credit_ids: credits.map(c => c.id).join(',') };
          discountApplied = true;
        }
      } catch (e) {
        console.error('Failed to apply referral credits:', e);
      }
    }

    // 4. If no discount applied, show promo code field
    if (!discountApplied) {
      sessionConfig.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Checkout error:', msg);
    return NextResponse.json({ error: 'Failed to create checkout', detail: msg }, { status: 500 });
  }
}
