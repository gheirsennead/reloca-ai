-- Feedback table for post-report surveys
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  report_id UUID NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  can_publish BOOLEAN DEFAULT false,
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  
  -- For homepage display
  is_featured BOOLEAN DEFAULT false
);

-- Index for homepage query (published, high-rated feedback)
CREATE INDEX idx_feedback_featured ON feedback (can_publish, rating DESC) WHERE can_publish = true AND rating >= 4;

-- Index for report lookup
CREATE INDEX idx_feedback_report ON feedback (report_id);

-- RLS
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from report page)
CREATE POLICY "Allow anonymous feedback inserts" ON feedback
  FOR INSERT WITH CHECK (true);

-- Allow reading published feedback (for homepage)
CREATE POLICY "Allow reading published feedback" ON feedback
  FOR SELECT USING (can_publish = true AND rating >= 4);
