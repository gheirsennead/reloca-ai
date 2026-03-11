// Master Knowledge Base Index
// Imports all country KB files and aggregates them

import { KnowledgeBaseEntry, PORTUGAL_KNOWLEDGE_BASE } from '../knowledge-base-schema';
import { PORTUGAL_KB_EXTENDED } from './portugal';
import { MEXICO_KB } from './mexico';
import { THAILAND_KB } from './thailand';
import { UAE_KB } from './uae';
import { SPAIN_KB } from './spain';
import { COLOMBIA_KB } from './colombia';
import { COSTA_RICA_KB } from './costa-rica';
import { SINGAPORE_KB } from './singapore';
import { BRAZIL_KB } from './brazil';
import { ARGENTINA_KB } from './argentina';
import { PANAMA_KB } from './panama';
import { URUGUAY_KB } from './uruguay';
import { PARAGUAY_KB } from './paraguay';
import { CHILE_KNOWLEDGE_BASE } from './chile';
import { ECUADOR_KB } from './ecuador';
import { EL_SALVADOR_KB } from './el-salvador';

// Master aggregated knowledge base
export const MASTER_KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  ...PORTUGAL_KNOWLEDGE_BASE,    // Core 10 Portugal entries (IFICI, D7, Golden Visa, etc.)
  ...PORTUGAL_KB_EXTENDED,        // 21 extended Portugal entries (treaties, neighborhoods, etc.)
  ...MEXICO_KB,
  ...THAILAND_KB,
  ...UAE_KB,
  ...SPAIN_KB,
  ...COLOMBIA_KB,
  ...COSTA_RICA_KB,
  ...SINGAPORE_KB,
  ...BRAZIL_KB,
  ...ARGENTINA_KB,
  ...PANAMA_KB,
  ...URUGUAY_KB,
  ...PARAGUAY_KB,
  ...CHILE_KNOWLEDGE_BASE,
  ...ECUADOR_KB,
  ...EL_SALVADOR_KB,
  ...PARAGUAY_KB,
];

// Helper: Get KB entries for specific country
export function getCountryKB(countryCode: string): KnowledgeBaseEntry[] {
  return MASTER_KNOWLEDGE_BASE.filter(
    entry => entry.country === countryCode.toUpperCase()
  );
}

// Helper: Get KB entries by category
export function getCategoryEntries(
  category: 'tax' | 'visa' | 'banking' | 'realestate' | 'healthcare' | 'lifestyle'
): KnowledgeBaseEntry[] {
  return MASTER_KNOWLEDGE_BASE.filter(entry => entry.category === category);
}

// Helper: Get entries for country + category
export function getCountryCategoryEntries(
  countryCode: string,
  category: 'tax' | 'visa' | 'banking' | 'realestate' | 'healthcare' | 'lifestyle'
): KnowledgeBaseEntry[] {
  return MASTER_KNOWLEDGE_BASE.filter(
    entry => entry.country === countryCode.toUpperCase() && entry.category === category
  );
}

// Stats
export function getKBStats() {
  const countries = new Set(MASTER_KNOWLEDGE_BASE.map(e => e.country));
  const categories = new Set(MASTER_KNOWLEDGE_BASE.map(e => e.category));
  
  return {
    totalEntries: MASTER_KNOWLEDGE_BASE.length,
    countriesCovered: countries.size,
    countries: Array.from(countries).sort(),
    categories: Array.from(categories),
    entriesByCountry: Array.from(countries).reduce<Record<string, number>>((acc, country) => {
      acc[country] = MASTER_KNOWLEDGE_BASE.filter(e => e.country === country).length;
      return acc;
    }, {}),
  };
}
