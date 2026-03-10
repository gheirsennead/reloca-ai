-- Create data verification tables for country information accuracy system

-- Main table for storing verified country data
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

-- Table for tracking individual verification results and conflicts
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

-- Table for tracking data sources and their reliability
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

-- Table for human review queue
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

-- Create indexes for performance
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

-- Create policies (allow all for now - can be restricted later)
CREATE POLICY "Allow all operations on country_data_verification" ON country_data_verification FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_verification_results" ON data_verification_results FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_sources" ON data_sources FOR ALL USING (true);
CREATE POLICY "Allow all operations on data_review_queue" ON data_review_queue FOR ALL USING (true);

-- Grant permissions
GRANT ALL ON country_data_verification TO authenticated, anon;
GRANT ALL ON data_verification_results TO authenticated, anon;
GRANT ALL ON data_sources TO authenticated, anon;
GRANT ALL ON data_review_queue TO authenticated, anon;

-- Insert initial data sources for priority countries
INSERT INTO data_sources VALUES
-- Argentina
('dnm_argentina', 'Dirección Nacional de Migraciones', 'Argentina', 'government_api', 'https://www.migraciones.gov.ar', 95, 0, 'active', NOW(), NULL, NOW(), NOW()),
('afip_argentina', 'AFIP (Tax Authority)', 'Argentina', 'government_api', 'https://www.afip.gob.ar', 98, 0, 'active', NOW(), NULL, NOW(), NOW()),
('bcra_argentina', 'Banco Central República Argentina', 'Argentina', 'government_api', 'https://www.bcra.gob.ar', 97, 0, 'active', NOW(), NULL, NOW(), NOW()),

-- Brazil (placeholder - to be implemented)
('receita_federal', 'Receita Federal do Brasil', 'Brazil', 'government_api', 'https://www.gov.br/receitafederal', 95, 0, 'active', NULL, NULL, NOW(), NOW()),
('pf_brazil', 'Polícia Federal - Immigration', 'Brazil', 'government_api', 'https://www.gov.br/pf', 90, 0, 'active', NULL, NULL, NOW(), NOW()),

-- Uruguay (placeholder)
('dnm_uruguay', 'Dirección Nacional de Migración', 'Uruguay', 'government_api', 'https://migracion.minterior.gub.uy', 85, 0, 'active', NULL, NULL, NOW(), NOW()),
('dgi_uruguay', 'Dirección General Impositiva', 'Uruguay', 'government_api', 'https://www.dgi.gub.uy', 90, 0, 'active', NULL, NULL, NOW(), NOW());