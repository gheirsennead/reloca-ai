/**
 * Cost of Living Data — Weekly
 * Source: Numbeo API-like scraping + hardcoded verified data from knowledge base
 * For MVP, we use curated data enriched with Gregory's real numbers
 * Will add live scraping in Phase 2
 */

import { db, logScrape } from '../../lib/scraper-utils';

interface CostEntry {
  country: string;
  city: string;
  category: string;
  item: string;
  amount_usd: number;
  source: string;
}

// Curated cost of living data from Knowledge Base + Numbeo cross-reference
const COST_DATA: CostEntry[] = [
  // =========== BRAZIL — FORTALEZA ===========
  { country: 'Brazil', city: 'Fortaleza', category: 'rent', item: '2-bed apartment (nice area)', amount_usd: 550, source: 'gregory+numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'rent', item: '3-bed apartment (nice area)', amount_usd: 900, source: 'gregory+numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'rent', item: '3-bed house (gated community)', amount_usd: 1200, source: 'gregory+numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'groceries', item: 'Family of 4 monthly (basic)', amount_usd: 250, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'groceries', item: 'Family of 4 monthly (organic/premium)', amount_usd: 500, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'utilities', item: 'Electricity (with AC)', amount_usd: 85, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'utilities', item: 'Water', amount_usd: 15, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'utilities', item: 'Gas (cooking)', amount_usd: 25, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'utilities', item: 'Internet (fiber 300Mbps+)', amount_usd: 20, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'transport', item: 'Uber/99 average ride', amount_usd: 5, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'transport', item: 'Gasoline per liter', amount_usd: 1.05, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'transport', item: 'Used car (basic)', amount_usd: 10000, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'transport', item: 'Car insurance (annual, basic)', amount_usd: 480, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'healthcare', item: 'Doctor visit (private)', amount_usd: 90, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'healthcare', item: 'Health insurance (per person/month)', amount_usd: 100, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'healthcare', item: 'Dental cleaning', amount_usd: 30, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'dining', item: 'Buffet lunch (per person)', amount_usd: 7, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'dining', item: 'Restaurant dinner (per person)', amount_usd: 15, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'dining', item: 'Upscale dinner (per person)', amount_usd: 30, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'domestic_help', item: 'Cleaner (per day)', amount_usd: 15, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'domestic_help', item: 'Gardener (per visit)', amount_usd: 20, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'education', item: 'Private school (per month)', amount_usd: 250, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'education', item: 'International school (per month)', amount_usd: 700, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'phone', item: 'Mobile plan (30GB+)', amount_usd: 12, source: 'numbeo' },
  { country: 'Brazil', city: 'Fortaleza', category: 'condo_fees', item: 'Basic building', amount_usd: 120, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'condo_fees', item: 'Premium (pool/gym)', amount_usd: 220, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3000, source: 'gregory' },

  // =========== BRAZIL — GUARAMIRANGA ===========
  { country: 'Brazil', city: 'Guaramiranga', category: 'rent', item: '2-bed house', amount_usd: 400, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', category: 'rent', item: '3-bed house (good quality)', amount_usd: 800, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', category: 'utilities', item: 'Electricity (no AC needed)', amount_usd: 40, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2000, source: 'gregory' },

  // =========== BRAZIL — FLORIANÓPOLIS ===========
  { country: 'Brazil', city: 'Florianópolis', category: 'rent', item: '2-bed apartment (nice area)', amount_usd: 650, source: 'numbeo' },
  { country: 'Brazil', city: 'Florianópolis', category: 'rent', item: '3-bed apartment', amount_usd: 1000, source: 'numbeo' },
  { country: 'Brazil', city: 'Florianópolis', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 350, source: 'numbeo' },
  { country: 'Brazil', city: 'Florianópolis', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3200, source: 'numbeo' },

  // =========== BRAZIL — SÃO PAULO ===========
  { country: 'Brazil', city: 'São Paulo', category: 'rent', item: '2-bed apartment (nice area)', amount_usd: 750, source: 'numbeo' },
  { country: 'Brazil', city: 'São Paulo', category: 'rent', item: '3-bed apartment', amount_usd: 1200, source: 'numbeo' },
  { country: 'Brazil', city: 'São Paulo', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 400, source: 'numbeo' },
  { country: 'Brazil', city: 'São Paulo', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3800, source: 'numbeo' },

  // =========== ARGENTINA — BARILOCHE ===========
  { country: 'Argentina', city: 'Bariloche', category: 'rent', item: '2-bed apartment', amount_usd: 450, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'rent', item: '3-bed house (lake view)', amount_usd: 900, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 350, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'utilities', item: 'Total monthly', amount_usd: 100, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'dining', item: 'Restaurant dinner (per person)', amount_usd: 12, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'healthcare', item: 'Health insurance (per person/month)', amount_usd: 80, source: 'numbeo' },
  { country: 'Argentina', city: 'Bariloche', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2200, source: 'numbeo' },

  // =========== ARGENTINA — BUENOS AIRES ===========
  { country: 'Argentina', city: 'Buenos Aires', category: 'rent', item: '2-bed apartment (Palermo)', amount_usd: 600, source: 'numbeo' },
  { country: 'Argentina', city: 'Buenos Aires', category: 'rent', item: '3-bed apartment', amount_usd: 950, source: 'numbeo' },
  { country: 'Argentina', city: 'Buenos Aires', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 380, source: 'numbeo' },
  { country: 'Argentina', city: 'Buenos Aires', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2800, source: 'numbeo' },

  // =========== ARGENTINA — MENDOZA ===========
  { country: 'Argentina', city: 'Mendoza', category: 'rent', item: '2-bed apartment', amount_usd: 400, source: 'numbeo' },
  { country: 'Argentina', city: 'Mendoza', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2000, source: 'numbeo' },

  // =========== PARAGUAY — ASUNCIÓN ===========
  { country: 'Paraguay', city: 'Asunción', category: 'rent', item: '2-bed apartment (Villa Morra)', amount_usd: 500, source: 'numbeo' },
  { country: 'Paraguay', city: 'Asunción', category: 'rent', item: '3-bed apartment (nice area)', amount_usd: 800, source: 'numbeo' },
  { country: 'Paraguay', city: 'Asunción', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 300, source: 'numbeo' },
  { country: 'Paraguay', city: 'Asunción', category: 'utilities', item: 'Total monthly', amount_usd: 100, source: 'numbeo' },
  { country: 'Paraguay', city: 'Asunción', category: 'healthcare', item: 'Health insurance (per person/month)', amount_usd: 70, source: 'numbeo' },
  { country: 'Paraguay', city: 'Asunción', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 1800, source: 'numbeo' },

  // =========== URUGUAY — MONTEVIDEO ===========
  { country: 'Uruguay', city: 'Montevideo', category: 'rent', item: '2-bed apartment (Pocitos)', amount_usd: 700, source: 'numbeo' },
  { country: 'Uruguay', city: 'Montevideo', category: 'rent', item: '3-bed apartment', amount_usd: 1100, source: 'numbeo' },
  { country: 'Uruguay', city: 'Montevideo', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 450, source: 'numbeo' },
  { country: 'Uruguay', city: 'Montevideo', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3500, source: 'numbeo' },

  // =========== URUGUAY — MALDONADO/PUNTA DEL ESTE ===========
  { country: 'Uruguay', city: 'Maldonado', category: 'rent', item: '2-bed apartment', amount_usd: 600, source: 'numbeo' },
  { country: 'Uruguay', city: 'Maldonado', category: 'rent', item: '3-bed (off-season)', amount_usd: 900, source: 'numbeo' },
  { country: 'Uruguay', city: 'Maldonado', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3000, source: 'numbeo' },

  // =========== PANAMA — PANAMA CITY ===========
  { country: 'Panama', city: 'Panama City', category: 'rent', item: '2-bed apartment', amount_usd: 900, source: 'numbeo' },
  { country: 'Panama', city: 'Panama City', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 400, source: 'numbeo' },
  { country: 'Panama', city: 'Panama City', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3500, source: 'numbeo' },

  // =========== EL SALVADOR — SAN SALVADOR ===========
  { country: 'El Salvador', city: 'San Salvador', category: 'rent', item: '2-bed apartment', amount_usd: 500, source: 'numbeo' },
  { country: 'El Salvador', city: 'San Salvador', category: 'groceries', item: 'Family of 4 monthly', amount_usd: 300, source: 'numbeo' },
  { country: 'El Salvador', city: 'San Salvador', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2200, source: 'numbeo' },

  // =========== COSTA RICA — SAN JOSÉ ===========
  { country: 'Costa Rica', city: 'San José', category: 'rent', item: '2-bed apartment', amount_usd: 700, source: 'numbeo' },
  { country: 'Costa Rica', city: 'San José', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3200, source: 'numbeo' },

  // =========== MEXICO — MEXICO CITY ===========
  { country: 'Mexico', city: 'Mexico City', category: 'rent', item: '2-bed apartment (Roma/Condesa)', amount_usd: 800, source: 'numbeo' },
  { country: 'Mexico', city: 'Mexico City', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 3000, source: 'numbeo' },

  // =========== COLOMBIA — MEDELLÍN ===========
  { country: 'Colombia', city: 'Medellín', category: 'rent', item: '2-bed apartment (El Poblado)', amount_usd: 600, source: 'numbeo' },
  { country: 'Colombia', city: 'Medellín', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2200, source: 'numbeo' },

  // =========== ECUADOR — QUITO ===========
  { country: 'Ecuador', city: 'Quito', category: 'rent', item: '2-bed apartment', amount_usd: 500, source: 'numbeo' },
  { country: 'Ecuador', city: 'Quito', category: 'total_estimate', item: 'Family of 4 monthly (comfortable)', amount_usd: 2000, source: 'numbeo' },
];

async function scrapeCostOfLiving() {
  logScrape('cost-of-living', `Loading ${COST_DATA.length} curated entries...`);

  // Clear existing data
  await db.from('cost_of_living').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  // Insert in batches
  const BATCH = 30;
  let inserted = 0;
  for (let i = 0; i < COST_DATA.length; i += BATCH) {
    const batch = COST_DATA.slice(i, i + BATCH).map(e => ({
      ...e,
      currency: 'USD',
      data_date: new Date().toISOString(),
    }));
    const { error } = await db.from('cost_of_living').insert(batch);
    if (error) {
      logScrape('cost-of-living', `DB error: ${error.message}`);
    } else {
      inserted += batch.length;
    }
  }

  logScrape('cost-of-living', `Done. ${inserted} entries loaded.`);
  return { success: true, count: inserted };
}

export { scrapeCostOfLiving };

if (require.main === module) {
  scrapeCostOfLiving().then(r => console.log(JSON.stringify(r, null, 2)));
}
