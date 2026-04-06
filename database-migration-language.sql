-- Add language column to users table for French localization support
-- Run this in Supabase SQL Editor

-- Add language column if it doesn't exist
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS language VARCHAR(5) DEFAULT 'en';

-- Create index for language queries
CREATE INDEX IF NOT EXISTS idx_users_language ON users(language);

-- Update existing French users based on email domain
UPDATE users 
SET language = 'fr' 
WHERE language = 'en' 
AND (
  email LIKE '%.fr'
  OR email LIKE '%.be' 
  OR email LIKE '%.ca'
  OR email LIKE '%.mc'
  OR email LIKE '%.lu'
  OR email LIKE '%.nc'
  OR email LIKE '%.pf'
  OR email LIKE '%.gp'
  OR email LIKE '%.mq'
  OR email LIKE '%.gf'
  OR email LIKE '%.re'
  OR email LIKE '%.yt'
);

-- Check how many French users were detected
SELECT language, COUNT(*) as user_count 
FROM users 
GROUP BY language 
ORDER BY user_count DESC;