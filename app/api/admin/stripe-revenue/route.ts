import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '10f34574c2510a38ae6caad89e45a7f5';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

function isAuthorized(request: NextRequest): boolean {
  // Check x-admin-password header (existing pattern)
  const adminPass = request.headers.get('x-admin-password');
  if (adminPass === ADMIN_PASSWORD) return true;

  // Check x-api-key header or ?key= query param (for ADMIN_API_KEY)
  if (ADMIN_API_KEY) {
    const apiKey = request.headers.get('x-api-key') || new URL(request.url).searchParams.get('key');
    if (apiKey === ADMIN_API_KEY) return true;
  }

  return false;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const startDate = Math.floor(Date.now() / 1000) - days * 86400;

    // Fetch charges from Stripe (paid only)
    const charges: any[] = [];
    let hasMore = true;
    let startingAfter: string | undefined;

    while (hasMore) {
      const params: any = {
        limit: 100,
        created: { gte: startDate },
      };
      if (startingAfter) params.starting_after = startingAfter;

      const batch = await stripe.charges.list(params);
      const successfulCharges = batch.data.filter(c => c.status === 'succeeded' && !c.refunded);
      charges.push(...successfulCharges);
      hasMore = batch.has_more;
      if (batch.data.length > 0) {
        startingAfter = batch.data[batch.data.length - 1].id;
      }
    }

    // Also fetch all-time totals with a balance transaction summary
    const allTimeCharges: any[] = [];
    let allHasMore = true;
    let allStartingAfter: string | undefined;

    while (allHasMore) {
      const params: any = { limit: 100 };
      if (allStartingAfter) params.starting_after = allStartingAfter;

      const batch = await stripe.charges.list(params);
      const successfulCharges = batch.data.filter(c => c.status === 'succeeded' && !c.refunded);
      allTimeCharges.push(...successfulCharges);
      allHasMore = batch.has_more;
      if (batch.data.length > 0) {
        allStartingAfter = batch.data[batch.data.length - 1].id;
      }
    }

    // Compute revenue by day (within requested period)
    const revenueByDay: Record<string, { revenue: number; count: number }> = {};
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      revenueByDay[key] = { revenue: 0, count: 0 };
    }

    charges.forEach(charge => {
      const day = new Date(charge.created * 1000).toISOString().split('T')[0];
      if (revenueByDay[day]) {
        revenueByDay[day].revenue += charge.amount / 100;
        revenueByDay[day].count += 1;
      }
    });

    // Build payment list (most recent first)
    const payments = allTimeCharges.map(charge => ({
      id: charge.id,
      amount: charge.amount / 100,
      currency: charge.currency,
      status: charge.status,
      created: new Date(charge.created * 1000).toISOString(),
      customer_email: charge.billing_details?.email || charge.receipt_email || null,
      customer_name: charge.billing_details?.name || null,
      description: charge.description || null,
      metadata: charge.metadata || {},
    }));

    // Compute stats
    const periodRevenue = charges.reduce((sum, c) => sum + c.amount / 100, 0);
    const allTimeRevenue = allTimeCharges.reduce((sum, c) => sum + c.amount / 100, 0);
    const avgOrderValue = charges.length > 0 ? periodRevenue / charges.length : 0;
    const lastPayment = allTimeCharges.length > 0
      ? new Date(allTimeCharges[0].created * 1000).toISOString()
      : null;

    // Refunds in period
    const refunds = await stripe.refunds.list({
      limit: 100,
      created: { gte: startDate },
    });
    const totalRefunded = refunds.data.reduce((sum, r) => sum + r.amount / 100, 0);

    // Revenue by day sorted chronologically
    const dailyRevenue = Object.entries(revenueByDay)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, data]) => ({ date, ...data }));

    return NextResponse.json({
      period: {
        days,
        start: new Date(startDate * 1000).toISOString(),
        end: new Date().toISOString(),
      },
      summary: {
        period_revenue: Math.round(periodRevenue * 100) / 100,
        period_payments: charges.length,
        all_time_revenue: Math.round(allTimeRevenue * 100) / 100,
        all_time_payments: allTimeCharges.length,
        avg_order_value: Math.round(avgOrderValue * 100) / 100,
        period_refunds: refunds.data.length,
        period_refund_amount: Math.round(totalRefunded * 100) / 100,
        last_payment_at: lastPayment,
      },
      daily_revenue: dailyRevenue,
      payments,
      _source: 'stripe_api_live',
      _generated_at: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Stripe revenue API error:', error?.message);
    return NextResponse.json(
      { error: 'Failed to fetch Stripe data', details: error?.message },
      { status: 500 }
    );
  }
}
