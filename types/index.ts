export * from './questionnaire';

export interface User {
  id: string;
  email: string;
  created_at: string;
  questionnaire_completed: boolean;
  report_generated: boolean;
  paid: boolean;
}

export interface Report {
  id: string;
  user_id: string;
  created_at: string;
  report_type: 'free' | 'paid';
  report_content: string;
  country_recommendations: CountryRecommendation[];
  pdf_url?: string;
}

export interface CountryRecommendation {
  country: string;
  score: number;
  reasons: string[];
  flag: string;
}
