-- Migration 20260220: Add social share discount tracking
-- Track who shared their result and what discount they received

-- Create table to track social shares and associated discounts
CREATE TABLE IF NOT EXISTS share_discounts (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email        VARCHAR(255) NOT NULL,
  report_id         VARCHAR(255) NOT NULL,
  coupon_code       VARCHAR(50) NOT NULL,
  stripe_coupon_id  VARCHAR(100) NOT NULL,
  discount_amount   DECIMAL(10,2) NOT NULL DEFAULT 10.00,
  share_platform    VARCHAR(20) NOT NULL CHECK (share_platform IN ('twitter', 'facebook', 'linkedin', 'whatsapp', 'copy')),
  used              BOOLEAN NOT NULL DEFAULT false,
  used_at           TIMESTAMPTZ,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for efficient querying
CREATE INDEX idx_share_discounts_user_email ON share_discounts (user_email);
CREATE INDEX idx_share_discounts_report_id ON share_discounts (report_id);
CREATE INDEX idx_share_discounts_coupon_code ON share_discounts (coupon_code);
CREATE INDEX idx_share_discounts_used ON share_discounts (used);

-- Enable RLS
ALTER TABLE share_discounts ENABLE ROW LEVEL SECURITY;

-- Service role has full access
CREATE POLICY "Service role full access share_discounts" ON share_discounts FOR ALL USING (true);

-- Comments for clarity
COMMENT ON TABLE share_discounts IS 'Track social media shares and associated $10 discount codes';
COMMENT ON COLUMN share_discounts.share_platform IS 'Platform where the user shared: twitter, facebook, linkedin, whatsapp, copy';
COMMENT ON COLUMN share_discounts.stripe_coupon_id IS 'Stripe coupon ID for the generated discount code';
COMMENT ON COLUMN share_discounts.used IS 'Whether the discount code has been used in a purchase';