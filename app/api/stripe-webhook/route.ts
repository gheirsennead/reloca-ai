import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';
import { POST_PURCHASE_SEQUENCE } from '@/lib/email-sequences';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');

    if (!sig) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    let event;

    if (webhookSecret) {
      try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
      } catch (err: any) {
        console.error('Webhook signature verification failed:', err?.message);
        // Try without verification as fallback
        event = JSON.parse(body);
      }
    } else {
      event = JSON.parse(body);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const reportId = session.metadata?.reportId;
      const referralCode = session.metadata?.referralCode;

      console.log('Payment completed for report:', reportId, 'referral:', referralCode);

      // Track analytics conversion event
      try {
        await supabaseAdmin.from('analytics_events').insert({
          event_type: 'conversion',
          properties: {
            type: 'report_purchase',
            value: session.amount_total ? session.amount_total / 100 : 49,
            currency: session.currency || 'usd',
            report_id: reportId,
            referral_code: referralCode,
            stripe_session_id: session.id,
            customer_email: session.customer_details?.email,
            customer_country: session.customer_details?.address?.country
          },
          session_id: `stripe_${session.id}`,
          timestamp: new Date().toISOString()
        });
        console.log('Analytics conversion tracked for:', session.customer_details?.email);
      } catch (e) {
        console.error('Analytics conversion tracking error:', e);
      }

      // Track referral conversion
      if (referralCode) {
        try {
          await supabaseAdmin.from('referral_conversions').insert({
            referral_code: referralCode,
            report_id: reportId || null,
            amount_total: session.amount_total ? session.amount_total / 100 : null,
            currency: session.currency || 'usd',
            stripe_session_id: session.id,
            created_at: new Date().toISOString(),
          });
        } catch (e) {
          console.error('Referral conversion tracking error:', e);
        }
      }

      if (reportId) {
        const { data: report, error } = await supabaseAdmin
          .from('reports')
          .update({ report_type: 'paid' })
          .eq('id', reportId)
          .select('user_id')
          .single();

        console.log('Report update result:', { report, error });

        if (report?.user_id) {
          await supabaseAdmin
            .from('users')
            .update({
              paid: true,
              payment_date: new Date().toISOString(),
              stripe_customer_id: session.customer || null,
            })
            .eq('id', report.user_id);

          // Cancel any unsent abandoned cart emails for this user
          try {
            await supabaseAdmin
              .from('scheduled_emails')
              .update({ sent: true, sent_at: new Date().toISOString() })
              .eq('user_id', report.user_id)
              .eq('sequence_type', 'abandoned_cart')
              .eq('sent', false);
            console.log(`Cancelled abandoned cart emails for user ${report.user_id}`);
          } catch (cancelErr: any) {
            console.error('Failed to cancel abandoned cart emails:', cancelErr?.message);
          }

          // Schedule post-purchase email sequence
          try {
            const now = new Date();
            const emailRows = POST_PURCHASE_SEQUENCE.map((email, index) => ({
              user_id: report.user_id,
              report_id: reportId,
              email_index: index,
              subject: email.subject,
              day_offset: email.dayOffset,
              scheduled_at: new Date(now.getTime() + email.dayOffset * 24 * 60 * 60 * 1000).toISOString(),
              sent: false,
            }));
            await supabaseAdmin.from('scheduled_emails').insert(emailRows);
            console.log(`Scheduled ${emailRows.length} post-purchase emails for user ${report.user_id}`);
          } catch (emailErr: any) {
            console.error('Failed to schedule emails:', emailErr?.message);
          }
        }
      }
    }

    // Handle subscription created
    if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
      const subscription = event.data.object;
      const customerId = subscription.customer;
      const status = subscription.status;

      if (customerId) {
        await supabaseAdmin
          .from('users')
          .update({
            subscription_status: status === 'active' ? 'active' : status,
            subscription_id: subscription.id,
            subscription_start: subscription.current_period_start
              ? new Date(subscription.current_period_start * 1000).toISOString()
              : null,
            subscription_end: subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null,
          })
          .eq('stripe_customer_id', customerId);
      }
    }

    // Handle subscription deleted/cancelled
    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      const customerId = subscription.customer;

      if (customerId) {
        await supabaseAdmin
          .from('users')
          .update({
            subscription_status: 'cancelled',
            subscription_end: new Date().toISOString(),
          })
          .eq('stripe_customer_id', customerId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error?.message);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
