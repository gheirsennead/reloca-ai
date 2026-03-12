# Visa Application Package — Technical Design Document

**Author:** Nexus (Dev Agent)
**Date:** 2026-03-12
**Status:** DRAFT — Scoping only
**Product:** $499 Visa Application Package (Phase 2)

---

## 1. Data Requirements

### What We Already Have

The existing codebase contains visa data in two places:

1. **Country page data** (`app/relocate-to/[country]/page.tsx`) — 23 countries with: visa type name, processing time estimate, tax highlight, cost index. This is surface-level marketing copy, not application-grade data.

2. **Knowledge Base** (`lib/knowledge-base-schema.ts`) — Currently 11 entries, Portugal only. 3 entries are `category: 'visa'` covering D7, Golden Visa, and Digital Nomad Visa. These are detailed and actionable (requirements, costs, gotchas, pro tips). ~18KB total.

3. **Data Accuracy Types** (`lib/data-accuracy/types.ts`) — Already defines a `VisaInfo` interface with: type, requirements[], processing_time, cost, validity, sources[], confidence score, last_verified date. This is the right schema but has no data populated beyond Brazil/Argentina/Uruguay source definitions.

### What's Missing for $499 Package

For each of 23 countries, we need **application-grade** visa data:

| Data Point | Current Coverage | Gap |
|---|---|---|
| Visa types per country (3-8 each) | Names only (country pages) | Full eligibility criteria, document lists |
| Required documents per visa type | Portugal only (KB) | 22 countries × ~5 visa types = ~110 visa profiles |
| Government fees & lawyer costs | Partial (KB Portugal) | All countries, kept current |
| Processing timelines (realistic) | Rough estimates | Step-by-step with milestones |
| Form locations (PDF vs online portal) | None | NEEDS RESEARCH per country |
| Eligibility matrix (nationality × visa type) | None | Critical for personalization |
| Rejection rates & common reasons | None | NEEDS RESEARCH — may require FOIA/scraping |
| Document translation requirements | None | Country-specific (apostille, sworn, etc.) |

### Sourcing Strategy

**Tier 1 — Structured KB expansion (build first):**
- Expand `knowledge-base-schema.ts` pattern to all 23 countries
- Manual research from government immigration websites
- Estimated effort: 3-5 days per country = 70-115 person-days total
- **Recommendation:** Prioritize top 8 countries by report volume first

**Tier 2 — Semi-automated sourcing:**
- Government immigration portals (most have structured requirements pages)
- `lib/scraper-utils.ts` already exists — extend for immigration pages
- Immigration law firm published guides (Fragomen, Berry Appleman, local firms)

**Tier 3 — Partnerships (longer term):**
- Partner with 2-3 immigration law firms who can validate data
- Their incentive: we send them clients via the lawyer add-on
- **NEEDS RESEARCH:** Which firms cover multiple countries and would partner?

### Keeping Data Current

Visa rules change frequently. Strategy:

- Add `last_verified` + `next_review_date` to every visa entry
- Quarterly review cycle per country (cron job flags stale entries)
- Immigration lawyer partners flag changes as part of partnership agreement
- Government RSS/newsletter subscriptions for major countries
- **MVP:** Manual quarterly review; automate monitoring post-launch

---

## 2. AI Report Generation

### Model & Prompt Architecture

**Recommended approach:** Same pattern as current report generation (`app/api/generate-report/route.ts`) but with a specialized prompt chain.

**Current architecture:**
- Single Anthropic API call with full KB + live data in context
- `maxDuration: 300` (5 min timeout on Vercel)
- Knowledge base injected as system context

**Proposed for Visa Package:**

```
Step 1: Visa Selection (fast)
  Input: User profile (from quiz) + target country
  Output: Recommended visa type + 2 alternatives with reasoning
  Model: Claude Haiku (fast, cheap) — ~2s

Step 2: Full Package Generation (detailed)
  Input: Selected visa type + full user profile + country KB + live data
  Output: Complete visa application package (all sections below)
  Model: Claude Sonnet — ~30-60s
  
Step 3: Form Guidance Generation (if applicable)
  Input: Visa type + user data + form template
  Output: Field-by-field instructions
  Model: Claude Sonnet — ~15-30s
```

