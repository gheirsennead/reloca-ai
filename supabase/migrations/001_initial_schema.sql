-- ============================================
-- RELOCA.AI DATABASE SCHEMA
-- Initial migration
-- ============================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USER DATA (Reloca.ai core)
-- ============================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  questionnaire_completed BOOLEAN DEFAULT FALSE,
  report_generated BOOLEAN DEFAULT FALSE,
  paid BOOLEAN DEFAULT FALSE,
  payment_date TIMESTAMP,
  stripe_customer_id TEXT,
  membership_tier TEXT,
  membership_start TIMESTAMP,
  membership_status TEXT
);

CREATE TABLE questionnaire_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  responses JSONB NOT NULL,
  nationality TEXT,
  current_country TEXT,
  family_type TEXT,
  work_situation TEXT,
  income_range TEXT,
  property_budget TEXT,
  target_country TEXT,
  climate_preference TEXT,
  timeline TEXT,
  referral_source TEXT,
  questions_answered INTEGER,
  questions_skipped INTEGER
);

CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  report_type TEXT NOT NULL,
  report_content TEXT,
  country_recommendations JSONB,
  ai_model TEXT,
  ai_tokens_used INTEGER,
  ai_cost_usd DECIMAL,
  pdf_url TEXT
);

-- ============================================
-- KNOWLEDGE BASE (The Brain)
-- ============================================

CREATE TABLE visa_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  visa_type TEXT NOT NULL,
  nationality_group TEXT,
  requirements JSONB,
  processing_time_official TEXT,
  processing_time_real TEXT,
  cost_estimate JSONB,
  path_to_permanent JSONB,
  path_to_citizenship JSONB,
  source_url TEXT,
  last_verified TIMESTAMP,
  last_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE cost_of_living (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  category TEXT NOT NULL,
  item TEXT,
  amount_local DECIMAL,
  currency TEXT,
  amount_usd DECIMAL,
  source TEXT,
  data_date TIMESTAMP,
  last_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE property_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  neighborhood TEXT,
  property_type TEXT,
  transaction_type TEXT,
  price_local DECIMAL,
  currency TEXT,
  price_usd DECIMAL,
  price_per_sqm_usd DECIMAL,
  area_sqm DECIMAL,
  bedrooms INTEGER,
  source TEXT,
  source_url TEXT,
  listing_date TIMESTAMP,
  scraped_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE exchange_rates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  base_currency TEXT DEFAULT 'USD',
  target_currency TEXT NOT NULL,
  rate DECIMAL NOT NULL,
  source TEXT
);

CREATE TABLE climate_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  month INTEGER,
  avg_temp_high DECIMAL,
  avg_temp_low DECIMAL,
  avg_rainfall_mm DECIMAL,
  avg_humidity DECIMAL,
  source TEXT,
  last_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE safety_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  city TEXT,
  safety_index DECIMAL,
  crime_index DECIMAL,
  travel_advisory_level TEXT,
  advisory_source TEXT,
  advisory_text TEXT,
  last_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE community_intel (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source TEXT NOT NULL,
  country TEXT,
  city TEXT,
  topic TEXT,
  content_summary TEXT,
  sentiment TEXT,
  original_url TEXT,
  scraped_date TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- BUREAUCRACY DATA (Future: Burocracia.ai)
-- ============================================

CREATE TABLE bureaucracy_processes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  entity TEXT,
  process_name TEXT NOT NULL,
  process_description TEXT,
  required_documents JSONB,
  official_timeline TEXT,
  real_timeline TEXT,
  cost_estimate JSONB,
  tips TEXT,
  pain_points TEXT,
  source TEXT,
  last_updated TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- EXPERT KNOWLEDGE (Gregory's input)
-- ============================================

CREATE TABLE expert_knowledge (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL,
  country TEXT,
  city TEXT,
  topic TEXT NOT NULL,
  content TEXT NOT NULL,
  is_personal_experience BOOLEAN DEFAULT FALSE,
  date_of_experience DATE,
  last_updated TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- ANALYTICS & PATTERNS
-- ============================================

CREATE TABLE data_source_registry (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  source_type TEXT,
  data_category TEXT,
  country TEXT,
  city TEXT,
  scrape_frequency TEXT,
  last_scraped TIMESTAMP,
  last_success BOOLEAN,
  notes TEXT
);

CREATE TABLE expansion_suggestions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  suggested_date TIMESTAMP DEFAULT NOW(),
  suggested_country TEXT,
  suggested_city TEXT,
  reason TEXT,
  user_demand_count INTEGER DEFAULT 1,
  status TEXT DEFAULT 'pending',
  reviewed_by TEXT,
  reviewed_date TIMESTAMP
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_questionnaire_user ON questionnaire_responses(user_id);
CREATE INDEX idx_reports_user ON reports(user_id);
CREATE INDEX idx_visa_country ON visa_data(country);
CREATE INDEX idx_col_country_city ON cost_of_living(country, city);
CREATE INDEX idx_property_country_city ON property_data(country, city);
CREATE INDEX idx_exchange_date ON exchange_rates(date);
CREATE INDEX idx_climate_country_city ON climate_data(country, city);
CREATE INDEX idx_safety_country ON safety_data(country);
CREATE INDEX idx_community_country ON community_intel(country);
CREATE INDEX idx_expansion_status ON expansion_suggestions(status);
