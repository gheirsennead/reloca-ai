/**
 * Visa & Residency Data — Weekly
 * Source: Curated from government sites + Gregory's knowledge base
 * Covers Tier 1 (Brazil, Argentina, Paraguay, Uruguay) + Tier 2 (Panama, El Salvador)
 */

import { db, logScrape } from '../../lib/scraper-utils';

const VISA_DATA = [
  // ===================== BRAZIL =====================
  {
    country: 'Brazil',
    visa_type: 'Investor Visa (VITEM V)',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport (6+ months)', 'Birth certificate (apostilled + sworn translation)', 'Police clearance (apostilled + sworn translation, <90 days)', 'CPF (Brazilian tax ID)', 'Proof of R$500,000+ investment (~$100K USD)', '2 passport photos (3x4cm)', 'Health certificate'],
      min_investment: '$100,000 USD (R$500,000)',
      notes: 'Investment must be in Brazilian company or real estate development. Capital must transit under your name in BACEN (Central Bank).'
    },
    processing_time_official: '30-90 days',
    processing_time_real: '4.5 months (Gregory\'s experience)',
    cost_estimate: { total_family_4: '$3,000', attorney: '$1,500-2,500', gov_fees: '$100-300/person', apostilles: '$50-150/doc', translations: '$30-80/doc' },
    path_to_permanent: { years: 4, notes: 'Must maintain visa conditions. Cannot be absent >2 consecutive years. Renew temporary visa, then apply for permanent after 4 years.' },
    path_to_citizenship: { years: 5, notes: '4 years residency + ~1 year processing. Requires Portuguese language proficiency (basic conversational), good moral conduct, social integration. Dual citizenship allowed.' },
    source_url: 'https://gov.br/mj',
  },
  {
    country: 'Brazil',
    visa_type: 'Digital Nomad Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of remote employment or freelance contracts', 'Proof of income $1,500+/month', 'Health insurance', 'Police clearance'],
      min_income: '$1,500/month',
      notes: 'No Brazilian employer needed. Valid 1 year, renewable once.'
    },
    processing_time_official: '30-60 days',
    processing_time_real: '2-3 months',
    cost_estimate: { total_single: '$1,500-2,000', attorney: '$800-1,500', gov_fees: '$100-200' },
    path_to_permanent: { years: 4, notes: 'Can transition to other visa types. Digital nomad visa time may count toward residency.' },
    path_to_citizenship: { years: 5, notes: 'Same path as other visas once permanent residency obtained.' },
    source_url: 'https://gov.br/mj',
  },
  {
    country: 'Brazil',
    visa_type: 'Retirement Visa (VITEM I)',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of pension/retirement income R$6,000+/month (~$1,200)', 'Police clearance (apostilled)', 'Birth certificate (apostilled)'],
      min_income: '$1,200/month pension',
      notes: 'No age minimum despite the name. Valid 2 years, renewable.'
    },
    processing_time_official: '30-90 days',
    processing_time_real: '3-5 months',
    cost_estimate: { total_single: '$1,500-2,000' },
    path_to_permanent: { years: 4, notes: 'Standard path after 4 years of legal residence.' },
    path_to_citizenship: { years: 5, notes: 'Standard naturalization path.' },
    source_url: 'https://gov.br/mj',
  },
  {
    country: 'Brazil',
    visa_type: 'Family Reunion (VITEM XI)',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Marriage certificate or proof of relationship (apostilled)', 'Sponsor\'s residency proof', 'Police clearance'],
      notes: 'For spouses/dependents of Brazilian residents or citizens. Reduced citizenship timeline (1 year for spouse of Brazilian citizen).'
    },
    processing_time_official: '30-60 days',
    processing_time_real: '2-4 months',
    cost_estimate: { total_single: '$1,000-1,500' },
    path_to_permanent: { years: 2, notes: 'Faster path than other visa types.' },
    path_to_citizenship: { years: 1, notes: 'Spouses of Brazilian citizens: 1 year of residence only.' },
    source_url: 'https://gov.br/mj',
  },

  // ===================== ARGENTINA =====================
  {
    country: 'Argentina',
    visa_type: 'Rentista Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of passive income $1,500+/month from abroad', 'Police clearance (apostilled)', 'Birth certificate (apostilled)'],
      min_income: '$1,500/month passive income',
      notes: '1-year visa, renewable. Good for remote workers and retirees.'
    },
    processing_time_official: '1-3 months',
    processing_time_real: '1-4 months',
    cost_estimate: { total_single: '$1,000-2,000' },
    path_to_permanent: { years: 2, notes: 'After 2 years of legal residence, apply for permanent residency.' },
    path_to_citizenship: { years: 2, notes: 'Argentina has one of the fastest citizenship paths in the world. After 2 years of legal residence, you can apply.' },
    source_url: 'https://argentina.gob.ar/migraciones',
  },
  {
    country: 'Argentina',
    visa_type: 'Digital Nomad Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of foreign employment/clients', 'Income from foreign sources'],
      min_income: 'Not fixed (recommended $1,500+/month)',
      notes: '6 months, renewable once. New program since 2024.'
    },
    processing_time_official: '2-4 weeks',
    processing_time_real: '1-2 months',
    cost_estimate: { total_single: '$500-1,000' },
    path_to_permanent: { years: 2, notes: 'Can transition to rentista or investor visa.' },
    path_to_citizenship: { years: 2, notes: 'Same fast path once legal residency established.' },
    source_url: 'https://argentina.gob.ar/migraciones',
  },
  {
    country: 'Argentina',
    visa_type: 'Retirement Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of pension income $500+/month', 'Police clearance', 'Health insurance'],
      min_income: '$500/month (one of the lowest thresholds in LATAM)',
      notes: 'Very accessible. Argentina actively welcomes retirees.'
    },
    processing_time_official: '1-3 months',
    processing_time_real: '2-4 months',
    cost_estimate: { total_single: '$800-1,500' },
    path_to_permanent: { years: 2, notes: 'Standard 2-year path.' },
    path_to_citizenship: { years: 2, notes: 'Fast path to citizenship.' },
    source_url: 'https://argentina.gob.ar/migraciones',
  },

  // ===================== PARAGUAY =====================
  {
    country: 'Paraguay',
    visa_type: 'Temporary Residency',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Police clearance (apostilled)', 'Birth certificate (apostilled)', 'Proof of income or bank statement ($5K+)', 'Health certificate'],
      notes: 'One of the easiest residency processes in South America. Some attorneys expedite to under 2 weeks.'
    },
    processing_time_official: '2-4 weeks',
    processing_time_real: '2-4 weeks (Gregory confirmed — Paraguay is fast)',
    cost_estimate: { total_single_1trip: '$2,300', total_single_2trips: '$1,800', notes: 'All-inclusive: attorney, government fees, translations. Excludes travel/accommodation.' },
    path_to_permanent: { years: 3, notes: '3 years of temporary residency, then apply for permanent.' },
    path_to_citizenship: { years: 3, notes: 'After 3 years of permanent residency. Total ~6 years from initial application.' },
    source_url: 'https://migraciones.gov.py',
  },
  {
    country: 'Paraguay',
    visa_type: 'Fiscal Residency (Tax)',
    nationality_group: 'all',
    requirements: {
      documents: ['Cédula de Identidad (Paraguay ID)', 'Registration with SET (tax authority)', 'Local address and bank account', 'Periodic presence in country'],
      notes: 'TERRITORIAL TAXATION: Only Paraguay-sourced income is taxed. Foreign income = TAX FREE. Must establish genuine ties (address, bank, periodic visits). Do not treat as paper arrangement — tax authorities can challenge.'
    },
    processing_time_official: 'Concurrent with residency',
    processing_time_real: '2-4 weeks after residency',
    cost_estimate: { total_single: 'Included in residency cost' },
    path_to_permanent: null,
    path_to_citizenship: null,
    source_url: 'https://www.set.gov.py',
  },

  // ===================== URUGUAY =====================
  {
    country: 'Uruguay',
    visa_type: 'Rentista Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of passive income $1,500+/month', 'Police clearance', 'Birth certificate', 'Health insurance'],
      min_income: '$1,500/month',
      notes: 'Uruguay is SLOW — processing can take 1-2 years. Apply early. One of the slowest in LATAM.'
    },
    processing_time_official: '6-12 months',
    processing_time_real: '1-2 years',
    cost_estimate: { total_single: '$2,000-3,000' },
    path_to_permanent: { years: 3, notes: 'After 3-5 years of legal residence (3 for married, 5 for single).' },
    path_to_citizenship: { years: 3, notes: '3 years (married) or 5 years (single) of legal residence. Dual citizenship allowed.' },
    source_url: 'https://gub.uy/migracion',
  },
  {
    country: 'Uruguay',
    visa_type: 'Investor Residency',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of investment in Uruguayan business or property (typically $100K+)', 'Police clearance', 'Business plan'],
      min_investment: '$100,000+ (no fixed legal minimum)',
      notes: 'Tax holiday: 0% tax on foreign income for first 5 years. After 5 years, worldwide taxation kicks in at 12%.'
    },
    processing_time_official: '6-12 months',
    processing_time_real: '1-2 years',
    cost_estimate: { total_single: '$3,000-5,000' },
    path_to_permanent: { years: 3, notes: 'Standard path.' },
    path_to_citizenship: { years: 3, notes: '3-5 years depending on marital status.' },
    source_url: 'https://gub.uy/migracion',
  },

  // ===================== PANAMA =====================
  {
    country: 'Panama',
    visa_type: 'Friendly Nations Visa',
    nationality_group: 'US, Canada, UK, EU, Australia, Japan, + 50 countries',
    requirements: {
      documents: ['Valid passport', 'Police clearance', 'Proof of economic tie to Panama (bank account with $5K+ OR employment OR business ownership)', 'Health certificate'],
      notes: 'One of the most popular residency programs in LATAM. Fast processing, dollar economy.'
    },
    processing_time_official: '3-6 months',
    processing_time_real: '3-6 months',
    cost_estimate: { total_single: '$5,000-8,000 (including attorney)' },
    path_to_permanent: { years: 2, notes: 'Temporary for 2 years, then permanent. Relatively straightforward.' },
    path_to_citizenship: { years: 5, notes: '5 years of permanent residency. Panama allows dual citizenship.' },
    source_url: 'https://www.migracion.gob.pa',
  },
  {
    country: 'Panama',
    visa_type: 'Pensionado Visa',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Proof of pension $1,000+/month', 'Police clearance', 'Health certificate'],
      min_income: '$1,000/month pension',
      notes: 'One of the best retirement visa programs in the world. Extensive discounts on healthcare, transportation, entertainment, restaurants (up to 25-50% off).'
    },
    processing_time_official: '3-6 months',
    processing_time_real: '3-6 months',
    cost_estimate: { total_single: '$3,000-5,000' },
    path_to_permanent: { years: 0, notes: 'Pensionado visa grants immediate permanent residency.' },
    path_to_citizenship: { years: 5, notes: '5 years of residency.' },
    source_url: 'https://www.migracion.gob.pa',
  },

  // ===================== EL SALVADOR =====================
  {
    country: 'El Salvador',
    visa_type: 'Temporary Residency',
    nationality_group: 'all',
    requirements: {
      documents: ['Valid passport', 'Police clearance', 'Birth certificate', 'Proof of income or savings'],
      notes: 'Growing expat program. Bitcoin-friendly country. Increasingly popular with digital nomads and crypto entrepreneurs.'
    },
    processing_time_official: '1-3 months',
    processing_time_real: '1-3 months',
    cost_estimate: { total_single: '$1,000-2,000' },
    path_to_permanent: { years: 3, notes: 'After 3 years of temporary residency.' },
    path_to_citizenship: { years: 5, notes: '5 years of residency.' },
    source_url: 'https://www.migracion.gob.sv',
  },
];

async function scrapeVisaData() {
  logScrape('visa', `Loading ${VISA_DATA.length} visa entries...`);

  // Clear existing
  await db.from('visa_data').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  const rows = VISA_DATA.map(v => ({
    ...v,
    last_verified: new Date().toISOString(),
  }));

  // Insert in batches
  const BATCH = 10;
  let inserted = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const { error } = await db.from('visa_data').insert(batch);
    if (error) {
      logScrape('visa', `DB error: ${error.message}`);
    } else {
      inserted += batch.length;
    }
  }

  logScrape('visa', `Done. ${inserted} entries loaded.`);
  return { success: true, count: inserted };
}

export { scrapeVisaData };

if (require.main === module) {
  scrapeVisaData().then(r => console.log(JSON.stringify(r, null, 2)));
}
