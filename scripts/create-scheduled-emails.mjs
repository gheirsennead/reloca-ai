// Run this once to create the scheduled_emails table
// Usage: node scripts/create-scheduled-emails.mjs

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Since we can't run raw SQL via PostgREST, we'll create a temporary function
// Actually, let's try the Supabase Management API with a personal access token

// Alternative approach: just check if table exists and guide the user
async function main() {
  const { error } = await supabase.from('scheduled_emails').select('id').limit(1);
  
  if (error?.code === 'PGRST205') {
    console.log('Table "scheduled_emails" does not exist.');
    console.log('\nPlease run this SQL in Supabase Dashboard (SQL Editor):');
    console.log('https://supabase.com/dashboard/project/eieefabmmksorjvmsyfd/sql/new\n');
    console.log(`
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

CREATE INDEX idx_scheduled_emails_pending ON scheduled_emails (sent, scheduled_at) WHERE sent = false;
CREATE INDEX idx_scheduled_emails_user ON scheduled_emails (user_id);
ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name text;
ALTER TABLE scheduled_emails ENABLE ROW LEVEL SECURITY;
`);
  } else {
    console.log('Table "scheduled_emails" already exists! ✅');
  }
}

main();
