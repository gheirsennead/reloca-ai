/**
 * Safety Data — Daily/Weekly
 * Sources: Curated from US State Dept + UK FCDO + Numbeo Crime Index
 * Updated manually + via travel advisory API when available
 */

import { db, logScrape } from '../../lib/scraper-utils';

interface SafetyEntry {
  country: string;
  city: string | null;
  safety_index: number;      // 0-100, higher = safer
  crime_index: number;       // 0-100, higher = more crime
  travel_advisory_level: string;
  advisory_source: string;
  advisory_text: string;
}

// Curated safety data from US State Dept + Numbeo + knowledge base
const SAFETY_DATA: SafetyEntry[] = [
  // === BRAZIL ===
  { country: 'Brazil', city: null, safety_index: 45, crime_index: 68, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution due to crime. Some areas have increased risk.' },
  { country: 'Brazil', city: 'Fortaleza', safety_index: 40, crime_index: 65, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo+Gregory', advisory_text: 'Safe in nice neighborhoods (Meireles, Aldeota, Porto das Dunas). Avoid periphery at night. Petty theft is main risk. Use common sense — dress simply, don\'t flash valuables. Gregory: 5 years, zero incidents.' },
  { country: 'Brazil', city: 'Guaramiranga', safety_index: 75, crime_index: 25, travel_advisory_level: 'Level 1', advisory_source: 'Gregory', advisory_text: 'Very safe small mountain town. Quiet, low crime. Main risk is road conditions on the mountain road from Fortaleza.' },
  { country: 'Brazil', city: 'Florianópolis', safety_index: 55, crime_index: 48, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Generally safe, popular with expats. Tourist areas well-policed. Some property crime in less central areas.' },
  { country: 'Brazil', city: 'São Paulo', safety_index: 38, crime_index: 70, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Large city with significant variation by neighborhood. Jardins, Pinheiros, Vila Madalena are safe. Avoid periphery. Use ride-sharing, not public transport at night.' },
  { country: 'Brazil', city: 'Rio de Janeiro', safety_index: 32, crime_index: 75, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Beautiful but requires street smarts. Zona Sul (Copacabana, Ipanema, Leblon) is tourist-safe. Avoid favelas without a guide. Don\'t walk on the beach at night.' },

  // === ARGENTINA ===
  { country: 'Argentina', city: null, safety_index: 50, crime_index: 62, travel_advisory_level: 'Level 1', advisory_source: 'US State Dept', advisory_text: 'Exercise normal precautions. Petty crime (pickpocketing) in Buenos Aires tourist areas.' },
  { country: 'Argentina', city: 'Bariloche', safety_index: 70, crime_index: 30, travel_advisory_level: 'Level 1', advisory_source: 'Numbeo', advisory_text: 'Very safe by Latin American standards. Small city, low crime. Main risks: mountain/outdoor activity accidents, winter road conditions.' },
  { country: 'Argentina', city: 'Mendoza', safety_index: 60, crime_index: 40, travel_advisory_level: 'Level 1', advisory_source: 'Numbeo', advisory_text: 'Relatively safe mid-size city. Wine country attracts tourists. Standard urban precautions apply.' },
  { country: 'Argentina', city: 'Buenos Aires', safety_index: 42, crime_index: 65, travel_advisory_level: 'Level 1', advisory_source: 'Numbeo', advisory_text: 'Pickpocketing and bag-snatching in tourist areas (La Boca, San Telmo). Safer neighborhoods: Palermo, Belgrano, Recoleta. Protests (manifestaciones) are common but usually peaceful. Taxi scams exist — use Uber/Cabify.' },

  // === PARAGUAY ===
  { country: 'Paraguay', city: null, safety_index: 50, crime_index: 55, travel_advisory_level: 'Level 1', advisory_source: 'US State Dept', advisory_text: 'Exercise normal precautions.' },
  { country: 'Paraguay', city: 'Asunción', safety_index: 48, crime_index: 55, travel_advisory_level: 'Level 1', advisory_source: 'Numbeo', advisory_text: 'Moderate safety. Nice neighborhoods (Villa Morra, Carmelitas, Las Mercedes) are safe during the day. Standard precautions at night. Less violent crime than Brazil. Gregory: good for focused work periods.' },

  // === URUGUAY ===
  { country: 'Uruguay', city: null, safety_index: 65, crime_index: 42, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Uruguay is one of the safest countries in South America overall.' },
  { country: 'Uruguay', city: 'Montevideo', safety_index: 55, crime_index: 50, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Safe by regional standards. Pocitos, Carrasco, Punta Carretas are excellent neighborhoods. Ciudad Vieja can be sketchy at night. Generally walkable and comfortable.' },
  { country: 'Uruguay', city: 'Maldonado', safety_index: 70, crime_index: 30, travel_advisory_level: 'Level 1', advisory_source: 'Numbeo', advisory_text: 'Very safe. Punta del Este is a resort area with low crime. Off-season is quieter but equally safe. Popular with wealthy Argentines and international visitors.' },

  // === PANAMA ===
  { country: 'Panama', city: null, safety_index: 52, crime_index: 50, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Some areas have increased risk.' },
  { country: 'Panama', city: 'Panama City', safety_index: 48, crime_index: 55, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Modern city with safe areas (Punta Pacifica, Costa del Este, Casco Viejo). Some neighborhoods to avoid. Dollar economy provides stability.' },

  // === EL SALVADOR ===
  { country: 'El Salvador', city: null, safety_index: 45, crime_index: 55, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Significant security improvements under Bukele administration (2024-2026). Previously one of the most dangerous countries, now much safer.' },
  { country: 'El Salvador', city: 'San Salvador', safety_index: 45, crime_index: 55, travel_advisory_level: 'Level 2', advisory_source: 'Numbeo', advisory_text: 'Dramatic safety improvements since 2022. Formerly very dangerous, now significantly safer. Still exercise caution in certain neighborhoods. Bitcoin Beach (El Zonte) and San Salvador urban areas increasingly popular with expats.' },

  // === TIER 3 ===
  { country: 'Costa Rica', city: null, safety_index: 58, crime_index: 48, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Petty crime (theft, car break-ins) is common. Generally safe for expats in established areas.' },
  { country: 'Mexico', city: null, safety_index: 40, crime_index: 65, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution due to crime. Safety varies enormously by state and city. Popular expat areas (CDMX Roma/Condesa, Mérida, Oaxaca, San Miguel de Allende) are generally safe.' },
  { country: 'Colombia', city: null, safety_index: 42, crime_index: 63, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Medellín, Bogotá, Cartagena tourist areas are generally safe. Huge improvements over past 20 years. Standard precautions apply.' },
  { country: 'Ecuador', city: null, safety_index: 40, crime_index: 62, travel_advisory_level: 'Level 2', advisory_source: 'US State Dept', advisory_text: 'Exercise increased caution. Security situation has deteriorated in some coastal areas (2024-2026). Quito and highland cities remain relatively safe. Dollar economy.' },
];

async function scrapeSafetyData() {
  logScrape('safety', `Loading ${SAFETY_DATA.length} safety entries...`);

  // Clear existing
  await db.from('safety_data').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  const { error } = await db.from('safety_data').insert(SAFETY_DATA);

  if (error) {
    logScrape('safety', `DB error: ${error.message}`);
    return { success: false, error: error.message };
  }

  logScrape('safety', `Done. ${SAFETY_DATA.length} entries loaded.`);
  return { success: true, count: SAFETY_DATA.length };
}

export { scrapeSafetyData };

if (require.main === module) {
  scrapeSafetyData().then(r => console.log(JSON.stringify(r, null, 2)));
}
