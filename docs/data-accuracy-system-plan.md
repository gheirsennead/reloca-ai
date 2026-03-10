# Reloca.ai Data Accuracy System - Architecture Plan

## Current State Analysis

**Problems:**
- Static data in report generation (hardcoded facts)
- No systematic verification process
- Manual updates required for every change
- Critical errors (Uruguay: 5yr vs 11yr tax holiday)
- No freshness indicators
- Single-source information (prone to errors)

## Proposed Architecture: Multi-Source Verification System

### Phase 1: Data Source Infrastructure (Weeks 1-2)

**1.1 Primary Data Sources**
```
Government APIs (where available):
├── Tax Agencies (IRS equivalents)
├── Immigration Departments  
├── Central Banks (exchange rates, banking)
├── Ministry of Economy (cost of living)
└── Statistical Offices (demographics, prices)

Legal/Professional Sources:
├── International law firms (Baker McKenzie, etc.)
├── Expat advisory services (Nomad Capitalist, etc.)  
├── Embassy/Consulate websites
├── International organizations (OECD, World Bank)
└── Specialized tax advisory sites

Real-time Data:
├── Exchange rate APIs (XE, Fixer.io)
├── Cost of living APIs (Numbeo API)
├── Real estate APIs (local MLS systems)
└── Flight data APIs (Skyscanner, etc.)
```

**1.2 Data Pipeline Architecture**
```
[Data Sources] → [Scrapers/API Clients] → [Raw Data Storage] 
     ↓
[Data Validation Engine] → [Conflict Detection] → [Human Review Queue]
     ↓  
[Verified Data Store] → [Report Generation] → [End User Reports]
```

### Phase 2: Verification Engine (Weeks 3-4)

**2.1 Multi-Source Cross-Validation**
- Require 2-3 sources for critical facts (tax rates, residency requirements)
- Confidence scoring (0-100%) based on source agreement
- Flag conflicting information for human review
- Timestamp all data with "last verified" dates

**2.2 Data Freshness System**
```javascript
Data Categories by Update Frequency:
├── Daily: Exchange rates, flight prices  
├── Weekly: Cost of living indexes
├── Monthly: Real estate prices, job market
├── Quarterly: Tax law changes, immigration rules
└── Yearly: Major policy overhauls
```

**2.3 Quality Scoring Algorithm**
```
Source Reliability Weight:
├── Government sources: 100% weight
├── Major law firms: 90% weight  
├── Established expat sites: 70% weight
├── News articles: 50% weight
└── User reports: 30% weight

Confidence = (Σ(Source Weight × Agreement)) / Total Sources
```

### Phase 3: Report Integration (Weeks 5-6)

**3.1 Dynamic Report Generation**
- Replace static content with database queries
- Real-time data insertion at report generation
- Confidence indicators for each fact
- "Last updated" timestamps per section

**3.2 Report Quality Indicators**
```
Per Report Section:
├── 🟢 High Confidence (90%+, 3+ sources, <30 days old)
├── 🟡 Medium Confidence (70-89%, 2 sources, <90 days old)  
├── 🔴 Low Confidence (<70%, 1 source, >90 days old)
└── ⚠️  Conflicting Data (manual review needed)
```

## Implementation Plan

### Week 1-2: Foundation
```bash
# New services to build:
├── data-collector/ (scraping & API clients)
├── verification-engine/ (cross-validation logic)
├── data-store/ (structured data storage)
└── quality-monitor/ (alerts & dashboards)
```

### Week 3-4: LATAM Priority Countries (Gregory's List)
**Phase 1 LATAM Countries:**
1. Argentina 🇦🇷
2. Brazil 🇧🇷
3. Uruguay 🇺🇾
4. Paraguay 🇵🇾
5. Mexico 🇲🇽
6. Panama 🇵🇦
7. Chile 🇨🇱
8. El Salvador 🇸🇻
9. Venezuela 🇻🇪

**Phase 2 LATAM Expansion:**
10. Colombia 🇨🇴
11. Ecuador 🇪🇨
12. Costa Rica 🇨🇷
13. Guatemala 🇬🇹
14. Honduras 🇭🇳
15. Nicaragua 🇳🇮
16. Bolivia 🇧🇴
17. Peru 🇵🇪

