-- Testimonials table for collecting and displaying customer reviews
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  country_from TEXT,
  country_to TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  source TEXT DEFAULT 'manual', -- 'manual', 'email', 'form'
  report_id UUID REFERENCES reports(id),
  email TEXT,
  approved BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  approved_at TIMESTAMPTZ,
  approved_by TEXT
);

-- Index for fetching approved testimonials quickly
CREATE INDEX idx_testimonials_approved ON testimonials(approved, featured, created_at DESC);

-- RLS policies
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved testimonials (public display)
CREATE POLICY "Public can read approved testimonials"
  ON testimonials FOR SELECT
  USING (approved = true);

-- Service role can do everything (admin operations)
CREATE POLICY "Service role full access"
  ON testimonials FOR ALL
  USING (true)
  WITH CHECK (true);
