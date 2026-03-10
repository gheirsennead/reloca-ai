#!/usr/bin/env python3
"""Parse KNOWLEDGE_BASE_86.md and insert into Supabase expert_knowledge table."""
import json, re, requests

SUPABASE_URL = "https://eieefabmmksorjvmsyfd.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZWVmYWJtbWtzb3Jqdm1zeWZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDczNDE4NSwiZXhwIjoyMDg2MzEwMTg1fQ.d9N--XiKWpqPS0A72kll9fu-SjWd-zV7xvUfvJ5vy2I"

HEADERS = {
    "apikey": SERVICE_KEY,
    "Authorization": f"Bearer {SERVICE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

# Define category/country mapping for each Q range
SECTIONS = [
    (1, 10, "Brazil - Visa & Residency", "Brazil"),
    (11, 21, "Brazil - Cost of Living", "Brazil"),
    (22, 30, "Brazil - Property & Real Estate", "Brazil"),
    (31, 37, "Brazil - Bureaucracy", "Brazil"),
    (38, 50, "Brazil - Lifestyle", "Brazil"),
    (51, 57, "Argentina", "Argentina"),
    (58, 64, "Paraguay", "Paraguay"),
    (65, 68, "Uruguay", "Uruguay"),
    (69, 80, "Personal Journey", None),
    (81, 86, "Financial", None),
]

def get_category_country(qnum):
    for start, end, cat, country in SECTIONS:
        if start <= qnum <= end:
            return cat, country
    return "Other", None

# City hints
CITY_MAP = {
    11: "Fortaleza", 12: "Guaramiranga", 14: "Guaramiranga",
    21: "Fortaleza", 27: "Fortaleza", 42: "Fortaleza",
    47: "Fortaleza", 52: "Bariloche", 53: "Bariloche", 54: "Bariloche",
    63: "Asunción", 65: "Punta del Este", 67: "Punta del Este",
    70: "Fortaleza", 71: "Guaramiranga",
}

# Topic names for each Q
TOPICS = {
    1: "Visa types with personal experience",
    2: "Real visa processing times",
    3: "Required documents and surprises",
    4: "Visa process costs",
    5: "Timeline from decision to legal residency",
    6: "CPF - processing time and issues",
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
}

def parse_knowledge_base(filepath):
    with open(filepath, 'r') as f:
        text = f.read()

    # Split by Q patterns
    pattern = r'\*\*Q(\d+)\.\s*(.*?)\*\*\n(.*?)(?=\*\*Q\d+\.|---|\Z)'
    matches = re.findall(pattern, text, re.DOTALL)

    records = []
    for m in matches:
        qnum = int(m[0])
        content_raw = m[2].strip()

        # Clean up markdown formatting for plain text
        content = content_raw.replace('🟢 ', 'Gregory: ').replace('🔵 ', 'Atlas: ')
        content = re.sub(r'\*\*([^*]+)\*\*', r'\1', content)  # Remove bold
        content = content.replace('🟢', 'Gregory:').replace('🔵', 'Atlas:')

        cat, country = get_category_country(qnum)
        city = CITY_MAP.get(qnum)
        has_gregory = 'Gregory:' in content or '🟢' in m[2]

        records.append({
            "category": cat,
            "country": country,
            "city": city,
            "topic": TOPICS.get(qnum, f"Q{qnum}"),
            "content": content,
            "is_personal_experience": has_gregory,
        })

    return records

def main():
    filepath = "/Users/gsmac/.openclaw/workspace-strategic-advisor/KNOWLEDGE_BASE_86.md"
    records = parse_knowledge_base(filepath)
    print(f"Parsed {len(records)} records")

    # Save JSON
    outpath = "/Users/gsmac/.openclaw/workspace-developer/projects/reloca-ai/supabase/seed/knowledge_base.json"
    with open(outpath, 'w') as f:
        json.dump(records, f, indent=2, ensure_ascii=False)
    print(f"Saved to {outpath}")

    # Insert in batches of 15
    batch_size = 15
    for i in range(0, len(records), batch_size):
        batch = records[i:i+batch_size]
        resp = requests.post(
            f"{SUPABASE_URL}/rest/v1/expert_knowledge",
            headers=HEADERS,
            json=batch
        )
        print(f"Batch {i//batch_size + 1} ({len(batch)} records): {resp.status_code}")
        if resp.status_code not in (200, 201):
            print(f"  Error: {resp.text}")

    # Verify count
    resp = requests.get(
        f"{SUPABASE_URL}/rest/v1/expert_knowledge?select=id",
        headers={**HEADERS, "Prefer": "count=exact"}
    )
    count = resp.headers.get('content-range', 'unknown')
    print(f"Final count: {count}")

if __name__ == "__main__":
    main()
