// Multi-source data verification engine for LATAM countries

import { DataVerificationResult, CountryData, DataSource, PRIORITY_COUNTRIES } from './types';
import { supabaseAdmin } from '@/lib/supabase';
import { ArgentinaDataVerifier } from './argentina-sources';
import { BrazilDataVerifier } from './brazil-sources';
import { UruguayDataVerifier } from './uruguay-sources';
import { LatamDataVerifier } from './latam-sources';

interface VerificationConfig {
  min_confidence_threshold: number;
  require_human_review_threshold: number;
  max_source_age_days: number;
  conflict_resolution_strategy: 'highest_confidence' | 'newest_source' | 'government_priority';
}

export class DataVerificationEngine {
  private config: VerificationConfig = {
    min_confidence_threshold: 80,
    require_human_review_threshold: 70,
    max_source_age_days: 30,
    conflict_resolution_strategy: 'government_priority'
  };

  async runFullVerification(country: string): Promise<CountryData> {
    console.log(`🔍 Starting data verification for ${country}`);
    
    const verificationResults: DataVerificationResult[] = [];
    let sources: DataSource[] = [];
    
    // Country-specific verification
    switch (country.toLowerCase()) {
      case 'argentina':
        const argVerifier = new ArgentinaDataVerifier();
        const visaResults = await argVerifier.verifyVisaRequirements();
        const taxResults = await argVerifier.verifyTaxInformation();
        verificationResults.push(...visaResults, ...taxResults);
        sources = await this.getArgentinaSources();
        break;
      
      case 'brazil':
        const brazilVerifier = new BrazilDataVerifier();
        const brazilVisaResults = await brazilVerifier.verifyVisaRequirements();
        const brazilTaxResults = await brazilVerifier.verifyTaxInformation();
        verificationResults.push(...brazilVisaResults, ...brazilTaxResults);
        sources = await this.getBrazilSources();
        break;
        
      case 'uruguay':
        const uruguayVerifier = new UruguayDataVerifier();
        const uruguayVisaResults = await uruguayVerifier.verifyVisaRequirements();
        const uruguayTaxResults = await uruguayVerifier.verifyTaxInformation();
        verificationResults.push(...uruguayVisaResults, ...uruguayTaxResults);
        sources = await this.getUruguaySources();
        break;

      case 'paraguay':
      case 'mexico':
      case 'panama':
      case 'chile':
      case 'el salvador':
      case 'venezuela':
        const latamVerifier = new LatamDataVerifier();
        const latamResults = await latamVerifier.verifyCountryData(country);
        verificationResults.push(...latamResults);
        sources = await this.getLatamSources(country);
        break;
        
      default:
        // Generic verification for newer countries — assess based on database coverage
        sources = await this.getCountrySources(country);
        const dbConfidence = await this.assessDatabaseCoverage(country);
        verificationResults.push(...dbConfidence);
        break;
    }
    
    // Process results and resolve conflicts
    const processedData = await this.processVerificationResults(verificationResults);
    
    // Calculate overall confidence score
    const confidenceScore = this.calculateOverallConfidence(verificationResults);
    
    return {
      country,
      country_code: this.getCountryCode(country),
      last_updated: new Date().toISOString(),
      confidence_score: confidenceScore,
      sources,
      data: processedData
    };
  }

  async detectOutdatedInformation(country: string): Promise<string[]> {
    const issues: string[] = [];
    
    // Check source freshness
    const sources = await this.getCountrySources(country);
    const staleThreshold = Date.now() - (this.config.max_source_age_days * 24 * 60 * 60 * 1000);
    
    sources.forEach(source => {
      if (new Date(source.last_checked).getTime() < staleThreshold) {
        issues.push(`${source.name} data is ${Math.floor((Date.now() - new Date(source.last_checked).getTime()) / (24 * 60 * 60 * 1000))} days old`);
      }
    });
    
    return issues;
  }

  async resolveDataConflicts(conflicts: DataVerificationResult[]): Promise<DataVerificationResult[]> {
    const resolved: DataVerificationResult[] = [];
    
    // Group conflicts by field
    const conflictsByField = new Map<string, DataVerificationResult[]>();
    
    conflicts.forEach(conflict => {
      if (!conflictsByField.has(conflict.field)) {
        conflictsByField.set(conflict.field, []);
      }
      conflictsByField.get(conflict.field)!.push(conflict);
    });
    
    // Resolve each field's conflicts
    conflictsByField.forEach((fieldConflicts, field) => {
      const winner = this.selectBestVerification(fieldConflicts);
      resolved.push({
        ...winner,
        requires_human_review: fieldConflicts.length > 2 || winner.confidence < this.config.require_human_review_threshold
      });
    });
    
    return resolved;
  }