### Week 5-6: Integration & Testing
- Connect to existing report generation
- A/B testing (old vs new system)
- User feedback collection
- Quality assurance

## Data Sources Roadmap

### Immediate (Phase 1) - LATAM Priority
**Government APIs:**
```
Argentina: AFIP (tax), DNM (immigration), BCRA (banking)
Brazil: RFB (tax), PF (immigration), BCB (banking)
Uruguay: DGI (tax), DNM (immigration), BCU (banking)  
Paraguay: SET (tax), MIG (immigration), BCP (banking)
Mexico: SAT (tax), INM (immigration), Banxico (banking)
Panama: DGI (tax), SNM (immigration), SBP (banking)
Chile: SII (tax), PDI (immigration), BCCh (banking)
El Salvador: DGI (tax), DGME (immigration), BCR (banking)
Venezuela: SENIAT (tax), SAIME (immigration), BCV (banking)
```

**Professional Sources:**
```
Law Firms: Baker McKenzie, Deloitte, EY tax guides
Expat Sites: Nomad Capitalist, International Living
Cost Data: Numbeo API, OECD Better Life Index
Real Estate: Local MLS APIs, international property sites
```

### Future Expansion
- Complete LATAM coverage (17 countries) by end of Q1
- European markets (Portugal, Spain, Italy) in Q2  
- Asia-Pacific markets (Malaysia, Thailand, Philippines) in Q3
- Industry-specific data (digital nomad visas, startup hubs)
- Community reporting system (verified expats)
- Integration with relocation service providers

## Technical Stack

```yaml
Backend:
  - Node.js/TypeScript for scrapers
  - Python for data processing/ML
  - PostgreSQL for structured data
  - Redis for caching/rate limiting
  - Supabase for existing integration

Monitoring:
  - Data freshness alerts
  - Source availability monitoring  
  - Quality degradation detection
  - Manual review queue management

Frontend Integration:
  - Real-time data in reports
  - Confidence indicators UI
  - "Data last updated" timestamps
  - Source attribution links
```

## Success Metrics

**Quality Metrics:**
- Data accuracy rate (95%+ target)
- Source conflict detection (flag <1% for review)
- Report generation time (<30s with fresh data)
- User trust indicators (survey scores)

**Business Metrics:**
- Report quality scores (user feedback)
- Customer retention improvement
- Premium conversion increase
- Support ticket reduction (fewer "this is wrong" reports)

## Part 2: Analytics & Market Intelligence System

### User Journey Tracking

**Visit Analytics:**
```
Homepage → Questionnaire → Report Preview → Purchase → Dashboard
     ↓            ↓              ↓           ↓          ↓
  Landing      Questions      Preview     Checkout   Usage
   Stats        Progress       Views      Success   Patterns
```

**Key Metrics to Track:**
```javascript
// Acquisition
├── Traffic sources (organic, paid, referral, direct)
├── Country of origin (visitor location)
├── Device/browser breakdown
├── Referral partner performance (/?ref= tracking)
└── Landing page effectiveness

// Engagement  
├── Questionnaire completion rate (by question)
├── Time spent per section
├── Drop-off points identification
├── Report preview engagement
└── Return visitor patterns

// Conversion
├── Free → Paid conversion rates
├── Payment method preferences  
├── Checkout abandonment points
├── Referral code usage
└── Customer lifetime value

// Market Intelligence
├── Most requested destination countries
├── User demographic patterns (age, income, family)
├── Relocation motivations (taxes, lifestyle, cost)
├── Seasonal demand patterns
└── Feature usage analytics
```

### Analytics Architecture

**1. Event Tracking System**
```typescript
// Core events to capture:
interface TrackingEvent {
  userId?: string;
  sessionId: string;
  timestamp: Date;
  event: 'page_view' | 'click' | 'form_submit' | 'purchase' | 'report_view';
  properties: {
    page?: string;
    element?: string;
    country?: string;
    amount?: number;
    referral_code?: string;
  };
  user_properties: {
    country?: string;
    device?: string;
    utm_source?: string;
    first_visit?: Date;
  };
}
```

