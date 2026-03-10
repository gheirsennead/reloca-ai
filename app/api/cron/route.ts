import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// This runs via Vercel Cron — see vercel.json for schedule
// Refreshes exchange rates daily, all other data weekly

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // In production, verify. In dev, allow.
    if (process.env.NODE_ENV === 'production' && process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const results: Record<string, any> = {};

  // Exchange rates — always run (daily)
  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=BRL,MXN,EUR,GBP');
    if (res.ok) {
      const data = await res.json();
      const today = new Date().toISOString().split('T')[0];
      await supabaseAdmin.from('exchange_rates').delete().eq('date', today);
      
      const rows = Object.entries(data.rates).map(([currency, rate]) => ({
        date: today, base_currency: 'USD', target_currency: currency, rate: rate as number, source: 'frankfurter.app',
      }));
      
      // Add manual LATAM rates
      const manual: Record<string, number> = { ARS: 1200, PYG: 7500, UYU: 43, PAB: 1, CRC: 510, COP: 4200, PEN: 3.7 };
      for (const [c, r] of Object.entries(manual)) {
        rows.push({ date: today, base_currency: 'USD', target_currency: c, rate: r, source: 'manual-curated' });
      }
      
      await supabaseAdmin.from('exchange_rates').insert(rows);
      results.exchangeRates = { success: true, count: rows.length };
    }
  } catch (e) {
    results.exchangeRates = { success: false, error: String(e) };
  }

  return NextResponse.json({ ok: true, results, timestamp: new Date().toISOString() });
}
