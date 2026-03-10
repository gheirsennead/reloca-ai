-- ============================================
-- AUTH & SUBSCRIPTIONS
-- Links Supabase Auth users to our users table
-- and adds subscription tracking for Reloca Pro
-- ============================================

-- Add auth and subscription columns to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS supabase_auth_id UUID;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_status TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_id TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_start TIMESTAMP;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_end TIMESTAMP;

-- Index for fast auth lookups
CREATE INDEX IF NOT EXISTS idx_users_supabase_auth_id ON users(supabase_auth_id);
