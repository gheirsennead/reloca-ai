import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

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

    // Apply coupon if provided, otherwise show promo code input
    if (couponCode) {
      let applied = false;
      
      // Try as Stripe coupon (exact match, then uppercase)
      for (const code of [couponCode, couponCode.toUpperCase()]) {
        if (applied) break;
        try {
          const coupon = await stripe.coupons.retrieve(code);
          if (coupon.valid) {
            sessionConfig.discounts = [{ coupon: code }];
            applied = true;
          }
        } catch { /* not found, try next */ }
      }
      
      // Try as promotion code
      if (!applied) {
        try {
          const promoCodes = await stripe.promotionCodes.list({ code: couponCode, active: true, limit: 1 });
          if (promoCodes.data.length > 0) {
            sessionConfig.discounts = [{ promotion_code: promoCodes.data[0].id }];
            applied = true;
          }
        } catch { /* not found */ }
      }
      
      if (!applied) {
        return NextResponse.json({ error: 'Invalid or expired coupon code' }, { status: 400 });
      }
    } else {
      // Show the promo code field in Stripe Checkout UI
      sessionConfig.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Checkout error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to create checkout', detail: error?.message }, { status: 500 });
  }
}
