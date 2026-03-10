// Types for the data accuracy and verification system

export interface CountryData {
  country: string;
  country_code: string;
  last_updated: string;
  confidence_score: number;
  sources: DataSource[];
  data: CountryInformation;
}

export interface DataSource {
  id: string;
  name: string;
  type: 'government_api' | 'legal_firm' | 'real_time_monitoring' | 'manual_research';
  url: string;
  last_checked: string;
  status: 'active' | 'inactive' | 'error';
  reliability_score: number; // 0-100
  cost_per_month?: number;
}

export interface CountryInformation {
  visa_requirements: VisaInfo[];
  tax_system: TaxInfo;
  cost_of_living: CostInfo;
  healthcare: HealthcareInfo;
  property_rules: PropertyInfo;
  banking: BankingInfo;
  business_formation: BusinessInfo;
  lifestyle: LifestyleInfo;
}

export interface VisaInfo {
  type: string;
  requirements: string[];
  processing_time: string;
  cost: string;
  validity: string;
  sources: string[];
  confidence: number;
  last_verified: string;
}

export interface TaxInfo {
  system_type: 'territorial' | 'worldwide' | 'hybrid';
  personal_income_tax: {
    residents: string;
    non_residents: string;
    new_resident_benefits: string;
  };
  corporate_tax: string;
  vat: string;
  wealth_tax: string | null;
  capital_gains: string;
  sources: string[];
  confidence: number;
  last_verified: string;
}

export interface DataVerificationResult {
  field: string;
  current_value: any;
  new_value: any;
  source: string;
  confidence: number;
  conflict: boolean;
  requires_human_review: boolean;
  evidence: string[];
}

export interface CountryDataPipeline {
  country: string;
  sources: DataSource[];
  last_run: string;
  next_run: string;
  errors: string[];
  updates_pending: number;
}

// LATAM Priority Countries
export const PRIORITY_COUNTRIES = [
  // LATAM
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  // Europe
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'MT', name: 'Malta', flag: '🇲🇹' },
  { code: 'CY', name: 'Cyprus', flag: '🇨🇾' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
  // Asia & Middle East
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'AE', name: 'Dubai', flag: '🇦🇪' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
] as const;

export type CostInfo = any; // Define based on needs
export type HealthcareInfo = any;
export type PropertyInfo = any;
export type BankingInfo = any;
export type BusinessInfo = any;
export type LifestyleInfo = any;