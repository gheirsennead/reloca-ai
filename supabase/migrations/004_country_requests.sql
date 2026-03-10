CREATE TABLE IF NOT EXISTS country_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  email TEXT,
  country TEXT NOT NULL,
  city TEXT,
  interest_reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE country_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access" ON country_requests FOR ALL USING (true) WITH CHECK (true);
