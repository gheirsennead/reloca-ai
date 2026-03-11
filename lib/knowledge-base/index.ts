// Master Knowledge Base Index
// Imports all country KB files and aggregates them

import { KnowledgeBaseEntry } from './knowledge-base-schema';
import { PORTUGAL_KB_EXTENDED } from './portugal';
import { MEXICO_KB } from './mexico';
import { THAILAND_KB } from './thailand';
import { UAE_KB } from './uae';
// Additional countries will be added as files are created
// import { SPAIN_KB } from './spain';
// import { COSTA_RICA_KB } from './costa-rica';
// ... etc

// Master aggregated knowledge base
export const MASTER_KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  ...PORTUGAL_KB_EXTENDED,
  ...MEXICO_KB,
  ...THAILAND_KB,
  ...UAE_KB,
  // Additional country KBs will be appended here
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