**2. Analytics Database Schema**
```sql
-- User sessions and behavior
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  user_id UUID,
  session_id UUID NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL,
  event_type TEXT NOT NULL,
  page_url TEXT,
  referrer TEXT,
  properties JSONB,
  user_agent TEXT,
  ip_country TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Business intelligence views
CREATE TABLE daily_metrics (
  date DATE PRIMARY KEY,
  unique_visitors INTEGER,
  questionnaire_starts INTEGER, 
  questionnaire_completions INTEGER,
  report_previews INTEGER,
  purchases INTEGER,
  revenue DECIMAL,
  top_countries TEXT[]
);

-- Market research data
CREATE TABLE user_preferences (
  user_id UUID,
  target_countries TEXT[],
  relocation_timeline TEXT,
  budget_range TEXT,
  motivation_tags TEXT[],
  demographics JSONB
);
```

**3. Real-time Analytics Dashboard**
```
KPI Dashboard Sections:
├── Today's Performance (visitors, conversions, revenue)
├── Funnel Analytics (questionnaire → purchase flow)
├── Geographic Insights (visitor origins, target destinations)
├── Referral Partner Performance (by partner code)
├── Market Trends (seasonal patterns, popular countries)
└── User Behavior Heatmaps (page interactions, time spent)
```

### Market Research Features

**Country Demand Analysis:**
- Most researched destinations (by questionnaire data)
- Conversion rates by target country  
- Seasonal demand patterns
- Demographic preferences per country

**User Segmentation:**
```
Segments to Track:
├── Digital Nomads (remote work, short-term)
├── Retirees (long-term, lifestyle focus)
├── Families (education, safety priorities)  
├── Investors (tax optimization, business)
└── Students (education, budget-conscious)
```

**Competitive Intelligence:**
- Traffic source analysis (what's working)
- Referral partner effectiveness
- Content performance (which pages convert best)
- Price sensitivity analysis (abandoned checkouts)

### Implementation Roadmap

**Week 1:** Analytics Foundation
- Event tracking implementation
- Basic funnel metrics
- Geographic visitor tracking

**Week 2:** Advanced Tracking  
- User behavior analytics
- Referral attribution system
- Purchase conversion tracking

**Week 3:** Business Intelligence
- Market research dashboard
- Country demand analytics
- User segmentation system

**Week 4:** Optimization Tools
- A/B testing framework
- Performance monitoring
- Automated alerts (drop in conversions, etc.)

## Combined Investment Required

**Development Time:** 8 weeks total (6 weeks data accuracy + 2 weeks analytics)
**Ongoing Maintenance:** 15 hours/week (10 data quality + 5 analytics monitoring)
**Infrastructure Costs:** ~$350/month (APIs, storage, compute, analytics tools)
**Legal/Compliance:** Review data usage rights per country + GDPR/privacy compliance

## Next Steps - Parallel Development

### Data Accuracy System (6 weeks)
1. **This week:** Uruguay manual fix (immediate) + Argentina setup  
2. **Week 1-2:** Infrastructure + Argentina/Brazil/Uruguay pilot
3. **Week 3-4:** All 9 LATAM priority countries live
4. **Week 5-6:** Integration testing + quality assurance

### Analytics System (2 weeks, can run parallel)
1. **Week 1:** Basic event tracking + funnel metrics
2. **Week 2:** Business intelligence dashboard + market research tools

### Combined Timeline
```
Week 1: Uruguay fix + Analytics foundation + Argentina data pilot
Week 2: Brazil/Paraguay data + Advanced tracking 
Week 3: Mexico/Panama/Chile data + BI dashboard
Week 4: El Salvador/Venezuela data + Optimization tools
Week 5: Data system integration testing
Week 6: Quality assurance + full rollout
```

## Immediate Actions

**Today (Monday):**
1. Fix Uruguay tax holiday (5yr → 11yr) in reports
2. Set up basic analytics event tracking
3. Start Argentina government data source research

**This Week:**
1. Analytics dashboard foundation  
2. Argentina data accuracy pilot
3. Event tracking for all user actions

**Ready to start with these immediate fixes and foundation work?**