**Total generation time:** ~1-2 minutes. Can show progress bar with section updates.

### Personalization Inputs (from existing quiz)

Already captured in 36-question quiz:
- ✅ Current country of residence (Q4) → determines nationality-specific requirements
- ✅ Family composition (Q6, Q8) → dependent visa requirements
- ✅ Age range (Q7) → retirement visa eligibility
- ✅ Income level (Q9) → financial requirement thresholds
- ✅ Net worth (Q10) → investor visa eligibility
- ✅ Income sources (Q12) → passive income vs employment visa routing
- ✅ Remote work capability (Q13) → digital nomad visa eligibility
- ✅ Languages spoken (Q17) → language requirement assessment
- ✅ Citizenship interest (Q24) → pathway-to-citizenship scoring

**Additional inputs needed (new questions or separate intake form):**
- Exact nationality/passport(s) held (not just "country of residence")
- Employment status & employer details (for work visa types)
- Education level (some visas require degrees)
- Criminal record (yes/no — affects eligibility)
- Previous visa refusals (critical for risk assessment)
- Target arrival date (for timeline calculation)
- Specific visa type preference (if any)

**Recommendation:** Add a short "Visa Package Intake" form (8-10 questions) shown after purchase, separate from the main quiz.

### Output Sections

1. **Executive Summary** — Recommended visa, estimated timeline, total cost
2. **Visa Recommendation** — Primary + 2 alternatives, with pros/cons matrix
3. **Eligibility Assessment** — Pass/fail on each requirement with your specific data
4. **Document Checklist** — Every document needed, with:
   - Description & format requirements
   - Where to obtain it
   - Processing time for each document
   - Translation/apostille requirements
   - Deadline relative to application date
5. **Application Timeline** — Month-by-month Gantt-style plan:
   - Document gathering phase
   - Application submission window
   - Processing period
   - Decision & next steps
6. **Form Guidance** — For each required form:
   - Form name & number
   - Where to download/access
   - Field-by-field instructions with user's data
7. **Cost Breakdown**
   - Government fees
   - Translation costs
   - Apostille/legalization fees
   - Lawyer review (optional add-on)
   - Total estimate
8. **Rejection Risk Assessment**
   - Common rejection reasons for this visa type
   - Risk factors specific to user's profile
   - Mitigation strategies
9. **Post-Approval Steps** — What happens after visa is granted

---

## 3. Form Pre-filling

### Reality Check

**Can we pre-fill government visa forms?**

The answer varies dramatically by country:

| Approach | Countries | Feasibility |
|---|---|---|
| Downloadable PDF forms | Portugal (SEF/AIMA), Brazil, Paraguay, Uruguay | ✅ Can generate pre-filled PDFs |
| Online-only portals | Spain, UAE, Singapore, Estonia, Thailand | ❌ Cannot auto-fill — provide field instructions instead |
| Mixed (PDF + online) | Italy, Greece, Malta, Mexico | Partial |
| Appointment-based (forms at consulate) | Some LatAm consulates | ❌ Instructions only |

**NEEDS RESEARCH:** Comprehensive audit of each country's application method (online portal vs PDF vs in-person). This is a 2-3 day research task.

### Technical Approach

**MVP (recommended):** Don't pre-fill forms. Instead, generate detailed "fill this field with X" instructions for every field on every required form. This is:
- Legally safe (no automated submission)
- Works for all countries regardless of form format
- Still massively valuable (the hard part is knowing *what* to write)

**V2 (post-launch):** For countries with downloadable PDF forms, use a PDF library (`pdf-lib` in Node.js) to generate pre-filled PDFs. User downloads, reviews, and submits themselves.

**V3 (future):** Browser extension that auto-fills online portals. High complexity, maintenance burden, regulatory risk. **Not recommended for near-term.**

### Legal Considerations

