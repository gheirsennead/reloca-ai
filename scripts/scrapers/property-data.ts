/**
 * Property & Real Estate Data — Weekly
 * Sources: Curated from Gregory's KB + ZAP, VivaReal, Argenprop, InfoCasas, Global Property Guide
 * Covers Tier 1 + Tier 2 cities with price per sqm, buy vs rent
 */

import { db, logScrape } from '../../lib/scraper-utils';

const PROPERTY_DATA = [
  // =========== BRAZIL — FORTALEZA ===========
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Meireles (beachfront)', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3000, bedrooms: 2, source: 'gregory+zapimoveis' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Meireles (beachfront)', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3500, bedrooms: 3, source: 'gregory+zapimoveis' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Aldeota', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2500, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Porto das Dunas', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2800, bedrooms: 2, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Porto das Dunas', property_type: 'apartment', transaction_type: 'rent', price_usd: 550, bedrooms: 2, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Porto das Dunas', property_type: 'apartment', transaction_type: 'rent', price_usd: 900, bedrooms: 3, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Cumbuco', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2500, bedrooms: 2, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Águas Belas', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1000, bedrooms: 2, source: 'gregory' },
  { country: 'Brazil', city: 'Fortaleza', neighborhood: 'Beach Park area', property_type: 'apartment', transaction_type: 'rent', price_usd: 1500, bedrooms: 3, source: 'gregory' },

  // =========== BRAZIL — GUARAMIRANGA ===========
  { country: 'Brazil', city: 'Guaramiranga', neighborhood: 'Mountain area', property_type: 'land', transaction_type: 'sale', price_per_sqm_usd: 100, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', neighborhood: 'Mountain area', property_type: 'house', transaction_type: 'sale', price_per_sqm_usd: 1500, bedrooms: 3, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', neighborhood: 'Mountain area', property_type: 'house', transaction_type: 'rent', price_usd: 500, bedrooms: 2, source: 'gregory' },
  { country: 'Brazil', city: 'Guaramiranga', neighborhood: 'Mountain area', property_type: 'house', transaction_type: 'rent', price_usd: 1200, bedrooms: 3, source: 'gregory' },

  // =========== BRAZIL — FLORIANÓPOLIS ===========
  { country: 'Brazil', city: 'Florianópolis', neighborhood: 'Jurerê', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3500, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'Florianópolis', neighborhood: 'Centro', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2200, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'Florianópolis', neighborhood: 'Lagoa da Conceição', property_type: 'apartment', transaction_type: 'rent', price_usd: 700, bedrooms: 2, source: 'vivareal' },

  // =========== BRAZIL — SÃO PAULO ===========
  { country: 'Brazil', city: 'São Paulo', neighborhood: 'Jardins', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 4000, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'São Paulo', neighborhood: 'Pinheiros', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3500, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'São Paulo', neighborhood: 'Vila Madalena', property_type: 'apartment', transaction_type: 'rent', price_usd: 800, bedrooms: 2, source: 'zapimoveis' },

  // =========== BRAZIL — RIO DE JANEIRO ===========
  { country: 'Brazil', city: 'Rio de Janeiro', neighborhood: 'Copacabana', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3500, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'Rio de Janeiro', neighborhood: 'Leblon', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 5000, bedrooms: 2, source: 'zapimoveis' },
  { country: 'Brazil', city: 'Rio de Janeiro', neighborhood: 'Barra da Tijuca', property_type: 'apartment', transaction_type: 'rent', price_usd: 700, bedrooms: 2, source: 'zapimoveis' },

  // =========== ARGENTINA — BARILOCHE ===========
  { country: 'Argentina', city: 'Bariloche', neighborhood: 'Centro', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1800, bedrooms: 2, source: 'argenprop' },
  { country: 'Argentina', city: 'Bariloche', neighborhood: 'Lakefront', property_type: 'house', transaction_type: 'sale', price_per_sqm_usd: 3000, bedrooms: 3, source: 'argenprop' },
  { country: 'Argentina', city: 'Bariloche', neighborhood: 'Centro', property_type: 'apartment', transaction_type: 'rent', price_usd: 500, bedrooms: 2, source: 'argenprop' },
  { country: 'Argentina', city: 'Bariloche', neighborhood: 'Outskirts', property_type: 'land', transaction_type: 'sale', price_per_sqm_usd: 80, source: 'argenprop' },

  // =========== ARGENTINA — BUENOS AIRES ===========
  { country: 'Argentina', city: 'Buenos Aires', neighborhood: 'Palermo', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2800, bedrooms: 2, source: 'argenprop' },
  { country: 'Argentina', city: 'Buenos Aires', neighborhood: 'Recoleta', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3200, bedrooms: 2, source: 'argenprop' },
  { country: 'Argentina', city: 'Buenos Aires', neighborhood: 'Palermo', property_type: 'apartment', transaction_type: 'rent', price_usd: 650, bedrooms: 2, source: 'argenprop' },

  // =========== ARGENTINA — MENDOZA ===========
  { country: 'Argentina', city: 'Mendoza', neighborhood: 'Centro', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1500, bedrooms: 2, source: 'argenprop' },
  { country: 'Argentina', city: 'Mendoza', neighborhood: 'Wine country', property_type: 'house', transaction_type: 'sale', price_per_sqm_usd: 1200, bedrooms: 3, source: 'argenprop' },

  // =========== PARAGUAY — ASUNCIÓN ===========
  { country: 'Paraguay', city: 'Asunción', neighborhood: 'Villa Morra', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1500, bedrooms: 2, source: 'infocasas' },
  { country: 'Paraguay', city: 'Asunción', neighborhood: 'Carmelitas', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1300, bedrooms: 2, source: 'infocasas' },
  { country: 'Paraguay', city: 'Asunción', neighborhood: 'Villa Morra', property_type: 'apartment', transaction_type: 'rent', price_usd: 550, bedrooms: 2, source: 'infocasas' },
  { country: 'Paraguay', city: 'Asunción', neighborhood: 'Las Mercedes', property_type: 'house', transaction_type: 'sale', price_per_sqm_usd: 1100, bedrooms: 3, source: 'infocasas' },

  // =========== URUGUAY — MONTEVIDEO ===========
  { country: 'Uruguay', city: 'Montevideo', neighborhood: 'Pocitos', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2800, bedrooms: 2, source: 'infocasas' },
  { country: 'Uruguay', city: 'Montevideo', neighborhood: 'Carrasco', property_type: 'house', transaction_type: 'sale', price_per_sqm_usd: 3000, bedrooms: 3, source: 'infocasas' },
  { country: 'Uruguay', city: 'Montevideo', neighborhood: 'Pocitos', property_type: 'apartment', transaction_type: 'rent', price_usd: 750, bedrooms: 2, source: 'infocasas' },

  // =========== URUGUAY — MALDONADO/PUNTA DEL ESTE ===========
  { country: 'Uruguay', city: 'Maldonado', neighborhood: 'Punta del Este', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 3500, bedrooms: 2, source: 'infocasas' },
  { country: 'Uruguay', city: 'Maldonado', neighborhood: 'Punta del Este beachfront', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 5500, bedrooms: 2, source: 'infocasas' },
  { country: 'Uruguay', city: 'Maldonado', neighborhood: 'Maldonado city', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1800, bedrooms: 2, source: 'infocasas' },
  { country: 'Uruguay', city: 'Maldonado', neighborhood: 'Punta del Este', property_type: 'apartment', transaction_type: 'rent', price_usd: 700, bedrooms: 2, source: 'infocasas' },

  // =========== PANAMA — PANAMA CITY ===========
  { country: 'Panama', city: 'Panama City', neighborhood: 'Punta Pacifica', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2500, bedrooms: 2, source: 'compreoalquile' },
  { country: 'Panama', city: 'Panama City', neighborhood: 'Costa del Este', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 2000, bedrooms: 2, source: 'compreoalquile' },
  { country: 'Panama', city: 'Panama City', neighborhood: 'El Cangrejo', property_type: 'apartment', transaction_type: 'rent', price_usd: 900, bedrooms: 2, source: 'compreoalquile' },

  // =========== EL SALVADOR ===========
  { country: 'El Salvador', city: 'San Salvador', neighborhood: 'Escalón', property_type: 'apartment', transaction_type: 'sale', price_per_sqm_usd: 1500, bedrooms: 2, source: 'encuentra24' },
  { country: 'El Salvador', city: 'San Salvador', neighborhood: 'Escalón', property_type: 'apartment', transaction_type: 'rent', price_usd: 550, bedrooms: 2, source: 'encuentra24' },
];

async function scrapePropertyData() {
  logScrape('property', `Loading ${PROPERTY_DATA.length} property entries...`);

  await db.from('property_data').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  const rows = PROPERTY_DATA.map(p => ({
    country: p.country,
    city: p.city,
    neighborhood: p.neighborhood,
    property_type: p.property_type,
    transaction_type: p.transaction_type,
    price_usd: (p as any).price_usd || null,
    price_per_sqm_usd: (p as any).price_per_sqm_usd || null,
    bedrooms: (p as any).bedrooms || null,
    source: p.source,
    currency: 'USD',
  }));

  const BATCH = 20;
  let inserted = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const { error } = await db.from('property_data').insert(batch);
    if (error) {
      logScrape('property', `DB error: ${error.message}`);
    } else {
      inserted += batch.length;
    }
  }

  logScrape('property', `Done. ${inserted} entries loaded.`);
  return { success: true, count: inserted };
}

export { scrapePropertyData };

if (require.main === module) {
  scrapePropertyData().then(r => console.log(JSON.stringify(r, null, 2)));
}
