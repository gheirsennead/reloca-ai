-- Scheduled emails table for post-purchase email sequences
CREATE TABLE IF NOT EXISTS scheduled_emails (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  report_id TEXT,
  email_index INTEGER NOT NULL DEFAULT 0,
  subject TEXT NOT NULL,
  day_offset INTEGER NOT NULL DEFAULT 0,
  scheduled_at TIMESTAMPTZ NOT NULL,
  sent BOOLEAN NOT NULL DEFAULT false,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for cron job to find unsent due emails quickly
CREATE INDEX idx_scheduled_emails_due ON scheduled_emails (sent, scheduled_at) WHERE sent = false;
CREATE INDEX idx_scheduled_emails_user ON scheduled_emails (user_id);

-- Enable RLS
ALTER TABLE scheduled_emails ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
CREATE POLICY "Service role full access" ON scheduled_emails
  FOR ALL USING (true) WITH CHECK (true);

-- Now schedule the 5 emails for the Swedish client (whedonum@gmail.com)
-- User ID: e8d26669-b95f-4c90-b101-71dcd54e6d4f
-- Payment date: 2026-02-17T19:11:29
INSERT INTO scheduled_emails (user_id, report_id, email_index, subject, day_offset, scheduled_at, sent)
SELECT 
  'e8d26669-b95f-4c90-b101-71dcd54e6d4f',
  r.id,
  e.idx,
  e.subject,
  e.day_offset,
  '2026-02-17T19:11:29Z'::timestamptz + (e.day_offset || ' days')::interval,
  false
FROM (VALUES
  (0, 'Your LATAM Relocation Report is Ready 🎉', 0),
  (1, '3 things most people miss when planning a LATAM move', 3),
  (2, 'Want a guide who''s actually done it?', 5),
  (3, 'Families are making their move', 9),
  (4, 'Your report is 2 weeks old — things have changed', 14)
) AS e(idx, subject, day_offset)
CROSS JOIN (
  SELECT id FROM reports WHERE user_id = 'e8d26669-b95f-4c90-b101-71dcd54e6d4f' LIMIT 1
) r;