- **No legal issue** with generating instructions (this is what lawyers do)
- **Pre-filled PDFs:** Low risk if clearly labeled "draft — review before submitting"
- **Auto-submitting forms on behalf of users:** Likely requires legal practitioner status in some jurisdictions. **Avoid.**
- **Disclaimer required:** "This is an informational tool, not legal advice. Consult a qualified immigration lawyer before submitting."
- **NEEDS RESEARCH:** Check if any countries explicitly prohibit third-party form preparation for immigration applications

---

## 4. Lawyer Integration

### MVP Approach (Recommended for Launch)

**Referral model with 2-3 partner firms:**

1. User generates visa package
2. Package includes an "Optional: Expert Lawyer Review" CTA
3. Click → Calendly booking page for a partnered immigration lawyer specializing in that country
4. Lawyer reviews the AI-generated package + user's documents
5. We receive $50-100 referral fee per booking

**Why this works for MVP:**
- Zero marketplace infrastructure needed
- No payment splitting complexity
- Lawyers are motivated (warm, pre-qualified leads with organized documentation)
- We can launch with just 1-2 partner firms covering top countries

### Partner Requirements

- Firms with multi-country coverage (ideal: 1 Europe, 1 LatAm, 1 Asia/ME)
- Must be willing to review AI-generated packages (some firms may resist)
- Fixed consultation fee ($200-500 range) so we can show users the cost upfront
- Track record with expat/relocation clients specifically

**NEEDS RESEARCH:** Identify and approach 3-5 candidate firms. G/business team task, not dev.

### V2 — Marketplace Model

If referral volume justifies it:
- Lawyer profiles page on reloca.ai
- Rating/review system
- Automated payment split (Stripe Connect)
- In-app messaging between user and lawyer
- **Estimated build time:** 3-4 weeks additional

---

## 5. Architecture

### New Database Tables (Supabase)

```sql
-- Visa package orders
CREATE TABLE visa_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  report_id UUID REFERENCES reports(id),      -- links to existing Reloca report
  target_country TEXT NOT NULL,
  recommended_visa_type TEXT,
  status TEXT DEFAULT 'pending',               -- pending, generating, ready, delivered
  intake_answers JSONB,                        -- additional visa-specific questions
  package_content JSONB,                       -- generated package sections
  pdf_url TEXT,                                -- downloadable PDF
  stripe_payment_id TEXT,
  lawyer_referral_status TEXT,                 -- null, clicked, booked, completed
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Visa data per country (structured, versioned)
CREATE TABLE visa_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_code TEXT NOT NULL,                  -- ISO 2-letter
  visa_type TEXT NOT NULL,
  data JSONB NOT NULL,                         -- requirements, docs, fees, timelines
  sources JSONB,                               -- URLs, dates checked
  confidence_score INTEGER,                    -- 0-100
  last_verified TIMESTAMPTZ,
  next_review TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(country_code, visa_type)
);

-- Lawyer partners
CREATE TABLE lawyer_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  firm TEXT,
  countries TEXT[],                             -- countries they cover
  booking_url TEXT,                             -- Calendly or similar
  consultation_fee INTEGER,                    -- in USD
  referral_fee INTEGER,                        -- our cut in USD
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### New API Endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/visa-package/create-checkout` | POST | Stripe checkout for $499 |
| `/api/visa-package/intake` | POST | Save additional intake form answers |
| `/api/visa-package/generate` | POST | Trigger AI package generation |
| `/api/visa-package/[id]` | GET | Fetch generated package |
| `/api/visa-package/[id]/pdf` | GET | Download PDF version |
| `/api/visa-package/[id]/lawyer-referral` | POST | Track lawyer CTA clicks |

### New Pages

| Page | Purpose |
|---|---|
| `/visa-package` | Landing/sales page for the $499 product |
| `/visa-package/intake/[reportId]` | Post-purchase intake form |
| `/visa-package/[id]` | View generated package |

### Payment Flow

```
User views Reloca report → sees "Get Visa Package" upsell ($499)
  → Stripe Checkout (same pattern as existing $49 flow)
  → Success → redirect to /visa-package/intake/[reportId]
  → User answers 8-10 additional questions
  → Submit → triggers /api/visa-package/generate
  → Show progress page (generation: 1-2 min)
  → Package ready → view online + download PDF
  → Optional: "Get Lawyer Review" CTA → Calendly booking
```

