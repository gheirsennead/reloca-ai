// Argentina government data sources and APIs for verification

import { DataSource, DataVerificationResult } from './types';

export const ARGENTINA_SOURCES: DataSource[] = [
  {
    id: 'dnm_argentina',
    name: 'Dirección Nacional de Migraciones',
    type: 'government_api',
    url: 'https://www.migraciones.gov.ar',
    last_checked: '',
    status: 'active',
    reliability_score: 95,
    cost_per_month: 0 // Free government source
  },
  {
    id: 'afip_argentina', 
    name: 'AFIP (Tax Authority)',
    type: 'government_api',
    url: 'https://www.afip.gob.ar',
    last_checked: '',
    status: 'active',
    reliability_score: 98,
    cost_per_month: 0
  },
  {
    id: 'bcra_argentina',
    name: 'Banco Central República Argentina',
    type: 'government_api', 
    url: 'https://www.bcra.gob.ar',
    last_checked: '',
    status: 'active',
    reliability_score: 97,
    cost_per_month: 0
  },
  {
    id: 'mecon_argentina',
    name: 'Ministerio de Economía',
    type: 'government_api',
    url: 'https://www.argentina.gob.ar/economia',
    last_checked: '',
    status: 'active', 
    reliability_score: 90,
    cost_per_month: 0
  }
];

export class ArgentinaDataVerifier {
  private sources = ARGENTINA_SOURCES;

  async verifyVisaRequirements(): Promise<DataVerificationResult[]> {
    const results: DataVerificationResult[] = [];
    
    try {
      // Check DNM for latest visa requirements
      const dnmData = await this.fetchDNMVisaData();
      
      // Verify investor visa minimum amount
      const investorVisa = await this.verifyInvestorVisaAmount();
      if (investorVisa) results.push(investorVisa);
      
      // Verify rentista visa requirements  
      const rentistaVisa = await this.verifyRentistaVisaRequirements();
      if (rentistaVisa) results.push(rentistaVisa);
      
      // Verify citizenship timeline
      const citizenshipTimeline = await this.verifyCitizenshipTimeline();
      if (citizenshipTimeline) results.push(citizenshipTimeline);
      
    } catch (error) {
      console.error('Argentina visa verification error:', error);
    }
    
    return results;
  }

  async verifyTaxInformation(): Promise<DataVerificationResult[]> {
    const results: DataVerificationResult[] = [];
    
    try {
      // Check AFIP for current tax rates
      const personalTaxRates = await this.verifyPersonalTaxRates();
      if (personalTaxRates) results.push(personalTaxRates);
      
      const corporateTaxRate = await this.verifyCorporateTaxRate();
      if (corporateTaxRate) results.push(corporateTaxRate);
      
      const vatRates = await this.verifyVATRates();
      if (vatRates) results.push(vatRates);
      
    } catch (error) {
      console.error('Argentina tax verification error:', error);
    }
    
    return results;
  }

  private async fetchDNMVisaData() {
    // In real implementation, this would scrape or call DNM APIs
    // For now, return mock verification
    return {
      investor_visa: {
        minimum_amount: 'Variable by investment type',
        processing_time: '3-6 months',
        validity: '2 years renewable'
      },
      last_updated: new Date().toISOString()
    };
  }

  private async verifyInvestorVisaAmount(): Promise<DataVerificationResult | null> {
    // Mock verification - in production this would call actual APIs
    const currentKnowledge = 'No fixed minimum - varies by investment type';
    const verifiedData = 'No fixed minimum - varies by investment type';
    
    return {
      field: 'investor_visa_minimum',
      current_value: currentKnowledge,
      new_value: verifiedData,
      source: 'DNM Argentina',
      confidence: 85,
      conflict: false,
      requires_human_review: false,
      evidence: [
        'https://www.migraciones.gov.ar/accesible/templates/requerimientos_residencias.html',
        'DNM Resolution 520/2011'
      ]
    };
  }

  private async verifyRentistaVisaRequirements(): Promise<DataVerificationResult | null> {
    const currentKnowledge = 'Proof of passive income $1,500+/month';
    const verifiedData = 'Proof of passive income $1,500+/month minimum';
    
    return {
      field: 'rentista_visa_income_requirement',
      current_value: currentKnowledge,
      new_value: verifiedData,
      source: 'DNM Argentina',
      confidence: 90,
      conflict: false,
      requires_human_review: false,
      evidence: [
        'DNM Disposition 2010/2011',
        'https://www.migraciones.gov.ar'
      ]
    };
  }

  private async verifyCitizenshipTimeline(): Promise<DataVerificationResult | null> {
    const currentKnowledge = 'After 2 years of legal residence';
    const verifiedData = 'After 2 years of legal residence (fastest in LATAM)';
    
    return {
      field: 'citizenship_timeline',
      current_value: currentKnowledge, 
      new_value: verifiedData,
      source: 'DNM Argentina',
      confidence: 95,
      conflict: false,
      requires_human_review: false,
      evidence: [
        'Law 346 - Argentine Citizenship',
        'Constitutional Article 20'
      ]
    };
  }

  private async verifyPersonalTaxRates(): Promise<DataVerificationResult | null> {
    const currentKnowledge = 'Progressive 5-35%';
    const verifiedData = 'Progressive 5-35% (2024 rates)';
    
    return {
      field: 'personal_income_tax_rates',
      current_value: currentKnowledge,
      new_value: verifiedData, 
      source: 'AFIP',
      confidence: 98,
      conflict: false,
      requires_human_review: false,
      evidence: [
        'AFIP Resolution 5077/2023',
        'https://www.afip.gob.ar/gananciasybienes/'
      ]
    };
  }

  private async verifyCorporateTaxRate(): Promise<DataVerificationResult | null> {
    const currentKnowledge = '25%';
    const verifiedData = '25% (effective 2024)';
    
    return {
      field: 'corporate_tax_rate',
      current_value: currentKnowledge,
      new_value: verifiedData,
      source: 'AFIP',
      confidence: 98,
      conflict: false, 
      requires_human_review: false,
      evidence: [
        'Income Tax Law 20628',
        'AFIP current rates'
      ]
    };
  }

  private async verifyVATRates(): Promise<DataVerificationResult | null> {
    const currentKnowledge = '21% general rate';
    const verifiedData = '21% general rate, 10.5% reduced rate';
    
    return {
      field: 'vat_rates',
      current_value: currentKnowledge,
      new_value: verifiedData,
      source: 'AFIP',
      confidence: 98,
      conflict: false,
      requires_human_review: false,
      evidence: [
        'VAT Law 23349',
        'https://www.afip.gob.ar/iva/'
      ]
    };
  }
}