"use client";

import Link from "next/link";
import { TestimonialCarousel } from "@/components/TestimonialCarousel/TestimonialCarousel";
import { useState, useEffect } from "react";
import { ReportPreviewButton } from "@/components/ReportPreview";
import { analytics } from "@/lib/analytics";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SocialProofCounter, SocialProofToast } from "@/components/SocialProofCounter";
import { FooterDisclaimer } from "@/components/LegalDisclaimer";
import { WebSiteSchema, ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user has a Supabase session
    import("@/lib/auth-client").then(({ createSupabaseBrowserClient }) => {
      const supabase = createSupabaseBrowserClient();
      supabase.auth.getSession().then(({ data: { session } }) => {
        setIsLoggedIn(!!session);
      });
    });
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/reloca-logo.png" 
            alt="Reloca.ai" 
            className="h-14 w-auto"
          />
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#how-it-works" className="text-gray-600 hover:text-[#1a365d] transition">
            How It Works
          </a>
          <Link href="/about" className="text-gray-600 hover:text-[#1a365d] transition">
            About
          </Link>
          <a href="#pricing" className="text-gray-600 hover:text-[#1a365d] transition">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-[#1a365d] transition">
            Blog
          </Link>
          <Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">
            Blog FR
          </Link>
          <Link href="/compare" className="text-gray-600 hover:text-[#1a365d] transition">
            Compare
          </Link>
          <Link href="/partners" className="text-gray-600 hover:text-[#1a365d] transition">
            Partners
          </Link>
          <a href="#faq" className="text-gray-600 hover:text-[#1a365d] transition">
            FAQ
          </a>
          {isLoggedIn ? (
            <Link href="/dashboard" className="text-gray-600 hover:text-[#1a365d] transition font-medium">
              Dashboard
            </Link>
          ) : (
            <Link href="/auth/login" className="text-gray-600 hover:text-[#1a365d] transition">
              Login
            </Link>
          )}
          <Link
            href="/plan-36"
            className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Start Planning
          </Link>
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-[#1a365d] transition"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">How It Works</a>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">About</Link>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Pricing</a>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Blog</Link>
          <Link href="/fr/blog" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Blog FR</Link>
          <Link href="/compare" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Compare</Link>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Partners</Link>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">FAQ</a>
          {isLoggedIn ? (
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm font-medium">Dashboard</Link>
          ) : (
            <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Login</Link>
          )}
          <Link
            href="/plan-36"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-3 rounded-lg text-sm font-medium transition"
          >
            Start Planning
          </Link>
        </div>
      )}
    </header>
  );
}

