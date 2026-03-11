import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const UAE_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'UAE Zero Personal Income Tax System',
    country: 'AE',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Federal Tax Authority (FTA); UAE Ministry of Finance',
    content: `UAE personal taxation (2026):
- Personal income tax: 0% on employment, business profits, dividends, capital gains
- Corporate income tax: 9% on profits above AED 375,000 (introduced June 2023). 0% on first AED 375,000 ($102,000)
- VAT: 5% on most goods and services (introduced 2018)
- Excise tax: 50-100% on tobacco, energy drinks, carbonated drinks
- No wealth tax, inheritance tax, or gift tax
- Emirates with free zones: Each emirate sets own rules. Abu Dhabi, Dubai, Sharjah have extensive free zone networks
- Tax residency: Based on UAE residence visa + 90+ days physical presence (new 2022 rules for corporate tax purposes)
- Substance requirements: For corporate tax benefits, need genuine business activity in UAE
- Banking secrecy: Strong but cooperates with OECD countries under CRS (Common Reporting Standard)`,
    gotchas: `The 9% corporate tax (effective 2023) changed UAE's zero-tax reputation for businesses. Many free zone companies lost their tax exemption. The 90-day physical presence requirement for tax benefits is new and enforced. UAE exchanges tax information with 100+ countries under OECD CRS — it's not a tax haven for hiding assets. Employment sponsorship ties your visa to your employer — losing job means potential visa cancellation.`,
    pro_tip: `UAE works best for high-net-worth individuals who can qualify for investor visas (independent of employment) and those earning $200K+ where the zero income tax creates massive savings vs Western countries. The Golden Visa program offers 10-year renewable residency for investors, exceptional talents, and skilled professionals. For US citizens: still owe US taxes on worldwide income despite UAE residence.`,
  },
  {
    topic: 'Golden Visa Program & Investment Residency',
    country: 'AE',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'UAE Golden Visa Portal; General Directorate of Residency and Foreigners Affairs',
    content: `UAE Golden Visa categories (2026):
- Real estate investors: AED 2M+ property purchase (Dubai), AED 1M+ (other emirates). 10-year renewable visa
- Entrepreneurs: AED 500K+ investment in startup with government approval. Must maintain business for visa validity  
- Skilled professionals: Doctors, engineers, scientists, executives with specific qualifications. Salary requirement AED 30K+/month
- Outstanding students: High-achieving university graduates in UAE
- Exceptional talents: Artists, authors, inventors, athletes with government recognition
- Investors in economy: AED 10M+ investment in companies, investment funds, or new projects
Benefits: 10-year renewable visa, family sponsorship, unlimited exit/re-entry, no need for employer sponsorship
Processing: 2-6 months depending on category. Fast-track available for high-investment categories
Investment can be: Property, company shares, investment funds, government bonds`,
    gotchas: `Golden Visa investment requirements are MINIMUM amounts — the actual approval depends on meeting specific criteria and government assessment. Real estate must be held throughout visa validity — selling can void the visa. Employment-based Golden Visas still tie you to specific sectors/roles. The "exceptional talent" category is highly subjective and difficult to qualify for. Family sponsorship includes spouse and children but has age limits and dependency requirements.`,
    pro_tip: `Real estate investment is the most straightforward Golden Visa path: buy AED 2M+ property in Dubai (many options available), get 10-year visa. The property generates rental income (4-7% gross yields) while providing residency. Dubai property market is liquid and transparent. For entrepreneurs: the startup investment path is complex but offers the most flexibility if you're building a business.`,
  },
  {
    topic: 'Free Zone Business Structures',
    country: 'AE',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Dubai International Financial Centre; Abu Dhabi Global Market',
    content: `UAE Free Zone company options:
Major free zones:
- DIFC (Dubai International Financial Centre): Financial services. USD 365,000+ minimum capital. 0% corporate tax maintained. Full foreign ownership
- ADGM (Abu Dhabi Global Market): Financial hub competing with DIFC. Similar benefits
- DMCC (Dubai Multi Commodities Centre): Trading, commodities. AED 300,000+ minimum capital
- Dubai Internet City: Tech companies. Lower capital requirements
- Jafza (Jebel Ali Free Zone): Import/export, logistics. Established free zone
- RAK ICC (Ras Al Khaimah): Lowest cost option. AED 15,000 setup costs

Benefits: 100% foreign ownership, 0% corporate tax (for qualifying activities), simplified setup, fast company formation (1-2 weeks)
Corporate tax impact (2023+): Most free zones lost blanket exemption. Now must meet "qualifying income" tests for 0% rate
Visa sponsorship: Companies can sponsor employees for residence visas
Restrictions: Cannot trade directly in UAE market — must use distributors`,
    gotchas: `The 2023 corporate tax law changed everything — most free zone companies now pay 9% tax unless they meet specific "qualifying activities" criteria. Free zone benefits are being reduced gradually. Minimum capital requirements must be actually paid in, not just authorized. Some free zones have annual license renewal fees of $10,000-50,000. Free zone companies cannot do business directly with UAE mainland companies — must go through approved distributors.`,
    pro_tip: `DIFC and ADGM remain the most tax-efficient for financial services — they maintained their 0% corporate tax rates. For other businesses, do the math: 9% UAE corporate tax + free zone costs vs mainland company (which can trade directly in UAE market). RAK ICC is the budget option for simple holding companies or online businesses that don't need physical presence. Always verify current tax treatment before committing — rules change frequently.`,
  },
  {
    topic: 'US-UAE Tax Considerations',
    country: 'AE',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'IRS guidance; US-UAE tax treaty framework',
    content: `US citizens in UAE tax implications:
- No US-UAE tax treaty: US citizens get no treaty benefits or foreign tax credits for UAE taxes (since UAE has no income tax)
- US worldwide taxation: Must file US returns and pay US tax on worldwide income regardless of UAE residence
- Foreign Earned Income Exclusion (FEIE): $130,000 exclusion for 2026 if meet bona fide residence or physical presence test
- Foreign Housing Exclusion: Additional exclusion for high housing costs in UAE (Dubai/Abu Dhabi qualify)
- No foreign tax credits: Since UAE has 0% income tax, no foreign taxes to credit against US tax liability
- FBAR and FATCA: Must report UAE bank accounts and investments. UAE banks report to IRS under FATCA
- Exit tax: US citizens with $2M+ net worth face exit tax if renouncing citizenship
- Estate tax: UAE has no estate tax but US estate tax still applies to worldwide assets
- State taxes: Some US states (CA, NY) continue to tax former residents — establish departure clearly`,
    gotchas: `UAE's zero income tax means no foreign tax credits — you pay full US tax rates while living in UAE. This makes UAE less tax-efficient than countries with income taxes that can be credited. The FEIE helps but phases out at higher incomes, and investment income never qualifies. UAE banks are aggressive about FATCA reporting — assume IRS knows about all your UAE accounts. Dubai's high cost of living can be offset partially through the foreign housing exclusion.`,
    pro_tip: `UAE works well for US citizens earning $100K-200K who maximize FEIE benefits. Above that range, the lack of foreign tax credits makes other jurisdictions more attractive. Structure investments through US accounts to avoid UAE reporting complications. The foreign housing exclusion can add $20,000-40,000 to your FEIE depending on Dubai housing costs. Time your move to UAE carefully relative to US tax year to maximize first-year benefits.`,
  },
  {
    topic: 'VAT Registration & Compliance',
    country: 'AE',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'Federal Tax Authority (FTA); VAT Executive Regulation',
    content: `UAE VAT system (5% rate since 2018):
- Mandatory registration: Annual turnover > AED 375,000 ($102,000)
- Voluntary registration: Available for businesses with turnover > AED 187,500
- Rate: 5% standard rate. 0% on certain exports, international transport, precious metals
- Exempt supplies: Healthcare, education, residential real estate sales/rentals
- Filing: Quarterly returns. Monthly for businesses with annual turnover > AED 150M
- Payment: Due within 28 days of quarter end
- Penalties: Late registration: AED 20,000. Late filing: AED 500/day up to AED 25,000
- Input VAT recovery: Can reclaim VAT on business expenses if registered
- Real estate: 5% VAT on commercial property. Residential sales exempt but rentals may be taxable depending on value
- Digital services: VAT applies to B2C digital services provided to UAE residents`,
    gotchas: `VAT registration threshold is relatively low — many small businesses must register. The AED 375,000 threshold includes worldwide income for UAE tax residents, not just UAE-source income. Real estate VAT rules are complex — residential property over AED 2M may be taxable. Input VAT recovery requires proper tax invoices — many suppliers don't provide compliant invoices. Penalties accumulate quickly for non-compliance.`,
    pro_tip: `Register voluntarily if your turnover is close to the threshold — it allows input VAT recovery and looks more professional. Use cloud-based VAT software (Zoho, TallyPrime) for compliance — manual tracking is error-prone. For real estate: verify VAT treatment before purchase/rental agreements. Tourist businesses can recover VAT on many expenses but need proper documentation. Keep detailed records — FTA audits are becoming more common.`,
  },

  // === VISA ===
  {
    topic: 'Employment Visa & Work Permits',
    country: 'AE',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
    content: `UAE employment visa process (2026):
- Employer must obtain Entry Permit before you arrive: AED 3,000-5,000 cost to employer, 2-4 weeks processing
- Entry visa: 60 days to enter UAE and complete residency process
- Residence visa: 2-3 years validity depending on employment contract and Emirates ID
- Work permit: Integrated with residence visa, tied to specific employer and role
- Medical fitness test: Required within 30 days of arrival. AED 300-500. Blood tests, chest X-ray, general health check
- Emirates ID: Mandatory identity card. AED 270 for 2 years, AED 370 for 3 years. Biometric registration required
- Salary requirements vary by emirate: Dubai minimum AED 4,000/month, Abu Dhabi AED 3,000/month for basic visa
- Family sponsorship: Minimum salary AED 4,000-10,000 depending on emirate to sponsor spouse/children
- Labor contract: Must be registered with Ministry of Human Resources. Defines salary, benefits, termination terms`,
    gotchas: `Your visa is completely tied to your employer — if you lose your job, you have 30 days to find new employment or leave the country. Salary requirements are NET of accommodation allowance — gross salary must be higher. The medical test can reject applicants for various conditions including some prescription medications. Emirates ID is required for banking, tenancy contracts, utilities — you cannot function without it but processing takes 2-4 weeks.`,
    pro_tip: `Negotiate a higher official salary on your labor contract even if your actual take-home is adjusted through allowances — it helps with family visa sponsorship and future job changes. Get health insurance through your employer immediately — medical costs are high and most treatments require payment upfront. Open a bank account as soon as you receive Emirates ID — it's required for most daily transactions. Consider Dubai for job opportunities, Abu Dhabi for government/oil sector, Sharjah for cost savings.`,
  },
  {
    topic: 'Investor & Entrepreneur Visas',
    country: 'AE',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'UAE Ministry of Economy; Dubai Department of Economic Development',
    content: `UAE investor visa options (2026):
Property investor visa:
- Purchase property worth AED 750,000+ (Dubai), AED 500,000+ (other emirates)
- 2-year renewable residence visa for investor + family
- Property must be held throughout visa validity
- Can sponsor spouse and unmarried children

Business investor visa:
- Establish company with minimum capital (varies by emirate and business type)
- Free zone: 100% ownership, 2-3 year visa based on business license
- Mainland: Need UAE national partner (51% ownership) or use nominee structure
- Must maintain business activity and meet minimum capital requirements

Entrepreneur visa:
- Startup businesses with innovation potential
- Partnership with UAE incubators or government innovation programs
- Minimum investment varies by program (AED 50,000-500,000)
- 3-year visa initially, renewable based on business performance

Retired person visa (introduced 2018):
- Age 55+, passive income AED 20,000+/month OR AED 1M+ savings
- Property ownership of AED 2M+ OR AED 1M+ bank deposit
- 5-year renewable visa`,
    gotchas: `Property investor visa requires the property to be held throughout — selling voids your visa status. UAE national partner requirements for mainland companies are complex and involve legal risks with nominee structures. Entrepreneur visas are subject to business performance reviews — failing businesses can lose visa sponsorship. The retired person visa income requirements are substantial and must be maintained throughout the visa period. Family sponsorship has additional income thresholds.`,
    pro_tip: `Property investment visa is the most straightforward for many people — Dubai property market is liquid, transparent, and offers 4-7% rental yields. For business, consider free zones initially even with higher costs — you maintain control and can always expand to mainland later. The retirement visa is attractive but the AED 20K/month income requirement ($65K annually) is quite high. Combine property investment with rental income to meet multiple visa categories.`,
  },
  {
    topic: 'Visit Visa & Tourist Options',
    country: 'AE',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'UAE Embassy websites; Dubai Airports authority',
    content: `UAE tourist visa options (2026):
Visa on arrival (free):
- GCC residents, UK residents, US residents with valid visas. 30 days, extendable once for 30 days
- EU citizens, Andorra, Australia, Brunei, Canada, Hong Kong, Japan, Malaysia, New Zealand, Singapore, South Korea: 30 days free

Pre-arranged tourist visa:
- 30-day single entry: AED 350 + fees (~$100)
- 90-day multiple entry: AED 650 + fees (~$185)
- 30-day extension available: AED 600 (~$165)
- Processing: 3-5 days through airlines, hotels, or tour operators

Transit visa:
- 96-hour (4-day) transit visa for Emirates or other UAE airline passengers: AED 50
- Must have confirmed onward ticket

Long-term tourist visa:
- 5-year multiple entry visa: AED 650 + fees. 90 days per entry, unlimited entries
- Requirements: Bank statement with AED 4,000+ monthly income, health insurance, confirmed accommodation

Overstay penalties: AED 200/day after grace period`,
    gotchas: `"Visa on arrival" is actually an entry permit issued at immigration — not a pre-arranged visa. Requirements can change suddenly based on diplomatic relations. The 5-year tourist visa sounds attractive but you still can't work or access many services without residency. Health insurance requirements vary by visa type and are increasingly enforced. Overstay penalties accumulate quickly and must be paid before departure.`,
    pro_tip: `If you're eligible for free visa on arrival, don't pay for pre-arranged tourist visa unless you need longer validity. The 5-year tourist visa is good for location-independent entrepreneurs who want UAE base without employment. Apply for pre-arranged visas through Dubai airports authority or Emirates airline for faster processing than through embassies. Always have proof of onward travel and hotel bookings — immigration can ask for evidence.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expatriates',
    country: 'AE',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'UAE Central Bank; individual bank requirements',
    content: `UAE banking for expats (2026):
Major banks for expatriates:
- Emirates NBD: Largest UAE bank. Expat-friendly. Minimum salary AED 5,000 for current account. Wide ATM network
- ADCB (Abu Dhabi Commercial Bank): Good for Abu Dhabi residents. Minimum salary AED 3,000
- FAB (First Abu Dhabi Bank): Result of merger, largest bank in MENA. Competitive rates
- Mashreq Bank: Private sector bank, good customer service. Minimum salary AED 4,000
- HSBC UAE: International bank, good for expats with global banking needs. Higher minimum requirements
- Standard Chartered: UK bank, popular with expats. Good international services

Account requirements:
- Emirates ID (mandatory)
- Salary certificate from employer (stating salary, position, employment duration)
- Passport and UAE residence visa
- No Objection Certificate (NOC) from employer
- Minimum salary: AED 3,000-10,000 depending on bank and account type
- Opening deposit: AED 3,000-10,000

Account features: Debit card, internet banking, mobile app, checkbook. International transfers available`,
    gotchas: `You cannot open a bank account without Emirates ID, which takes 2-4 weeks to receive after arrival. Minimum salary requirements have increased significantly since 2020. The No Objection Certificate from your employer gives them influence over your banking relationship. Some banks freeze accounts if employment status changes. International transfer limits and documentation requirements can be restrictive for large amounts.`,
    pro_tip: `Emirates NBD or ADCB are the best choices for most expats — widespread branches and ATMs, reasonable minimum requirements. Apply for account opening appointment as soon as you receive Emirates ID. Negotiate with relationship managers on minimum balance requirements and fees — there's often flexibility. Set up online banking immediately and get the mobile app — branch visits for routine transactions are time-consuming with long queues.`,
  },
  {
    topic: 'Investment & Wealth Management',
    country: 'AE',
    category: 'banking',
    last_updated: '2026-02-15',
    source: 'Dubai Financial Services Authority; investment firms',
    content: `UAE investment options (2026):
Local brokerages:
- EFG Hermes UAE: Regional broker, access to MENA markets. Minimum AED 100,000
- Arqaam Capital: UAE-based, good for local market access. Minimum AED 50,000
- ADCB Securities: Part of major bank, integrated banking and trading

International platforms available:
- Interactive Brokers: US broker accepting UAE residents. Lower minimum balances
- Saxo Bank: Danish bank with Dubai office. Multi-currency accounts
- Swissquote: Swiss bank, premium service, higher minimums

UAE stock markets:
- Dubai Financial Market (DFM): Local companies, real estate investment trusts
- Abu Dhabi Securities Exchange (ADX): Government-linked entities, blue chips
- Limited foreign investor access to some shares (49% foreign ownership caps)

Property investment:
- REITs: Emirates REIT, Aeon REIT trading on DFM. 5-8% dividend yields
- Direct property: Residential/commercial real estate. 4-7% rental yields
- Off-plan developments: Higher returns but higher risk

Islamic banking/investments: Sharia-compliant options available at most banks`,
    gotchas: `UAE markets are small and dominated by real estate and banking stocks — limited diversification. Foreign ownership caps mean some of the best-performing stocks are unavailable to expats. Minimum investment amounts are high for local brokerages. International brokers may restrict services to UAE residents due to regulatory complexity. Property investment requires significant capital and ongoing management.`,
    pro_tip: `For diversified investing, keep international brokerages from your home country and use UAE accounts for local opportunities (REITs, real estate). Dubai property can be a good investment and helps with visa status but requires significant capital. Consider Emirates REIT for liquid real estate exposure without direct property ownership complications. Islamic banking products can offer competitive returns and are widely available even to non-Muslims.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Dubai Property Market by Area',
    country: 'AE',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Dubai Land Department; Property Finder; Bayut',
    content: `Dubai property prices by area (March 2026, per sqft):
Prime areas:
- Downtown Dubai: AED 1,800-3,500/sqft ($490-950). Burj Khalifa, Dubai Mall proximity
- Dubai Marina: AED 1,200-2,200/sqft ($325-600). Waterfront living, restaurants, beach access
- Palm Jumeirah: AED 2,000-4,000/sqft ($545-1,090). Luxury beachfront, limited supply
- Jumeirah Beach Residence (JBR): AED 1,500-2,500/sqft ($410-680). Beach lifestyle, high density
- Business Bay: AED 900-1,800/sqft ($245-490). Business district, canal views

Mid-market areas:
- Dubai Sports City: AED 600-1,100/sqft ($165-300). Golf community, family-oriented
- Jumeirah Village Circle (JVC): AED 700-1,200/sqft ($190-325). Popular with expats
- Dubai Investment Park: AED 500-900/sqft ($135-245). Affordable, need car
- International City: AED 300-600/sqft ($80-165). Budget option, basic amenities

Emerging areas:
- Dubai South: AED 400-800/sqft ($110-220). Near airport, developing infrastructure
- Dubailand: AED 500-1,000/sqft ($135-270). Theme parks, family communities

Rental yields: 4-6% in prime areas, 6-8% in emerging areas. Higher yields for smaller units`,
    gotchas: `Dubai property prices are quoted per square foot (not square meter like Europe). Service charges (maintenance fees) range from AED 5-25/sqft/year and can be a significant ongoing cost. Many areas are car-dependent with limited public transport. Off-plan properties carry developer risk — some projects are delayed or cancelled. Oversupply in some segments keeps prices volatile.`,
    pro_tip: `Best value for expats: JVC or Dubai Sports City offer good quality of life at reasonable prices. For investment: smaller units (studios/1BR) in established areas have higher rental yields but lower capital appreciation. Always factor in service charges (get exact amount from seller) and community fees. Buy completed properties unless you get significant off-plan discounts (20%+) — delivery delays are common.`,
  },
  {
    topic: 'Abu Dhabi Property Market',
    country: 'AE',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Abu Dhabi Department of Urban Planning; real estate agencies',
    content: `Abu Dhabi property market (March 2026):
Key areas and prices per sqft:
- Saadiyat Island: AED 1,200-2,500/sqft ($325-680). Cultural district, beaches, Louvre museum
- Al Reem Island: AED 800-1,500/sqft ($220-410). Modern towers, business district
- Corniche area: AED 1,000-2,000/sqft ($270-545). City center, waterfront
- Khalifa City: AED 600-1,200/sqft ($165-325). Family areas, villas and apartments
- Marina Village: AED 700-1,400/sqft ($190-380). Waterfront community
- Yas Island: AED 800-1,600/sqft ($220-435). Entertainment, Ferrari World, golf

Villa communities:
- Al Reef: AED 800-1,200/sqft. Affordable villa community
- Hydra Village: AED 600-1,000/sqft. Townhouses and villas
- Eastern Mangroves: AED 1,500-2,500/sqft. Luxury waterfront villas

Rental yields: 5-7% typically, higher than Dubai due to lower purchase prices
Government/oil sector employment concentration affects rental demand`,
    gotchas: `Abu Dhabi is more conservative than Dubai — alcohol licensing required, dress codes enforced in some areas. The economy is more government-dependent, affecting property demand during oil price fluctuations. Public transport is limited — car ownership essential in most areas. Some communities have strict rules about noise, gatherings, and lifestyle. Property price appreciation has been slower than Dubai historically.`,
    pro_tip: `Abu Dhabi offers better value than Dubai for similar amenities — 20-30% lower prices for equivalent properties. Best areas for expats: Saadiyat Island (beach lifestyle), Al Reem Island (modern urban living), or Khalifa City (family-friendly). Government employees get housing allowances that support rental market. Buy near corniche or islands for better resale value — these areas have limited supply and strong demand.`,
  },
  {
    topic: 'Property Purchase Process & Costs',
    country: 'AE',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Dubai Land Department; Abu Dhabi Department of Urban Planning',
    content: `UAE property purchase process and costs:
Purchase costs:
- Dubai Land Department (DLD) fee: 4% of property value + AED 580 registration
- Real estate agent commission: 2% (usually paid by seller but verify)
- Dubai Electricity & Water Authority (DEWA) connection: AED 2,000
- Mortgage registration (if financing): 0.25% of loan amount
- Valuation fee (for mortgage): AED 2,500-5,000
- Legal fees (optional but recommended): AED 5,000-15,000

Process:
1. Property search and selection
2. Memorandum of Understanding (MOU) with 10% deposit
3. Due diligence: verify title, developer permits, service charges
4. Sales and Purchase Agreement (SPA)
5. Mortgage approval (if applicable): 2-4 weeks
6. Final payment and title transfer at DLD/planning department
7. Obtain title deed and property card

Timeline: 30-45 days for cash purchase, 45-60 days with mortgage
Foreign ownership: 100% freehold ownership allowed in designated areas
Mortgage availability: 75-80% LTV for residents, 60-65% for non-residents`,
    gotchas: `The 4% DLD fee in Dubai is significant — AED 80,000 on a AED 2M property ($22K on $545K). Service charges are not standardized and can vary dramatically between buildings — always verify exact annual amount. Off-plan properties require staged payments during construction but title deed only issued on completion. Some areas have foreign ownership restrictions — verify before purchasing.`,
    pro_tip: `Budget 5-7% of property value for all transaction costs. Use a qualified real estate lawyer for expensive purchases (AED 2M+) to verify title and review contracts. For mortgages: Emirates NBD and ADCB have competitive rates for expats. Consider buying through a company structure for investment properties — can provide tax advantages and easier resale. Get a property inspection for older buildings — maintenance standards vary significantly.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Insurance',
    country: 'AE',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Dubai Health Authority; Abu Dhabi Department of Health',
    content: `UAE healthcare system (2026):
Public healthcare:
- Available to UAE nationals and some GCC citizens
- Limited access for expats — emergency treatment available but expensive
- Dubai Health Authority (DHA) and Abu Dhabi Department of Health regulate

Private healthcare:
- Mandatory health insurance for all residents (varies by emirate)
- Dubai: Mandatory employer-sponsored insurance or individual coverage
- Abu Dhabi: Mandatory insurance through Thiqa program or approved providers
- World-class facilities in Dubai and Abu Dhabi
- Costs similar to US/Europe without insurance

Top hospitals:
- Dubai: American Hospital Dubai, Dubai Hospital, Mediclinic City Hospital, NMC Healthcare
- Abu Dhabi: Cleveland Clinic Abu Dhabi, Sheikh Khalifa Medical City, NMC Royal Hospital
- International standards, many US/European trained doctors

Typical costs without insurance:
- GP consultation: AED 300-600 ($80-165)
- Specialist consultation: AED 500-1,000 ($135-270)
- Emergency room: AED 1,000-3,000+ ($270-815+)
- MRI scan: AED 2,000-4,000 ($545-1,090)
- Minor surgery: AED 10,000-30,000 ($2,700-8,150)`,
    gotchas: `Health insurance is MANDATORY — you cannot renew residence visa without proof of coverage. Insurance quality varies dramatically — cheap policies have high deductibles and limited networks. Pre-existing conditions are often excluded or have waiting periods. Dental and optical care typically require separate coverage. Emergency services require payment upfront — insurance authorization can delay treatment.`,
    pro_tip: `Get comprehensive health insurance through your employer if possible — individual policies are expensive and have limited options. For families: ensure maternity coverage as childbirth costs AED 30,000-80,000+ ($8K-22K) without insurance. Medical tourism is common — Dubai is a hub for cosmetic surgery and advanced procedures. Keep insurance card with you always — medical costs can bankrupt you quickly without coverage.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by Emirate',
    country: 'AE',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; Dubai Statistics Center; local research',
    content: `UAE monthly cost of living (2026, for couple):
Dubai: $4,500-8,000
- Rent (1BR): $1,500-3,000. (2BR): $2,200-4,500
- Groceries: $600-900
- Dining out: $400-800
- Transportation: $200-400 (car needed)
- Utilities: $150-300 (high AC usage)
- Entertainment: $300-600

Abu Dhabi: $4,000-7,000  
- Rent (1BR): $1,200-2,500. (2BR): $1,800-3,500
- Similar other costs to Dubai but 10-20% less overall

Sharjah: $2,500-4,500
- Rent (1BR): $600-1,200. (2BR): $900-1,800
- 30-40% cheaper than Dubai but longer commutes

Ajman/RAK: $2,000-3,500
- Most affordable emirates
- Limited job opportunities, car essential

Key expenses:
- Car: AED 800-2,000/month ($220-545) including payment, insurance, fuel, parking
- Private health insurance: AED 3,000-8,000/year ($815-2,180)
- Alcohol (where available): 300%+ markup due to licensing and taxes
- Education (international schools): AED 40,000-100,000/year ($11K-27K)`,
    gotchas: `Dubai and Abu Dhabi are among the world's most expensive cities. Housing typically consumes 40-60% of income. Utility costs spike in summer due to air conditioning. Car ownership is mandatory in most areas — public transport coverage is limited. Alcohol is heavily taxed and only available in licensed venues. Social costs are high — Dubai's restaurant and entertainment culture is expensive.`,
    pro_tip: `Live in Sharjah and work in Dubai to save 30-40% on housing — but factor in 1-2 hour daily commute times and fuel costs. For families: budget at least $15K-25K/year per child for decent international schools. Take advantage of no income tax to save aggressively — cost of living may be high but savings potential is excellent for high earners. Avoid ground floor apartments (security, privacy issues) and choose buildings with good management.`,
  },
  {
    topic: 'Cultural Considerations & Local Laws',
    country: 'AE',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'UAE Ministry of Interior; local legal guidance',
    content: `UAE cultural and legal considerations:
Alcohol and dining:
- Alcohol license required for home consumption (residents only). AED 270/year
- Available in licensed hotels, restaurants, and stores
- Public intoxication illegal — can result in jail time and deportation
- During Ramadan: no eating, drinking, smoking in public during daylight hours

Dress code:
- Conservative dress expected, especially outside Dubai/Abu Dhabi
- Swimwear only at beaches/pools
- Modest dress in malls, offices, public areas

Social laws:
- Cohabitation: Legal since 2020 for unmarried couples (changed from previous ban)
- Public displays of affection: Keep to minimum — hand-holding generally OK, kissing/hugging not
- LGBTQ+: Homosexuality no longer criminal (2022 law change) but social acceptance limited

Business culture:
- Thursday-Friday weekend (Friday is holy day)
- Business hours: Sunday-Thursday typically
- Networking important — relationship-based business culture
- Punctuality expected but meetings may start late

Legal system:
- Sharia law influences personal status matters
- Zero tolerance for drugs — even prescription medications can cause issues
- Debt law strict — bounced checks can lead to jail time
- Defamation laws strict — social media posts can have legal consequences`,
    gotchas: `Legal changes happen quickly and enforcement can be inconsistent. What's acceptable in Dubai might not be in Sharjah or other emirates. Prescription medications containing controlled substances can cause serious legal problems — check before bringing medications. Credit card debt and bounced checks are criminal matters, not just civil. Social media posts critical of government or individuals can result in legal action.`,
    pro_tip: `Dubai and Abu Dhabi are more liberal than other emirates — adjust behavior accordingly when traveling within UAE. Always carry your Emirates ID — police checks are common. Learn basic Arabic greetings and cultural norms — it's appreciated and helps with daily interactions. Join expat communities (Facebook groups, clubs) for social support and practical advice. Respect local customs especially during religious periods — it goes a long way with Emirati colleagues and neighbors.`,
  },
];