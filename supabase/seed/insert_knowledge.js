#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = "https://eieefabmmksorjvmsyfd.supabase.co";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZWVmYWJtbWtzb3Jqdm1zeWZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDczNDE4NSwiZXhwIjoyMDg2MzEwMTg1fQ.d9N--XiKWpqPS0A72kll9fu-SjWd-zV7xvUfvJ5vy2I";

const SECTIONS = [
  [1, 10, "Brazil - Visa & Residency", "Brazil"],
  [11, 21, "Brazil - Cost of Living", "Brazil"],
  [22, 30, "Brazil - Property & Real Estate", "Brazil"],
  [31, 37, "Brazil - Bureaucracy", "Brazil"],
  [38, 50, "Brazil - Lifestyle", "Brazil"],
  [51, 57, "Argentina", "Argentina"],
  [58, 64, "Paraguay", "Paraguay"],
  [65, 68, "Uruguay", "Uruguay"],
  [69, 80, "Personal Journey", null],
  [81, 86, "Financial", null],
];

const CITY_MAP = {
  11: "Fortaleza", 12: "Guaramiranga", 14: "Guaramiranga",
  21: "Fortaleza", 27: "Fortaleza", 42: "Fortaleza",
  47: "Fortaleza", 52: "Bariloche", 53: "Bariloche", 54: "Bariloche",
  63: "Asunción", 65: "Punta del Este", 67: "Punta del Este",
  70: "Fortaleza", 71: "Guaramiranga",
};

const TOPICS = {
  1: "Visa types with personal experience",
  2: "Real visa processing times",
  3: "Required documents and surprises",
  4: "Visa process costs",
  5: "Timeline from decision to legal residency",
  6: "CPF processing time and issues",
  7: "Bank account for foreigners",
  8: "Driver's license conversion",
  9: "Path to permanent residency",
  10: "Path to citizenship",
  11: "Monthly rent in Fortaleza",
  12: "Monthly rent in Guaramiranga",
  13: "Grocery budget for family of 4",
  14: "Monthly utilities costs",
  15: "Health insurance options",
  16: "Transportation costs",
  17: "Dining out costs",
  18: "Domestic help costs",
  19: "Condomínio fees",
  20: "Phone and mobile plans",
  21: "Total monthly cost for family of 4",
  22: "Property buying process step by step",
  23: "Property transaction timeline",
  24: "Buyer taxes and fees",
  25: "Foreigners buying property",
  26: "Financing options for foreigners",
  27: "Property price ranges by area",
  28: "Pitfalls for property buyers",
  29: "What is a despachante",
  30: "CRECI and buyer protection",
  31: "SEMACE environmental agency",
  32: "Prefeitura permits",
  33: "Junta Comercial company formation",
  34: "Cartório system explained",
  35: "Worst bureaucracy experience",
  36: "Best bureaucracy hack or shortcut",
  37: "Receita Federal issues for foreigners",
  38: "School options",
  39: "Private and international school costs",
  40: "Healthcare quality and costs",
  41: "Safety honest assessment",
  42: "Internet quality",
  43: "Culture shock",
  44: "Social life",
  45: "Language barrier",
  46: "Food quality",
  47: "Climate and seasons",
  48: "What I love about Brazil",
  49: "What I dislike about Brazil",
  50: "What I would do differently",
  51: "Argentina residency process started",
  52: "Bariloche overview",
  53: "Property buying in Argentina",
  54: "Cost of living Bariloche vs Fortaleza",
  55: "Argentina visa and residency options",
  56: "Argentine peso situation for foreigners",
  57: "Blue dollar vs official rate",
  58: "Paraguay residency process",
  59: "Finding an attorney in Paraguay",
  60: "Paraguay territorial tax system",
  61: "Paraguay fiscal residence in practice",
  62: "Banking in Paraguay",
  63: "Cost of living in Asunción",
  64: "Paraguay lifestyle assessment",
  65: "Maldonado and Punta del Este knowledge",
  66: "Uruguay residency process",
  67: "Uruguay property market",
  68: "Uruguay vs Paraguay tax comparison",
  69: "Why I left Europe",
  70: "Why Brazil specifically",
  71: "Why Guaramiranga",
  72: "Biggest challenges when relocating",
  73: "Best decision made",
  74: "Biggest lesson learned",
  75: "How kids adjusted",
  76: "Advice for family with young kids",
  77: "Advice for family with teens",
  78: "Advice for single person",
  79: "Advice for retiree",
  80: "Most underestimated thing about LATAM",
  81: "Moving money internationally",
  82: "Receiving foreign income in Brazil",
  83: "Cross-border taxation obligations",
  84: "Paraguay fiscal residence tax implications",
  85: "Insurance options",
  86: "Minimum capital to relocate a family",
};

function getCategoryCountry(qnum) {
  for (const [start, end, cat, country] of SECTIONS) {
    if (qnum >= start && qnum <= end) return { category: cat, country };
  }
  return { category: "Other", country: null };
}

function parseKnowledgeBase(filepath) {
  const text = fs.readFileSync(filepath, 'utf8');
  
  // Match Q patterns - each Q starts with **Q{num}. and content goes until next **Q or --- or end
  const pattern = /\*\*Q(\d+)\.\s*(.*?)\*\*\n([\s\S]*?)(?=\*\*Q\d+\.|---\n|$)/g;
  const records = [];
  let match;
  
  while ((match = pattern.exec(text)) !== null) {
    const qnum = parseInt(match[1]);
    let content = match[3].trim();
    
    // Clean markdown
    const hasGregory = content.includes('🟢');
    content = content.replace(/🟢\s*/g, 'Gregory: ').replace(/🔵\s*/g, 'Atlas: ');
    content = content.replace(/\*\*([^*]+)\*\*/g, '$1');
    content = content.replace(/🟢/g, 'Gregory:').replace(/🔵/g, 'Atlas:');
    
    const { category, country } = getCategoryCountry(qnum);
    
    records.push({
      category,
      country: country || null,
      city: CITY_MAP[qnum] || null,
      topic: TOPICS[qnum] || `Q${qnum}`,
      content,
      is_personal_experience: hasGregory,
    });
  }
  
  return records;
}

async function insertBatch(records) {
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/expert_knowledge`, {
    method: 'POST',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(records),
  });
  return resp;
}

async function getCount() {
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/expert_knowledge?select=id`, {
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Prefer': 'count=exact',
      'Range-Unit': 'items',
      'Range': '0-0',
    },
  });
  return resp.headers.get('content-range');
}

async function main() {
  const filepath = "/Users/gsmac/.openclaw/workspace-strategic-advisor/KNOWLEDGE_BASE_86.md";
  const records = parseKnowledgeBase(filepath);
  console.log(`Parsed ${records.length} records`);
  
  // Save JSON
  const outpath = "/Users/gsmac/.openclaw/workspace-developer/projects/reloca-ai/supabase/seed/knowledge_base.json";
  fs.writeFileSync(outpath, JSON.stringify(records, null, 2));
  console.log(`Saved to ${outpath}`);
  
  // Insert in batches
  const batchSize = 15;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    const resp = await insertBatch(batch);
    console.log(`Batch ${Math.floor(i/batchSize)+1} (${batch.length} records): ${resp.status}`);
    if (resp.status !== 201) {
      const text = await resp.text();
      console.log(`  Error: ${text}`);
    }
  }
  
  // Verify
  const count = await getCount();
  console.log(`Final count: ${count}`);
}

main().catch(console.error);