  private selectBestVerification(verifications: DataVerificationResult[]): DataVerificationResult {
    switch (this.config.conflict_resolution_strategy) {
      case 'highest_confidence':
        return verifications.reduce((best, current) => 
          current.confidence > best.confidence ? current : best
        );
        
      case 'government_priority':
        // Prioritize government sources, then highest confidence
        const govSource = verifications.find(v => 
          v.source.toLowerCase().includes('government') || 
          v.source.toLowerCase().includes('official') ||
          v.source.toLowerCase().includes('dnm') ||
          v.source.toLowerCase().includes('afip')
        );
        return govSource || verifications.reduce((best, current) => 
          current.confidence > best.confidence ? current : best
        );
        
      case 'newest_source':
        // Not implemented - would need timestamp comparison
        return verifications[0];
        
      default:
        return verifications[0];
    }
  }

  private async processVerificationResults(results: DataVerificationResult[]): Promise<any> {
    // Convert verification results into structured country data
    const processedData: any = {
      visa_requirements: [],
      tax_system: {},
      last_verified: new Date().toISOString()
    };
    
    results.forEach(result => {
      if (result.field.includes('visa')) {
        processedData.visa_requirements.push({
          type: result.field,
          value: result.new_value,
          confidence: result.confidence,
          source: result.source,
          evidence: result.evidence
        });
      } else if (result.field.includes('tax')) {
        processedData.tax_system[result.field] = {
          value: result.new_value,
          confidence: result.confidence,
          source: result.source,
          evidence: result.evidence
        };
      }
    });
    
    return processedData;
  }

  private calculateOverallConfidence(results: DataVerificationResult[]): number {
    if (results.length === 0) return 0;
    
    const totalConfidence = results.reduce((sum, result) => sum + result.confidence, 0);
    const averageConfidence = totalConfidence / results.length;
    
    // Penalize for conflicts
    const conflictCount = results.filter(r => r.conflict).length;
    const conflictPenalty = conflictCount * 5; // -5 points per conflict
    
    return Math.max(0, Math.min(100, averageConfidence - conflictPenalty));
  }

  private getCountryCode(country: string): string {
    const countryData = PRIORITY_COUNTRIES.find(c => 
      c.name.toLowerCase() === country.toLowerCase()
    );
    return countryData?.code || 'UNKNOWN';
  }

  private async getCountrySources(country: string): Promise<DataSource[]> {
    switch (country.toLowerCase()) {
      case 'argentina':
        return this.getArgentinaSources();
      case 'brazil':
        return this.getBrazilSources();
      case 'uruguay':
        return this.getUruguaySources();
      case 'paraguay':
      case 'mexico':
      case 'panama':
      case 'chile':
      case 'el salvador':
      case 'venezuela':
        return this.getLatamSources(country);
      case 'portugal':
      case 'spain':
      case 'italy':
      case 'andorra':
      case 'greece':
      case 'malta':
      case 'cyprus':
      case 'estonia':
        return this.getEuropeSources(country);
      case 'singapore':
      case 'uae':
      case 'dubai':
      case 'thailand':
      case 'malaysia':
        return this.getAsiaMESources(country);
      default:
        return this.getGenericSources(country);
    }
  }

  private async getArgentinaSources(): Promise<DataSource[]> {
    return [
      {
        id: 'dnm_argentina',
        name: 'Dirección Nacional de Migraciones',
        type: 'government_api',
        url: 'https://www.migraciones.gov.ar',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 95
      },
      {
        id: 'afip_argentina',
        name: 'AFIP (Tax Authority)', 
        type: 'government_api',
        url: 'https://www.afip.gob.ar',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 98
      }
    ];
  }

  private async getBrazilSources(): Promise<DataSource[]> {
    return [
      {
        id: 'pf_brazil',
        name: 'Polícia Federal - Immigration',
        type: 'government_api',
        url: 'https://www.gov.br/pf',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 90
      },
      {
        id: 'receita_federal',
        name: 'Receita Federal do Brasil',
        type: 'government_api',
        url: 'https://www.gov.br/receitafederal',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 95
      }
    ];
  }

  private async getUruguaySources(): Promise<DataSource[]> {
    return [
      {
        id: 'dnm_uruguay',
        name: 'Dirección Nacional de Migración',
        type: 'government_api',
        url: 'https://migracion.minterior.gub.uy',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 85
      },
      {
        id: 'dgi_uruguay',
        name: 'Dirección General Impositiva',
        type: 'government_api',
        url: 'https://www.dgi.gub.uy',
        last_checked: new Date().toISOString(),
        status: 'active',
        reliability_score: 90
      }
    ];
  }