function Hero() {
  // A/B test: rotate CTA copy based on visitor (persisted in sessionStorage)
  const [ctaVariant, setCtaVariant] = useState<'A' | 'B'>('A');
  useEffect(() => {
    const stored = sessionStorage.getItem('cta_variant');
    if (stored === 'A' || stored === 'B') { setCtaVariant(stored); return; }
    const variant = Math.random() > 0.5 ? 'A' : 'B';
    sessionStorage.setItem('cta_variant', variant);
    setCtaVariant(variant as 'A' | 'B');
  }, []);

  const ctaCopy = ctaVariant === 'A' ? 'Find Your Perfect Country — Free Quiz' : 'Get Your Personalized Moving Plan';

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 bg-[#fafaf9]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 text-sm text-gray-600">
          <span className="flex -space-x-1">
            <span className="w-5 h-5 rounded-full bg-[#38b2ac] flex items-center justify-center text-white text-[10px]">✓</span>
          </span>
          <span>Trusted by expats from <strong>42+ countries</strong></span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-[#1a365d]">
          Thinking of Moving Abroad?{" "}
          <span className="text-[#38b2ac]">Find Out Where.</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Answer a few questions about your lifestyle, budget, and goals. Our AI analyzes 23+ countries and tells you exactly where to go — with visa steps, tax savings, and real costs.
        </p>

        {/* Primary CTA - larger, more prominent */}
        <Link
          href="/plan-36"
          onClick={() => analytics.trackFeatureUsage('cta', 'click', { location: 'hero', destination: '/plan-36', variant: ctaVariant })}
          className="mt-8 inline-flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-lg sm:text-xl font-bold px-10 py-5 rounded-xl shadow-lg shadow-teal-500/25 transition hover:shadow-xl hover:shadow-teal-500/35 hover:scale-[1.02]"
        >
          {ctaCopy}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Micro-copy under CTA */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">⏱️ Takes 10 minutes</span>
          <span className="flex items-center gap-1">🆓 Free quiz + instant results</span>
          <span className="flex items-center gap-1">🛡️ 30-day money-back guarantee</span>
        </div>

        <p className="mt-4 text-sm text-gray-500 font-medium">
          Full report: <span className="text-[#1a365d] font-bold">$49</span>
        </p>
        <div className="mt-4">
          <ReportPreviewButton />
        </div>
        <div className="mt-6">
          <SocialProofCounter />
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Built by an international family with 25+ years of expat experience across 3 continents.
        </p>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Answer a Few Questions",
    desc: "About your situation, goals, finances, family, and preferences. Takes about 10 minutes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Analyzes Your Profile",
    desc: "We match your answers against real relocation data — visa rules, cost of living, safety ratings, property markets, and lifestyle factors across 23+ countries worldwide.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Get Your Personalized Plan",
    desc: "Instant free summary with your top 3 country matches — or unlock the full 16-section report for $49.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a365d] mb-4">
          Your Personalized Relocation Plan in 3 Steps
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mt-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#38b2ac]/10 text-[#38b2ac] rounded-2xl flex items-center justify-center">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-[#38b2ac] mb-2">STEP {i + 1}</div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const freeFeatures = [
  "Top 3 country matches with compatibility scores",
  "Brief explanation for each match",
  "Estimated monthly cost range",
  "Instant results",
];

const paidFeatures = [
  "All country matches with detailed scores",
  "Visa options & requirements for your situation",
  "Cost of living breakdown (housing, food, healthcare, education, transport)",
  "Property market analysis (buy vs rent, price ranges by region)",
  "Tax implications (for your origin country + destination)",
  "Healthcare overview (public, private, insurance options)",
  "Education options (international schools, homeschooling, local)",
  "Safety assessment (by region, not just country averages)",
  "Climate & lifestyle match",
  "Expat community strength",
  "Banking & financial setup guide",
  "Personalized timeline (step-by-step, month by month)",
  "Downloadable PDF (share with your partner/family)",
  "Updated data (refreshed weekly)",
];

function WhatYouGet() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a365d] mb-4">
          Two Options. One Smart Decision.
        </h2>
        <div className="text-center mb-8">
          <ReportPreviewButton />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {/* Free */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col">
            <div className="text-sm font-bold text-[#38b2ac] mb-1">FREE SUMMARY</div>
            <div className="text-3xl font-bold text-[#1a365d] mb-6">$0</div>
            <ul className="space-y-3 flex-1">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#38b2ac] mt-0.5 shrink-0">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/plan-36"
              onClick={() => analytics.trackFeatureUsage('cta', 'click', { location: 'pricing_free', destination: '/plan-36' })}
              className="mt-8 block text-center bg-white border-2 border-[#38b2ac] text-[#38b2ac] hover:bg-[#38b2ac] hover:text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Get My Free Summary
            </Link>
          </div>
          {/* Paid */}
          <div className="bg-[#1a365d] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-[#1a365d]">
              🔥 LAUNCH SPECIAL
            </div>
            <div className="text-sm font-bold text-[#38b2ac] mb-1">FULL REPORT</div>
            <div className="text-3xl font-bold text-white mb-1">
              <span className="text-3xl font-bold text-[#1a365d]">$49</span>
            </div>
            <p className="text-xs text-blue-300 mb-6">One-time payment. Yours forever.</p>
            <ul className="space-y-2 flex-1">
              {paidFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                  <span className="text-[#38b2ac] mt-0.5 shrink-0">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/plan-36"
              onClick={() => analytics.trackFeatureUsage('cta', 'click', { location: 'pricing_paid', destination: '/plan-36' })}
              className="mt-8 block text-center bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Get My Full Report — $49
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const countries = [
  // Europe & Mediterranean
  { flag: "🇵🇹", name: "Portugal", desc: "Golden visa, NHR tax regime, Atlantic lifestyle." },
  { flag: "🇪🇸", name: "Spain", desc: "Digital nomad visa, Beckham Law, Mediterranean living." },
  { flag: "🇮🇹", name: "Italy", desc: "7% flat tax for retirees, culture capital of the world." },
  { flag: "🇬🇷", name: "Greece", desc: "Golden visa from €250K, islands, 7% flat tax for retirees." },
  { flag: "🇲🇹", name: "Malta", desc: "EU passport program, English-speaking, Mediterranean tax hub." },
  { flag: "🇨🇾", name: "Cyprus", desc: "12.5% corporate tax, 300 days of sun, EU access." },
  { flag: "🇪🇪", name: "Estonia", desc: "E-residency, digital-first, EU startup hub." },
  { flag: "🇦🇩", name: "Andorra", desc: "10% flat income tax, Pyrenees lifestyle, tiny & safe." },
  // Asia & Middle East
  { flag: "🇸🇬", name: "Singapore", desc: "Business hub, zero capital gains, world-class infrastructure." },
  { flag: "🇦🇪", name: "Dubai", desc: "0% income tax, golden visa, global business gateway." },
  { flag: "🇹🇭", name: "Thailand", desc: "Low cost, tropical, digital nomad visa, rich culture." },
  { flag: "🇲🇾", name: "Malaysia", desc: "MM2H visa, affordable luxury, multicultural." },
  // Latin America
  { flag: "🇧🇷", name: "Brazil", desc: "Beaches, mountains, mega-diversity. Investor visa from $100K." },
  { flag: "🇦🇷", name: "Argentina", desc: "Patagonia to wine country. Affordable, European feel." },
  { flag: "🇺🇾", name: "Uruguay", desc: "Stable, safe, coastal. Strong banking system." },
  { flag: "🇵🇾", name: "Paraguay", desc: "0% foreign income tax. Low cost, warm climate." },
  { flag: "🇲🇽", name: "Mexico", desc: "Close to US, diverse, rich culture." },
  { flag: "🇵🇦", name: "Panama", desc: "Tax-friendly, dollar economy, tropical." },
  { flag: "🇨🇷", name: "Costa Rica", desc: "Eco-paradise, established expat community." },
  { flag: "🇸🇻", name: "El Salvador", desc: "Bitcoin-friendly, Pacific coast, low cost." },
  { flag: "🇨🇴", name: "Colombia", desc: "Mountain cities, Caribbean coast, digital nomad hub." },
  { flag: "🇪🇨", name: "Ecuador", desc: "Dollar economy, Andes to coast, affordable." },
  { flag: "🇨🇱", name: "Chile", desc: "Stable economy, Patagonia to Atacama, startup-friendly." },
];

function Countries() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a365d] mb-4">
          23+ Countries Worldwide
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {countries.map((c, i) => {
            const slug = c.name.toLowerCase().replace(/ /g, "-").replace("dubai", "uae").replace("(uae)", "").trim();
            return (
              <Link key={i} href={`/relocate-to/${slug}`} className="bg-[#fafaf9] rounded-xl p-4 text-center hover:shadow-md hover:bg-[#38b2ac]/5 transition group">
                <div className="text-4xl mb-2">{c.flag}</div>
                <h3 className="font-semibold text-[#1a365d] text-sm mb-1 group-hover:text-[#38b2ac] transition">{c.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </Link>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">More countries added regularly based on demand.</p>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">
          Not Just AI — Real Experience Behind Every Recommendation
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          {[
            {
              emoji: "📊",
              title: "Real Data",
              desc: "Powered by actual relocation data from expats who've actually relocated. Not scraped travel blogs — verified costs, real visa timelines, actual property prices.",
            },
            {
              emoji: "🔄",
              title: "Always Current",
              desc: "Updated weekly with the latest visa rules, cost of living changes, and market conditions. Your report reflects reality, not last year's data.",
            },
            {
              emoji: "🏠",
              title: "Expert-Backed",
              desc: "Built by an international family of expats with 25+ years of firsthand experience relocating across 3 continents.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-[#1a365d] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const [planCount, setPlanCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => setPlanCount(d.count ?? 0))
      .catch(() => setPlanCount(0));
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {planCount !== null && planCount >= 50 ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">
              Families Are Already Planning Their Move
            </h2>
            <div className="bg-[#fafaf9] rounded-xl p-8 mb-12 inline-block">
              <div className="text-5xl font-bold text-[#38b2ac] mb-2">{planCount.toLocaleString()}</div>
              <div className="text-sm text-gray-500">relocation plans generated</div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">
              Built by People Who&apos;ve Done It
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { stat: "25+", label: "Years of expat experience" },
                { stat: "23+", label: "Countries across 3 continents" },
                { stat: "238", label: "Expert data points powering the AI" },
              ].map((item, i) => (
                <div key={i} className="bg-[#fafaf9] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#38b2ac] mb-1">{item.stat}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
        <Link
          href="/plan-36"
          className="inline-flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          Start My Free Plan →
        </Link>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How accurate is the AI?",
    a: "Our AI combines verified data sources with insights from real relocations. It's not a crystal ball — it's a data-driven starting point that saves you weeks of research.",
  },
  {
    q: "Is my data private?",
    a: "Yes. We don't sell your data. Your answers are used only to generate your report. See our Privacy Policy.",
  },
  {
    q: "Can I update my report later?",
    a: "Not yet — but you can generate a new report anytime if your situation changes. We're working on an \"update\" feature.",
  },
  {
    q: "What if I need more help after the report?",
    a: "Your full report includes a \"Next Steps\" section with actionable recommendations, timelines, and resources for ongoing support. We're also building premium services like country comparisons and ongoing monitoring — details coming soon.",
  },
  {
    q: "Do I need to buy the full report?",
    a: "No. The free summary gives you your top 3 matches and estimated costs. The full report ($49) goes much deeper — visa options, property analysis, tax implications, personalized timeline, and a downloadable PDF.",
  },
  {
    q: "What languages is the report in?",
    a: "Currently English. French and Portuguese versions coming soon.",
  },
  {
    q: "Can I share the report with my partner/family?",
    a: "Yes! The full report includes a downloadable PDF you can share.",
  },
];

function RequestCountry() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-3">
          Don&apos;t see your target country?
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          We&apos;re expanding based on demand. Your vote helps us prioritize.
        </p>
        <Link
          href="/request-country"
          className="inline-flex items-center gap-2 text-[#38b2ac] hover:text-[#2c9a94] font-semibold transition"
        >
          Request a Country →
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-16 sm:py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a365d] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-[#1a365d] text-sm sm:text-base pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#38b2ac] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeLineWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[#1a365d]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Not Ready to Start? Get Weekly Relocation Insights.
        </h2>
        <p className="text-blue-300 text-sm mb-6">
          Free updates on visa changes, cost of living, and relocation tips. No spam.
        </p>
        {status === "success" ? (
          <p className="text-[#38b2ac] font-medium">✓ You&apos;re in! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-300 text-sm mt-2">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">
          Ready to Find Your Perfect Match?
        </h2>
        <p className="text-gray-500 mb-8">
          10 minutes. Smart questions. A plan that could change your life.
        </p>
        <Link
          href="/plan-36"
          onClick={() => analytics.trackFeatureUsage('cta', 'click', { location: 'final_cta', destination: '/plan-36' })}
          className="inline-flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/20 transition hover:shadow-xl hover:shadow-teal-500/30"
        >
          Start My Free Plan →
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a365d] text-blue-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <div className="mb-2">
              <img 
                src="/images/reloca-logo.png" 
                alt="Reloca.ai" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-blue-300 leading-relaxed">
              Built by an international family with expat experience across 3 continents.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <a href="mailto:support@reloca.ai" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="mt-8 pt-6 border-t border-blue-800">
          <div className="flex items-center justify-center gap-5 mb-6">
            <a href="#" className="group relative text-blue-400 hover:text-white transition" title="YouTube — Coming Soon">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#1a365d"/></svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-400 text-[#1a365d] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Coming Soon</span>
            </a>
            <a href="#" className="group relative text-blue-400 hover:text-white transition" title="X — Coming Soon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-400 text-[#1a365d] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Coming Soon</span>
            </a>
            <a href="#" className="group relative text-blue-400 hover:text-white transition" title="Instagram — Coming Soon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-400 text-[#1a365d] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Coming Soon</span>
            </a>
            <a href="#" className="group relative text-blue-400 hover:text-white transition" title="TikTok — Coming Soon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.22 8.22 0 0 0 4.76 1.52V7.05a4.84 4.84 0 0 1-1-0.36z"/></svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-400 text-[#1a365d] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Coming Soon</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-blue-400">
              © {new Date().getFullYear()} Reloca.ai. All rights reserved.
            </p>
            <p className="text-xs text-blue-400">
              Built by expats, for expats. 🌍
            </p>
          </div>
        </div>
        <FooterDisclaimer />
      </div>
    </footer>
  );
}

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a365d] mb-3">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-500 mb-12">Real people, real relocations</p>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d]">Why I Built This</h2>
        </div>
        
        <div className="bg-gradient-to-br from-[#fafaf9] to-[#f0faf9] rounded-2xl p-8 sm:p-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
              G
            </div>
            <div>
              <div className="font-bold text-[#1a365d] text-lg">Gregory</div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>📍 Worldwide</span>
                <span className="text-gray-300">•</span>
                <span>Founder of Reloca.ai</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Since 1999, I have been living abroad, traveling and studying relocation — I lived in many countries.
              No such tool as Reloca.ai existed to help us. I spent 
              <strong> years</strong> researching visas, tax implications, quality of life, schools, safety — making 
              mistakes along the way that cost us time, money, and added unnecessary stress.
            </p>
            <p>
              <em>Then I helped many individuals and families to relocate, since 2020.</em>
            </p>
            <p>
              Going through the process with my clients helped me truly understand the typical struggles one can go 
              through — there is no shortcut! I had to find a better way.
            </p>
            <p>
              Now I have built Reloca.ai. I keep thinking: <em>&quot;If only something like this had existed when we started!&quot;</em>
            </p>
            <p>
              Reloca.ai is not from a tech office in Silicon Valley — it&apos;s from the ground, built by expats who&apos;ve lived it,
              after going through the entire process ourselves. Every data point, every recommendation, every country insight 
              comes from real experience and verified sources.
            </p>
            <p className="text-[#1a365d] font-medium">
              We&apos;re real people who care about helping families and individuals make this transition smoothly. 
              Your report isn&apos;t generated by someone who read about relocating — it&apos;s built by someone who&apos;s expert at it. 🌍
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
              <span>🌍</span>
              <span>Living abroad since 1999</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
              <span>🌎</span>
              <span>Expat across Europe, USA &amp; Latin America</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
              <span>👨‍👩‍👧‍👦</span>
              <span>Helping families relocate since 2020</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-100">
              <span>📅</span>
              <span>25+ years of expat experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoIsThisFor() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">Who Is This For?</h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Built for families, remote workers, and entrepreneurs exploring international relocation — whether you&apos;re moving in 3 months or just starting to research.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const trackCTA = (location: string) => {
    analytics.trackFeatureUsage('cta', 'click', { location, destination: '/plan' });
  };

  const faqItems = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <main className="bg-[#fafaf9]">
      {/* Structured Data for SEO & AI Discovery */}
      <WebSiteSchema />
      <ProductSchema />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[]} />
      <ExitIntentPopup />
      <SocialProofToast />
      <Header />
      <Hero />
      <WhoIsThisFor />
      <HowItWorks />
      <WhatYouGet />
      <Countries />
      <Trust />
      <SocialProof />
      <Testimonials />
      <FounderStory />
      <RequestCountry />
      <FAQ />
      <EmailCapture />
      <BottomCTA />
      <Footer />
    </main>
  );
}
