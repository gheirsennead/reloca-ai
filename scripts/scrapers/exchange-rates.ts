/**
 * Exchange Rates Scraper — Daily
 * Primary: frankfurter.app (free) for major currencies
 * Fallback: curated rates for currencies not covered
 */

import { db, logScrape } from '../../lib/scraper-utils';

// Frankfurter supports these LATAM currencies
const FRANKFURTER_CURRENCIES = ['BRL', 'MXN', 'EUR', 'GBP'];

// These need manual/alternative sourcing (frankfurter doesn't cover them)
const MANUAL_RATES: Record<string, number> = {
  ARS: 1200,    // Argentine peso (volatile — update frequently)
  PYG: 7500,    // Paraguayan guaraní
  UYU: 43,      // Uruguayan peso
  PAB: 1,       // Panamanian balboa (pegged to USD)
  CRC: 510,     // Costa Rican colón
  COP: 4200,    // Colombian peso
  PEN: 3.7,     // Peruvian sol
  SVC: 8.75,    // Salvadoran colón (mostly USD now)
};

async function scrapeExchangeRates() {
  logScrape('exchange-rates', 'Starting...');
  const today = new Date().toISOString().split('T')[0];

  // Delete today's existing
  await db.from('exchange_rates').delete().eq('date', today);

  const rows: any[] = [];

  // 1. Fetch from frankfurter
  try {
    const res = await fetch(`https://api.frankfurter.app/latest?from=USD&to=${FRANKFURTER_CURRENCIES.join(',')}`);
    if (res.ok) {
      const data = await res.json();
      for (const [currency, rate] of Object.entries(data.rates)) {
        rows.push({ date: today, base_currency: 'USD', target_currency: currency, rate: rate as number, source: 'frankfurter.app' });
      }
    }
  } catch (e) {
    logScrape('exchange-rates', `Frankfurter error: ${e}`);
  }

  // 2. Add manual rates for unsupported currencies
  for (const [currency, rate] of Object.entries(MANUAL_RATES)) {
    rows.push({ date: today, base_currency: 'USD', target_currency: currency, rate, source: 'manual-curated' });
  }

  const { error } = await db.from('exchange_rates').insert(rows);
  if (error) {
    logScrape('exchange-rates', `DB error: ${error.message}`);
    return { success: false, error: error.message };
  }

  logScrape('exchange-rates', `Saved ${rows.length} rates for ${today}`);
  return { success: true, count: rows.length, date: today };
}

export { scrapeExchangeRates };

if (require.main === module) {
  scrapeExchangeRates().then(r => console.log(JSON.stringify(r, null, 2)));
}
