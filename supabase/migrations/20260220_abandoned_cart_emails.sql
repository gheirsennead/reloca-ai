-- Migration 20260220: Add abandoned cart email sequence support
-- Add sequence_type column to distinguish between post_purchase and abandoned_cart emails

-- Add sequence_type column to scheduled_emails
ALTER TABLE scheduled_emails 
ADD COLUMN sequence_type VARCHAR(20) NOT NULL DEFAULT 'post_purchase'
CHECK (sequence_type IN ('post_purchase', 'abandoned_cart'));

-- Create index for efficient querying by sequence type
CREATE INDEX idx_scheduled_emails_sequence_type ON scheduled_emails (sequence_type, sent, scheduled_at);

-- Update existing records to be 'post_purchase' (they already are by default)
UPDATE scheduled_emails SET sequence_type = 'post_purchase' WHERE sequence_type = 'post_purchase';

-- Comments for clarity
COMMENT ON COLUMN scheduled_emails.sequence_type IS 'Type of email sequence: post_purchase (after payment) or abandoned_cart (after quiz but no purchase)';