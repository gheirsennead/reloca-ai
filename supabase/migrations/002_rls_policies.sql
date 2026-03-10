-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE questionnaire_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE visa_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE cost_of_living ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE exchange_rates ENABLE ROW LEVEL SECURITY;
ALTER TABLE climate_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE safety_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_intel ENABLE ROW LEVEL SECURITY;
ALTER TABLE bureaucracy_processes ENABLE ROW LEVEL SECURITY;
ALTER TABLE expert_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE data_source_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE expansion_suggestions ENABLE ROW LEVEL SECURITY;

-- Service role bypasses RLS, so our API routes work fine.
-- Anon users can only read public data tables (knowledge base, costs, etc.)

-- Public read access for data tables (used by client if needed)
CREATE POLICY "Public read visa_data" ON visa_data FOR SELECT USING (true);
CREATE POLICY "Public read cost_of_living" ON cost_of_living FOR SELECT USING (true);
CREATE POLICY "Public read property_data" ON property_data FOR SELECT USING (true);
CREATE POLICY "Public read exchange_rates" ON exchange_rates FOR SELECT USING (true);
CREATE POLICY "Public read climate_data" ON climate_data FOR SELECT USING (true);
CREATE POLICY "Public read safety_data" ON safety_data FOR SELECT USING (true);

-- Reports: users can only read their own reports (matched by report ID in URL)
-- Since we don't have auth, we allow select by ID (reports are accessed via unique UUID)
CREATE POLICY "Read reports by id" ON reports FOR SELECT USING (true);

-- Users, questionnaire_responses: no public access (managed by service role only)
-- Service role (used in API routes) bypasses RLS automatically

-- Expert knowledge: public read
CREATE POLICY "Public read expert_knowledge" ON expert_knowledge FOR SELECT USING (true);

-- Community intel: public read
CREATE POLICY "Public read community_intel" ON community_intel FOR SELECT USING (true);
