import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';

// Initialize Stripe client at module level (reused across requests — avoids cold-start penalty)
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY || '';
const PRICE_ID = process.env.STRIPE_REPORT_PRICE_ID || '';
const stripe = STRIPE_SECRET ? new Stripe(STRIPE_SECRET) : null;

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      console.error('STRIPE_SECRET_KEY not set');
      return NextResponse.json({ error: 'Payment not configured', debug: 'no_key' }, { status: 500 });
    }
    if (!PRICE_ID) {
      console.error('STRIPE_REPORT_PRICE_ID not set');
      return NextResponse.json({ error: 'Payment not configured', debug: 'no_price' }, { status: 500 });
    }

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
      // Try as Stripe coupon — single lookup with case-insensitive fallback
      const codesToTry = [couponCode];
      const upper = couponCode.toUpperCase();
      if (upper !== couponCode) codesToTry.push(upper);

      for (const code of codesToTry) {
        if (discountApplied) break;
        try {
          const coupon = await stripe.coupons.retrieve(code);
          if (coupon.valid) {
            sessionConfig.discounts = [{ coupon: code }];
            discountApplied = true;
          }
        } catch { /* not found, try next */ }
      }
      
      // Try as promotion code only if coupon lookup failed
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

    // 2. If no coupon provided, check referral + credits in parallel
    if (!discountApplied && (referralCode || userEmail)) {
      // Fire both checks simultaneously instead of sequentially
      const [referralResult, creditsResult] = await Promise.allSettled([
        // Referral discount
        referralCode ? (async () => {
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
          return refCoupon;
        })() : Promise.reject('no referral'),

        // Referral credits
        userEmail ? (async () => {
          const { data: credits } = await supabaseAdmin
            .from('referral_credits')
            .select('id, credit_amount')
            .eq('referrer_email', userEmail.toLowerCase().trim())
            .eq('used', false)
            .order('created_at', { ascending: true });
          return credits;
        })() : Promise.reject('no email'),
      ]);

      // Apply referral discount first (higher priority)
      if (referralResult.status === 'fulfilled' && referralResult.value) {
        sessionConfig.discounts = [{ coupon: referralResult.value.id }];
        discountApplied = true;
      }
      // Otherwise apply accumulated credits
      else if (!discountApplied && creditsResult.status === 'fulfilled' && creditsResult.value && creditsResult.value.length > 0) {
        try {
          const credits = creditsResult.value;
          const totalCredit = credits.reduce((sum: number, c: { credit_amount: number }) => sum + c.credit_amount, 0);
          const applyAmount = Math.min(totalCredit, 49) * 100; // Cap at price, in cents
          
          const creditCouponId = `CREDIT-${reportId.slice(-8)}`;
          const creditCoupon = await stripe.coupons.create({
            id: creditCouponId,
            name: `Referral Credit - $${Math.min(totalCredit, 49)} off`,
            amount_off: applyAmount,
            currency: 'usd',
            duration: 'once',
            max_redemptions: 1,
            metadata: { type: 'referral_credit', email: userEmail, credit_ids: credits.map((c: { id: string }) => c.id).join(',') },
          });
          sessionConfig.discounts = [{ coupon: creditCoupon.id }];
          sessionConfig.metadata = { ...sessionConfig.metadata, credit_ids: credits.map((c: { id: string }) => c.id).join(',') };
          discountApplied = true;
        } catch (e) {
          console.error('Failed to apply referral credits:', e);
        }
      }
    }

    // 3. If no discount applied, show promo code field
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
