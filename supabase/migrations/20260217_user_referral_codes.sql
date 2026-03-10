-- User referral codes table
CREATE TABLE user_referral_codes (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  referral_code TEXT NOT NULL UNIQUE,
  total_clicks INTEGER DEFAULT 0,
  total_conversions INTEGER DEFAULT 0,
  total_earnings DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_user_referral_codes_email ON user_referral_codes (email);
CREATE INDEX idx_user_referral_codes_code ON user_referral_codes (referral_code);

-- Enable RLS
ALTER TABLE user_referral_codes ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow all operations on user_referral_codes" ON user_referral_codes FOR ALL USING (true);

-- Grant permissions
GRANT ALL ON user_referral_codes TO authenticated, anon;