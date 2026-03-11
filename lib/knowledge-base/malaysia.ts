import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const MALAYSIA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Tax System: Territorial Shifts & Resident Rates',
    country: 'MY',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Malaysian Inland Revenue Board (LHDN); tax reform updates 2024-2026; BrightTax; Wise',
    content: `Malaysia tax system — territorial evolving (2026):
Personal income tax (residents, 182+ days):
- 0%: First RM 5,000
- 1%: RM 5,001-20,000
- 3%: RM 20,001-35,000
- 6%: RM 35,001-50,000
- 11%: RM 50,001-70,000
- 19%: RM 70,001-100,000
- 25%: RM 100,001-400,000
- 26%: RM 400,001-600,000
- 28%: RM 600,001-2,000,000
- 30%: Over RM 2,000,000
Non-residents: 30% flat on all Malaysian-sourced income
Territorial system (MAJOR changes):
- Pre-2022: Pure territorial — foreign income NOT taxed regardless of remittance
- 2022 change: Foreign-sourced income remitted to Malaysia now taxable
- BUT: Exemptions extended through December 31, 2026 for certain categories
- Digital nomads on DE Rantau: Foreign-sourced income generally not taxed in Malaysia (territorial benefit)
Capital gains:
- Real Property Gains Tax (RPGT): 30% (Year 1-3), 20% (Year 4-5), 15% (Year 6+)
- Securities/stocks: No capital gains tax (except real estate companies)
- Crypto: No specific capital gains tax (as of 2026)
Corporate tax:
- Standard rate: 24%
- SME rate: 15% on first RM 150,000, 17% on RM 150K-600K (if paid-up capital ≤RM 2.5M)
No taxes on:
- Inheritance: 0%
- Gift tax: 0%
- Wealth tax: 0%
- Capital gains on securities: 0%
GST/SST:
- Sales Tax: 10% (on manufactured goods)
- Service Tax: 8% (on prescribed services, raised from 6% in 2024)`,
    gotchas: `The territorial system is no longer pure — post-2022 changes mean foreign income remitted to Malaysia CAN be taxed, though exemptions run through 2026. After 2026, assume foreign remittance will be taxed at regular rates. The 30% non-resident rate is punishing — ensure you qualify as resident (182+ days). RPGT on property is aggressive in early years (30% for first 3 years). The progressive rates reach 30% quickly — moderate earners pay 19-25%. The SST increase to 8% raised service costs. Alcohol is heavily taxed (Muslim-majority nation) — expect to pay 3-5x for imported spirits.`,
    pro_tip: `For digital nomads on DE Rantau visa, the territorial system is still favorable — foreign-sourced income from remote work for non-Malaysian employers is generally not taxed in Malaysia. This makes Malaysia one of Asia's most tax-efficient DN destinations. Strategy: work remotely for foreign clients, don't remit more foreign income than necessary, take advantage of the exemption period through 2026. The 0% capital gains on securities is permanent and valuable — Malaysia is an excellent base for stock/crypto investors. After 2026, plan your remittance strategy carefully — the rules will likely tighten.`,
  },
  {
    topic: 'Corporate Tax & Business Structures',
    country: 'MY',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'LHDN; Companies Commission of Malaysia (SSM); Labuan tax framework 2026',
    content: `Malaysia corporate tax and business options (2026):
Standard corporate rates:
- Standard: 24% (on chargeable income)
- SME rate: 15% on first RM 150,000, 17% on RM 150K-600K, 24% above
- SME qualification: Paid-up capital ≤ RM 2.5M, annual revenue ≤ RM 50M
Labuan (offshore financial center):
- Labuan companies: 3% of net audited profits OR flat RM 20,000 (your choice)
- Trading companies: 3% tax
- Non-trading (holding): 0% tax
- Substance requirements: Minimum 1 employee in Labuan, operating expenditure ≥ RM 50,000/year
- Increasingly scrutinized — substance requirements tightened
- Best for: International trading, holding companies, IP licensing
Company formation:
- Sdn Bhd (Private Limited): Most common, minimum RM 1 share capital
- LLP: Limited Liability Partnership, simpler compliance
- Formation: 3-7 days via SSM
- Foreign ownership: 100% allowed in most sectors
- Annual compliance: Tax return, annual return, financial statements
- Minimum directors: 1 (must be ordinarily resident in Malaysia)
Malaysia Digital Economy:
- MDEC incentives: Tax breaks for digital companies
- MSC Malaysia status: Pioneer status with tax holidays
- Digital investment tax allowance: Available for qualifying activities`,
    gotchas: `Labuan's 3% rate attracts attention but substance requirements are real — you need genuine employees and operations in Labuan. The SME rate at 15% is attractive but the RM 2.5M paid-up capital limit and RM 50M revenue cap create boundaries. Foreign ownership is 100% in most sectors but some (property, media) have restrictions. The resident director requirement means you need someone physically in Malaysia. MSC status is powerful but application process is complex and approval isn't guaranteed. Annual compliance is moderately burdensome.`,
    pro_tip: `For most expat entrepreneurs, a Sdn Bhd with SME status (15% on first RM 150K) is the sweet spot — simple, legitimate, and well-understood. Labuan is for larger operations with genuine international trading — don't use it for small businesses. The MDEC digital economy incentives are worth exploring for tech companies — potential tax holidays and grants. Combine with personal territorial tax benefits for efficient overall structure. Budget RM 2,000-5,000/year for annual compliance (accountant + filing).`,
  },

  // === VISA ===
  {
    topic: 'MM2H Program (2026 Tiered System)',
    country: 'MY',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'MM2H official; Hudson McKenzie 2026; Wise 2026; iProperty 2026; AlestriaProperty 2026',
    content: `Malaysia My Second Home (MM2H) — dramatically tightened since 2021 (2026):
SILVER TIER (entry level):
- Income: RM 10,000/month (single) or RM 15,000/month (family) OR liquid assets RM 100K-200K
- Fixed deposit: RM 500,000 in Malaysian bank
- Property purchase: Not mandatory
- Duration: 5-year renewable
- Minimum stay: 60 days cumulative per year
GOLD TIER (mid-range):
- Fixed deposit: USD 500,000
- Property purchase: RM 1,000,000 mandatory
- Duration: 15-year renewable
- Benefits: More flexible withdrawal, priority processing
PLATINUM TIER (premium):
- Fixed deposit: USD 1,000,000
- Property purchase: RM 2,000,000 mandatory
- Duration: 20-year renewable
- Benefits: Maximum flexibility, VIP processing
Key changes from pre-2021:
- Old MM2H: RM 100K-300K deposit, RM 10K income — MUCH easier
- New MM2H: Dramatically more expensive and restrictive
- This is the single biggest change for Malaysia expats
Sarawak S-MM2H (state-level alternative):
- Fixed deposit: RM 500,000 with Sarawak bank
- Income: RM 10,000/month
- Property purchase: NOT mandatory (key advantage)
- Duration: 5-year renewable, extendable to 10
- Must reside: In Sarawak (Kuching, Kota Kinabalu area)
- Separate from federal MM2H — Sarawak has immigration autonomy`,
    gotchas: `The new MM2H is DRAMATICALLY different from what many articles still reference — the old RM 100K deposit program is GONE. Silver tier alone requires RM 500K deposit. Gold requires USD 500K + RM 1M property. This puts MM2H in the same league as Portugal Golden Visa or Greece. The 60-day minimum stay is enforced. Sarawak S-MM2H is easier but requires living in Sarawak (Borneo island), not Peninsular Malaysia — different lifestyle entirely. The fixed deposits are locked — partial withdrawal allowed only for specific purposes (medical, education, property). Processing takes 3-12 months.`,
    pro_tip: `For most expats, the DE Rantau (Digital Nomad) visa is now more accessible than MM2H — much lower barrier to entry. If you do want long-term residency, Silver MM2H (RM 500K deposit) is the realistic entry point. The Sarawak S-MM2H is genuinely easier if you're open to living in Borneo — Kuching is an underrated city with excellent food and lower costs. Consider: is the deposit money working for you? Malaysian fixed deposits earn 3-4% interest, which partially offsets the locked capital. For retirees with significant assets, Gold tier's 15-year duration provides excellent stability.`,
  },
  {
    topic: 'DE Rantau Digital Nomad Visa & Other Options',
    country: 'MY',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'MDEC DE Rantau program; Malaysia immigration 2026; CitizenRemote; WFA.team',
    content: `Malaysia DE Rantau and alternative visa options (2026):
DE Rantau Nomad Pass:
- Income: USD 24,000/year (RM ~$2,000/month) — very accessible
- Must work for: Non-Malaysian company (remote employment or freelance)
- Duration: 12 months, renewable once (max 2 years)
- Processing: 2-4 weeks via MDEC
- Dependents: Spouse and children included
- Cost: Minimal application fee
- Tax benefit: Foreign-sourced income from remote work generally not taxed
- Cannot work for: Malaysian companies or clients
Benefits of DE Rantau:
- Access to Malaysia Digital hubs (coworking spaces)
- Community events and networking
- Simplified banking access
- Tax-efficient for remote workers
Professional Visit Pass (PVP):
- For short-term professional activities
- Duration: Up to 12 months
- Employer-sponsored
Employment Pass (EP):
- Categories: EP I (RM 10,000+ salary), EP II (RM 5,000-9,999), EP III (RM 3,000-4,999)
- Employer-sponsored
- Duration: 2-5 years
- Category I: Most flexible, can own property above RM 1M
Visa-free entry:
- Many nationalities: 90 days visa-free
- Can be extended once
- NOT a long-term solution — overstay penalties are severe`,
    gotchas: `DE Rantau's USD 24K/year threshold is low but you need proof of consistent income — not just savings. The 2-year maximum means DE Rantau is not a permanent solution. After 2 years, you need MM2H, employment pass, or leave. The visa-free 90 days is NOT a work visa — technically remote work on tourist entry is a gray area. Malaysian immigration is becoming stricter about enforcing visa categories. Working for Malaysian companies/clients on DN visa is prohibited. The tax benefit (foreign income not taxed) is the real value proposition — preserve this by not taking local clients.`,
    pro_tip: `DE Rantau is Malaysia's sweet spot — low entry (USD 24K/year), includes dependents, tax-efficient (foreign income not taxed), and gives access to one of Asia's best lifestyle destinations. Strategy: use DE Rantau for 2 years, evaluate if Malaysia is long-term, then either transition to MM2H or move on. The MDEC digital hub access provides excellent coworking and networking in KL. Combine with Labuan company for business optimization if you have significant revenue. The 90-day visa-free entry is tempting but risky for long-term — get proper documentation.`,
  },

  // === BANKING ===
  {
    topic: 'Malaysian Banking for Expats',
    country: 'MY',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Malaysian banking sector; expat account requirements 2025-2026',
    content: `Malaysia banking — well-developed, increasingly digital (2026):
Major banks:
- Maybank: Largest, most branches, good expat services
- CIMB: Second largest, competitive, good digital banking
- Public Bank: Conservative, popular for fixed deposits
- Hong Leong Bank: Good digital services
- HSBC Malaysia: International, easiest for foreigners
- Standard Chartered Malaysia: Good for high-net-worth
Account opening:
- With MM2H/work pass: Straightforward
- With DE Rantau: Some banks accept, HSBC most accommodating
- Required: Passport, visa/pass, proof of address, reference letter
- Processing: 1-3 days (walk-in to most branches)
- Minimum balance: RM 250-1,000 depending on account
Account features:
- MYR accounts: Standard
- Multi-currency: Available at international banks
- Monthly fees: RM 0-10
- Online banking: Good, all major banks have apps
- International transfers: SWIFT standard, some SEPA-like regional options
- ATMs: Widespread, RM 1-2 fee for cross-bank
Fintech:
- GrabPay: Ubiquitous (linked to Grab super-app)
- Touch 'n Go eWallet: Widely accepted
- Wise: Popular for international transfers
- BigPay: AirAsia's fintech, good for travel
Deposit rates:
- Fixed deposits: 3-4% (attractive compared to many countries)
- MM2H deposit: Earns interest at prevailing FD rates`,
    gotchas: `Account opening difficulty varies by bank and your visa type — HSBC is most foreigner-friendly but has higher minimum balances. Some banks may refuse DE Rantau holders — call ahead before visiting. ATM withdrawal limits can be low (RM 1,500/day at some machines). International transfers can take 2-5 days through traditional banks. Some banks require a Malaysian phone number for SMS OTP — get a local SIM first. Credit card approval for foreigners is limited — bring international cards. The RM currency fluctuates — consider multi-currency strategies.`,
    pro_tip: `Open HSBC first (easiest for foreigners), then Maybank for daily use (most ATMs and branches). GrabPay and Touch 'n Go are essential — Malaysia is rapidly going cashless for small transactions. The 3-4% fixed deposit rate makes Malaysia's MM2H deposit requirement less painful — your RM 500K earns RM 15-20K/year in interest. Use Wise for international transfers (significantly cheaper than bank SWIFT fees). Get a local SIM card before attempting bank account opening — most banks require Malaysian phone for verification.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'KL, Penang & Property Market',
    country: 'MY',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'PropertyGuru Malaysia; iProperty 2026; Malaysia property market data',
    content: `Malaysia property market — excellent value by global standards (2026):
KUALA LUMPUR:
- KLCC/City Centre: RM 800-2,000/sqm ($170-430/sqm) — Premium, Twin Towers area
  - Rent 1BR: RM 2,500-4,500/month ($540-970)
  - Rent 2BR: RM 3,500-6,500/month ($750-1,400)
- Mont Kiara: RM 600-1,200/sqm — Expat hub, international schools, family-friendly
  - Rent 2BR: RM 3,000-5,000/month
- Bangsar: RM 500-1,000/sqm — Trendy, restaurants, nightlife, walkable
- Damansara: RM 400-800/sqm — Suburban, family, good value
- Bukit Bintang: RM 700-1,500/sqm — Shopping/entertainment district
PENANG (Georgetown):
- Georgetown center: RM 400-800/sqm — UNESCO heritage, food capital
  - Rent 1BR: RM 1,200-2,500/month ($260-540)
- Batu Ferringhi: RM 300-600/sqm — Beach area, resort living
- Tanjung Bungah: RM 300-500/sqm — Residential, sea views
JOHOR BAHRU (near Singapore):
- Central JB: RM 200-500/sqm — Singapore proximity, growing
  - Rent 1BR: RM 800-1,800/month
- Iskandar Malaysia: RM 200-400/sqm — Development zone, speculative
Foreign ownership rules:
- Minimum purchase: RM 1,000,000 for foreigners (federal level, varies by state)
- Penang: RM 1,500,000 minimum for foreigners on island
- Some states: Higher thresholds or restrictions
- MM2H holders: Can purchase above threshold
- RPGT: 30% (Year 1-3), 20% (Year 4-5), 15% (Year 6+)
- Freehold vs Leasehold: Both available, freehold preferred`,
    gotchas: `The RM 1,000,000+ minimum purchase price for foreigners limits entry-level investment. Penang's RM 1.5M threshold is even higher. Property oversupply in some KL developments (especially Iskandar Malaysia in Johor) has caused prices to stagnate or decline. Many condos have high maintenance fees (RM 500-2,000/month) — factor these in. RPGT at 30% for first 3 years discourages flipping. Some developments have poor construction quality — inspect thoroughly. Leasehold properties (99-year) trade at 10-20% discount to freehold. The weak MYR benefits foreign buyers but currency risk exists.`,
    pro_tip: `Mont Kiara is the clear winner for expat families — international schools, supermarkets, restaurants, all within walking distance. For lifestyle, Bangsar offers the best urban experience at reasonable prices. Penang Georgetown is Malaysia's hidden gem — UNESCO heritage, world-class street food, and 30-40% cheaper than KL. The RM 1M minimum is high but you get A LOT of property — a RM 1M condo in KL would cost $5-10M in Singapore or Hong Kong. Consider renting first (1-2 years) before buying — it's affordable and lets you find the right neighborhood. The oversupply means negotiation power for buyers.`,
  },

  {
    topic: 'Penang, Langkawi & East Malaysia Options',
    country: 'MY',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'PropertyGuru Penang 2026; Langkawi property data; Sarawak real estate',
    content: `Malaysia beyond KL — alternative property markets (2026):
PENANG (Georgetown):
- UNESCO Heritage Zone: RM 600-1,200/sqm — Heritage shophouses, character
- Gurney Drive: RM 500-900/sqm — Sea-view condos, upscale
- Batu Ferringhi: RM 300-600/sqm — Beach, resort living, tourist area
- Tanjung Bungah: RM 300-500/sqm — Residential, quieter beach suburb
- Rent: 30-40% cheaper than KL for similar quality
- Foreigner minimum: RM 1,500,000 on Penang Island (higher than mainland)
- Food capital: Reason enough to live there
LANGKAWI:
- Duty-free island: Alcohol, chocolate, tobacco significantly cheaper
- Property: RM 200-500/sqm — Resort-style living
- Lifestyle: Beach, nature, diving, quiet
- Limitations: Small island, limited services, seasonal tourism
EAST MALAYSIA (Borneo):
- Kuching (Sarawak): RM 150-400/sqm — Excellent value, growing city
  - Rent 2BR: RM 1,000-2,000/month ($215-430)
  - S-MM2H visa option (Sarawak's own program)
  - Food: Excellent Sarawak laksa, diverse cuisine
- Kota Kinabalu (Sabah): RM 200-500/sqm — Nature, Mount Kinabalu, diving
Rental market:
- Furnished condos: Standard for expats, turnkey
- Lease terms: 1-year minimum typical
- Deposit: 2 months rent + 0.5 month utilities
- Agent fee: Usually paid by landlord
- Airbnb: Widely available for initial stays`,
    gotchas: `Penang Island's RM 1.5M foreigner minimum is the highest in Malaysia — consider Penang mainland (Butterworth area) for lower thresholds. Langkawi is beautiful but isolated — limited medical, shopping, and social options. East Malaysia (Borneo) requires separate immigration considerations — Sabah and Sarawak control their own borders. Kuching is underrated but genuinely small — limited international community. Construction quality in resort developments can be variable. Heritage zone properties in Georgetown may have renovation restrictions. The tropical climate means constant building maintenance (mold, moisture).`,
    pro_tip: `Penang Georgetown is Malaysia's best-kept secret for expats who prioritize lifestyle over nightlife — UNESCO heritage, world-class hawker food, beach access, 30-40% cheaper than KL, growing DN community. For S-MM2H applicants, Kuching offers exceptional value — RM 150-400/sqm property with no mandatory purchase requirement. Langkawi works as a weekend/holiday base, not primary residence. Consider renting in Georgetown for 6-12 months before buying — the RM 1.5M threshold means your purchase decision is significant. The furnished condo rental market makes moving to Malaysia turnkey — arrive with suitcases, move in same day.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'World-Class Private Healthcare at Low Cost',
    country: 'MY',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Malaysian healthcare sector; MHTC; Gleneagles; Sunway Medical 2025-2026',
    content: `Malaysia healthcare — medical tourism hub with excellent private care (2026):
Private hospitals (world-class):
- Gleneagles KL/Penang: Premium, JCI-accredited, specialist depth
- Sunway Medical Centre: Modern, comprehensive, research-focused
- Prince Court Medical Centre: Attached to Petronas, VIP-level
- Pantai Hospital: Large network, good general care
- Columbia Asia: Mid-range chain, good value
- Island Hospital Penang: Excellent, medical tourism hub
Quality:
- Many doctors trained in UK, US, Australia
- JCI-accredited hospitals (international gold standard)
- Medical tourism hub: 1M+ medical tourists/year
- Specialties: Cardiology, orthopedics, oncology, fertility, dental
Private costs (remarkably low):
- GP visit: RM 35-80 ($8-17)
- Specialist consultation: RM 80-200 ($17-43)
- MRI scan: RM 800-1,500 ($170-325)
- Full health screening: RM 900-1,500 ($200-325)
- Dental cleaning: RM 80-150 ($17-32)
- Dental crown: RM 600-1,500 ($130-325)
- LASIK: RM 3,000-6,000 ($650-1,300)
- Hospitalization (private room): RM 200-500/night ($43-108)
Private insurance:
- Comprehensive international: $600-2,000/year
- Local private: RM 2,000-5,000/year ($430-1,080)
- Many expats pay out of pocket — it's that affordable
Public healthcare:
- Government hospitals: Very affordable (RM 1-5 per visit)
- Quality: Adequate but crowded, long waits
- For residents with work permits/MM2H
- Language: Malay primarily in public system`,
    gotchas: `Public hospitals are affordable but overcrowded — long wait times and language barriers (Malay). Private is the clear choice for expats but costs are rising. Some specialists have long booking waits at popular hospitals. Medical insurance is recommended despite low costs — a major hospital stay can still reach RM 50-100K. Quality varies between hospitals — stick to JCI-accredited facilities. Emergency ambulance services are basic — consider location proximity to good hospitals when choosing where to live. Penang and KL have the best hospital access — rural areas are limited.`,
    pro_tip: `Malaysia's healthcare is its secret weapon — world-class private care at 50-80% less than US/Europe. Strategy: skip insurance for routine care (GP visit is $8-17), get catastrophic/hospitalization insurance only ($500-1,000/year). Gleneagles and Sunway are the premium choices; Columbia Asia offers great value for everyday care. Penang is Malaysia's medical tourism capital — 7 major hospitals for a city of 700K. Many expats schedule their annual health screening in Malaysia ($200-300 for comprehensive) even if living elsewhere in the region. Dental tourism is excellent — crown for $130-325 vs $1,000-1,500 in the West.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living & Food Paradise',
    country: 'MY',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Malaysia cost of living 2026; PacificPrime; InternationalLiving; expat surveys',
    content: `Malaysia cost of living — Asia's best value proposition (2026):
Monthly budgets (KL):
- Budget single: RM 3,500-5,000 ($750-1,080/month)
- Comfortable single: RM 6,000-9,000 ($1,300-1,950/month)
- Comfortable couple: RM 8,000-13,000 ($1,730-2,800/month)
- Family of 4: RM 12,000-18,000 ($2,600-3,900/month)
Detailed breakdown (comfortable single, KL):
- Rent (1BR Mont Kiara): RM 2,500-4,000/month ($540-870)
- Utilities (AC essential): RM 200-400/month
- Food: RM 1,000-2,000/month ($215-430)
  - Hawker meal: RM 8-15 ($2-3)
  - Restaurant meal: RM 25-60 ($5-13)
  - Western restaurant: RM 60-120 ($13-26)
- Transportation: RM 200-500/month (Grab/MRT, car optional in KL)
- Healthcare: RM 200-500/month (insurance or out-of-pocket)
- Internet: RM 100-200/month (fiber widely available)
- Entertainment: RM 500-1,000/month
Food (Malaysia's greatest asset):
- Hawker food: World-class, incredibly diverse, incredibly cheap
- Cuisine: Malay, Chinese, Indian, Peranakan, street food
- Penang: Undisputed food capital — some say Asia's best food city
- KL: Jalan Alor, Bangsar, Bukit Bintang — incredible variety
- Alcohol caveat: Expensive due to Muslim-majority taxation
  - Beer: RM 15-25 ($3-5) at shops, RM 25-40 ($5-9) at restaurants
  - Wine: RM 80-200+ ($17-43+) at restaurants
  - Spirits: Heavily taxed
Climate:
- Tropical: 27-33°C year-round, humidity 70-90%
- Rain: Monsoon seasons but rarely all-day (sudden tropical downpours)
- No winter: Ever — consistent warmth year-round
- AC: Essential for sleeping (budget for electricity)`,
    gotchas: `The humidity is relentless — 70-90% year-round, you're always slightly damp outside. AC is not optional, it's essential — budget RM 200-400/month for electricity. Alcohol costs are 3-5x what you'd expect due to Muslim-majority taxation — social drinkers feel this. Food allergies are challenging — peanuts, shrimp paste (belacan), and MSG are ubiquitous in local cuisine. Driving in KL can be stressful (aggressive drivers, confusing roads) — Grab is easier. Air quality occasionally suffers from Indonesian haze (September-October). Bureaucracy is slow — government processes take patience. English is widely spoken but Malay is needed for government services.`,
    pro_tip: `Malaysia's food scene alone justifies living there — the hawker food diversity and quality at $2-3 per meal is unmatched globally. Strategy: eat local 80% of the time (better AND cheaper), save Western dining for special occasions. The MRT + Grab combination makes car ownership optional in KL. Penang offers 30-40% savings vs KL with arguably better food and beach access. For alcohol lovers, consider duty-free Langkawi for stocking up. The consistent tropical climate eliminates seasonal wardrobe costs and heating bills. Malaysia's location is the hub of Southeast Asia — cheap flights to Thailand, Indonesia, Vietnam, Singapore, Japan.`,
  },
  {
    topic: 'Expat Life, Culture & Honest Assessment',
    country: 'MY',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Malaysia expat experiences; cultural guides; social dynamics 2025-2026',
    content: `Malaysia expat life — honest assessment (2026):
What Malaysia excels at:
- Food: Genuinely world-class, diverse, affordable
- Healthcare: Private care rivaling Western quality at 20-50% the price
- Cost of living: Excellent value — comfortable lifestyle at $1,500-2,500/month
- Infrastructure: Modern malls, highways, airports, internet
- English: Widely spoken, especially in cities (colonial legacy)
- Location: Hub for SE Asia travel — 2-3 hours to anywhere in region
- Diversity: Multi-ethnic (Malay 60%, Chinese 23%, Indian 7%) = cultural richness
- Safety: Generally safe, low violent crime
What to be honest about:
- Bureaucracy: Slow, sometimes frustrating, requires patience
- Humidity: Relentless, affects daily comfort and energy
- Alcohol culture: Limited and expensive due to religious taxation
- Nightlife: Exists (KL, Penang) but not like Bangkok or Singapore
- Social integration: Friendly but deep friendships take time
- Religious dynamics: Muslim-majority influences laws (alcohol, halal requirements, some social norms)
- Haze: Indonesian burning season (Sep-Oct) can seriously affect air quality
- MM2H barrier: The new requirements shut out many middle-income expats
Expat communities:
- Mont Kiara (KL): Largest expat concentration, "international bubble"
- Bangsar (KL): Younger, more integrated expat scene
- Georgetown (Penang): Growing digital nomad community, more laid-back
- Johor Bahru: Singapore commuter expats
- International schools: International School of KL, Alice Smith, Garden International
Who thrives:
- Food lovers, health-conscious travelers, families
- Remote workers wanting affordable quality of life
- Retirees (if they can afford new MM2H)
- Asia hub seekers — Singapore lifestyle at 30% of the cost
Who doesn't:
- Heavy drinkers (expensive), nightlife seekers
- Those needing 4-season weather
- People uncomfortable with humidity
- Those wanting European culture/history`,
    gotchas: `Malaysia's new MM2H requirements have fundamentally changed who can afford to move there long-term — the easy, cheap retirement destination of 2019 is gone. The religious dynamics are generally harmonious but occasionally surface in policy (no proselytizing to Muslims, halal requirements, alcohol restrictions). The class/race dynamics are complex — bumiputera (ethnic Malay) policies affect business ownership and property. Some expats report feeling like they'll always be outsiders despite warmth. International school fees are significant (RM 30,000-80,000/year). The DE Rantau visa is only 2 years max — not a permanent solution.`,
    pro_tip: `Malaysia works best as either a 2-year DN stint (DE Rantau) or a committed long-term move (MM2H with significant assets). The middle ground is awkward. Use the DE Rantau period to test if Malaysia suits you before committing RM 500K+ for MM2H. Penang is increasingly the smart choice over KL — lower costs, better food, beach access, growing DN community, more manageable city. Join the MM2H community groups before applying — they share real-time processing updates and agent recommendations. The "Singapore at 30% cost" comparison is real — many Singapore expats live in JB and commute.`,
  },
];
