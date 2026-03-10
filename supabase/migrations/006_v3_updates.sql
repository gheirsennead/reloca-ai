-- ============================================
-- V3 UPDATES: Subscriptions, Pulse, User fields
-- ============================================

-- Add missing subscription/expansion fields to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_plan TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS target_countries TEXT[];

-- ============================================
-- SUBSCRIPTIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  stripe_subscription_id TEXT UNIQUE,
  plan TEXT NOT NULL DEFAULT 'reloca_pro',
  status TEXT NOT NULL DEFAULT 'active',
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  reports_used_this_period INTEGER DEFAULT 0,
  reports_limit INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  cancelled_at TIMESTAMP
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access on subscriptions" ON subscriptions FOR ALL USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);

-- ============================================
-- RELOCATION PULSE (Monthly Intelligence)
-- ============================================
CREATE TABLE IF NOT EXISTS relocation_pulse (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  detail TEXT,
  source_url TEXT,
  impact_level TEXT,
  effective_date DATE,
  detected_date TIMESTAMP DEFAULT NOW(),
  published_in_pulse DATE,
  last_updated TIMESTAMP DEFAULT NOW()
);

ALTER TABLE relocation_pulse ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access on relocation_pulse" ON relocation_pulse FOR ALL USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_pulse_country ON relocation_pulse(country);
CREATE INDEX IF NOT EXISTS idx_pulse_published ON relocation_pulse(published_in_pulse);

-- ============================================
-- PULSE DELIVERIES
-- ============================================
CREATE TABLE IF NOT EXISTS pulse_deliveries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  pulse_month DATE NOT NULL,
  countries_included TEXT[],
  content TEXT,
  delivered_at TIMESTAMP,
  opened BOOLEAN DEFAULT FALSE
);

ALTER TABLE pulse_deliveries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access on pulse_deliveries" ON pulse_deliveries FOR ALL USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_pulse_deliveries_user ON pulse_deliveries(user_id);
