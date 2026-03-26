# Reloca.ai — Project Status

> **READ THIS FILE AT THE START OF EVERY SESSION before communicating with G.**
> Last updated: 2026-03-17

## 🌐 Live URLs

| Page | URL |
|------|-----|
| **Homepage** | https://reloca.ai |
| **Analytics Dashboard** | https://reloca.ai/admin/analytics |
| **Client List (buyers/emails)** | https://reloca.ai/admin/clients |
| **Partner Admin** | https://reloca.ai/admin/partners |
| **Data Accuracy** | https://reloca.ai/admin/data-accuracy |
| **GitHub Repo** | https://github.com/gheirsennead/reloca-ai |

Admin password (same for all admin pages): `10f34574c2510a38ae6caad89e45a7f5`

## 💰 Pricing

- **Current price**: $29 (launch special, was $49)
- **Reverts to $49**: April 6th, 2026
- **Stripe price ID (live)**: `price_1TBfApL756pWnGAvUU476p75` ($29)
- **Free coupon**: `GiftfromGreg` (100% off, one-time)
- **Action needed April 6th**: Revert all pages to $49 + swap Stripe price ID back

## 📊 Analytics Filters

- `vitagreg@gmail.com` excluded from all conversion/revenue stats (G's test account)
- $0 coupon conversions excluded from revenue and conversion counts
- Both `/api/analytics` and `/api/admin/stripe-revenue` enforce these filters

## 🔀 Branch Status (as of 2026-03-17)

### ✅ Merged to `main` (deployed)

| Branch | What it does | Merged date |
|--------|-------------|-------------|
| `analytics-audit` | Bug fixes (quiz completion mismatch, landing page detection), UTM tracking, revenue metrics, marketing ROI view | 2026-03-17 |
| `stripe-revenue-dashboard` | Live Stripe revenue section with customer names/emails, daily revenue chart, recent payments table | 2026-03-17 |
| `conversion-optimization` | Money-back badge on all CTAs, post-quiz nurture emails (auto-scheduled), quiz progress save/resume via localStorage | 2026-03-17 |
| `fix/free-summary-page` | Hide #2/#3 country names, fix UAE capitalization, remove fake testimonials, countdown timer | 2026-03-14 |
| `fix/paid-report-page` | Remove mid-report upsells, add education section, improve personalization | 2026-03-14 |
| `fix/fast-checkout` | Module-level Stripe client, parallel discount checks, $49→$29 pricing | 2026-03-16 |

### ⏳ Unmerged branches (not on production)

| Branch | What it does | Status |
|--------|-------------|--------|
| `pricing-update-march-2026` | Older pricing branch | Superseded by fix/fast-checkout |
| `visa-package-scoping` | Visa package feature scoping | Not started |
| `phase2-kb-content` | Phase 2 knowledge base content | In progress |

## 🏗️ Architecture

- **Framework**: Next.js (App Router)
- **Hosting**: Vercel (auto-deploys from `main`)
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe (Checkout Sessions)
- **Analytics**: Custom built-in (Supabase events table)
- **AI**: OpenAI for report generation

## 📋 Key Admin Pages

### `/admin/analytics`
Full analytics dashboard with:
- Live visitors, sessions, page views, bounce rate
- 💰 **Stripe Revenue** (live from Stripe API): period/all-time revenue, payment count, AOV, refunds, daily chart, **recent payments with customer names & emails**
- Revenue metrics from analytics events
- Marketing ROI by platform (UTM-based)
- Full conversion funnel visualization
- Quiz progression analytics with drop-off points
- SEO performance & organic growth
- Visitor countries, traffic sources, popular CTAs

### `/admin/clients`
Client management with:
- All contacts with email, signup date, paid status
- Payment details, Stripe customer ID
- Quiz completion status, report generation status
- UTM tracking data per user
- Expandable detail view per client

## 📧 Email BCC

All outgoing emails are BCC'd to `myjobisamazing@gmail.com` (hidden copy of every email to customers, quiz takers, partners).

Files with email sends:
- `app/api/send-emails/route.ts` — nurture/abandoned cart sequences
- `app/api/process-reports/route.ts` — report delivery
- `app/api/partner-apply/route.ts` — partner application confirmation + team notification
- `app/api/approve-partner/route.ts` — partner approval + team notification

## 📝 Pending / Deferred

- **Testimonial collection system** — needs Resend email setup + Supabase table (deferred from 2026-03-14)
- **Visa package feature** — scoped but not built
- **Phase 2 KB content** — in progress on branch

## ⚠️ Known Issues (resolved)

- ~~Zero real Stripe sales as of 2026-03-16~~ — checkout was broken due to trailing newline in STRIPE_REPORT_PRICE_ID env var (fixed 2026-03-26)
- ~~Stripe API key was expired as of 2026-03-16~~ — regenerated and updated in Vercel env vars
- **CRITICAL BUG FIXED 2026-03-26**: `STRIPE_REPORT_PRICE_ID` in Vercel had a trailing `\n`, causing ALL checkouts to fail with "No such price" for ~10 days (Mar 16–26). ~40+ potential customers lost. Fixed by cleaning env var + adding `.trim()` safeguard in code.

## 🎟️ Stripe Coupons

- `GiftfromGreg` — 100% off, one-time use
- `VIC` — 95% off ($29 → $1.45), created Mar 26

---

*Update this file after every significant code change or deployment.*
