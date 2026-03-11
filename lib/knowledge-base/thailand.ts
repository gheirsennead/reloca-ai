import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const THAILAND_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Thai Tax Residency & Personal Income Tax',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Revenue Department of Thailand; Personal Income Tax Act',
    content: `Thailand personal income tax (2026):
- Tax residency: 180+ days in Thailand in any tax year (Jan 1 - Dec 31)
- Progressive rates for residents: 0% (up to ฿150,000), 5% (฿150K-฿300K), 10% (฿300K-฿500K), 15% (฿500K-฿750K), 20% (฿750K-฿1M), 25% (฿1M-฿2M), 30% (฿2M-฿5M), 35% (above ฿5M/~$140K USD)
- Non-residents: Flat 15% on Thailand-source income only (no deductions)
- NEW 2024 RULE: Foreign-source income remitted to Thailand now taxable if brought within the same calendar year earned (previously exempt if earned abroad)
- Capital gains: Generally tax-free for individuals on securities. Property gains taxable (see withholding rates)
- Filing deadline: March 31 for previous year
- TIN (Tax ID): Required for all tax residents. Apply at Revenue Department office
- Social Security Fund: 5% employee + 5% employer for formal workers (capped at ฿750/month each)`,
    gotchas: `The 2024 remittance rule change is HUGE. Previously, foreign income was only taxed if remitted in the year it was earned. Now it's taxed if remitted anytime. This affects retirees with pension income, digital nomads, and anyone bringing foreign savings to Thailand. The 180-day rule is strict — even 179 days makes you non-resident. Thailand has limited tax treaties — no treaty with common nomad countries like Estonia, UAE, many Latin American countries.`,
    pro_tip: `If you're a tax resident, delay remitting foreign income until January of the year AFTER you earned it. Example: 2026 US income remitted to Thailand in January 2027 is NOT taxable in Thailand. This "delayed remittance" strategy is still legal and saves significant tax. Consider opening a foreign bank account accessible via Thai ATMs to avoid formal "remittance" for daily expenses.`,
  },
  {
    topic: '2024 Foreign Income Tax Rule Changes',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Revenue Department Notification; Thai tax attorney guidance',
    content: `Thailand's 2024 foreign income taxation changes:
- Old rule (pre-2024): Foreign income only taxed if remitted to Thailand in the same calendar year it was earned
- New rule (2024+): Foreign income of Thai tax residents is taxable when remitted to Thailand, regardless of when it was earned
- This affects: Digital nomads, retirees with foreign pensions, investors with foreign income, anyone with foreign bank accounts
- Exemptions still apply: Income already taxed in a treaty country (with Double Tax Agreement) gets credit
- Treaty countries: US, UK, Germany, France, Netherlands, Singapore, Malaysia, Australia, Canada, Japan (56 total DTAs)
- No change for: Thailand-source income (always taxable), non-residents (only Thai income taxable)
- Enforcement: Revenue Department has not yet issued detailed guidance on implementation. Tax advisors recommend conservative compliance
- Record keeping: Must track foreign income by year earned vs. year remitted`,
    gotchas: `The Revenue Department hasn't clarified many details: What constitutes "remittance"? (Bank transfers yes, but ATM withdrawals from foreign cards unclear). How to calculate the tax on multi-year remittances? The lack of guidance creates compliance uncertainty. Many long-term expats who've been remitting old income tax-free for years now face potential liability. Thailand doesn't have a robust tax advisory system — professional guidance is essential but expensive.`,
    pro_tip: `Keep detailed records of when foreign income was earned vs. remitted. If you earned income in 2023 and remit it in 2026, you may owe Thai tax. Consider "tax-efficient remittance" timing — remit in years when your Thai tax bracket is lower, or offset with deductible expenses. For retirees: the delayed remittance strategy still works for NEW income — delay remitting 2026 pension income until January 2027.`,
  },
  {
    topic: 'LTR Long Term Resident Visa Tax Benefits',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Board of Investment; Royal Decree on Tax Incentives',
    content: `LTR (Long Term Resident) visa tax benefits:
- Personal income tax: 17% flat rate (vs. progressive rates up to 35%) on employment income for first 3 years
- Applies to: LTR Wealthy Global Citizens, LTR Work-from-Thailand professionals, LTR Highly Skilled Professionals, LTR Wealthy Pensioners
- Foreign-source income: Exempt from Thai tax for income derived from work performed outside Thailand (if holding LTR-WFT or LTR-HIP categories)
- Investment income: Foreign dividends, capital gains, rental income from abroad may be exempt depending on LTR category and source
- Valid for: Initial 10 years, renewable for another 10 years
- Eligibility requirements vary by category: ฿2.5M+ annual income (Wealthy Global), $80K+ income (Work-from-Thailand), $80K+ income + qualifications (Highly Skilled), $1M investment or $80K pension (Wealthy Pensioner)
- Application fee: ฿50,000 ($1,400). Processing: 3-4 months`,
    gotchas: `LTR tax benefits are ONLY for income tax — other taxes (VAT, withholding, property taxes) still apply at standard rates. The 17% rate is only on EMPLOYMENT income — investment income may still face progressive rates. Foreign-source income exemption is complex and depends on where the work was actually performed, not just where the income originates. Benefits expire after the specified period and revert to standard Thai tax treatment.`,
    pro_tip: `LTR is primarily valuable for high earners who would face the 30-35% top bracket under normal Thai tax rates. If your Thai taxable income is under ฿2M/year (~$55K), the standard progressive rates may be lower than LTR's 17% flat rate. Do the math before applying. The real value is in the foreign-source income exemption for qualifying categories — this can save tens of thousands annually for digital nomads and remote workers.`,
  },
  {
    topic: 'Property Tax & Real Estate Withholding',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Land Department; Revenue Department withholding schedules',
    content: `Thai property taxation (2026):
- Annual Land & Building Tax: 0.02-0.1% of assessed value (introduced 2020, replaced house/land tax)
- Assessment: Based on government appraisal value (often 30-50% of market value)
- Withholding on property sale:
  * Residents: 1% of sale price (income tax) + 0.5% (specific business tax) if held <5 years
  * Non-residents: 1% income tax + 0.5% SBT + 1% additional withholding = 2.5% total
  * If held >5 years: SBT exemption, only 1-2% withholding applies
- Transfer fees: 2% of appraised value (split buyer/seller unless negotiated)
- Stamp duty: 0.5% of sale price or appraised value (whichever higher)
- Registration fee: ฿1,000 flat fee
- Rental income tax: Progressive rates for residents (up to 35%), 15% withholding for non-residents. Can deduct 30% of rental income as expenses (no receipts required) OR actual expenses with receipts`,
    gotchas: `The 1% withholding on property sales is just a prepayment — you must still file an annual return and may owe more based on actual capital gains calculation. Non-resident sellers face 2.5% total withholding, which may or may not cover their actual tax liability. The Land & Building Tax varies dramatically by location — Bangkok and Phuket have higher rates than rural areas. Many condos have unpaid building tax liabilities that transfer to buyers — verify before purchase.`,
    pro_tip: `Always negotiate who pays the 2% transfer fee upfront — it's ฿200,000 on a ฿10M property ($5,500 on a $280K condo). For rental properties: the 30% expense deduction without receipts is often better than tracking actual expenses unless you have major repairs/improvements. If you're buying property as a non-resident, budget 3-4% of purchase price for all taxes and fees combined.`,
  },
  {
    topic: 'US-Thailand Tax Treaty Provisions',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'US-Thailand Income Tax Treaty (1996); IRS Publication 901',
    content: `US-Thailand tax treaty key provisions:
- Pensions: US Social Security and government pensions taxable ONLY in US. Private pensions (401k, IRA) may be taxed by both with credit
- Employment income: Taxed in country where work is performed. "183-day rule" exemption if working for US employer temporarily
- Business profits: US company doing business in Thailand only taxed by Thailand if it has a "permanent establishment"
- Dividends: 15% withholding in source country (10% for 25%+ ownership)
- Interest: 15% withholding in source country (10% for certain bank deposits)
- Royalties: 15% withholding in source country
- Capital gains: Generally taxed in country of residence, except real estate (taxed where property is located)
- Students/trainees: Exempt from Thai tax on remittances for education/training for up to 5 years
- FEIE still available: US citizens can use Foreign Earned Income Exclusion ($130,000 in 2026) regardless of Thai taxation`,
    gotchas: `The treaty does NOT eliminate the 2024 foreign income remittance rule for US citizens living in Thailand — it only provides credits for taxes paid. US Social Security is exempt from Thai tax but IRA/401k distributions are NOT. The "permanent establishment" rule means many US remote workers technically owe Thai tax on their US employment income if they're Thai tax residents. Treaty benefits must be claimed — they're not automatic.`,
    pro_tip: `US retirees get the best deal: Social Security exempt from Thai tax, plus FEIE for any consulting income. For working US expats: structure your compensation as contractor/consultant income to maximize FEIE benefits. File for treaty benefits on Thai tax forms using the appropriate exemption codes. Keep detailed records of days in Thailand vs. US to support treaty position if audited.`,
  },
  {
    topic: 'Thai Limited Company Structure for Foreigners',
    country: 'TH',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'Department of Business Development; Alien Business Act',
    content: `Thai Limited Company for foreign business:
- Minimum capital: ฿2M for companies with foreign ownership (except BOI-promoted companies: ฿1M)
- Foreign ownership limit: 49% maximum in most sectors. 100% allowed in export manufacturing, international trading, certain BOI activities
- Corporate income tax: 20% flat rate (was 20% in 2024, reduced from 30% pre-COVID stimulus)
- Small business rates: 15% on first ฿300K profit, 20% above ฿300K
- VAT registration: Mandatory if revenue >฿1.8M/year. Rate: 7%
- Withholding tax on foreign payments: 15% on royalties, 10% on technical services, 1-5% on various service payments to non-residents
- Employment: Must employ 4 Thai workers per foreign worker for work permit eligibility
- Setup costs: ฿30,000-80,000 total (government fees ฿5,000, legal/accounting fees ฿25-75K)
- Annual compliance: Monthly VAT (if registered), corporate tax filing, social security, accounting requirements`,
    gotchas: `The ฿2M minimum capital must be ACTUALLY paid in — not just authorized. This money is tied up in the company unless you follow formal capital reduction procedures. The 4:1 Thai employee requirement is enforced for work permit renewals. "Nominee" Thai shareholders to achieve 51% Thai ownership are technically illegal and risky — authorities occasionally crack down. Some business activities are completely prohibited to foreigners regardless of structure.`,
    pro_tip: `For most digital nomads and small service businesses, a Thai company is overkill. Consider: (1) staying under the tax residency threshold (<180 days), (2) operating from a more business-friendly jurisdiction (Singapore, Hong Kong), or (3) using the LTR Work-from-Thailand visa which allows foreign employment without a local company. If you do form a company, ensure genuine business activity — companies formed solely for visa purposes are increasingly scrutinized.`,
  },

  // === VISA ===
  {
    topic: 'Tourist Visa & Visa Exemptions',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ministry of Foreign Affairs; Immigration Bureau',
    content: `Thailand tourist entry options (2026):
- Visa exemption: 60 days for most Western countries (US, UK, EU, Australia, Canada). Can extend once for 30 days (฿1,900 fee). Total: 90 days per entry
- Tourist visa (TR): 60 days, extendable once for 30 days. Multiple entry available (6 months validity, 60 days per entry). Fee: $40-60 depending on consulate
- Visa on arrival: 15 days for certain countries. ฿2,000 fee. Not recommended for planned trips
- "Visa runs": Land border crossings limited to 2 per calendar year by air. No limit on air entry but immigration officers scrutinize frequent entries
- Multiple Entry Tourist Visa (METV): 6-month validity, 60 days per entry. Requirements: ฿200K bank balance, employment letter. Best for long-term tourists
- Overstay penalties: ฿500/day up to ฿20,000 max. Overstay 90+ days = 1-year entry ban. 1+ year = 3-year ban. 3+ years = 5-year ban`,
    gotchas: `The 60-day visa exemption is per ENTRY, not per visit to Thailand. You can't stay 6 months by doing visa runs anymore — land crossings are limited to 2/year. Immigration officers at popular visa run borders (Poipet, Cambodia; Mae Sai, Myanmar) are increasingly strict with digital nomads showing tourist behavior. Having a laptop, working in cafes, or being questioned about income can lead to entry denial even with valid visas.`,
    pro_tip: `For stays longer than 90 days, get the Multiple Entry Tourist Visa before arriving — it shows intent to travel and is harder for immigration to question. Always have an onward ticket and proof of accommodation for the first few nights. Bangkok's Suvarnabhumi Airport (BKK) is more lenient than land borders. If you're doing visa runs, vary your exit/entry points and maintain genuine tourist activities (hotels booked, attractions visited).`,
  },
  {
    topic: 'Elite Visa Program',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Thailand Privilege Card Co.; Tourism Authority of Thailand',
    content: `Thailand Elite Visa (privilege visa) options (2026):
- Elite Easy Access: 5 years, ฿600,000 (~$17,000). Multiple entry, no 90-day reporting required
- Elite Superiority Extension: 20 years, ฿1M (~$28,000). Airport limousine, golf, spa benefits
- Elite Ultimate Privilege: 20 years, ฿2.14M (~$60,000). Maximum benefits including annual health checkup
- Processing time: 2-4 weeks after payment and document submission
- Benefits: Multiple entry visa, airport fast-track, free airport transfers, golf green fee discounts, spa discounts, dedicated concierge
- No work rights: Cannot legally work in Thailand with Elite visa alone
- 90-day reporting: Required every 90 days (can be done online or by mail for Elite members)
- Renewable: No automatic renewal — must reapply when visa expires`,
    gotchas: `Elite visa costs have increased 50%+ since 2020. The program can be discontinued by the government (has been paused/restarted several times). No work rights means it's purely for long-term tourism/retirement — if caught working, visa can be revoked. The ฿600K for 5 years breaks down to ฿120K/year ($3,400/year) — expensive compared to other long-term options if you qualify. Benefits like golf discounts rarely offset the membership cost.`,
    pro_tip: `Elite makes sense for: (1) wealthy retirees who want zero hassle, (2) people who don't qualify for other long-term visas, or (3) those who value the VIP treatment and use the benefits extensively. For most digital nomads, the Education Visa or retirement visa (if age 50+) are more cost-effective. If you do Elite, the 5-year option has the best cost/benefit ratio — avoid the 20-year option unless you're certain about long-term Thailand plans.`,
  },
  {
    topic: 'Education Visa & Muay Thai/Language Schools',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ministry of Education; Immigration Bureau; school operators',
    content: `Thailand Education Visa (ED visa) options:
- Thai language schools: 6-12 month visas. Cost: ฿15,000-40,000 for course + visa processing. Must attend classes, take tests
- University programs: Bachelor's/Master's degrees. Multiple-year visas. Legitimate academic path
- Muay Thai training: 6-12 month visas. Cost: ฿25,000-60,000. Must train regularly at registered gym
- Cooking schools: 2-6 month visas. Cost: ฿20,000-50,000. Popular short-term option
- Technical/vocational training: Various options, IT courses, massage therapy
- Requirements: School enrollment, proof of finances (฿500,000 bank statement), clean criminal record
- Renewal: Possible up to 2-3 years total depending on program. Must show academic progress
- Work prohibition: Cannot legally work with ED visa (though enforcement varies)
- 90-day reporting: Required`,
    gotchas: `Immigration crackdowns on "fake" education visas are increasingly common. Officers visit schools to verify attendance. Some schools are visa mills with minimal actual education — choose carefully. Language school progress is tested at visa renewal — you must demonstrate actual learning. Muay Thai gyms require genuine training attendance. Working while on ED visa can result in arrest and deportation. Some schools have been shut down, leaving students stranded.`,
    pro_tip: `Choose established, reputable schools: Duke Language School (Bangkok), AAA Language School (Chiang Mai), Tiger Muay Thai (Phuket), or universities like Chulalongkorn/Thammasat. Actually attend classes and learn — not just for visa compliance but because it enhances your Thailand experience. Budget ฿15-25K every 6 months for course fees. The ED visa is best for people genuinely interested in learning Thai, Muay Thai, or pursuing real education goals.`,
  },
  {
    topic: 'Retirement Visa (Non-O) & Requirements',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Immigration Bureau; Embassy websites',
    content: `Thailand Retirement Visa (Non-O based on age) requirements:
- Age: 50+ years old
- Financial requirements (2026): ฿800,000 in Thai bank account for 2 months before application + 3 months after approval, OR ฿65,000/month pension income, OR combination (monthly income + bank balance must equal ฿800K)
- Health insurance: ฿100,000 minimum coverage (required since 2019 for new applicants)
- Initial visa: 90 days (apply at Thai consulate abroad). Then apply for 1-year extension of stay inside Thailand
- Annual renewal: Required. Must maintain financial requirements year-round
- Multiple re-entry permit: ฿1,000 (single) or ฿3,800 (multiple) for travel
- 90-day reporting: Required (online, in person, or by mail)
- No work rights: Cannot be employed. Can volunteer with proper permits
- Dependent spouse: Can apply for Non-O visa based on marriage to retirement visa holder`,
    gotchas: `The ฿800K must be in a Thai bank account — foreign bank balances don't count. Getting the first Thai bank account on tourist visa is increasingly difficult. Some immigration offices are stricter than others about the "seasoning" requirement (money must stay in account). Health insurance requirements vary by immigration office — some accept foreign policies, others require Thai policies. Money in the account cannot drop below ฿400K at any time during the year.`,
    pro_tip: `Open a Thai bank account before you turn 50 if you plan to retire in Thailand — it's easier on younger person's tourist visa. Use an agent (฿15-25K) to help with the first-year visa and bank account if needed. Consider Bangkok Bank or Krungsri — they're more expat-friendly. Get a letter from your embassy confirming your pension income (US Embassy charges $50). Health insurance: Pacific Cross or AXA Thailand offer compliant policies starting around ฿40K/year for basic coverage.`,
  },
  {
    topic: 'LTR Long Term Resident Visa Categories',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Board of Investment; Immigration Bureau',
    content: `LTR visa categories and requirements (2026):
1. LTR-WFT (Work-from-Thailand): For remote workers. $80K+ annual income, bachelor's degree + 5 years experience OR master's degree, health insurance, no criminal record. Can work for foreign employers
2. LTR-HIP (Highly Skilled Professional): For specialists in target industries. $80K+ income, master's degree OR 10 years experience in tech/medical/finance/robotics/aviation/biotech, current employment in target sector
3. LTR-WGC (Wealthy Global Citizen): For investors. $1M investment in Thai government bonds, stocks, or property OR $500K investment + $250K annual income for 2 years. No work permitted
4. LTR-WP (Wealthy Pensioner): For retirees. Age 50+, $250K investment in Thailand OR $80K+ annual pension, $100K health insurance or social security coverage
All categories: 10-year visa, renewable once. Fast-track immigration lanes. Can buy one rai of land for residence. ฿50,000 application fee. 3-4 month processing`,
    gotchas: `Income requirements are in USD and verified annually — fluctuating exchange rates can disqualify you. The $80K income requirement excludes many remote workers who earn less. Investment funds for WGC must stay in Thailand throughout visa validity. Land purchase right is limited to ONE rai (0.4 acres) and only for personal residence. LTR doesn't grant permanent residency rights — it's still technically a long-stay visa.`,
    pro_tip: `LTR-WFT is ideal for high-earning digital nomads who want tax benefits (see tax section). The 17% flat tax + foreign income exemptions can save $10K-30K+ annually vs. standard Thai tax rates. For wealthy retirees, LTR-WP + Elite visa combination provides ultimate convenience (Elite benefits + LTR tax advantages). Submit applications in Q1-Q2 for faster processing — government budgets for staff time.`,
  },
  {
    topic: 'Smart Visa for Professionals',
    country: 'TH',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'National Science and Technology Development Agency; BOI',
    content: `Thailand Smart Visa program:
- Smart-T (Talent): For highly skilled professionals in target industries (automation, biotechnology, digital, medical hub). Requirements: master's degree + 5 years experience OR bachelor's + 10 years, $6,000/month salary, employment offer from Thai company in target sector
- Smart-I (Investor): For investors in smart industries. Investment of $500K+ in target sectors. 4-year visa, renewable
- Smart-S (Startup): For startup entrepreneurs. $25K+ investment in registered startup incubator, business plan approval
- Smart-E (Executive): For senior executives of targeted companies. C-level position, $6,000/month salary
- Benefits: 4-year visa (vs 1-year standard work visa), fast-track work permit, multiple re-entry, spouse and children visas, 90-day reporting waiver for Smart-T/E, allowed to work for multiple companies in same category
- Target industries: Robotics, aviation, biofuels, digital, medical devices, pharmaceuticals, biotechnology, food tech, agriculture tech, circular economy`,
    gotchas: `Smart Visa is only for specific industries — general tech work, consulting, or service businesses don't qualify. The $6,000/month salary requirement is higher than many Thai positions pay. Must maintain employment in the qualified company throughout visa validity — changing jobs requires new Smart Visa application. Limited to around 50 approved companies per target industry. Application can take 6+ months.`,
    pro_tip: `Smart Visa makes sense if you're already being recruited by a target industry company or are a genuine startup entrepreneur in approved sectors. For most tech professionals, the standard Non-B work visa is easier and more flexible. Check the official target company list before applying — only employment with pre-approved companies qualifies. Consider this visa if your employer is willing to sponsor and you plan to stay with them long-term.`,
  },

  // === BANKING ===
  {
    topic: 'Opening Bank Accounts as Foreigner',
    country: 'TH',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Bank of Thailand; individual bank requirements',
    content: `Thai bank accounts for foreigners (2026 requirements):
- Bangkok Bank: Easiest for foreigners. Accepts tourist visa. Branches in US, UK, China. Requirements: passport, address proof (hotel booking works), minimum deposit ฿500
- Kasikorn Bank (K-Bank): Popular with expats. Green logo. Requirements: passport, Thai phone number, address proof. Some branches stricter than others
- Siam Commercial Bank (SCB): Digital banking, good mobile app. Requirements vary by branch — some accept tourists, others require work permit
- Krung Thai Bank: Government bank, strictest requirements. Usually requires work permit or long-term visa
- CIMB Thai: Malaysian bank, relatively foreigner-friendly
- Account types: Savings account (basic), current account (for business), foreign currency accounts available
- Required features: ATM card, mobile banking, internet banking. International transfers available
- Monthly fees: ฿200-300 if balance below ฿10,000-20,000. ATM fees: ฿20-25 for other bank ATMs`,
    gotchas: `Bank requirements vary by branch even within the same bank — if one branch rejects you, try another. Tourist visa acceptance is inconsistent and depends on the branch manager's discretion. You NEED a Thai phone number before applying — get a SIM card first. Some banks require proof of Thai address, which tourists don't have — hotel booking sometimes works, rental contract preferred. Account opening can take 1-3 hours including paperwork and card issuance.`,
    pro_tip: `Go to Bangkok Bank's main branch in Silom during weekday business hours — they have staff experienced with foreigners and are more likely to approve accounts. Bring multiple documents: passport, copy of passport photo page, copy of visa page, Thai phone number, hotel booking/address proof. Dress professionally and be patient. Consider bringing a Thai-speaking friend to help with translation. If rejected, try Kasikorn Bank branches in expat areas (Sukhumvit, Thong Lor).`,
  },
  {
    topic: 'International Money Transfers',
    country: 'TH',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Bank of Thailand; Wise; Western Union',
    content: `Sending money to Thailand (2026 options):
- Wise (TransferWise): Best rates. 0.4-0.8% fee + small fixed fee. Transfer time: 1-2 business days. Supports all major Thai banks. Mid-market exchange rate
- Western Union: Fast but expensive. 1-3% fees + poor exchange rates. Instant to 1-day delivery. Available at 7-Eleven stores throughout Thailand
- Bank wire transfer: Traditional SWIFT. $15-50 fees + 2-4% markup on exchange rate. 2-5 business days
- Remitly: Good for US to Thailand. Competitive rates. Same-day delivery available
- MoneyGram: Similar to Western Union. Available at banks and post offices
- Thai banks receiving: Bangkok Bank accepts international transfers easily. SCB has good online tracking. Kasikorn charges ฿200-500 receiving fee
- Limits: Tourist visa holders may face scrutiny for large transfers (>$10,000 equivalent). Tax residents should maintain records for annual filing
- Tax implications: Large transfers may trigger bank reporting to Revenue Department`,
    gotchas: `Thai banks may freeze accounts that receive frequent international transfers without proper documentation — keep records of income source. Large transfers (>$5,000) may require source-of-funds documentation. Some transfer services don't work with certain Thai banks — verify compatibility before sending. Exchange rate timing matters — THB can fluctuate 5-10% in short periods. Avoid cash pickup services for large amounts — security risk.`,
    pro_tip: `Wise is the best option for most people — set up receiving bank details correctly (swift code, account number, address) to avoid delays. Bangkok Bank swift code: BKKBTHBK. For regular transfers, set up a Wise borderless account and get a Thai debit card — you can hold multiple currencies and convert at optimal times. Never use airport exchange counters (terrible rates) — use Wise or SuperRich exchange booths in Bangkok (best cash exchange rates).`,
  },
  {
    topic: 'Investment & Brokerage Accounts',
    country: 'TH',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Securities and Exchange Commission Thailand; broker websites',
    content: `Thai investment accounts for foreigners:
- Thai brokerages accepting foreigners: Finansia Syrus (easy online signup), KTB Securities (Krung Thai Bank), Kasikorn Securities, SCB Securities
- Required documents: Passport, visa, Thai bank account, proof of address, tax ID number (for tax residents)
- Stock market: SET (Stock Exchange of Thailand). Foreign ownership limits: 49% aggregate foreign ownership in most listed companies. REITs and ETFs available
- Government bonds: Available to foreigners. ฿1,000 minimum. Yields: 2-4% on 1-10 year bonds. Purchase through banks or brokerages
- Mutual funds: Thai mutual funds available. Lower fees than importing foreign funds. Some USD-denominated funds available
- Trading costs: 0.15-0.4% commission on stock trades. No capital gains tax on securities for individuals
- International brokerages: Interactive Brokers, Schwab accept Thai residents (with restrictions). EToro available. Most Thai expats use international brokers for diversification
- Crypto: Bitkub (largest Thai exchange), Zipmex. KYC required. THB deposits via bank transfer`,
    gotchas: `Thai stock market is small and concentrated in banks, energy, and consumer companies — limited diversification. Foreign ownership limits mean popular stocks may be "full" to foreign buyers. Tax residents must report foreign investment accounts and pay tax on worldwide investment income remitted to Thailand. Some international brokers restrict services to Thai residents due to regulatory complexity. Crypto regulations are evolving — large transactions are monitored.`,
    pro_tip: `Most expats maintain investment accounts in their home country and use Thai accounts only for government bonds (good THB-denominated returns) and local real estate investment trusts (REITs). For diversified investing, keep international brokerages. For Thai exposure, consider the SET50 ETF or Thai REITs yielding 5-8%. Government savings bonds can be purchased at any bank branch — good safe THB investment for money you plan to spend in Thailand.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Bangkok Condo Market by Area',
    country: 'TH',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Thai Real Estate Information Center; DDProperty; Hipflat',
    content: `Bangkok condo prices by district (March 2026, per sqm):
- Sukhumvit (Phrom Phong, Thong Lo, Asok): ฿180,000-350,000/sqm ($5,000-9,700). Premium expat area, BTS access, international amenities
- Silom/Sathorn: ฿150,000-280,000/sqm ($4,200-7,800). Financial district, river views, MRT/BTS interchange
- Lumphini/Ratchadamri: ฿200,000-400,000/sqm ($5,600-11,100). Central Bangkok, parks, shopping
- Chatuchak: ฿80,000-150,000/sqm ($2,200-4,200). Local area, MRT access, more affordable
- Rama 9: ฿120,000-200,000/sqm ($3,300-5,600). Business district, airport rail link
- On Nut/Bang Chak: ฿60,000-120,000/sqm ($1,700-3,300). Emerging area, BTS extension
- Riverside (Charoen Krung): ฿180,000-350,000/sqm. Artists quarter, trendy, river views
Average 1BR condo: ฿3-8M ($85-220K) in prime areas. 2BR: ฿6-15M ($170-420K)
Rental yields: 4-6% gross in established areas. 6-8% in emerging areas
Foreigners can own up to 49% of units in any condo building`,
    gotchas: `Posted prices are often 10-20% negotiable, especially in newer developments. "Sukhumvit" is a huge area — proximity to BTS stations dramatically affects prices (walk-ability drops off after 500m in Bangkok heat). Many condos have poor build quality — inspect thoroughly and consider hiring a surveyor for expensive purchases. Property management fees range from ฿50-150/sqm/month and can be a significant ongoing cost. Some buildings have restrictive rules about rentals.`,
    pro_tip: `Best value for expats: On Nut area (BTS access, 40% cheaper than central Sukhumvit) or Ratchadamri (central but slightly less trendy than Thong Lo). Always negotiate — offer 10-15% below asking as starting point. Factor in transfer costs (1-2%), legal fees (฿50-100K), and taxes (see tax section). For investment: look for buildings with high Thai ownership (more stable) and good management companies. Avoid ground floor units (flooding risk) and top floors (hot, elevator dependency).`,
  },
  {
    topic: 'Chiang Mai Property Market',
    country: 'TH',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Chiang Mai real estate agencies; local market research',
    content: `Chiang Mai property prices (March 2026):
- Nimmanhaemin area: ฿80,000-150,000/sqm ($2,200-4,200). University area, cafes, expat hub
- Old City: ฿60,000-120,000/sqm ($1,700-3,300). Historic, walking distance to temples
- Riverside/Changklan: ฿70,000-130,000/sqm ($1,950-3,600). Night market, river access
- Mae Rim (outskirts): ฿30,000-80,000/sqm ($850-2,200). Houses with gardens, need car
- Hangdong: ฿25,000-60,000/sqm ($700-1,700). Popular with retirees, further from city
- Doi Saket: ฿20,000-50,000/sqm ($560-1,400). Rural, mountain views, very affordable
Houses with land (foreigners via company structure): ฿3-15M ($85-420K) for 2-4BR with garden
Condos: ฿2-8M ($55-220K) for 1-2BR in good areas
Rental yields: 6-8% gross. Higher than Bangkok due to lower purchase prices
Popular with digital nomads due to low costs and good infrastructure`,
    gotchas: `Chiang Mai has seasonal air pollution (burning season Feb-May) that can be severe — check AQI history before buying. Some areas flood during rainy season. Foreign ownership of land requires setting up a Thai company (complex and has legal risks if not done properly). The digital nomad boom has driven up rental prices in popular areas. Infrastructure outside the city center can be basic — check internet speeds and power reliability.`,
    pro_tip: `Rent first for a full year to experience the seasonal variations (pollution, floods, heat) before buying. The best value is in areas like Hang Dong or San Kamphaeng — 20-30% cheaper than city center but still accessible. For houses: use a reputable law firm (Chiang Mai Lawyers, Northern Thai Legal) to set up the company structure properly. Many expats rent long-term instead of buying due to the legal complexities and uncertainty about long-term stay plans.`,
  },
  {
    topic: 'Phuket & Southern Thailand Property',
    country: 'TH',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Phuket real estate agencies; island property specialists',
    content: `Phuket property market (March 2026, per sqm):
- Patong: ฿100,000-250,000/sqm ($2,800-7,000). Tourist area, nightlife, rental income potential
- Kata/Karon: ฿80,000-180,000/sqm ($2,200-5,000). Family beaches, good rental market
- Kamala: ฿120,000-300,000/sqm ($3,300-8,300). Upmarket, lower density, good for families
- Bang Tao/Laguna: ฿150,000-400,000/sqm ($4,200-11,100). Luxury resorts, golf courses
- Rawai/Nai Harn: ฿70,000-160,000/sqm ($1,950-4,500). Local feel, yacht club, expat community
- Phuket Town: ฿50,000-120,000/sqm ($1,400-3,300). Local area, old Sino-Portuguese architecture
Luxury villas: ฿15-100M ($420K-2.8M) for beachfront/hillside properties
Tourist rental yields: 8-12% gross, but seasonal and management-intensive
Other islands: Koh Samui similar pricing. Koh Phangan 30-50% cheaper. Krabi 20-40% cheaper`,
    gotchas: `Phuket has a huge seasonal variation — high season (Nov-Mar) vs low season (May-Oct) affects both property usage and rental income. Many properties are in tsunami risk zones — check evacuation routes and elevation. Tourist rental properties require licenses and face increasing regulations. Property management is essential but costs 15-25% of rental income. Infrastructure can be strained during peak tourist periods. Phuket is expensive compared to mainland Thailand.`,
    pro_tip: `For investment: focus on 1-2BR condos in established areas with good property management — easier to rent than large villas. Avoid ground floor units due to flooding risk. For personal use: consider the shoulder seasons (Apr-May, Sep-Oct) for better weather without crowds. Best areas for expat living (not just investment): Rawai (local community), Kamala (balance of beach and infrastructure), or Phuket Town (authentic Thai experience). Always factor in 3-6 months of vacancy per year for tourist rentals.`,
  },
  {
    topic: 'Property Purchase Process & Costs',
    country: 'TH',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Land Department; Thai law firms',
    content: `Buying property in Thailand — process and costs:
Condo purchase (foreigners can own):
- Due diligence: Verify foreign ownership quota (<49%), building permits, management quality
- Reservation: ฿50,000-500,000 deposit, hold property 7-30 days
- Sales & purchase agreement: 10-30% deposit, lawyer review, financing arrangements
- Transfer: At Land Department office. Buyer, seller, and bank (if financing) must attend
- Transfer fee: 2% of appraised value (often split buyer/seller)
- Withholding tax: Seller pays (see tax section)
- Stamp duty: 0.5% of sale price or appraised value (whichever higher)
- Legal fees: ฿50,000-150,000 depending on complexity

House purchase (via company structure):
- Set up Thai limited company: ฿40,000-80,000
- Company owns land and house (leasehold to foreigner)
- Must have 51% Thai shareholders (nominee structure, legally risky)
- Additional annual costs: ฿30,000-60,000 for company compliance

Timeline: 30-60 days for condo, 60-120 days for house with company setup
Total transaction costs: 3-5% of purchase price`,
    gotchas: `Appraised value by Land Department is often 50-70% of market value — transfer fees and taxes are based on this lower amount (good news). However, banks use market value for mortgage calculations. The 2% transfer fee on a ฿10M condo is ฿200,000 ($5,500) — significant cost to factor in. Company structures for house ownership are technically legal but risky — Thai nominees must be real people who technically own the majority. Changes in law or enforcement could affect foreign "ownership."`,
    pro_tip: `Always use an independent lawyer, not the developer's lawyer. Budget 5% of purchase price for all transaction costs and fees. Get title insurance if available (offered by some firms for expensive properties). For condos: verify the building's foreign ownership certificate from the Land Department — some buildings exceed the 49% foreign limit through various means. Never transfer money until all documents are verified. Consider renting first for 6-12 months to understand the building's management and neighbors.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Public vs Private Healthcare System',
    country: 'TH',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministry of Public Health; hospital websites',
    content: `Thailand healthcare system overview:
Public healthcare (government hospitals):
- Free or very low cost (฿30-100 per visit)
- Available to foreign tourists and residents
- Quality varies: excellent specialists but long wait times
- Best public hospitals: Siriraj (Bangkok), Chulalongkorn (Bangkok), Maharaj Nakorn Chiang Mai Hospital
- Emergency care: Always available, stabilize first then bill

Private healthcare:
- World-class in major cities, costs 60-80% less than US/Europe
- No waiting times, English-speaking staff
- GP consultation: ฿1,500-3,000 ($40-85)
- Specialist: ฿2,500-5,000 ($70-140)
- MRI scan: ฿15,000-25,000 ($420-700) vs $3,000+ in US
- Top private hospitals: Bumrungrad (Bangkok), Bangkok Hospital, Samitivej, Bangkok Phuket Hospital
- Medical tourism hub: Cosmetic surgery, dental work, fertility treatments
- Health insurance accepted: Most international and Thai insurers`,
    gotchas: `Private hospitals vary greatly in quality — stick to JCI-accredited hospitals for serious procedures. Some private hospitals are profit-focused and may recommend unnecessary procedures (especially cosmetic/dental). Government hospital emergency rooms can be chaotic and overcrowded. Rural areas have limited private healthcare options. Prescription medication regulation is inconsistent — some antibiotics available OTC, others heavily controlled.`,
    pro_tip: `Bumrungrad International Hospital in Bangkok is the gold standard — more expensive but truly international quality with US-trained doctors. For routine care, mid-tier private hospitals (Bangkok Hospital, Samitivej) offer good quality at reasonable prices. Keep a health insurance card or cash readily available — some hospitals require payment guarantees before treatment. Many medications are available at pharmacies without prescription for 50-80% less than Western prices.`,
  },
  {
    topic: 'Health Insurance Options',
    country: 'TH',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Insurance brokers; policy comparisons',
    content: `Health insurance in Thailand (2026 options):
Thai domestic insurers:
- AIA Thailand: ฿25,000-80,000/year ($700-2,200). Good hospital network. Thai and English service
- Allianz Ayudhya: ฿20,000-60,000/year ($560-1,700). Covers outpatient and inpatient
- Bupa Thailand: ฿30,000-100,000/year ($840-2,800). Premium option, international standards

International insurers:
- Pacific Cross: ฿15,000-45,000/year ($420-1,250). Popular with expats. Covers regional travel
- Cigna Global: $150-400/month. Worldwide coverage. Best for frequent travelers
- AXA: $100-300/month. Regional Asia coverage
- SafetyWing: $83/month. Basic nomad insurance. Limited network

Government programs:
- Social Security (if employed): ฿750/month employee + employer contribution. Basic coverage, long waits
- Universal Coverage Scheme: Free for Thai nationals only

Age limits: Most Thai insurers won't issue new policies after age 65-70. Pre-existing conditions: 12-24 month exclusion periods`,
    gotchas: `Thai domestic insurance often has sub-limits (฿100,000 max per illness) that seem high but can be quickly exceeded for serious conditions. International insurance is more expensive but offers better coverage limits and global portability. Many policies exclude mental health, HIV/AIDS, and pandemic-related care. Dental coverage is usually minimal or excluded entirely. Some policies require annual health checks to maintain coverage.`,
    pro_tip: `For most expats under 50: Pacific Cross or AIA Thailand provides good value for regional coverage. For frequent travelers: Cigna Global despite higher cost. For budget-conscious: start with SafetyWing and upgrade to local insurance after settling in. Always maintain some international coverage — you don't want to be trapped in Thailand if you need specialized care elsewhere. Consider self-insuring for minor care (cheap in Thailand) and insuring only for major medical expenses.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by City',
    country: 'TH',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; local research; expat surveys',
    content: `Monthly cost of living for a couple (comfortable lifestyle):
Bangkok: $2,000-4,000
- Rent (1BR Sukhumvit area): $800-1,500. Local area: $400-800
- Food: $300-600 (mix of local and Western)
- Transportation: $100-200 (BTS/MRT/taxis)
- Utilities: $80-150 (AC usage dependent)
- Internet: $25-40
- Entertainment/dining: $300-600

Chiang Mai: $1,200-2,500
- Rent (1BR city center): $400-800. Outskirts: $200-450
- Food: $200-400
- Transportation: $50-150 (scooter/car)
- Utilities: $50-100
- Internet: $20-35

Phuket: $1,800-3,500
- Rent (1BR near beach): $600-1,200. Local area: $300-600
- Food: $300-500 (tourist areas expensive)
- Transportation: $150-300 (need scooter/car)
- Utilities: $80-150

Islands (Koh Samui, Koh Phangan): $1,000-2,000 (basic) to $2,500+ (comfortable)
Rural areas: $500-1,200 for basic comfortable living`,
    gotchas: `"Local vs expat" lifestyle dramatically affects costs — eating Thai food vs Western can differ by 300-500%. Air conditioning costs spike in hot season (Mar-May). Tourist areas have 50-100% markup on everything. Alcohol is expensive due to taxes — beer ฿80-150 in bars ($2-4), wine heavily taxed. Private transportation needed outside Bangkok adds $200-400/month. Health insurance not included in above estimates — add $50-200/month.`,
    pro_tip: `Live like locals to minimize costs: eat at street food stalls (฿40-80/meal), shop at local markets, use public transport. Learn basic Thai numbers and phrases to avoid "farang pricing." Best value cities: Chiang Mai for urban lifestyle, Hua Hin for beach retirees, Udon Thani/Khon Kaen for authentic Thai experience. Avoid pure tourist areas for living — prices are inflated and you miss authentic Thai culture.`,
  },
  {
    topic: 'Internet & Coworking Infrastructure',
    country: 'TH',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'NBTC (telecom regulator); coworking directories',
    content: `Thailand internet and remote work (2026):
Home internet:
- Fiber providers: True (best coverage), AIS, 3BB, TOT. Speed: 100-1000Mbps
- Cost: ฿590-1,990/month ($17-55) for 100-1000Mbps fiber
- Availability: Excellent in cities, limited in rural areas
- Average speeds: Bangkok 150Mbps, Chiang Mai 120Mbps, Phuket 100Mbps

Mobile data:
- Carriers: AIS (best coverage), True, dtac. Tourist SIM: ฿299-599 for 8-15 days unlimited
- Monthly plans: ฿599-1,299 ($17-36) for unlimited data
- 5G: Available in Bangkok, Chiang Mai, Phuket, Pattaya

Coworking spaces:
- Bangkok: Hubba (฿4,500/month), TCDC (฿2,000/month), The Hive (฿5,500/month), Rise (฿6,000/month)
- Chiang Mai: CAMP (฿2,500/month), Punspace (฿3,000/month), Yellow (฿2,000/month)
- Phuket: Kohub (฿3,500/month), Phuket Coworking (฿2,500/month)
- Day passes: ฿150-400/day

Cafés: Most have free WiFi. Speeds: 20-100Mbps typically`,
    gotchas: `Internet infrastructure varies greatly — even in the same building, different units can have different providers and speeds. Fiber installation can take 1-4 weeks and requires being present during business hours. Power outages during rainy season can knock out internet for hours. Rural areas may only have 3G/4G coverage. Many cafés have slow WiFi unsuitable for video calls. Coworking spaces fill up during digital nomad high season (Nov-Mar).`,
    pro_tip: `For remote work: get True fiber at home (most reliable) + AIS unlimited mobile plan as backup. Test internet speeds before committing to rental agreements — ask landlords for speed tests. Best coworking deal: Chiang Mai's CAMP or Yellow for value and community. For video calls: book private phone booths at coworking spaces or use hotel business centers. Time zone advantage: Thailand is 12-15 hours ahead of Americas, good for async work with Europe.`,
  },
  {
    topic: 'International Schools & Education',
    country: 'TH',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'School websites; Ministry of Education',
    content: `International schools in Thailand (2026-2027 fees):
Bangkok:
- International School Bangkok (ISB): ฿800,000-1,200,000/year ($22-33K). Ages 3-18. American curriculum
- NIST International School: ฿600,000-900,000/year ($17-25K). IB program. Ages 3-18
- Bangkok Patana School: ฿500,000-750,000/year ($14-21K). British curriculum
- Shrewsbury International School: ฿400,000-650,000/year ($11-18K). British system

Chiang Mai:
- Chiang Mai International School: ฿200,000-400,000/year ($5.5-11K). American curriculum
- Prem Tinsulanonda International School: ฿300,000-500,000/year ($8-14K). IB boarding school

Phuket:
- British International School Phuket: ฿400,000-650,000/year ($11-18K)
- QSI International School: ฿300,000-500,000/year ($8-14K)

Thai private schools (bilingual): ฿100,000-300,000/year ($2.8-8.3K). Good option for younger children
Government schools: Free. Thai language instruction. Cultural immersion`,
    gotchas: `International school fees don't include: uniforms (฿5,000-15,000), school buses (฿50,000-80,000/year), lunch (฿30,000-50,000/year), activities/trips (฿20,000-50,000/year). Total cost can be 30-50% above base tuition. Wait lists for top schools can be 1-2 years. Some schools require entrance exams or English proficiency tests. School calendars may not align with home country holidays.`,
    pro_tip: `For children under 8: consider Thai bilingual private schools — they become truly bilingual and cost 1/3 of international schools. ISB and NIST have the best university placement records but are very expensive. Many families move to Chiang Mai specifically for affordable international education. Apply early — popular schools fill up quickly. Some schools offer sibling discounts (10-20% off) for multiple children.`,
  },
];