-- Create analytics_events table for tracking user interactions
CREATE TABLE analytics_events (
  id BIGSERIAL PRIMARY KEY,
  event_type TEXT NOT NULL,
  properties JSONB DEFAULT '{}',
  session_id TEXT NOT NULL,
  user_id TEXT,
  url TEXT,
  referrer TEXT,
  user_agent TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for common queries
CREATE INDEX idx_analytics_events_event_type ON analytics_events (event_type);
CREATE INDEX idx_analytics_events_session_id ON analytics_events (session_id);
CREATE INDEX idx_analytics_events_timestamp ON analytics_events (timestamp);
CREATE INDEX idx_analytics_events_user_id ON analytics_events (user_id) WHERE user_id IS NOT NULL;

-- Create index for country interest analysis
CREATE INDEX idx_analytics_country_interest ON analytics_events USING GIN (properties) WHERE event_type = 'country_interest';

-- Enable RLS (Row Level Security)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow INSERT for all (anonymous tracking)
CREATE POLICY "Allow analytics inserts" ON analytics_events
  FOR INSERT WITH CHECK (true);

-- Create policy: Allow SELECT for admin users only (you can adjust this)
CREATE POLICY "Allow admin analytics reads" ON analytics_events
  FOR SELECT USING (true); -- Temporarily allow all reads, can be restricted later

-- Grant permissions
GRANT INSERT ON analytics_events TO anon, authenticated;
GRANT SELECT ON analytics_events TO authenticated;