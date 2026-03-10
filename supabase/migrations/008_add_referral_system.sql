-- Migration 008: Add Referral System
-- Creates referral tracking tables for affiliate/partner program

-- Enable UUID generation if not exists
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Referral Codes ──────────────────────────────
CREATE TABLE IF NOT EXISTS referral_codes (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code          VARCHAR(50) UNIQUE NOT NULL,
  owner_email   VARCHAR(255) NOT NULL,
  owner_name    VARCHAR(100),
  tier          VARCHAR(20) NOT NULL DEFAULT 'friend'
                CHECK (tier IN ('friend', 'ambassador', 'creator', 'partner')),
  commission_pct DECIMAL(5,2) NOT NULL DEFAULT 15.00,  -- percentage per conversion
  flat_bonus     DECIMAL(10,2) DEFAULT 0.00,            -- flat $ bonus per conversion
  is_active     BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referral_codes_code ON referral_codes (code);
CREATE INDEX IF NOT EXISTS idx_referral_codes_email ON referral_codes (owner_email);

-- ─── Referral Clicks ─────────────────────────────
CREATE TABLE IF NOT EXISTS referral_clicks (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_code_id UUID NOT NULL REFERENCES referral_codes(id) ON DELETE CASCADE,
  ip_hash       VARCHAR(64),          -- SHA-256 of IP (privacy-safe)
  user_agent    TEXT,
  referrer_url  TEXT,
  landing_url   TEXT,
  country       VARCHAR(2),           -- GeoIP country code
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referral_clicks_code ON referral_clicks (referral_code_id);
CREATE INDEX IF NOT EXISTS idx_referral_clicks_date ON referral_clicks (created_at);

-- ─── Referral Conversions ────────────────────────
CREATE TABLE IF NOT EXISTS referral_conversions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_code_id UUID NOT NULL REFERENCES referral_codes(id) ON DELETE CASCADE,
  customer_email  VARCHAR(255) NOT NULL,
  order_id        VARCHAR(100),
  order_amount    DECIMAL(10,2) NOT NULL,
  discount_given  DECIMAL(10,2) DEFAULT 0.00,  -- discount the customer received
  commission_earned DECIMAL(10,2) NOT NULL,     -- what the referrer earns
  status          VARCHAR(20) NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'confirmed', 'rejected', 'paid')),
  confirmed_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_conversions_code ON referral_conversions (referral_code_id);
CREATE INDEX IF NOT EXISTS idx_conversions_status ON referral_conversions (status);

-- ─── Referral Payouts ────────────────────────────
CREATE TABLE IF NOT EXISTS referral_payouts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_code_id UUID NOT NULL REFERENCES referral_codes(id) ON DELETE CASCADE,
  amount          DECIMAL(10,2) NOT NULL,
  method          VARCHAR(30) NOT NULL DEFAULT 'paypal'
                  CHECK (method IN ('paypal', 'stripe', 'bank_transfer', 'wise')),
  payout_email    VARCHAR(255),
  status          VARCHAR(20) NOT NULL DEFAULT 'requested'
                  CHECK (status IN ('requested', 'processing', 'completed', 'failed')),
  notes           TEXT,
  requested_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at    TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_payouts_code ON referral_payouts (referral_code_id);
CREATE INDEX IF NOT EXISTS idx_payouts_status ON referral_payouts (status);

-- ─── RLS Policies ────────────────────────────────
ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_payouts ENABLE ROW LEVEL SECURITY;

-- Allow reading referral codes (for validation)
CREATE POLICY "Allow read referral_codes" ON referral_codes FOR SELECT USING (true);

-- Other operations require authentication (handled by service role)
CREATE POLICY "Service role full access referral_codes" ON referral_codes FOR ALL USING (false);
CREATE POLICY "Service role full access referral_clicks" ON referral_clicks FOR ALL USING (false);
CREATE POLICY "Service role full access referral_conversions" ON referral_conversions FOR ALL USING (false);
CREATE POLICY "Service role full access referral_payouts" ON referral_payouts FOR ALL USING (false);