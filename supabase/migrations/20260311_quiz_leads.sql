-- Quiz leads table for email drip campaigns
-- Created for Brief 5: Email Capture
CREATE TABLE IF NOT EXISTS quiz_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  quiz_answers JSONB DEFAULT '{}',
  top_matches TEXT[] DEFAULT '{}',
  converted_to_paid BOOLEAN DEFAULT FALSE,
  drip_day1_sent BOOLEAN DEFAULT FALSE,
  drip_day3_sent BOOLEAN DEFAULT FALSE,
  drip_day7_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for email lookups and drip scheduling
CREATE INDEX IF NOT EXISTS idx_quiz_leads_email ON quiz_leads(email);
CREATE INDEX IF NOT EXISTS idx_quiz_leads_created ON quiz_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_quiz_leads_unconverted ON quiz_leads(converted_to_paid) WHERE converted_to_paid = FALSE;
