-- Run these commands in Supabase Dashboard > SQL Editor to create the required tables

-- Analytics Events Table
CREATE TABLE analytics_events (
  id BIGSERIAL PRIMARY KEY,
  event_type TEXT NOT NULL,
  properties JSONB DEFAULT '{}',
  session_id TEXT NOT NULL,
  user_id TEXT,
  url TEXT,
  referrer TEXT,
  user_agent TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_analytics_events_event_type ON analytics_events (event_type);
CREATE INDEX idx_analytics_events_session_id ON analytics_events (session_id);
CREATE INDEX idx_analytics_events_timestamp ON analytics_events (timestamp);
CREATE INDEX idx_analytics_events_user_id ON analytics_events (user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_analytics_country_interest ON analytics_events USING GIN (properties) WHERE event_type = 'country_interest';

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow analytics inserts" ON analytics_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin analytics reads" ON analytics_events FOR SELECT USING (true);
GRANT INSERT ON analytics_events TO anon, authenticated;
GRANT SELECT ON analytics_events TO authenticated;

-- Data Verification Tables
CREATE TABLE country_data_verification (
  id BIGSERIAL PRIMARY KEY,
  country TEXT NOT NULL,
  country_code TEXT NOT NULL,
  confidence_score INTEGER NOT NULL CHECK (confidence_score >= 0 AND confidence_score <= 100),
  sources JSONB NOT NULL DEFAULT '[]',
  verified_data JSONB NOT NULL DEFAULT '{}',
  quality_report JSONB DEFAULT '{}',
  last_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(country)
);

CREATE TABLE data_verification_results (
  id BIGSERIAL PRIMARY KEY,
  country TEXT NOT NULL,
  field_name TEXT NOT NULL,
  current_value JSONB,
  new_value JSONB,
  source_name TEXT NOT NULL,
  confidence_score INTEGER NOT NULL CHECK (confidence_score >= 0 AND confidence_score <= 100),
  has_conflict BOOLEAN DEFAULT FALSE,
  requires_human_review BOOLEAN DEFAULT FALSE,
  evidence JSONB DEFAULT '[]',
  verification_run_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE data_sources (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  source_type TEXT NOT NULL CHECK (source_type IN ('government_api', 'legal_firm', 'real_time_monitoring', 'manual_research')),
  base_url TEXT,
  reliability_score INTEGER NOT NULL CHECK (reliability_score >= 0 AND reliability_score <= 100),
  cost_per_month DECIMAL(10,2) DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'error')),
  last_checked TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE data_review_queue (
  id BIGSERIAL PRIMARY KEY,
  country TEXT NOT NULL,
  field_name TEXT NOT NULL,
  verification_result_id BIGINT REFERENCES data_verification_results(id),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  assigned_to TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected')),
  reviewer_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

-- Create indexes
CREATE INDEX idx_country_data_verification_country ON country_data_verification (country);
CREATE INDEX idx_country_data_verification_updated ON country_data_verification (last_updated);
CREATE INDEX idx_country_data_verification_confidence ON country_data_verification (confidence_score);

CREATE INDEX idx_data_verification_results_country ON data_verification_results (country);
CREATE INDEX idx_data_verification_results_field ON data_verification_results (field_name);
CREATE INDEX idx_data_verification_results_conflict ON data_verification_results (has_conflict);
CREATE INDEX idx_data_verification_results_review ON data_verification_results (requires_human_review);

CREATE INDEX idx_data_sources_country ON data_sources (country);
CREATE INDEX idx_data_sources_type ON data_sources (source_type);
CREATE INDEX idx_data_sources_status ON data_sources (status);

CREATE INDEX idx_data_review_queue_status ON data_review_queue (status);
CREATE INDEX idx_data_review_queue_priority ON data_review_queue (priority);
CREATE INDEX idx_data_review_queue_country ON data_review_queue (country);

-- Enable RLS
ALTER TABLE country_data_verification ENABLE ROW LEVEL SECURITY;
ALTER TABLE data_verification_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE data_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE data_review_queue ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow all operations on country_data_verification" ON country_data_verification FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_verification_results" ON data_verification_results FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_sources" ON data_sources FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_review_queue" ON data_review_queue FOR ALL USING (true);

-- Grant permissions
GRANT ALL ON country_data_verification TO authenticated, anon;
GRANT ALL ON data_verification_results TO authenticated, anon;
GRANT ALL ON data_sources TO authenticated, anon;
GRANT ALL ON data_review_queue TO authenticated, anon;

-- Insert initial data sources
INSERT INTO data_sources VALUES
('dnm_argentina', 'Dirección Nacional de Migraciones', 'Argentina', 'government_api', 'https://www.migraciones.gov.ar', 95, 0, 'active', NOW(), NULL, NOW(), NOW()),
('afip_argentina', 'AFIP (Tax Authority)', 'Argentina', 'government_api', 'https://www.afip.gob.ar', 98, 0, 'active', NOW(), NULL, NOW(), NOW()),
('bcra_argentina', 'Banco Central República Argentina', 'Argentina', 'government_api', 'https://www.bcra.gob.ar', 97, 0, 'active', NOW(), NULL, NOW(), NOW()),
('receita_federal', 'Receita Federal do Brasil', 'Brazil', 'government_api', 'https://www.gov.br/receitafederal', 95, 0, 'active', NULL, NULL, NOW(), NOW()),
('pf_brazil', 'Polícia Federal - Immigration', 'Brazil', 'government_api', 'https://www.gov.br/pf', 90, 0, 'active', NULL, NULL, NOW(), NOW()),
('dnm_uruguay', 'Dirección Nacional de Migración', 'Uruguay', 'government_api', 'https://migracion.minterior.gub.uy', 85, 0, 'active', NULL, NULL, NOW(), NOW()),
('dgi_uruguay', 'Dirección General Impositiva', 'Uruguay', 'government_api', 'https://www.dgi.gub.uy', 90, 0, 'active', NULL, NULL, NOW(), NOW());