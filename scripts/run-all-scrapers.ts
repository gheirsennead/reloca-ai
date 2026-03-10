/**
 * Master scraper runner — runs all scrapers in sequence
 * Usage: npx tsx scripts/run-all-scrapers.ts
 */

import { scrapeExchangeRates } from './scrapers/exchange-rates';
import { scrapeClimate } from './scrapers/climate-data';
import { scrapeCostOfLiving } from './scrapers/cost-of-living';
import { scrapeSafetyData } from './scrapers/safety-data';
import { scrapeVisaData } from './scrapers/visa-data';
import { scrapePropertyData } from './scrapers/property-data';
import { scrapeCommunityIntel } from './scrapers/community-intel';

async function runAll() {
  console.log('=== RELOCA.AI DATA PIPELINE ===');
  console.log(`Started: ${new Date().toISOString()}\n`);

  const results: Record<string, any> = {};

  // 1. Exchange rates (fast, daily)
  console.log('--- 1/7 Exchange Rates ---');
  results.exchangeRates = await scrapeExchangeRates().catch(e => ({ success: false, error: String(e) }));

  // 2. Climate data (API, weekly)
  console.log('\n--- 2/7 Climate Data ---');
  results.climate = await scrapeClimate().catch(e => ({ success: false, error: String(e) }));

  // 3. Cost of living (curated, weekly)
  console.log('\n--- 3/7 Cost of Living ---');
  results.costOfLiving = await scrapeCostOfLiving().catch(e => ({ success: false, error: String(e) }));

  // 4. Safety data (curated, weekly)
  console.log('\n--- 4/7 Safety Data ---');
  results.safety = await scrapeSafetyData().catch(e => ({ success: false, error: String(e) }));

  // 5. Visa data (curated, weekly)
  console.log('\n--- 5/7 Visa Data ---');
  results.visa = await scrapeVisaData().catch(e => ({ success: false, error: String(e) }));

  // 6. Property data (curated, weekly)
  console.log('\n--- 6/7 Property Data ---');
  results.property = await scrapePropertyData().catch(e => ({ success: false, error: String(e) }));

  // 7. Community intel (Reddit, weekly)
  console.log('\n--- 7/7 Community Intel ---');
  results.community = await scrapeCommunityIntel().catch(e => ({ success: false, error: String(e) }));

  console.log('\n=== RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
  console.log(`\nCompleted: ${new Date().toISOString()}`);
}

runAll().catch(console.error);