  private async getLatamSources(country: string): Promise<DataSource[]> {
    const sourcesMap: Record<string, DataSource[]> = {
      'paraguay': [
        {
          id: 'migraciones_py',
          name: 'Dirección General de Migraciones Paraguay',
          type: 'government_api',
          url: 'https://www.migraciones.gov.py',
          last_checked: new Date().toISOString(),
          status: 'active',
          reliability_score: 80
        }
      ],
      'mexico': [
        {
          id: 'inm_mexico',
          name: 'Instituto Nacional de Migración',
          type: 'government_api',
          url: 'https://www.inm.gob.mx',
          last_checked: new Date().toISOString(),
          status: 'active',
          reliability_score: 85
        }
      ],
      'panama': [
        {
          id: 'snm_panama',
          name: 'Servicio Nacional de Migración',
          type: 'government_api',
          url: 'https://www.migracion.gob.pa',
          last_checked: new Date().toISOString(),
          status: 'active',
          reliability_score: 82
        }
      ],
      'chile': [
        {
          id: 'pdyext_chile',
          name: 'Policía de Investigaciones - Extranjería',
          type: 'government_api',
          url: 'https://www.pdichile.cl',
          last_checked: new Date().toISOString(),
          status: 'active',
          reliability_score: 88
        }
      ],
      'el salvador': [
        {
          id: 'dgm_elsalvador',
          name: 'Dirección General de Migración y Extranjería',
          type: 'government_api',
          url: 'https://www.migracion.gob.sv',
          last_checked: new Date().toISOString(),
          status: 'active',
          reliability_score: 75
        }
      ],
      'venezuela': [
        {
          id: 'saime_venezuela',
          name: 'SAIME - Immigration Service',
          type: 'government_api',
          url: 'https://www.saime.gob.ve',
          last_checked: new Date().toISOString(),
          status: 'inactive',
          reliability_score: 50
        }
      ]
    };

    return sourcesMap[country.toLowerCase()] || [];
  }

  private async assessDatabaseCoverage(country: string): Promise<DataVerificationResult[]> {
    const results: DataVerificationResult[] = [];
    
    try {
      // Check expert_knowledge coverage
      const { data: expertData } = await supabaseAdmin
        .from('expert_knowledge')
        .select('category')
        .eq('country', country);
      
      const categories = new Set(expertData?.map(e => e.category) || []);
      const expectedCategories = ['visa_residency', 'cost_of_living', 'property_market', 'lifestyle_culture', 'tax_finance', 'healthcare', 'safety_security', 'bureaucracy_logistics', 'education'];
      const coverageRatio = categories.size / expectedCategories.length;
      
      results.push({
        field: 'expert_knowledge',
        current_value: `${expertData?.length || 0} entries across ${categories.size} categories`,
        new_value: null,
        confidence: Math.min(95, Math.round(coverageRatio * 90 + (expertData?.length || 0) * 0.5)),
        source: 'Reloca.ai curated database',
        conflict: false,
        requires_human_review: false,
        evidence: []
      });

      // Check cost_of_living coverage
      const { data: colData } = await supabaseAdmin
        .from('cost_of_living')
        .select('city')
        .eq('country', country);
      
      const cities = new Set(colData?.map(e => e.city) || []);
      results.push({
        field: 'cost_of_living',
        current_value: `${colData?.length || 0} entries across ${cities.size} cities`,
        new_value: null,
        confidence: colData && colData.length >= 10 ? 82 : colData && colData.length > 0 ? 65 : 0,
        source: 'Numbeo / Government statistics',
        conflict: false,
        requires_human_review: false,
        evidence: []
      });

      // Check safety_data coverage
      const { data: safetyData } = await supabaseAdmin
        .from('safety_data')
        .select('city')
        .eq('country', country);
      
      results.push({
        field: 'safety_data',
        current_value: `${safetyData?.length || 0} entries`,
        new_value: null,
        confidence: safetyData && safetyData.length >= 3 ? 80 : safetyData && safetyData.length > 0 ? 60 : 0,
        source: 'U.S. State Department / Numbeo',
        conflict: false,
        requires_human_review: false,
        evidence: []
      });
    } catch (error) {
      console.error('Error assessing database coverage:', error);
      results.push({
        field: 'database',
        current_value: 'Error checking coverage',
        new_value: null,
        confidence: 50,
        source: 'Reloca.ai database',
        conflict: false,
        requires_human_review: false,
        evidence: []
      });
    }
    
    return results;
  }

