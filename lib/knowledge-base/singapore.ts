import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const SINGAPORE_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Personal Income Tax — Progressive Rates',
    country: 'SG',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'IRAS (Inland Revenue Authority of Singapore); YA 2026 rates',
    content: `Singapore personal income tax (Year of Assessment 2026):
Progressive rates for tax residents:
- First S$20,000: 0%
- Next S$10,000 (S$20K–30K): 2%
- Next S$10,000 (S$30K–40K): 3.5%
- Next S$40,000 (S$40K–80K): 7%
- Next S$40,000 (S$80K–120K): 11.5%
- Next S$40,000 (S$120K–160K): 15%
- Next S$40,000 (S$160K–200K): 18%
- Next S$40,000 (S$200K–240K): 19%
- Next S$40,000 (S$240K–280K): 19.5%
- Next S$40,000 (S$280K–320K): 20%
- Next S$180,000 (S$320K–500K): 22%
- Next S$500,000 (S$500K–1M): 23%
- Above S$1,000,000: 24%
Effective tax rates: S$100K income = ~3.35%. S$200K = ~7.95%. S$500K = ~16.4%
Tax residency: Physically present or employed in Singapore for 183+ days in a calendar year
Non-residents: 15% flat on employment income OR resident rates, whichever is HIGHER. 24% on other income (directors' fees, rent, consulting)
Filing: Annual, deadline 15 April (18 April e-filing). IRAS auto-includes employer-reported income (IR8A)
NO capital gains tax. NO inheritance/estate tax. NO tax on dividends (already taxed at corporate level)`,
    gotchas: `The top rate of 24% (above S$1M) was increased from 22% starting YA 2024 — a signal that Singapore is gradually raising taxes on the ultra-wealthy. Non-residents face a punitive structure: 15% minimum even on low incomes (no 0% bracket). If you earn S$50K as a non-resident, you pay S$7,500 (15%) vs ~S$550 as a resident. Becoming tax resident (183+ days) is critical for tax optimization. Stock options and shares can create complex tax timing issues — IRAS taxes gains on exercise, not vesting.`,
    pro_tip: `Singapore's effective tax rate on S$200K is under 8% — among the lowest for high earners globally. Compare: UK ~32%, US ~24%, Australia ~30% on equivalent income. For remote workers earning foreign income: if you're tax resident in Singapore but your income is from foreign sources not remitted to Singapore, it's generally exempt. The key: income must be earned outside Singapore and not received in Singapore. This is Singapore's version of territorial taxation for individuals.`,
  },
  {
    topic: 'Corporate Tax & Business Structure',
    country: 'SG',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'IRAS; ACRA; Singapore corporate tax code',
    content: `Singapore corporate tax (2026):
- Headline rate: 17% flat (one of the lowest in developed world)
- Effective rate for new companies: Much lower due to exemptions
- Start-Up Tax Exemption (SUTE) for first 3 years:
  * 75% exemption on first S$100,000 of chargeable income
  * 50% exemption on next S$100,000
  * Effective rate on first S$200K profit: ~4.25% (not 17%)
- Partial Tax Exemption (all companies, ongoing):
  * 75% exemption on first S$10,000
  * 50% exemption on next S$190,000
- GST (Goods & Services Tax): 9% (increased from 8% in Jan 2024). Registration mandatory when revenue exceeds S$1M/year
- No withholding tax on dividends paid to shareholders (dividends are tax-exempt in recipients' hands)
- No capital gains tax at corporate level
- Foreign-source income: Exempt from tax unless remitted to Singapore (with exceptions under international tax agreements)
- Company formation: 1-2 days via ACRA (BizFile+). S$315 registration fee. Requires local registered address and at least 1 resident director
- Common structure: Private Limited Company (Pte Ltd) — default for most businesses`,
    gotchas: `The 17% headline rate is misleading for small companies — the effective rate with exemptions is often 4-8% on the first S$200K. However, the Global Minimum Tax (Pillar 2, 15%) may affect Singapore's attractiveness for large multinationals from 2025. The resident director requirement means you need either a Singapore citizen/PR or an Employment Pass holder as a director — you cannot have a fully remote-owned Singapore company without local presence. Nominee director services exist ($2,000-5,000/year) but add cost and compliance risk.`,
    pro_tip: `For entrepreneurs: incorporate a Singapore Pte Ltd (S$315 + ~S$1,500-3,000 for a corporate secretary/registered address package), take advantage of SUTE for 3 years, and pay yourself a modest salary to maximize the low effective corporate tax rate. The Singapore-US tax treaty prevents double taxation. For digital businesses with no physical inventory: Singapore's territorial system means foreign revenue earned and kept offshore isn't taxed until remitted — powerful for international businesses.`,
  },
  {
    topic: 'Foreign Income, Capital Gains & Wealth',
    country: 'SG',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'IRAS; Monetary Authority of Singapore (MAS); tax treaty network',
    content: `Singapore's tax advantages on capital and foreign income:
NO capital gains tax: Gains from selling shares, property (for investment), crypto, or other assets are NOT taxed. No distinction between short-term and long-term. Exception: if IRAS determines you're "trading" (frequent transactions, short holding periods), gains may be reclassified as income
NO inheritance/estate tax: Abolished in 2008. Assets pass to heirs tax-free
NO wealth tax: Singapore does not tax net worth
Foreign-source income for individuals: Generally exempt from Singapore tax. Income earned outside Singapore is NOT taxed even when remitted, with some exceptions:
- Exceptions: Income received through a Singapore partnership, or income from a trade/business carried on in Singapore
- Key distinction: Income from services performed OUTSIDE Singapore = exempt. Income from services for a Singapore employer performed IN Singapore = taxable
Property tax: Exists but is a separate regime (see real estate entry)
Tax treaty network: 90+ Comprehensive Avoidance of Double Taxation Agreements (DTAs), including with US, UK, EU, Australia, China, India, Japan
CPF (Central Provident Fund): Mandatory savings — 20% employee + 17% employer for citizens/PRs under 55. Foreigners on EP do NOT contribute to CPF (lower cost for employers, but no safety net for you)`,
    gotchas: `The "no capital gains tax" rule is not absolute. IRAS can reclassify gains as income if they determine you're a "trader" rather than "investor." Red flags: high frequency of transactions, short holding periods, intention to profit from buying/selling (vs holding for investment). Property gains are also taxed indirectly via Seller's Stamp Duty (SSD) if sold within 3 years. The foreign income exemption has been narrowing — Singapore now requires "economic substance" for holding companies claiming the exemption.`,
    pro_tip: `Singapore is one of the only developed countries with zero capital gains tax, zero inheritance tax, AND zero wealth tax simultaneously. For investors and crypto holders, this is extraordinary. If you hold Bitcoin, stocks, or other assets: realizing gains while Singapore tax resident means zero tax on those gains (assuming you're not classified as a trader). Document your investment intent — keep records showing long-term holding strategy. The combination of low income tax (8% effective on S$200K) + zero capital gains makes Singapore unmatched for high-earning investors.`,
  },

  // === VISA ===
  {
    topic: 'Employment Pass (EP) & COMPASS Framework',
    country: 'SG',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ministry of Manpower (MOM); COMPASS framework; 2026 salary benchmarks',
    content: `Employment Pass (EP) — Singapore's primary work visa:
Minimum salary (from Jan 2025):
- General sectors: S$5,600/month (~US$4,200)
- Financial services: S$6,200/month (~US$4,650)
- Older/more experienced applicants: Higher thresholds (salary must meet age-adjusted benchmarks)
COMPASS framework (Complementarity Assessment, mandatory since Sep 2023):
- Points-based system. Need 40+ points across 4 foundational criteria + 2 bonus criteria
- C1: Salary vs sector median (0/10/20 points)
- C2: Qualifications — degree from top institution (0/10/20 points)
- C3: Diversity — nationality proportion in firm (0/10/20 points)
- C4: Support for local employment — firm's local:foreign ratio vs sector (0/10/20 points)
- Bonus: Skills shortage list (+20) or Strategic Economic Priorities partnership (+10)
- Exemptions: Earning S$22,500+/month bypasses COMPASS entirely
Duration: 1–2 years initial, renewable for up to 3 years
Dependents: Dependent Pass (DP) for spouse and children if EP holder earns S$6,000+/month
Long-Term Visit Pass (LTVP): For common-law partners, parents, if EP holder earns S$6,000+
Processing: 3–8 weeks. Apply via EP Online (employer submits)
2026 update: New salary benchmarks for COMPASS take effect Jan 1, 2026 (new applications) and Jul 1, 2026 (renewals)`,
    gotchas: `COMPASS has fundamentally changed EP approvals. Pre-2023: meet salary threshold → approved. Now: you can meet the salary but FAIL on COMPASS points if the company has too many of your nationality (C3) or too few locals (C4). Companies with a high proportion of one nationality face significant disadvantage — common issue for Indian and Chinese tech workers at startups. The S$22,500/month COMPASS exemption means top earners bypass the entire points system — but that's S$270K/year, which limits this to senior executives and specialists.`,
    pro_tip: `If your employer is applying for your EP: ensure they understand COMPASS scoring BEFORE submitting. A rejection hurts both your record and the company's approval rate. Salary is king — every dollar above the sector median earns more C1 points. A top university degree (QS top 500) helps with C2. If you're self-employed: you need to incorporate a Singapore company and employ yourself (EntrePass is an alternative). For families: the S$6,000/month threshold for Dependent Pass is critical — negotiate your salary above this if bringing spouse/children.`,
  },
  {
    topic: 'ONE Pass, EntrePass & Other Passes',
    country: 'SG',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'MOM; Budget 2026 announcements; ONE Pass eligibility criteria',
    content: `Specialized Singapore work passes:
1. ONE Pass (Overseas Networks & Expertise Pass):
- For top talent earning S$30,000/month (~US$22,500/month, ~US$270K/year) in the prior 12 months, OR with outstanding achievements in arts, sports, science, or academia
- Duration: 5 years
- Benefits: Can work for multiple employers simultaneously, start businesses, spouse can work on LTVP without separate work pass
- No COMPASS required
- 2026 update: New "AI and Tech" track launching Jan 2027 — allows stock options/ESOP to count toward S$30K salary requirement
2. EntrePass (Entrepreneur Pass):
- For foreign entrepreneurs starting a business in Singapore
- Requirements: Must meet at least 1 of: (a) S$100,000+ from recognized VC/angel investor, (b) incubated by government-recognized accelerator, (c) significant IP or research, (d) exceptional entrepreneurial track record
- Duration: 1 year initial, renewable based on business milestones (hiring, revenue targets)
- Renewal milestones: Year 1: S$100K annual spend + 1 local employee. Year 2: S$100K spend + 2 local employees + S$100K revenue
- No minimum salary requirement (you set your own)
3. S Pass: For mid-level skilled workers. Minimum S$3,150/month. Foreign worker quota applies (employer must maintain local:foreign ratio). Not typically used by Western expats
4. Dependent Pass (DP): For spouse/children of EP/S Pass holders earning S$6,000+. DP holders need a Letter of Consent (LOC) to work
5. Long-Term Visit Pass (LTVP): For common-law partners, step-children, parents of EP holder earning S$6,000+`,
    gotchas: `ONE Pass sounds incredible but it's genuinely for the top 1% — S$360K/year minimum is the barrier. EntrePass is harder to get than it looks — MOM wants proven entrepreneurs with funding or institutional backing, not first-time founders with just an idea. The renewal milestones are strict: fail to hit hiring and revenue targets → pass not renewed. DP holders can no longer work freely — since Sep 2023, they need a LOC (Letter of Consent) from a sponsoring employer, and some employers are reluctant to go through the process for DP holder spouses.`,
    pro_tip: `ONE Pass is Singapore's most powerful visa: 5 years, multiple employers, spouse can work. If you're a senior tech professional, executive, or specialist earning $270K+, this is the path. For entrepreneurs: if you don't qualify for EntrePass, consider incorporating a Pte Ltd, hiring yourself as director (need to be resident), and applying for EP through your own company — this requires demonstrating the business has real substance and revenue potential. The AI/Tech ONE Pass track (2027) will be a game-changer for startup founders with equity-heavy compensation.`,
  },
  {
    topic: 'Permanent Residency & Citizenship',
    country: 'SG',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'ICA (Immigration & Checkpoints Authority); MOM PR guidelines',
    content: `Singapore Permanent Residency (PR) and citizenship:
PR eligibility: No fixed timeline — can apply after holding EP for 6+ months. Common approval after 2-3 years of EP residency
PR application factors:
- Salary level (higher = better chances)
- Industry (priority sectors: tech, finance, biomedical, engineering)
- Age (younger applicants preferred)
- Family ties to Singapore (Singaporean spouse/children significantly boosts chances)
- Education (degrees from top universities)
- Community involvement and integration efforts
- Tax contributions
PR benefits: Buy HDB resale flats (after 3 years as PR), CPF contributions (employer co-pays), no need for work pass renewal, easier travel
PR obligations: National Service (NS) for male PRs (2 years) and their sons. Annual re-entry permit renewal. Must maintain Singapore as "center of life"
Citizenship: Can apply after 2+ years as PR. Requires renouncing other citizenships (Singapore does not allow dual citizenship)
PR approval rate: Estimated 20-30% of applicants. Processing: 6-12 months
EP → PR timeline: Typically 2-4 years of EP residency before PR application has good chances
Cost: PR application S$100 per person. Citizenship application S$100`,
    gotchas: `PR approval is opaque — ICA never publishes criteria or statistics. Anecdotally, the approval rate has tightened (2024-2026). Single applicants without family ties face lower chances. Male PRs' sons MUST serve 2 years of National Service (military) at 18 — this is a serious consideration for families. Singapore does NOT allow dual citizenship — if you become a citizen, you MUST renounce your previous nationality. This is a dealbreaker for many. PR can be revoked if you don't maintain Singapore as your center of life (extended absence).`,
    pro_tip: `Maximize PR chances: earn well above EP minimum (S$10K+/month ideal), work in a priority sector, volunteer in community activities (documented), and apply with your spouse/children (family applications are viewed more favorably). The Investment PR scheme exists: invest S$10M+ via the Global Investor Programme (GIP) for fast-track PR — but this is for UHNW individuals. For most professionals: the EP→PR pathway (2-3 years) is the realistic route. Consider whether you're willing to give up your passport before pursuing citizenship.`,
  },

  // === BANKING ===
  {
    topic: 'Banking & Financial Services',
    country: 'SG',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'MAS; DBS/OCBC/UOB websites; expat banking guides',
    content: `Singapore banking for expats (2026):
- Major banks (all accept EP holders easily):
  * DBS (largest in SE Asia): Best digital experience (DBS digibank app). Multi-currency account. Savings rate: 0.05% base, up to 4.1% with DBS Multiplier. No minimum balance on basic savings
  * OCBC: Most foreigner-friendly. Online account opening possible for non-residents via video call. 360 Account for tiered interest. Frank Account (youth/starter)
  * UOB: Good for families (education savings, insurance bundles). One Account for tiered interest
  * Standard Chartered: International bank, good for global banking continuity. Priority Banking from S$200K
  * HSBC: Similar to StanChart. Premier Banking from S$200K
- Digital banks: GXS (Grab), MariBank (Sea/Shopee) — Singapore residents only
- Account opening (EP holders): Passport + EP card + proof of address. Same-day approval typical. S$0 minimum for basic accounts
- PayNow: Singapore's instant P2P payment system (linked to phone number or NRIC). Essential — covers hawker stalls to high-end restaurants
- NETS: Debit card payment network. Ubiquitous
- SGD deposit rates (March 2026): 2.5-4.1% on savings with conditions (salary credit, card spend, investments)
- Multi-currency: DBS, OCBC, StanChart all offer multi-currency accounts. Useful for USD/GBP holdings
- Wealth management: Singapore is Asia's largest wealth management center. Private banking from S$250K-1M`,
    gotchas: `Singapore's tiered savings rates (up to 4.1%) require meeting multiple conditions: salary credit, card spend, investment, insurance purchase. Without conditions met, base rates are 0.05% — essentially nothing. Credit card applications for new EP holders can be difficult in the first 3-6 months despite high income. The Common Reporting Standard (CRS) means Singapore banks automatically share your account info with your home country's tax authority. Opening business accounts for new Singapore companies takes 2-4 weeks and requires in-person visit.`,
    pro_tip: `DBS Multiplier is the sweet spot for most EP holders — credit your salary, use the debit card for daily spending, and automatically earn 2-4% on your first S$100K. For international transfers: Wise still beats bank FX rates by 1-3%. Set up PayNow immediately — it's how Singapore works (even hawker stalls use QR codes). For wealth building: Singapore's tax-free capital gains + low income tax + world-class banking infrastructure make it one of the best places globally to accumulate wealth.`,
  },

  // === BANKING (additional) ===
  {
    topic: 'Investment, CPF & Wealth Building',
    country: 'SG',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'MAS; CPF Board; SGX; brokerage websites',
    content: `Investment and wealth building in Singapore:
CPF (Central Provident Fund): ONLY for citizens and PRs
- Contribution: 20% employee + 17% employer (under 55). Total 37% of salary
- Ordinary Account (OA): 2.5% interest. Can use for housing, education, investment
- Special Account (SA): 4% interest. Retirement savings
- MediSave: 4% interest. Healthcare savings
- EP holders: NO CPF. Your employer saves 17% on labor costs, but you have no forced savings or housing subsidy
Brokerage/investment:
- SGX (Singapore Exchange): Local stocks, REITs, ETFs. No capital gains tax on any gains
- Singapore REITs: 40+ listed. Average yield 5-7%. Tax-efficient (no capital gains, dividends taxed at corporate level only)
- Popular brokers: Tiger Brokers (lowest fees, US+SG stocks), moomoo (free US trades), DBS Vickers (local blue chip), Interactive Brokers (global access), Syfe/StashAway (robo-advisors)
- Supplementary Retirement Scheme (SRS): Voluntary savings account. Tax-deductible contributions up to S$35,700/year (foreigners). Withdrawals taxed at 50% of prevailing rate after age 62. Good for tax optimization
- Crypto: Legal. MAS regulates via Payment Services Act. Exchanges: Coinhako, Crypto.com, Independent Reserve. No capital gains tax on crypto
- Singapore Savings Bonds (SSB): Government bonds. 2.5-3% yield. S$500 minimum. Redeemable monthly. Risk-free`,
    gotchas: `EP holders miss out on CPF entirely — that's 37% of salary that citizens/PRs get as forced savings. You need to self-manage your savings and retirement. The SRS is underused by foreigners but offers real tax benefits: S$35,700/year in tax-deductible contributions, invested in stocks/bonds/ETFs, taxed at only 50% rate on withdrawal. Tiger Brokers and moomoo have revolutionized retail investing in Singapore — near-zero fees on US and SG stocks. But remember: US stock dividends are subject to 30% US withholding tax (even in Singapore).`,
    pro_tip: `Maximize the SRS: S$35,700/year tax-deductible, invest in low-cost global ETFs (IWDA, CSPX), withdraw after 62 at half the tax rate. At a S$200K salary, SRS saves ~S$3,500/year in tax. Singapore REITs are a sweet spot — 5-7% yield, no capital gains tax, SGD-denominated. Combine: SRS for tax-deferred growth + REIT portfolio for income + SSB for emergency fund. Zero capital gains on everything. Singapore is one of the best jurisdictions globally for building wealth tax-efficiently.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Neighborhood Guide — Renting & Buying',
    country: 'SG',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'URA; PropertyGuru; 99.co; EdgeProp; Q1 2026 rental data',
    content: `Singapore neighborhoods for expats (March 2026):
CENTRAL (CCR — Core Central Region):
- Marina Bay / CBD: S$5,500–8,500/mo 2BR condo. Ultra-modern towers, waterfront. Walk to offices. Impersonal but convenient
- Orchard / River Valley: S$4,500–7,500/mo 2BR. Shopping, dining, nightlife. Classic expat area
- Tiong Bahru: S$3,500–5,500/mo 2BR. Hipster cafés, art deco flats, walkable. Best neighborhood "feel" in Singapore
- Holland Village: S$3,500–5,500/mo 2BR. Expat village vibe. International restaurants, bars. Near Botanic Gardens
EAST:
- Katong / Joo Chiat: S$3,000–4,800/mo 2BR. Peranakan culture, food paradise. Growing trendy. Beach nearby (East Coast Park)
- East Coast: S$3,200–5,000/mo 2BR. Family-friendly. Seafood, cycling, beach. International schools nearby
NORTH / WEST:
- Bukit Timah: S$3,500–6,000/mo 2BR. Premium family area. Near top international schools (UWC, SAS, Tanglin Trust). Green, spacious
- Jurong East/West: S$2,500–4,000/mo 2BR. More affordable. Growing hub (Jurong Lake District). 30-40 min MRT to CBD
- Woodlands/Sembawang: S$2,200–3,500/mo 2BR. Most affordable. Near Malaysia border. Limited nightlife/dining
Property purchase: Foreigners CAN buy private condos and landed properties in Sentosa Cove. CANNOT buy HDB flats (public housing — citizens/PRs only) or landed property on mainland without special approval
Foreign buyer stamp duty: 60% ABSD (Additional Buyer's Stamp Duty) for foreigners (from Apr 2023). A S$2M condo = S$1.2M in ABSD alone`,
    gotchas: `The 60% ABSD for foreign buyers is the highest property tax in the world. Buying property as a non-PR foreigner is economically irrational for most people — rent instead. A S$1.5M condo costs S$900K in ABSD, making the true cost S$2.4M. HDB flats (80% of Singapore housing) are OFF-LIMITS to non-citizens/PRs — this eliminates the most affordable housing stock. Rental contracts are typically 2 years with a 1-year diplomatic clause (early termination if leaving Singapore). Agents charge 1 month's rent as commission (typically paid by tenant for 2-year leases).`,
    pro_tip: `Rent, don't buy — the 60% ABSD makes buying nonsensical for most foreigners. Wait until PR (30% ABSD) or citizenship (0% ABSD on first property). For best value neighborhoods: Katong/Joo Chiat offers the best food + culture + price ratio. Tiong Bahru for trendy walkability. Bukit Timah for families with school-age children. Holland Village for the classic expat experience. Use PropertyGuru and 99.co to search — always negotiate (5-10% below asking is normal). Most condos include pool, gym, security, BBQ pits — the "condo lifestyle" is a real Singapore perk.`,
  },
  {
    topic: 'Property Costs, Stamp Duty & HDB Rules',
    country: 'SG',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'URA; IRAS stamp duty tables; HDB regulations',
    content: `Property costs in Singapore (2026):
Purchase prices (private condominiums per sq ft):
- CCR (prime): S$2,500–3,500+ psf. 2BR (700sqft): S$1.75M–2.45M+
- RCR (city fringe): S$1,800–2,500 psf. 2BR: S$1.26M–1.75M
- OCR (suburbs): S$1,200–1,800 psf. 2BR: S$840K–1.26M
Stamp duties:
- BSD (Buyer's Stamp Duty): 1-6% progressive (all buyers)
- ABSD (Additional): Citizens 1st property 0%, 2nd 20%, 3rd+ 30%. PR 1st 5%, 2nd 30%. Foreigners: 60%
- SSD (Seller's): 12% if sold within 1 year, 8% within 2 years, 4% within 3 years. Zero after 3 years
- Total for foreigner buying S$2M condo: S$1.2M ABSD + S$84K BSD = S$1.284M in duties (64% of price!)
HDB (Housing Development Board) rules:
- 80% of Singaporeans live in HDB flats
- Citizens: Can buy new BTO (Build-To-Order) and resale HDB
- PRs: Can buy RESALE HDB only (after 3 years as PR). Cannot buy new BTO
- Foreigners: CANNOT buy HDB under any circumstances
- HDB prices: 4-room (90sqm) resale in mature estate: S$500K-800K. Non-mature: S$350K-550K
Landed property: Foreigners need SLA (Singapore Land Authority) approval — rarely granted except Sentosa Cove`,
    gotchas: `Singapore's property market is one of the most regulated in the world. The government uses stamp duties as a demand management tool — they WILL increase ABSD again if prices rise too quickly. The 60% ABSD for foreigners was raised from 30% in April 2023, and could go higher. Seller's Stamp Duty means you're locked in for 3 years minimum or face penalties. Condo maintenance fees (S$300-800/month) are an often-overlooked recurring cost. Leasehold properties (99-year lease) depreciate as the lease shortens — freehold is rare and premium.`,
    pro_tip: `The rational approach for most expats: rent until you get PR (ABSD drops to 5%), then buy. If you plan to stay 10+ years and want to buy: focus on RCR (city fringe) resale condos — best value for space. New launches carry 15-20% developer premium. For investment: Singapore property yields 2-3% net — this is NOT an income investment. The value is in capital appreciation (4-5% long-term) and the stability of Singapore real estate. Always factor stamp duties into your total acquisition cost.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Expat Insurance',
    country: 'SG',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'MOH (Ministry of Health); hospital websites; insurance comparison sites',
    content: `Singapore healthcare (2026):
System overview: World-class. Ranked #6 globally (WHO). Efficient, modern, but EXPENSIVE without insurance
Public hospitals (subsidized for citizens/PRs, full price for foreigners):
- Singapore General Hospital (SGH), National University Hospital (NUH), Changi General, Tan Tock Seng
- Foreign EP holders: Can access public hospitals but at UNSUBSIDIZED rates (Class A or B1 wards)
- GP visit (public polyclinic): S$50-80 for foreigners (S$13-20 for citizens)
Private hospitals:
- Mount Elizabeth (Orchard + Novena): Top private. US-level care and US-level prices. GP: S$100-200. Specialist: S$200-500
- Raffles Hospital: Comprehensive. Popular with expats. Slightly lower than Mt Elizabeth
- Gleneagles Hospital: Strong surgical specialties
- Parkway group (owns Mt Elizabeth, Gleneagles, Parkway East): Largest private healthcare group
Cost examples (private, uninsured):
- GP visit: S$80-200
- Specialist consultation: S$200-500
- MRI: S$1,000-2,500
- Childbirth (C-section, private room): S$15,000-25,000
- Hip replacement: S$30,000-50,000
MediSave/MediShield Life: Government healthcare savings/insurance — for citizens and PRs ONLY. Foreigners have NO access to these safety nets
Expat insurance: ESSENTIAL. Not legally required for EP holders, but going uninsured is financially reckless
- Comprehensive plans: S$400-800/month (individual, age 30-50). S$1,200-2,500/month (family)
- Major providers: Cigna, Bupa, AXA, Allianz, Pacific Prime, Raffles Health Insurance
- Employer-provided: Most EP employers provide group medical insurance. Verify coverage level before relying on it`,
    gotchas: `Singapore healthcare is world-class but among the most expensive in Asia. A 3-day private hospital stay can easily cost S$15,000-30,000. Without insurance, a serious medical event can wipe out savings. EP holders are NOT covered by MediShield Life or MediSave — these are for citizens/PRs only. Employer insurance often has low caps (S$30,000-100,000/year) that seem adequate until you need surgery or cancer treatment. Many expats discover their employer plan's limits only when it's too late. Dental is almost never included — budget S$200-400/year for basic dental.`,
    pro_tip: `Get comprehensive private health insurance IMMEDIATELY upon arriving. Don't rely solely on employer coverage — supplement if the annual cap is under S$500K. Cigna and Bupa are the most popular with Singapore expats: S$400-600/month for comprehensive individual coverage including private hospitals. For routine care: use public polyclinics (S$50-80 for foreigners, still cheaper than private GP S$100-200). For serious issues: private hospitals (Mt Elizabeth, Raffles) are worth the premium. Singapore is a medical hub — if you need specialized treatment, it's available here at global-best quality.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living',
    country: 'SG',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; Expatica; MOM; EDB; March 2026 data (S$1.34/USD)',
    content: `Monthly cost of living in Singapore (2026):
Single expat (comfortable): S$5,500–8,000 (~US$4,100–6,000)
- Rent 1BR condo (central): S$2,800–4,500
- Food: S$600–1,200 (hawker S$4-8/meal, restaurant S$20-50, fine dining S$100+)
- Transport: S$120–250 (MRT+bus) or S$2,500+/month (car — see gotcha)
- Utilities (A/C essential): S$150–300
- Health insurance: S$400–800
- Internet + mobile: S$80–120
- Entertainment/social: S$300–600
Couple (comfortable): S$7,000–12,000 (~US$5,200–9,000)
- Rent 2BR condo (decent area): S$3,500–5,500
- Food: S$1,000–1,800
- Everything else scales ~1.5x single
Family of 4 (comfortable): S$12,000–20,000+ (~US$9,000–15,000)
- Rent 3BR: S$5,000–8,000
- International school: S$2,500–4,500/month per child (Tanglin Trust, UWC, SAS, UWCSEA)
- Domestic helper: S$600–800/month + S$300/month levy
KEY EXPENSES:
- Car ownership: S$150K–250K total for a mid-range car (COE alone: S$100K–114K in March 2026 + car price + registration)
- International school: S$30K–55K/year per child
- Alcohol: Heavily taxed. Beer at bar: S$12–18. Wine in supermarket: S$25–50`,
    gotchas: `Car ownership in Singapore is designed to be prohibitive. The COE (Certificate of Entitlement) — just the RIGHT to own a car for 10 years — costs S$108K–114K (March 2026). Add the car price, registration, insurance, and parking (S$300-600/month in CBD), and a Toyota Camry costs ~S$180K. Most expats use MRT + grab (Uber equivalent) instead. International school fees are staggering — S$3K-4.5K/month per child, often with waitlists. Alcohol is taxed at 88 cents per centiliter of pure alcohol — a bottle of wine has ~S$9 in duty. Dining at Western restaurants runs S$30-60/person easily.`,
    pro_tip: `The #1 money-saving hack: eat at hawker centres. Singapore's hawker culture (UNESCO Intangible Cultural Heritage) offers incredible food for S$4-8 per meal. Chicken rice, laksa, char kway teow — world-class food at street-food prices. Budget S$15-20/day eating mostly hawker and your food cost drops to S$500/month. Skip the car — MRT is world-class (clean, fast, S$1-2 per ride), and Grab averages S$10-15 for most city rides. For families: the domestic helper system (S$800-1,100/month all-in) is a life-changer and commonplace — it's part of Singapore's social fabric, not a luxury.`,
  },
  {
    topic: 'Transport, Laws & Daily Life',
    country: 'SG',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'LTA (Land Transport Authority); Singapore Statutes; practical experience',
    content: `Transport and daily life essentials:
TRANSPORT (without a car):
- MRT: 6 lines, 140+ stations. Runs 5:30 AM–midnight (extended hours on weekends). S$1–2.50 per ride. EZ-Link or SimplyGo contactless cards
- Bus: Extensive network. Same contactless cards. S$1–2 per ride
- Grab (ride-hailing): Ubiquitous. S$8–20 for most city rides. Surge pricing during rain/peak hours
- Taxi: ComfortDelGro, SMRT. Metered. Similar to Grab but with midnight/peak surcharges
- Walking: Singapore is walkable but HOT (30-33°C year-round, 80%+ humidity). Underground connections between MRT stations and malls in CBD
STRICT LAWS (seriously enforced):
- Chewing gum: Import/sale banned. Therapeutic gum available from pharmacists with prescription. Not illegal to chew, but you can't buy it
- Littering: S$300 fine first offense. S$1,000 + community service for repeat. Corrective Work Order possible
- Smoking: Banned in all indoor public spaces, within 5m of building entrances, at parks/beaches. Designated smoking areas only. Fine: S$200-1,000
- Drug possession: SEVERE. Death penalty for trafficking certain quantities (15g heroin, 500g cannabis). Even trace amounts = arrest and potential jail
- Jaywalking: S$50 fine (within 50m of a crossing). Actually enforced
- Public intoxication: Can be arrested. Alcohol banned in public spaces (Liquor Control Zones) after 10:30 PM
CLIMATE: Tropical. 25-33°C year-round. Humidity 70-90%. Rain almost daily (usually afternoon thunderstorms, 30-60 min). No seasons. A/C is essential everywhere`,
    gotchas: `Singapore's laws are NOT suggestions — they are enforced. The drug laws are particularly severe: death penalty exists and has been carried out. Do NOT bring any controlled substances into Singapore, even trace amounts in bags/clothing from countries where they're legal. The humidity is relentless — you will sweat walking 5 minutes outdoors. Plan your wardrobe (breathable fabrics only) and activities accordingly. Air conditioning is a utility bill reality: S$150-300/month. The rain pattern (afternoon thunderstorms) is predictable — carry an umbrella always.`,
    pro_tip: `Singapore's strict laws create one of the safest countries on earth — violent crime is virtually nonexistent, streets are clean, and public spaces are immaculate. Embrace it. For the heat: underground mall networks (especially in CBD/Orchard) let you walk for kilometers in A/C. Most activities shift indoors — Singapore is essentially an indoor city. For social life: Singapore's food and drink scene is extraordinary — from Michelin-starred hawker stalls (Liao Fan, Hill Street Tai Hwa) to world-class cocktail bars (Atlas, Manhattan). The "garden city" reputation is real — Marina Bay Sands, Gardens by the Bay, and Botanic Gardens are genuine treasures.`,
  },
  {
    topic: 'Internet, Coworking & Business Environment',
    country: 'SG',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'IMDA; Speedtest.net; ISP websites; coworking directories',
    content: `Internet and business environment in Singapore (2026):
- Home fiber: Among the fastest and cheapest in the world
  * Singtel: 1Gbps from S$46/month, 2Gbps from S$59, 10Gbps from S$119
  * StarHub: 1Gbps from S$44/month
  * M1: 1Gbps from S$40/month
  * MyRepublic: 1Gbps from S$38/month (budget option, reliable)
- Average speed: 250+ Mbps (one of highest globally). 1Gbps is standard
- Mobile: Singtel, StarHub, M1. Prepaid SIM: S$10-20 for 20-50GB. Postpaid: S$25-50 for 50-200GB. 5G widely available
- Coworking:
  * WeWork (multiple locations): From S$550/month hot desk, S$850+ dedicated
  * JustCo: S$350-500/month. Popular local brand
  * The Great Room: S$700+/month. Premium, beautiful spaces
  * Found8: S$400-600/month. Startup-focused
  * The Working Capitol (Keong Saik): S$450+. Creative community
  * Regus: S$300-500/month. Corporate/traditional
- Time zone: SGT (UTC+8). 13 hours ahead of EST. Challenging for US collaboration (your 9 AM = their 10 PM). Good overlap with APAC, Middle East, and Europe morning
- Ease of doing business: Ranked #2 globally (World Bank). Company setup in 1-2 days. 90+ tax treaties. Asia's financial hub. English is business language
- Tech ecosystem: Southeast Asia's largest. Major VC presence. Grab, Sea, Shopee all headquartered here`,
    gotchas: `The UTC+8 timezone is Singapore's biggest drawback for remote workers serving US/European clients. US East Coast collaboration requires working evenings (9 AM EST = 10 PM SGT). European overlap is better (9 AM London = 5 PM Singapore). This timezone issue is the #1 reason some digital nomads/remote workers choose LATAM over Asia. Coworking is expensive compared to SE Asia neighbors (Bangkok, KL have equivalent spaces at 30-50% of Singapore prices). Singapore's wifi is excellent but some older condos have spotty coverage — test before signing a lease.`,
    pro_tip: `MyRepublic 1Gbps for S$38/month is the best internet value in Singapore — no contract lock-in for some plans. For remote workers: Singapore is ideal for APAC-focused businesses (covers Australia, Japan, China, India working hours perfectly). For US collaboration: adopt an "overlap schedule" of 8 AM - 12 PM SGT + 9 PM - 12 AM SGT to cover both APAC daytime and US morning. Singapore's English-language, common-law, corruption-free environment makes it the easiest Asian country for Western professionals to do business in.`,
  },
  {
    topic: 'Education — International Schools & Family Life',
    country: 'SG',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'MOE; school websites; expat family surveys',
    content: `Education options for expat families in Singapore (2026):
International schools (annual fees):
- United World College of South East Asia (UWCSEA): S$42,000–52,000/year. IB curriculum. 2 campuses. Top reputation. 1-3 year waitlist
- Singapore American School (SAS): S$40,000–50,000/year. US curriculum + AP/IB. Woodlands. Huge campus
- Tanglin Trust School: S$38,000–48,000/year. British curriculum. Excellent reputation. Central location
- Canadian International School (CIS): S$32,000–42,000/year. IB programme. Lakeside + Tanjong Katong
- Australian International School: S$30,000–40,000/year. IB + Australian curriculum
- Stamford American: S$35,000–45,000/year. US curriculum. Newer, modern campus
- GEMS World Academy: S$30,000–38,000/year. IB. More affordable option
Waitlists: 6 months to 3 years for top schools (UWCSEA, SAS, Tanglin). Apply BEFORE arriving
Local schools: Singapore's public schools rank #1 globally (PISA). Open to foreigners with EP holder parent — monthly fee S$750–800 (vs S$6-13 for citizens). Extremely competitive, Mandarin-medium for Chinese language
Pre-school/childcare: S$800–2,500/month. International kindergartens: S$1,500–3,000/month
Domestic helpers: S$600–800/month salary + S$300 government levy + food/accommodation. Total: ~S$1,100-1,400/month. Live-in. Common for families with young children — nearly 1 in 5 households has a helper`,
    gotchas: `International school costs are the single biggest family expense — often exceeding rent. S$40K-50K per child per year = S$3,300-4,200/month PER CHILD. A family with 2 kids at UWCSEA pays S$84K-104K/year just for school. Negotiate education allowance in your employment package BEFORE accepting the offer — many companies cover 50-100% of school fees for senior hires. Waitlists at top schools are real — register your children the moment you know you're moving. Some employers' HR departments have priority placement agreements with specific schools.`,
    pro_tip: `For families: education costs should be the FIRST thing you negotiate with your employer. A S$50K school fee allowance is worth more than a S$50K salary increase (no tax on benefits vs taxed salary). If employer won't cover fees: CIS and GEMS are quality alternatives at 20-30% less than UWCSEA/SAS/Tanglin. Local schools are world-class and extraordinarily affordable (S$800/month) — if your children can handle Mandarin and a rigorous academic culture, this is the smartest financial move. The domestic helper system is a genuine lifestyle advantage for families — affordable, live-in childcare that makes dual-career families much more feasible.`,
  },
];
