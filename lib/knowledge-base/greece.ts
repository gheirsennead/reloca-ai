import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const GREECE_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Progressive Income Tax Rates (2026 Reform)',
    country: 'GR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Greek tax code; 2026 Budget Law; Euronews tax reform coverage',
    content: `Greece standard income tax rates for residents (2026, with 2026 reforms):
Progressive tax brackets (reformed January 2026):
- 9%: Up to €10,000
- 22%: €10,001-20,000
- 28%: €20,001-30,000
- 36%: €30,001-40,000
- 39%: €40,001-60,000 (REDUCED from 44% in 2026 reform)
- 44%: Over €60,000
Additional taxes:
- Solidarity contribution: 2.2-10% on income above €12,000 (additional to above rates)
- Special solidarity contribution: 0.6-7% on high incomes
- Municipal surcharges: Up to 0.5%
- Effective top rate: Can reach 50%+ including surcharges
Tax residency triggers:
- 183+ days in Greece in a 12-month period
- Center of vital interests in Greece
- Greek domicile or permanent residence
- Worldwide taxation applies to residents
Key deductions:
- Standard deduction: €3,100-9,100 (income-dependent)
- Mortgage interest: Up to €800
- Medical expenses: Above €300 threshold
- Education expenses: Limited amounts
- Private insurance premiums: Up to €900
Social security contributions:
- Employees: 13.87% (health 2.45%, pensions 6.67%, other 4.75%)
- Self-employed: 20% on declared income
- Employers: 22.29%`,
    gotchas: `Greece has one of Europe's highest effective tax rates when including solidarity contributions and surcharges — the headline 44% rate becomes 50%+ in practice. The 2026 reform (39% instead of 44% on €40-60K bracket) helps the middle class but doesn't address the overall high burden. The solidarity contribution is supposed to be temporary but has been extended repeatedly. Social security contributions are HIGH — 13.87% employee + 22.29% employer. Tax compliance and enforcement have improved dramatically — the cash economy is shrinking. Many expenses require receipts to be tax-deductible — keep detailed records.`,
    pro_tip: `The 2026 tax reform (reducing 44% to 39% on the €40-60K bracket) saves middle-class taxpayers ~€1,000/year. For most expats, the special tax regimes (7% pensioner, €100K HNWI flat tax, or 50% employment exemption) are far more attractive than standard progressive rates. Greek tax authorities are increasingly sophisticated — don't assume you can avoid reporting foreign income. Consider establishing Greek tax residency carefully — once you're in the worldwide taxation system, exit can be complex. The deductions are modest compared to the high rates, so regime planning is critical.`,
  },
  {
    topic: '7% Flat Tax for Foreign Retirees',
    country: 'GR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Greek tax law; TaxesForExpats; MovingTo; Relocate.World pensioner regime analysis',
    content: `Greece 7% flat tax regime for foreign retirees (2026):
Eligibility requirements:
- Must be receiving foreign pension income
- Must transfer tax residency to Greece
- Must NOT have been Greek tax resident in 5 of the previous 6 years
- No minimum age requirement
- Available to nationals of any country
- Must actually relocate to and reside in Greece
Duration and coverage:
- Term: Up to 15 years (longer than most EU equivalents)
- Covers: ALL foreign-source income (pensions, dividends, rental income, interest, consulting fees)
- Greek-source income: Still taxed at standard progressive rates
- Annual election: Must opt in each year
Tax examples:
- €30,000 foreign pension → €2,100 tax (vs ~€5,000+ at standard rates)
- €50,000 foreign income → €3,500 tax (vs ~€10,000+ at standard rates)  
- €100,000 foreign income → €7,000 tax (vs ~€25,000+ at standard rates)
Application process:
- File with Greek tax authorities (AADE)
- Provide pension/income documentation
- Prove transfer of tax residency
- Obtain AFM (Greek tax number)
- Annual filing requirement
Family members:
- Spouse can elect the regime independently if qualifying
- Must each meet individual requirements
- Both must transfer tax residency`,
    gotchas: `The 5-of-6-year non-residency requirement is strictly enforced — any recent Greek tax residency disqualifies you. Greek-source income (local consulting, Greek rental properties) is STILL taxed at progressive rates — only foreign income gets the 7% rate. You must ACTUALLY live in Greece — paper residency won't suffice for tax authorities. The regime requires annual election and documentation — it's not automatic. If you own significant assets in Greece, wealth taxes may still apply. Exit planning is important — returning to standard rates after 15 years can create tax shock.`,
    pro_tip: `Greece's 7% flat tax regime is among Europe's best for foreign retirees — 15 years is longer than Portugal's former NHR (10 years) and Italy's version. The key is genuine relocation — establish clear Greek tax residency, close ties to former country, spend majority of time in Greece. The regime covers ALL foreign income, not just pensions — investment returns, rental income, consulting fees all qualify. Strategy: optimize your foreign income streams before establishing Greek residency, then enjoy 15 years of 7% taxation while living in one of Europe's most beautiful countries. The savings on €50K+ annual foreign income are substantial compared to German, French, or UK tax rates.`,
  },
  {
    topic: 'HNWI €100K Flat Tax & Employment Incentives',
    country: 'GR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Greek non-dom regime; TaxRavens; Astons analysis; employment incentive regulations 2025-2026',
    content: `Greece special tax regimes for high-net-worth individuals and professionals (2026):
HNWI Non-Dom Regime:
- Annual flat tax: €100,000/year on ALL foreign income (regardless of amount)
- Investment requirement: €500,000 minimum investment in Greece (real estate, government bonds, business)
- Duration: Up to 15 years
- Greek-source income: Taxed at standard progressive rates
- Best for: Ultra-HNWI with €300,000+ annual foreign income (makes €100K economical)
- Family: Spouse and children can qualify under separate applications
50% Employment Income Exemption:
- Benefit: 50% of Greek employment/self-employment income is TAX-FREE
- Duration: 7 consecutive years
- Requirements: 
  - Transfer tax residency to Greece
  - Not Greek tax resident in previous 7 years
  - Commit to Greek employment/business activity
- Effective rate: Half of progressive tax rates (e.g. 44% → 22%, 39% → 19.5%)
- Best for: Professionals relocating TO Greece for work
- Covers: Employment salary, self-employment income, professional fees
Comparison with other regimes:
- 7% retiree: Foreign income only, no investment required, 15 years
- €100K HNWI: All foreign income, requires €500K investment, 15 years  
- 50% employment: Greek income only, no investment required, 7 years
- Can combine: HNWI for foreign income + employment exemption for Greek income`,
    gotchas: `The €100K HNWI regime requires €500K minimum investment that must be maintained throughout the regime period. The 50% employment exemption only applies to GREEK-source employment/business income — foreign income is taxed normally (or can be covered by HNWI regime). The 7-year non-residency requirement for employment exemption is longer than the 5-year requirement for retirees. All regimes require genuine Greek tax residency — you must actually live in Greece. Greek tax authorities are increasingly sophisticated in monitoring compliance. Exit from these regimes can create significant tax planning challenges.`,
    pro_tip: `For ultra-HNWI (€500K+ annual foreign income), the €100K flat tax is an excellent deal — much cheaper than Italy's €300K equivalent. The employment exemption is particularly attractive for tech workers, consultants, and executives relocating to Greece — effective tax rates of 19.5-22% on Greek income for 7 years. The combination strategy is powerful: €100K covers unlimited foreign income, 50% exemption covers Greek work income. Greece is positioning itself as a European tax haven for wealthy individuals — stable EU country, beautiful lifestyle, competitive tax regimes. The €500K investment requirement can be satisfied through Athens real estate (which may appreciate) or Greek government bonds.`,
  },

  // === VISA ===
  {
    topic: 'Golden Visa Program (2026 Changes)',
    country: 'GR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Greek Ministry of Migration; Harvey Law; GlobalCitizenSolutions 2025-2026 updates',
    content: `Greece Golden Visa program — major changes effective 2024-2025 (2026):
New tiered investment thresholds:
- High-demand areas: €800,000 (Athens center, Thessaloniki, Mykonos, Santorini, major tourist islands)
- Rest of Greece: €400,000 (most areas outside major cities/islands)
- Previous threshold: €250,000 (until 2024)
Alternative investment options:
- Government bonds: €400,000-800,000 (depending on area)
- Real estate funds: €400,000-800,000
- Corporate bonds/shares: €800,000
- Bank deposits: €800,000 (low return but secure)
- Hotel accommodation shares: €400,000-800,000
Key benefits:
- EU residency: Live anywhere in EU/Schengen
- Family inclusion: Spouse, children under 21, parents over 65
- No residency requirement: Can be absent from Greece
- Renewable: 5-year permits, renewable indefinitely
- Citizenship path: After 7 years of legal residence (must actually live in Greece for citizenship)
- Property rental allowed: Can generate income from Golden Visa property
Application process:
- Property identification or investment selection
- Legal due diligence and purchase
- Application to Greek authorities
- Biometric data collection
- Residence permit issuance
- Processing time: 2-4 months typically
Popular investment areas:
- Athens: Koukaki, Neos Kosmos (still €400K areas), avoid Kolonaki/Kifisia (€800K)
- Islands: Paros, Naxos, Crete interior (€400K) vs Mykonos/Santorini (€800K)
- Thessaloniki suburbs: Many €400K opportunities
- Peloponnese: Excellent value at €400K threshold`,
    gotchas: `The threshold increases are MASSIVE — from €250K to €400K-800K represents 60-220% increases. Athens center and popular islands now require €800K — significantly more expensive than Portugal or Spain equivalents. The "high-demand area" definitions are strict — verify your specific property location. No residency requirement for Golden Visa, BUT you must actually live in Greece for citizenship (7 years). Property must be maintained for visa duration. Greek real estate market has been rising — factor appreciation vs other EU alternatives. Legal due diligence is essential — Greek property law is complex.`,
    pro_tip: `The €400K areas still offer excellent value — focus on Athens periphery, smaller islands, mainland Greece, or Thessaloniki suburbs. Crete (outside Chania/Heraklion centers) and Peloponnese offer beautiful lifestyle at €400K threshold. The Golden Visa property can be rented — unlike some programs, Greece allows investment income generation. Consider the Golden Visa as European portfolio diversification — EU residency + Greek real estate exposure + potential rental yields. The 7% retiree flat tax or €100K HNWI regime can be combined with Golden Visa for tax optimization. Compare total costs: Greece €400K vs Portugal fund €500K vs Spain €500K — Greece may be most cost-effective EU option remaining.`,
  },
  {
    topic: 'Digital Nomad Visa',
    country: 'GR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Greek digital nomad regulations; GetGoldenVisa; CitizenRemote 2025-2026',
    content: `Greece Digital Nomad Visa program (2026):
Requirements:
- Minimum income: €3,500/month (€42,000/year)
- Remote work: Must work for non-Greek employer or foreign clients
- Cannot work for Greek companies
- Health insurance: Comprehensive coverage required
- Accommodation: Proof of housing in Greece
- Clean criminal record
- Tax clearance from home country
Duration and renewal:
- Initial visa: 12 months
- Renewable: Yes, for additional 12-month periods
- Maximum: No stated limit on renewals
- Processing: 10 working days typically
- No physical presence requirement: Can travel within Schengen freely
Tax implications:
- Under 183 days in Greece: Generally not Greek tax resident
- 183+ days: Greek tax resident, worldwide income potentially taxable
- 50% employment exemption may apply if qualifying as new resident
- Consider: Keep detailed travel records to manage tax residency
Application process:
- Online application through Greek consulate
- Required documents: Employment contracts, income proof, insurance, housing
- Visa fee: Standard Greek visa fees
- Can apply from outside Greece
Who it suits:
- Remote employees with €3,500+ monthly income
- Freelancers with international clients
- Location-independent professionals
- Those testing Greece before permanent relocation
Benefits:
- EU/Schengen access: Travel freely within Europe
- Greek lifestyle: Islands, mainland, affordable Mediterranean living
- Base for Europe: Central location for European travel
- Tax optimization: Potential for favorable tax treatment if structured properly`,
    gotchas: `The €3,500/month income requirement is on the higher end of European DN visas — more than Portugal (€2,800), similar to Netherlands. Greek tax residency triggers at 183 days — you'll face worldwide taxation potentially. The 50% employment exemption for new residents might not apply to DN visa holders (interpretation unclear). Health insurance must be comprehensive — travel insurance may not qualify. Working for Greek clients/companies violates the visa terms. The DN visa is relatively new and administrative procedures are still being refined. Currency fluctuation affects the income requirement (calculated in euros).`,
    pro_tip: `Greece's DN visa targets higher-income remote workers but provides excellent lifestyle value — €3,500/month goes much further in Athens than London or Berlin. Tax strategy is critical: stay under 183 days to avoid Greek tax residency, OR establish residency and use 50% employment exemption if applicable. The Greek islands offer unmatched lifestyle for digital nomads — fast internet is increasingly available on major islands. Use the DN visa as a "trial period" for Greece — test the lifestyle before committing to Golden Visa investment. Athens and Thessaloniki offer the best infrastructure; islands are seasonal but spectacular. Consider "island hopping" strategy — winter in Athens, summer in the islands, stay within overall Greek residence for tax optimization.`,
  },
  {
    topic: 'EU Freedom of Movement & Non-Lucrative Visa',
    country: 'GR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'EU regulations; Greek immigration law; non-lucrative visa requirements 2025-2026',
    content: `Greece visa options for EU citizens and non-lucrative residents (2026):
EU/EEA citizens (automatic rights):
- No visa required: Automatic right to live and work
- Registration: Must register with local authorities after 3 months
- Required documents: Valid ID/passport, proof of income or employment
- Healthcare: EHIC initially, then join EOPYY (Greek health system)
- Permanent residence: Automatic after 5 years continuous residence
- Family: Non-EU spouses/children get EU family reunification status
Non-Lucrative/Financially Independent Person (FIP) Visa:
- For: Retirees, remote workers, those with passive income
- Income requirement: ~€2,000/month individual, €3,000 for family
- Cannot work: Prohibited from Greek employment
- Passive income: Pensions, investments, rental income, savings
- Duration: 1-2 years initially, renewable
- Processing: 1-3 months
- Requirements: Health insurance, accommodation proof, financial documentation
Investment Visa (non-Golden Visa):
- Lower threshold: €25,000 minimum investment
- Business investment: Start/buy Greek business
- Job creation: May require hiring Greek employees
- Active management: Must be involved in business operations
- Path to permanent residence: Through business success
Student to Residence transition:
- Greek university graduates: Can apply for job-seeking visa
- EU Blue Card: For skilled professionals (university degree + job offer)
- Processing: Varies by pathway
Greek citizenship (for long-term residents):
- 7 years legal residence: Standard naturalization timeline
- Greek language test: Required for citizenship
- Integration requirements: Knowledge of Greek culture/history
- EU citizenship: Full EU rights upon naturalization`,
    gotchas: `EU citizens still must register with local authorities — unregistered residence creates problems for healthcare and banking. The FIP visa income requirements are guidelines, not strict law — consulate discretion applies. "Cannot work" restriction on FIP is strict — any Greek employment violates terms. The €25K investment visa requires genuine business activity, not passive investment. Greek language learning is essential for citizenship — the test is mandatory and conducted in Greek. Processing times can be long and unpredictable. Different consulates interpret requirements differently — some are more demanding than others.`,
    pro_tip: `EU citizenship (including Irish ancestry, Italian jure sanguinis, Portuguese Golden Visa) is the easiest path to Greek residence — no visa bureaucracy. For non-EU citizens, the FIP visa is Greece's equivalent to Spain's non-lucrative visa — good for retirees and remote workers with passive income. The 7% retiree flat tax combined with FIP residency creates an attractive package for foreign pensioners. Consider the investment visa for those wanting to run a Greek business — the tourism and hospitality sectors offer opportunities. Greek citizenship after 7 years provides one of the strongest EU passports (visa-free to 184 countries). Language learning is the biggest barrier to citizenship — start Greek lessons immediately if citizenship is the goal.`,
  },

  // === BANKING ===
  {
    topic: 'Greek Banking System & AFM Requirements',
    country: 'GR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Greek banking requirements; AFM registration process; expat banking experiences 2025-2026',
    content: `Greek banking system for expats (2026):
AFM (Tax Identification Number) — ESSENTIAL first step:
- Required for: Bank account, property purchase, utility contracts, car registration, everything
- How to get: Tax office (DOY - Dimosio Organismo Ypourgeiou) with passport and residence proof
- Processing: Same day if documents complete
- Cost: Free
- Required documents: Passport, proof of address in Greece, visa/residence permit
Major Greek banks:
- Alpha Bank: Largest, good international services, English-speaking staff
- Eurobank: Strong private banking, expat-friendly
- Piraeus Bank: Traditional, extensive branch network
- National Bank of Greece: Historic, government connections
- Optima Bank: Smaller, more personalized service
Account opening requirements:
- AFM (non-negotiable)
- Passport + residence permit/visa
- Proof of address in Greece
- Employment letter or income documentation
- Minimum deposit: €100-500 typically
- Process time: 1-2 weeks (faster than neighboring countries)
Account costs and features:
- Maintenance fees: €0-15/month depending on account type
- Debit card: Usually free
- International transfers: €15-30 within EU, €25-50 outside EU
- ATM fees: Free at own bank, €1-3 at others
- Online banking: Available in Greek and English at major banks
- Credit cards: Available after 6-12 months banking history
Digital banking alternatives:
- Revolut: Works well in Greece, euro account
- N26: German bank, good for initial period
- Wise: Excellent for international transfers
- Local fintech: TBI Bank, Viva Wallet gaining popularity`,
    gotchas: `No AFM = no banking, no contracts, no official life in Greece. AFM application requires Greek address — you may need temporary accommodation first. Account opening can require employment proof even for retirees (show pension documentation). Greek banks are conservative — building credit takes time. International wire transfers are expensive and slow through traditional banks. Some banks have limited weekend/evening hours. Online banking is improving but still behind Northern European standards. Branch closures in smaller towns — verify access before choosing remote locations.`,
    pro_tip: `Get AFM immediately upon arrival — it's the key to everything in Greece. Alpha Bank and Eurobank have the best English-language support and international experience. Use Revolut or Wise for international transfers and multi-currency needs while establishing your Greek banking relationship. The Greek banking system is stable and modern after the financial crisis — don't let past reputation concerns affect current decisions. Consider multiple banks — one major Greek bank for daily life, plus a digital alternative for international flexibility. Build banking history quickly to access credit products — useful for property purchases.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Athens Neighborhoods & Property Market',
    country: 'GR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Athens property market analysis; Investropa 2026; MovingTo neighborhood guide',
    content: `Athens real estate market for expats (2026):
City-wide trends:
- Average price: €2,450-2,900/sqm (up 7.6% in 2025)
- Rental market: Strong growth, yields 4-7%
- Golden Visa impact: €800K threshold affects central areas
Premium neighborhoods (€800K Golden Visa zone):
- Kolonaki: €5,400-6,150/sqm, luxury shopping district
  - Rent: €1,200-2,000/month (1-2BR)
  - Character: Upscale, boutiques, galleries, embassies
- Kifisia: €4,500-5,500/sqm, affluent northern suburb
  - Rent: €800-1,400/month
  - Character: Leafy, international schools, family-oriented
- Glyfada: €5,200/sqm, "Greek Riviera" coastal
  - Rent: €1,000-1,600/month  
  - Character: Beach lifestyle, marina, nightlife
Mid-tier neighborhoods (€400K Golden Visa eligible):
- Koukaki: €3,000-4,000/sqm, trendy near Acropolis
  - Rent: €800-1,300/month
  - Character: Gentrifying, good restaurants, walking distance to center
- Neos Kosmos: €2,800-3,500/sqm, up-and-coming
  - Rent: €700-1,100/month
  - Character: Young professionals, metro access
- Pangrati: €3,200-3,800/sqm, residential with character
  - Rent: €750-1,200/month
  - Character: Traditional, good tavernas, less touristy
Budget-friendly areas:
- Patisia: €1,800-2,200/sqm
- Plateia Attikis: €1,700-2,000/sqm
- Rent: €500-800/month
- Character: Working class, authentic, improving infrastructure
Athens rental market:
- Strong demand: Tourism and local renters
- Airbnb restrictions: Central areas limiting short-term rentals
- Long-term yields: 4-6% gross returns
- Seasonal variation: Summer premium for furnished rentals`,
    gotchas: `The €800K Golden Visa threshold significantly impacts central Athens — Kolonaki, Kifisia, central Glyfada require higher investment. Athens air pollution and traffic are real quality-of-life issues. Summer heat (35-40°C) makes air conditioning essential — factor €100-300/month extra electricity costs. Many older buildings lack elevators or proper insulation. Balconies are essential for Athens lifestyle — verify before purchase/rental. Noise can be significant — Greeks socialize late into the night. Short-term rental regulations are tightening in central areas.`,
    pro_tip: `Koukaki offers the best balance for most expats — walking distance to Acropolis, gentrifying area, still €400K Golden Visa eligible, strong rental demand. Neos Kosmos is the emerging value play — metro access, young demographic, reasonable prices. For families, Kifisia provides international school access but requires €800K investment. Consider buying in €400K areas for Golden Visa, then rent in premium areas for lifestyle. Athens property appreciation (7.6% in 2025) is strong among EU capitals. The proximity to islands and archaeological sites provides unique lifestyle value — you're buying into 3,000 years of history.`,
  },
  {
    topic: 'Greek Islands & Coastal Property',
    country: 'GR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Greek island property markets; Golden Visa area classifications 2025-2026',
    content: `Greek islands and coastal real estate (2026):
€800K Golden Visa islands (premium):
- Mykonos: €8,000-15,000/sqm, global luxury destination
  - Character: International jet-set, summer clubs, very expensive
  - Season: June-September peak, quiet off-season
- Santorini: €6,000-12,000/sqm, iconic tourism destination
  - Character: Volcanic caldera views, cruise tourism, romantic
  - Challenges: Overtourism, water shortages, building restrictions
- Paros (parts): €3,000-6,000/sqm, emerging luxury
  - Character: Traditional Cycladic, less crowded than Mykonos
€400K Golden Visa islands (value):
- Crete (outside main cities): €1,500-3,500/sqm
  - Areas: Chania suburbs, Rethymno, Ierapetra, inland villages
  - Character: Largest island, year-round life, excellent food
- Paros (most areas): €2,000-4,000/sqm
  - Character: Beautiful beaches, traditional villages, ferry connections
- Naxos: €1,800-3,500/sqm
  - Character: Less developed, authentic Greek life, good value
- Rhodes (outside town): €2,000-4,000/sqm
  - Character: Medieval city, good infrastructure, year-round flights
- Corfu: €2,500-4,500/sqm
  - Character: Green island, Venetian influence, good connections to Italy
Mainland coastal:
- Peloponnese: €1,200-2,800/sqm (all €400K eligible)
  - Areas: Nafplio, Monemvasia, Mani Peninsula
  - Character: Historical sites, authentic, less touristy
- Halkidiki: €2,000-4,000/sqm
  - Character: Beautiful beaches, pine forests, developing
Island living considerations:
- Summer season: High tourism, inflated prices, water/power issues
- Winter isolation: Limited ferries, closed businesses, social isolation
- Healthcare: Basic facilities only — serious cases to Athens
- Internet: Improving but still variable
- Cost of living: 20-50% higher than mainland due to transport costs
- Building restrictions: Archaeological/environmental limits on development`,
    gotchas: `Island life is seasonal — summer paradise, winter isolation. Water shortages are real on smaller islands in summer. Building permits are complex with archaeological/environmental restrictions. Healthcare is basic — serious medical issues require Athens evacuation. Internet reliability varies dramatically by island and location. Ferry schedules change seasonally — you may be trapped in winter storms. Cost of living is significantly higher than mainland due to transport costs. Some islands have severe summer overtourism (Santorini, Mykonos). Winter depression is common among expats — factor psychological impact.`,
    pro_tip: `Crete offers the best island lifestyle compromise — large enough for year-round amenities, still €400K Golden Visa eligible, excellent food culture, reasonable healthcare. Naxos and Paros provide authentic Greek island life without Santorini/Mykonos crowds. Consider mainland coastal (Peloponnese, Halkidiki) for beach lifestyle with better infrastructure and €400K eligibility. The "island hopping" lifestyle is viable — rent different islands seasonally rather than buying. For investment, focus on islands with year-round populations and good ferry/air connections. Factor 2-3x higher living costs than mainland Athens when budgeting island life.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'EOPYY Public Healthcare System',
    country: 'GR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Greek healthcare system guide; EOPYY registration; MovingTo healthcare analysis 2025-2026',
    content: `Greece public healthcare system (EOPYY/ESY) for expats (2026):
System overview:
- ESY: National Health System (Ethniko Systima Ygeias)
- EOPYY: National Organization for Healthcare Provision (main insurer)
- AMKA: Social Security Number (required for all healthcare access)
Registration for expats:
- Legal residents: Automatic access after obtaining AMKA
- EU citizens: Use EHIC initially, then register with EOPYY
- Non-EU residents: Must obtain residence permit first
- Self-employed/unemployed: Can buy into EOPYY (~€25-50/month)
Coverage:
- GP visits: Free with referral system
- Hospital treatment: Free for emergencies and inpatient care
- Specialist consultations: Small copay (€5-15)
- Prescription medications: €0-25% copay depending on drug
- Dental: Limited coverage (mainly extractions)
- Mental health: Available but limited resources
- Emergency care: Free regardless of status
Quality and access:
- Athens/Thessaloniki: Good quality, modern hospitals
- Islands/rural areas: Basic care only, serious cases referred to Athens
- Waiting times: Can be long for non-emergency procedures
- Language: Greek primarily, limited English
- Equipment: Varies dramatically by location and facility
Top public hospitals:
- Athens: Evangelismos, Laiko, Sotiria
- Thessaloniki: AHEPA, Ippokratio
- Crete: PAGNI (Heraklion)
- Quality: Generally good clinical care, outdated facilities`,
    gotchas: `AMKA registration is bureaucratic and can take weeks — gap coverage needed initially. The referral system is strict — you must see GP first for specialist access. Waiting times for non-emergency procedures can be very long (months). Language barrier is significant — very few English-speaking doctors in public system. Island healthcare is basic — serious conditions require expensive medical evacuation to Athens. Dental coverage is minimal — budget for private dental care. Mental health resources are limited and have long waiting lists. The system is improving but still recovering from financial crisis impacts.`,
    pro_tip: `EOPYY provides solid basic healthcare coverage for residents — the financial protection is excellent once registered. EU citizens should transition from EHIC to EOPYY registration as soon as possible. The referral system works well once you understand it — establish relationship with a good GP (choose carefully). Athens public hospitals provide good clinical care despite sometimes outdated facilities. For islands/rural living, factor medical evacuation insurance or maintain private coverage. The system handles emergencies well — don't hesitate to use emergency services when needed. Prescription drug coverage is excellent — many medications are free or very cheap.`,
  },
  {
    topic: 'Private Healthcare & Top Hospitals',
    country: 'GR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Greek private hospital data; insurance costs 2025-2026; expat healthcare experiences',
    content: `Greece private healthcare system (2026):
Top private hospitals:
- Metropolitan Hospital (Athens): International standards, English-speaking
- Hygeia Hospital (Athens): Advanced medical center, research focused
- Euromedica (Thessaloniki): Leading northern Greece private facility
- Henry Dunant (Athens): American-founded, international protocols
- IASO (Athens): Strong maternity and general medicine
- Mediterranean Hospital (Crete): Best private option on Crete
Private healthcare costs:
- GP consultation: €50-80
- Specialist visit: €80-150
- Emergency room: €100-200
- Diagnostic tests: MRI €200-400, CT scan €150-300, blood work €30-80
- Dental: Cleaning €50-80, implant €800-1,500
- Minor surgery: €500-2,000
- Hospital stay: €150-300/night private room
Private insurance options:
- Local insurers: €80-200/month (DAS, Ethniki, Interamerican)
- International plans: €150-400/month (Cigna, Bupa, Axa)
- Employer plans: Many multinational companies provide private coverage
- Coverage levels: Basic (€80-120/month) to comprehensive (€200-400/month)
English-language care:
- Athens: Good availability at private hospitals
- Thessaloniki: Limited but available at top facilities
- Islands: Very limited — serious cases require Athens transfer
- Many doctors trained in UK, US, Germany
Medical tourism:
- Competitive pricing vs Northern Europe
- Good quality at major private facilities
- Popular procedures: Dental, cosmetic surgery, fertility treatments
- 30-50% savings vs UK/Germany for many procedures`,
    gotchas: `Private healthcare costs are moderate by EU standards but add up quickly. English-speaking care is mainly available in Athens private hospitals — limited elsewhere. Private insurance often has significant copays and exclusions — read terms carefully. Some procedures not covered by insurance require large out-of-pocket payments. Dental care is expensive even with insurance — many expats return home for major dental work. Island private healthcare is very limited — serious conditions require expensive Athens transfer. Emergency evacuation insurance essential for island living. Some private doctors don't accept insurance direct billing — you pay and get reimbursed.`,
    pro_tip: `The optimal strategy is EOPYY public insurance + modest private insurance (€80-150/month) for faster access and English-language care. Athens offers excellent private healthcare at 40-60% of Northern European costs. Metropolitan and Hygeia hospitals rival quality anywhere in Europe. For islands/remote areas, maintain comprehensive insurance with medical evacuation coverage. Consider dental tourism to Greece — quality is high and costs are 50-70% less than Northern Europe. Many procedures can be planned during visits to Athens rather than maintaining expensive full private coverage. Greek private doctors often trained internationally — clinical quality is excellent at top facilities.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living Breakdown',
    country: 'GR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Greek cost of living data; MovingTo; GlobalCitizenSolutions 2025-2026 surveys',
    content: `Greece cost of living for expats (2026):
Monthly budget ranges:
- Athens (comfortable): €1,400-1,700/month single person
- Thessaloniki (comfortable): €1,200-1,500/month single person
- Smaller cities: €1,100-1,400/month single person
- Islands (varies seasonally): €1,200-2,000/month (summer much higher)
Athens detailed breakdown (single person, comfortable):
- Rent (1BR central): €500-900/month
- Utilities: €80-150/month (air conditioning adds significantly in summer)
- Internet: €25-35/month
- Mobile phone: €15-25/month
- Groceries: €250-350/month
- Dining out: €200-400/month (€8-15 taverna meals, €25-40 nice dinner)
- Transportation: €30-50/month (public transport excellent)
- Entertainment: €100-200/month
- Health/fitness: €40-80/month
Food costs:
- Taverna meal: €8-15
- Coffee (frappé/espresso): €1.50-3
- Beer (local): €2-4
- Wine (bottle): €5-15 (excellent local wines)
- Bread: €0.80-1.20
- Olive oil (good quality): €4-8/liter
- Fresh fish: €8-20/kg depending on type
Island cost premium:
- Summer season: 30-50% higher than mainland
- Transportation: Ferry costs add €50-200/month depending on frequency
- Food: 20-30% higher due to transport
- Accommodation: Summer rent 2-3x winter rates in tourist areas
Regional variations:
- Athens: Most expensive, best services
- Thessaloniki: 10-20% cheaper than Athens
- Crete: Similar to Athens in towns, cheaper in villages  
- Smaller islands: Variable — touristy ones expensive, remote ones cheap
- Peloponnese: 20-30% cheaper than Athens`,
    gotchas: `Summer cooling costs in Athens can reach €200-300/month for air conditioning — budget accordingly. Island living costs spike dramatically in summer tourist season. Imported goods are expensive — Greek products are much cheaper. Heating costs in winter (Athens gets cold) can be significant. Car ownership is expensive (insurance, fuel, parking in Athens). Tourist areas have inflated prices year-round. Restaurant portions in Greece are large — factor into food budgeting. Some islands have seasonal business closures — fewer options and higher costs in winter.`,
    pro_tip: `Greece offers excellent Mediterranean lifestyle value — €1,500/month in Athens buys better quality of life than €3,000 in London or Paris. Focus on Greek products and local markets for 40-60% food savings vs supermarkets. The taverna culture provides excellent value — €10-12 gets a full meal with wine. Summer in Athens is challenging — many affluent Greeks escape to islands or mountains. Consider seasonal living: winter in Athens (cheaper, cultural life), summer in islands or cooler mountains. Public transportation in Athens is excellent and cheap — car ownership optional in cities. The balance of affordable living + EU membership + beautiful environment is hard to beat globally.`,
  },
  {
    topic: 'Property Purchase Process & Legal Considerations',
    country: 'GR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Greek property law; purchase procedures for foreigners 2025-2026',
    content: `Greece property purchase process for foreigners (2026):
Foreign ownership rights:
- EU citizens: Full ownership rights, no restrictions
- Non-EU citizens: Full ownership rights in most areas
- Border restrictions: Some limits near borders (rare)
- No residency requirement: Can buy as non-resident
Purchase process:
1. Property identification and price negotiation
2. Preliminary agreement (prosynfono): 10% deposit typical
3. Due diligence: Title search, planning permissions, tax clearances
4. AFM (tax number): Required for all property purchases
5. Notary deed (symvolaio): Final contract in Greek, notary required
6. Property transfer: Registration at Land Registry (Ktimatologio)
7. Municipal registration: Update local records
Transaction costs:
- Transfer tax: 3.09% of declared value
- Municipal tax: 3% of declared value  
- Legal fees: 1-2% of purchase price
- Notary fees: 1-1.5% of purchase price
- Surveyor fees: €300-800
- Total costs: ~8-10% of property value
Financing options:
- Greek mortgages: Available to residents, 3-5% rates (2026)
- LTV ratios: 70-80% for residents, 50-60% for non-residents
- International financing: Use home country equity/mortgages
- Cash purchases: Common and often preferred by sellers
Key legal considerations:
- Planning permissions: Verify all construction is legal
- Archaeological zones: Building restrictions possible
- Forest land: Special restrictions and inheritance issues
- Ownership structure: Clear title essential
- Tax obligations: Annual property taxes and potential rental income tax
Golden Visa specific requirements:
- Minimum values: €400K or €800K depending on location
- Property condition: Any condition acceptable (including renovation projects)
- Rental allowed: Can generate income from Golden Visa property
- Professional management: Many investors use property management companies`,
    gotchas: `Total transaction costs at 8-10% are among Europe's highest — budget accordingly. All legal documents are in Greek — certified translation costs extra. Some properties have unclear title histories — thorough due diligence essential. Archaeological restrictions can limit renovations/expansions. Forest land designation can cause inheritance problems for children. Greek bureaucracy applies — property registration can take weeks. Some areas have building restrictions that limit development potential. Tax obligations continue even if property is empty. Island properties may have water/access issues not immediately apparent.`,
    pro_tip: `Always use an independent Greek lawyer experienced with foreign buyers — €1,000-2,000 legal fees are money well spent. Verify planning permissions thoroughly — illegal construction is common and expensive to rectify. The preliminary agreement (prosynfono) is binding — don't sign without completed due diligence. Consider Golden Visa implications in location choice — €400K vs €800K threshold matters. Property management companies charge 8-15% but handle rentals, maintenance, and tax obligations for non-resident owners. Athens and major islands have established expat-friendly legal services. Negotiation is expected — 10-20% below asking price is normal starting point.`,
  },
  {
    topic: 'Language Learning & Cultural Integration',
    country: 'GR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Greek language learning resources; cultural integration experiences 2025-2026',
    content: `Greek language and cultural integration for expats (2026):
Language reality:
- English in Athens: Moderate in tourism/business, limited in daily life
- English on islands: Tourist areas good, local life requires Greek
- English in Thessaloniki: Limited outside international business
- English elsewhere: Very limited — Greek essential
- Greek language: Unique alphabet (24 letters), different structure from Latin languages
Greek language learning:
- Alphabet: Must learn Greek letters — takes 2-4 weeks of study
- Basics for daily life: 3-6 months intensive study
- Conversational fluency: 12-18 months with immersion
- Resources: Greek language schools (€200-500/month), online (Duolingo limited), private tutors (€15-25/hour)
- Citizenship requirement: Greek language test mandatory for naturalization
Cultural integration keys:
- Coffee culture: Greeks spend hours at kafenio — join this social ritual
- Family importance: Extended family central to Greek life
- Hospitality (filoxenia): Greeks are genuinely welcoming — accept invitations
- Religious awareness: Orthodox calendar affects business and social life
- History pride: Show genuine interest in Greek history and culture
- Personal relationships: Business is relationship-based — invest in connections
Social integration strategies:
- Neighborhood café: Become regular at local kafenio
- Greek classes: Group classes provide social connections
- Cultural activities: Join archaeological societies, cultural clubs
- Sports: Tennis, swimming, hiking groups welcome foreigners
- Volunteer work: Opportunities with NGOs, environmental groups
- Orthodox festivals: Participate respectfully in local celebrations
Greek social customs:
- Punctuality: More relaxed than Northern Europe, but respect business appointments  
- Personal space: Closer physical proximity, more touching in conversation
- Meal times: Lunch 2-3 PM, dinner 9-11 PM (later than most countries)
- Gift giving: Bring something when invited to homes
- Name days: More important than birthdays in Greek culture
- Political discussion: Greeks are passionate about politics — be respectful listener`,
    gotchas: `The Greek alphabet is a real barrier initially — you can't read signs, menus, or street names without it. Greek grammar is complex with cases and verb conjugations. The language barrier is more significant than in Western European countries — fewer Greeks speak English than in neighboring countries. Cultural time adjustments are real — late dinners, different business hours, siesta culture. Religious calendar affects business — many holidays and saint days close businesses. Greek bureaucracy operates on relationship basis — impersonal efficiency isn't the cultural norm. Political discussions can be intense — Greeks have strong opinions shaped by recent economic crisis.`,
    pro_tip: `Start with the alphabet immediately — memorizing Greek letters is your first task. Even basic Greek (greetings, numbers, please/thank you) earns enormous goodwill from locals. The kafenio (coffee shop) is your integration hub — become a regular, learn names, practice Greek. Greeks genuinely appreciate foreigners who make effort to learn their language and culture. Consider intensive Greek courses in summer before relocating — many universities offer excellent programs. The Orthodox calendar provides natural cultural learning opportunities — Easter celebrations, name day traditions. Build genuine relationships rather than superficial expat bubble connections — Greeks prefer depth over breadth in friendships. Patience with bureaucracy and slower pace of life leads to better mental health and integration.`,
  },
  {
    topic: 'Climate & Lifestyle Adaptation',
    country: 'GR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Greek climate data; expat lifestyle adaptation experiences 2025-2026',
    content: `Greece climate and lifestyle adaptation for expats (2026):
Climate overview:
- Mediterranean: Hot, dry summers (June-September), mild winters
- Athens: 35-40°C summer highs, 5-15°C winter range
- Islands: Moderated by sea, but can be very hot and windy
- Northern Greece: Colder winters, more rainfall
Seasonal lifestyle patterns:
- Summer (June-September): Very hot, beach season, tourist influx
  - Siesta culture: Many businesses close 2-5 PM
  - Late nights: Dinner at 9-11 PM, social life until 2-3 AM
  - Island exodus: Athenians flee to islands/mountains
- Winter (December-March): Mild but can be rainy, Athens cultural season
  - Earlier schedules: More Northern European rhythm
  - Heating: Can be expensive, buildings often poorly insulated
Lifestyle adaptation challenges:
- Summer heat: Air conditioning essential, lifestyle adjustment needed
- Late schedule: Greeks eat dinner at 9-11 PM, socialize very late
- Bureaucracy: Slow pace, relationship-based, requires patience
- Language barrier: Greek essential outside tourist areas
- Island isolation: Ferry-dependent, seasonal business closures
Social integration:
- Coffee culture: Central to Greek social life, spend hours at cafenio
- Extended family importance: Greeks prioritize family time
- Religious calendar: Orthodox holidays affect business/social life
- Hospitality: Greeks are very welcoming to foreigners
- Outdoor living: Balconies, terraces, outdoor dining central to life
Cultural considerations:
- Work-life balance: Greeks prioritize leisure and family
- Pace of life: Slower than Northern Europe, rushing is impolite
- Personal relationships: Business and friendships intertwined
- Pride in Greek culture: Show interest in history and traditions
- Economic sensitivity: Greeks have been through difficult economic times`,
    gotchas: `Athens summer heat (35-40°C) is genuinely challenging — air conditioning is not optional. The late social schedule takes real adjustment — dinner at 9 PM minimum, social life goes until 2-3 AM. Greek bureaucracy is slower than Northern European standards — patience essential. Island life isolation in winter can be psychologically difficult. Language barrier is real — Greek is essential for integration. Economic inequality is visible — be sensitive about displaying wealth. Power outages possible in summer due to AC demand. Water shortages can occur on islands in peak summer.`,
    pro_tip: `Embrace the Greek rhythm rather than fighting it — late dinners, afternoon siestas, relaxed pace. Learn basic Greek immediately — even simple phrases earn enormous goodwill. Athens in summer requires adaptation: early morning activities, afternoon siesta, late evening social life. Consider seasonal strategies: Athens winter (cultural season, cooler weather), islands summer (if you can handle crowds). The outdoor lifestyle is a major health benefit — year-round terrace dining, walking, beach access. Greeks are genuinely hospitable — accept invitations, show interest in culture, build personal relationships. The slower pace of life is a feature, not a bug — it supports better work-life balance and mental health.`,
  },
];