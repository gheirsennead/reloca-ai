/**
 * Load the 86-question Knowledge Base into expert_knowledge table
 * Run: npx tsx scripts/load-knowledge-base.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tnktrhashpjzbbnabyld.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRua3RyaGFzaHBqemJibmFieWxkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDczMTY2MCwiZXhwIjoyMDg2MzA3NjYwfQ.fMMmXkeWT59u1Qn4mvm6XKWrwNjRCFTNTu4YEsdUYA0';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// Map part titles to categories and countries
const PART_MAP: Record<string, { category: string; country?: string }> = {
  'PART 1': { category: 'visa', country: 'Brazil' },
  'PART 2': { category: 'cost_of_living', country: 'Brazil' },
  'PART 3': { category: 'property', country: 'Brazil' },
  'PART 4': { category: 'bureaucracy', country: 'Brazil' },
  'PART 5': { category: 'lifestyle', country: 'Brazil' },
  'PART 6': { category: 'general', country: 'Argentina' },
  'PART 7': { category: 'general', country: 'Paraguay' },
  'PART 8': { category: 'general', country: 'Uruguay' },
  'PART 9': { category: 'personal_journey' },
  'PART 10': { category: 'financial' },
};

interface KBEntry {
  category: string;
  country: string | null;
  city: string | null;
  topic: string;
  content: string;
  is_personal_experience: boolean;
}

function parseKnowledgeBase(text: string): KBEntry[] {
  const entries: KBEntry[] = [];
  let currentPart = 'PART 1';

  // Split by question markers
  const questionBlocks = text.split(/\n\*\*Q\d+\./);

  for (let i = 1; i < questionBlocks.length; i++) {
    const block = questionBlocks[i];

    // Check if we crossed into a new part
    const partMatch = questionBlocks.slice(0, i + 1).join('').match(/## PART (\d+)/g);
    if (partMatch) {
      const lastPart = partMatch[partMatch.length - 1];
      const partNum = lastPart.match(/PART (\d+)/);
      if (partNum) currentPart = `PART ${partNum[1]}`;
    }

    // Extract question (topic)
    const topicMatch = block.match(/^([^*]+)\*\*/);
    const topic = topicMatch ? topicMatch[1].trim() : `Question ${i}`;

    // Get the full content (Gregory's answer + Atlas enrichment)
    const content = block
      .replace(/^[^*]+\*\*\n?/, '') // Remove the question line
      .trim();

    // Determine if it has personal experience
    const hasPersonal = content.includes('🟢');

    const partInfo = PART_MAP[currentPart] || { category: 'general' };

    entries.push({
      category: partInfo.category,
      country: partInfo.country || null,
      city: null,
      topic,
      content,
      is_personal_experience: hasPersonal,
    });
  }

  return entries;
}

async function main() {
  console.log('Reading knowledge base...');
  const kbPath = '/Users/gsmac/.openclaw/workspace-strategic-advisor/KNOWLEDGE_BASE_86.md';
  const text = fs.readFileSync(kbPath, 'utf-8');

  // Simpler approach: split by Q numbers and extract properly
  const entries: KBEntry[] = [];
  const lines = text.split('\n');

  let currentPart = 'PART 1';
  let currentQuestion = '';
  let currentContent: string[] = [];
  let inQuestion = false;

  for (const line of lines) {
    // Track parts
    const partMatch = line.match(/^## PART (\d+)/);
    if (partMatch) {
      // Save previous question
      if (inQuestion && currentQuestion) {
        const partInfo = PART_MAP[currentPart] || { category: 'general' };
        entries.push({
          category: partInfo.category,
          country: partInfo.country || null,
          city: null,
          topic: currentQuestion,
          content: currentContent.join('\n').trim(),
          is_personal_experience: currentContent.some(l => l.includes('🟢')),
        });
      }
      currentPart = `PART ${partMatch[1]}`;
      currentQuestion = '';
      currentContent = [];
      inQuestion = false;
      continue;
    }

    // Track questions
    const qMatch = line.match(/^\*\*Q(\d+)\.\s*(.+?)\*\*$/);
    if (qMatch) {
      // Save previous question
      if (inQuestion && currentQuestion) {
        const partInfo = PART_MAP[currentPart] || { category: 'general' };
        entries.push({
          category: partInfo.category,
          country: partInfo.country || null,
          city: null,
          topic: currentQuestion,
          content: currentContent.join('\n').trim(),
          is_personal_experience: currentContent.some(l => l.includes('🟢')),
        });
      }
      currentQuestion = qMatch[2];
      currentContent = [];
      inQuestion = true;
      continue;
    }

    if (inQuestion) {
      currentContent.push(line);
    }
  }

  // Save last question
  if (inQuestion && currentQuestion) {
    const partInfo = PART_MAP[currentPart] || { category: 'general' };
    entries.push({
      category: partInfo.category,
      country: partInfo.country || null,
      city: null,
      topic: currentQuestion,
      content: currentContent.join('\n').trim(),
      is_personal_experience: currentContent.some(l => l.includes('🟢')),
    });
  }

  console.log(`Parsed ${entries.length} knowledge base entries`);

  // Clear existing entries
  const { error: deleteError } = await supabase.from('expert_knowledge').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (deleteError) console.warn('Delete warning:', deleteError.message);

  // Insert in batches
  const BATCH_SIZE = 20;
  let inserted = 0;
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from('expert_knowledge').insert(batch);
    if (error) {
      console.error(`Error inserting batch at ${i}:`, error.message);
    } else {
      inserted += batch.length;
      console.log(`Inserted ${inserted}/${entries.length}`);
    }
  }

  console.log(`\nDone! Loaded ${inserted} entries into expert_knowledge table.`);
}

main().catch(console.error);