### Integration with Existing Infrastructure

- **Quiz data:** Reuse answers from `reports` table (already stored as JSONB)
- **Stripe:** Same Stripe account, new price ID for $499
- **Supabase:** Same project, new tables
- **PDF generation:** Add `@react-pdf/renderer` or `puppeteer` for PDF export
- **Email:** Extend existing email system for package delivery + follow-up sequence

### Estimated Build Time

| Phase | Scope | Estimate |
|---|---|---|
| Data: Top 8 countries visa KB | Research + entry | 10-15 days |
| Backend: DB + API + generation | Tables, endpoints, AI prompts | 5-7 days |
| Frontend: Landing + intake + viewer | 3 new pages | 4-5 days |
| PDF generation | Package → downloadable PDF | 2-3 days |
| Stripe integration | Checkout + webhooks | 1-2 days |
| Lawyer referral (MVP) | Calendly links + tracking | 1 day |
| Testing + QA | End-to-end + edge cases | 3-4 days |
| **Total** | | **26-37 developer-days** |

**Critical path:** Visa data research (10-15 days). Everything else can be built in parallel once data schema is finalized.

---

## 6. Competitive Analysis

### Landscape

| Competitor | Focus | Pricing | Key Feature | Limitation |
|---|---|---|---|---|
| **Boundless** | US immigration (green cards, family-based) | $895-$995 | End-to-end with lawyer review | US-only, family immigration focus |
| **Visas.AI** | US immigration law firms (B2B) | SaaS pricing (firm-level) | Case management + AI drafting | Lawyer-facing, not consumer |
| **ImmigrationOS** (Palantir) | US government adjudication | N/A (gov contract) | Internal USCIS processing | Not consumer-facing |
| **ImmiGPT / VisaBot** | Chatbot-style visa Q&A | Free / freemium | Quick answers | No document generation, shallow |
| **Fragomen** (traditional) | Corporate immigration | $5K-50K+ per case | Full-service, all countries | Enterprise-only pricing |
| **Deel / Remote** | Employer-sponsored work visas | Part of HR platform | Integrated with payroll | Only employer-sponsored |

### Reloca Differentiation

1. **Global coverage** — Competitors are almost all US-only. Reloca covers 23+ countries. This is the #1 differentiator.

2. **Consumer-facing + affordable** — $499 vs $895+ (Boundless) or $5K+ (traditional). Accessible to individual relocators, not just corporations.

3. **AI-native from day one** — Not a digitized law firm. AI generates the full package; lawyer is optional add-on, not gatekeeper.

4. **Integrated with existing quiz data** — User already answered 36 questions. No starting from scratch. The visa package is a natural upsell from the $49 report.

5. **Multi-country comparison** — User can generate packages for 2-3 countries and compare. No competitor offers this for global relocation.

### Risk: Legal gray area

Generating "visa application packages" comes close to legal advice in some jurisdictions. Mitigation:
- Clear disclaimers: "informational tool, not legal advice"
- Position as document preparation / organization tool
- Always recommend lawyer review for final submission
- Don't auto-submit anything to governments
- **NEEDS RESEARCH:** Review regulations in key markets (US, EU, UK) on what constitutes "immigration legal practice"

---

## Open Questions (NEEDS RESEARCH)

1. Which countries have downloadable PDF visa forms vs. online-only portals?
2. Legal restrictions on automated form preparation per jurisdiction?
3. Partner immigration law firms — who covers multiple countries?
4. Rejection rate data sources — available via government transparency reports?
5. Nationality-specific requirements matrix — any existing database we can license?
6. Insurance/liability for incorrect visa guidance — do we need professional indemnity insurance?

---

## Recommendation

**Start with:**
1. Build visa data for top 5 countries by report volume (Portugal, Spain, UAE, Thailand, Mexico)
2. MVP backend + frontend (no PDF pre-filling, just instructions)
3. 1 lawyer partner firm for Europe, 1 for LatAm
4. Launch at $499, measure conversion from existing $49 report buyers
5. Iterate based on user feedback before expanding to all 23 countries

**Estimated time to MVP launch:** 6-8 weeks with 1 developer + research support.
