import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const proPriceId = process.env.STRIPE_PRO_PRICE_ID;
    if (!proPriceId) {
      return NextResponse.json({ error: 'Pro subscription not configured yet' }, { status: 500 });
    }

    // Get authenticated user
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Get our user record for Stripe customer ID
    const { data: dbUser } = await supabaseAdmin
      .from('users')
      .select('id, stripe_customer_id')
      .eq('email', user.email)
      .single();

    const origin = request.headers.get('origin') || 'https://reloca.ai';

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [{ price: proPriceId, quantity: 1 }],
      success_url: `${origin}/dashboard?pro=success`,
      cancel_url: `${origin}/dashboard`,
      customer_email: dbUser?.stripe_customer_id ? undefined : user.email,
      customer: dbUser?.stripe_customer_id || undefined,
      metadata: {
        userId: dbUser?.id || '',
        userEmail: user.email,
      },
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url!, 303);
  } catch (error: any) {
    console.error('Pro subscription error:', error?.message);
    return NextResponse.json({ error: 'Failed to create subscription checkout' }, { status: 500 });
  }
}
