-- Migration 009: Add Coupon System
-- Creates coupon/discount code functionality

CREATE TABLE IF NOT EXISTS coupons (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(50) UNIQUE NOT NULL,
  description       TEXT,

  -- Discount type: 'percent' or 'fixed'
  type              VARCHAR(10) NOT NULL DEFAULT 'percent'
                    CHECK (type IN ('percent', 'fixed')),
  discount_percent  DECIMAL(5,2) DEFAULT 0
                    CHECK (discount_percent >= 0 AND discount_percent <= 100),
  discount_amount   DECIMAL(10,2) DEFAULT 0
                    CHECK (discount_amount >= 0),

  -- Usage limits
  max_uses          INT,                    -- NULL = unlimited
  used_count        INT NOT NULL DEFAULT 0,
  max_uses_per_user INT DEFAULT 1,          -- per customer

  -- Minimum order amount
  min_order_amount  DECIMAL(10,2) DEFAULT 0,

  -- Partner attribution (nullable — admin coupons have no partner)
  partner_id        UUID REFERENCES referral_codes(id) ON DELETE SET NULL,

  -- Validity
  starts_at         TIMESTAMPTZ DEFAULT now(),
  expires_at        TIMESTAMPTZ,            -- NULL = never expires
  active            BOOLEAN NOT NULL DEFAULT true,

  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons (code);
CREATE INDEX IF NOT EXISTS idx_coupons_partner ON coupons (partner_id);
CREATE INDEX IF NOT EXISTS idx_coupons_active ON coupons (active, expires_at);

-- Track per-user usage
CREATE TABLE IF NOT EXISTS coupon_uses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coupon_id     UUID NOT NULL REFERENCES coupons(id) ON DELETE CASCADE,
  customer_email VARCHAR(255) NOT NULL,
  order_id      VARCHAR(100) NOT NULL,
  discount_applied DECIMAL(10,2) NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_coupon_uses_coupon ON coupon_uses (coupon_id);
CREATE INDEX IF NOT EXISTS idx_coupon_uses_customer ON coupon_uses (customer_email);

-- ─── RLS Policies ────────────────────────────────
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupon_uses ENABLE ROW LEVEL SECURITY;

-- Allow reading active coupons (for validation)
CREATE POLICY "Allow read active coupons" ON coupons FOR SELECT USING (active = true);

-- Service role has full access
CREATE POLICY "Service role full access coupons" ON coupons FOR ALL USING (false);
CREATE POLICY "Service role full access coupon_uses" ON coupon_uses FOR ALL USING (false);

-- ─── Insert Some Initial Free Coupons ────────────
INSERT INTO coupons (code, description, type, discount_percent, max_uses, active) VALUES
  ('WELCOME50', '50% off for new users', 'percent', 50.00, 1000, true),
  ('FREE100', '100% off - completely free', 'percent', 100.00, 100, true),
  ('SAVE25', '25% off your first report', 'percent', 25.00, 500, true)
ON CONFLICT (code) DO NOTHING;