  private async getEuropeSources(country: string): Promise<DataSource[]> {
    const sourcesMap: Record<string, DataSource[]> = {
      'portugal': [
        { id: 'sef_pt', name: 'SEF / AIMA - Portuguese Immigration', type: 'government_api', url: 'https://www.sef.pt', last_checked: new Date().toISOString(), status: 'active', reliability_score: 90 }
      ],
      'spain': [
        { id: 'ext_es', name: 'Ministerio de Inclusión - Extranjería', type: 'government_api', url: 'https://extranjeros.inclusion.gob.es', last_checked: new Date().toISOString(), status: 'active', reliability_score: 90 }
      ],
      'italy': [
        { id: 'poliziadistato_it', name: 'Polizia di Stato - Immigration', type: 'government_api', url: 'https://www.poliziadistato.it', last_checked: new Date().toISOString(), status: 'active', reliability_score: 88 }
      ],
      'andorra': [
        { id: 'gov_ad', name: 'Govern d\'Andorra - Immigration', type: 'government_api', url: 'https://www.govern.ad', last_checked: new Date().toISOString(), status: 'active', reliability_score: 85 }
      ],
      'greece': [
        { id: 'mfa_gr', name: 'Hellenic Ministry of Migration', type: 'government_api', url: 'https://migration.gov.gr', last_checked: new Date().toISOString(), status: 'active', reliability_score: 85 }
      ],
      'malta': [
        { id: 'ima_mt', name: 'Identity Malta Agency', type: 'government_api', url: 'https://identitymalta.com', last_checked: new Date().toISOString(), status: 'active', reliability_score: 88 }
      ],
      'cyprus': [
        { id: 'moi_cy', name: 'Cyprus Ministry of Interior - Civil Registry', type: 'government_api', url: 'https://www.moi.gov.cy', last_checked: new Date().toISOString(), status: 'active', reliability_score: 85 }
      ],
      'estonia': [
        { id: 'ppa_ee', name: 'Estonian Police and Border Guard Board', type: 'government_api', url: 'https://www.politsei.ee', last_checked: new Date().toISOString(), status: 'active', reliability_score: 92 }
      ]
    };
    return sourcesMap[country.toLowerCase()] || [];
  }

  private async getAsiaMESources(country: string): Promise<DataSource[]> {
    const sourcesMap: Record<string, DataSource[]> = {
      'singapore': [
        { id: 'ica_sg', name: 'Immigration & Checkpoints Authority', type: 'government_api', url: 'https://www.ica.gov.sg', last_checked: new Date().toISOString(), status: 'active', reliability_score: 95 }
      ],
      'uae': [
        { id: 'icp_ae', name: 'Federal Authority for Identity & Citizenship', type: 'government_api', url: 'https://icp.gov.ae', last_checked: new Date().toISOString(), status: 'active', reliability_score: 90 }
      ],
      'dubai': [
        { id: 'icp_ae', name: 'Federal Authority for Identity & Citizenship', type: 'government_api', url: 'https://icp.gov.ae', last_checked: new Date().toISOString(), status: 'active', reliability_score: 90 }
      ],
      'thailand': [
        { id: 'imm_th', name: 'Thai Immigration Bureau', type: 'government_api', url: 'https://www.immigration.go.th', last_checked: new Date().toISOString(), status: 'active', reliability_score: 82 }
      ],
      'malaysia': [
        { id: 'imi_my', name: 'Immigration Department of Malaysia', type: 'government_api', url: 'https://www.imi.gov.my', last_checked: new Date().toISOString(), status: 'active', reliability_score: 85 }
      ]
    };
    return sourcesMap[country.toLowerCase()] || [];
  }

  private async getGenericSources(country: string): Promise<DataSource[]> {
    return [
      { id: `numbeo_${country}`, name: 'Numbeo Cost of Living', type: 'manual_research', url: 'https://www.numbeo.com', last_checked: new Date().toISOString(), status: 'active', reliability_score: 75 }
    ];
  }

  // Quality assurance methods
  async generateDataQualityReport(country: string): Promise<any> {
    return {
      country,
      overall_confidence: await this.getOverallConfidence(country),
      outdated_sources: await this.detectOutdatedInformation(country),
      pending_reviews: await this.getPendingHumanReviews(country),
      last_verification: new Date().toISOString(),
      next_verification: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
  }

  private async getOverallConfidence(country: string): Promise<number> {
    // Mock implementation
    return 85;
  }

  private async getPendingHumanReviews(country: string): Promise<string[]> {
    // Mock implementation
    return [];
  }
}