-- Add language support to users and reports tables
-- Migration 007: Language Support

-- Add preferred_language to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS preferred_language VARCHAR(2) DEFAULT 'en';

-- Add report_language to reports table  
ALTER TABLE reports ADD COLUMN IF NOT EXISTS report_language VARCHAR(2) DEFAULT 'en';

-- Create email_templates table for multi-language email sequences
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_key VARCHAR(50) NOT NULL,
  language VARCHAR(2) NOT NULL,
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(template_key, language)
);

-- Create index for faster email template lookups
CREATE INDEX IF NOT EXISTS idx_email_templates_lookup ON email_templates(template_key, language);

-- Add language preference to scheduled_emails for tracking
ALTER TABLE scheduled_emails ADD COLUMN IF NOT EXISTS language VARCHAR(2) DEFAULT 'en';

-- Update RLS policies for email_templates (admin only for now)
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "email_templates_read" ON email_templates
  FOR SELECT USING (true); -- Allow reading templates

CREATE POLICY "email_templates_admin" ON email_templates
  FOR ALL USING (false); -- Restrict writes (will be handled by service role)

-- Add language filter to reports for analytics
CREATE INDEX IF NOT EXISTS idx_reports_language ON reports(report_language);
CREATE INDEX IF NOT EXISTS idx_users_language ON users(preferred_language);