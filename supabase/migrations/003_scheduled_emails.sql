-- Post-purchase email sequence table
CREATE TABLE IF NOT EXISTS scheduled_emails (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  report_id uuid NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  email_index integer NOT NULL,
  subject text NOT NULL,
  day_offset integer NOT NULL DEFAULT 0,
  scheduled_at timestamptz NOT NULL,
  sent boolean NOT NULL DEFAULT false,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Index for cron query: unsent emails due now
CREATE INDEX idx_scheduled_emails_pending ON scheduled_emails (sent, scheduled_at) WHERE sent = false;

-- Index for user lookup
CREATE INDEX idx_scheduled_emails_user ON scheduled_emails (user_id);

-- Add first_name to users (used in email personalization)
ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name text;

-- RLS: service role only (server-side access)
ALTER TABLE scheduled_emails ENABLE ROW LEVEL SECURITY;
