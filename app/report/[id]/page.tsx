"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ShareableCard } from "@/components/ShareableCard";
import { initReferralTracking } from "@/lib/referral-tracking";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface Report {
  id: string;
  report_type: string;
  report_content: string;
  country_recommendations: Array<{ country: string; score: number }>;
  created_at: string;
}

const progressMessages = [
  "Analyzing visa options for your profile...",
  "Comparing cost of living across 23+ countries...",
  "Matching your lifestyle preferences...",
  "Checking property markets in your top matches...",
  "Calculating your personalized timeline...",
  "Building your relocation roadmap...",
  "Cross-referencing safety data by region...",
  "Finalizing your country compatibility scores...",
];

const contentCards = [
  { icon: "📊", headline: "Powered by Real Expat Experience", body: "Our recommendations are built on data from families who've actually relocated — not scraped travel blogs. Real visa timelines, verified costs, actual property prices." },
  { icon: "🏠", headline: "Built by Someone Who's Done It", body: "Created by an expat who relocated his family across continents. Over 25 years of living abroad across Europe, USA, and Latin America." },
  { icon: "🇧🇷", headline: "Did You Know?", body: "Brazil has 7,491 km of coastline — the longest in the Americas. It spans 3 time zones and has more biodiversity than any other country on Earth." },
  { icon: "🇦🇷", headline: "Did You Know?", body: "Argentina has the highest literacy rate in the Americas (99%). Patagonia alone is larger than Texas and California combined." },
  { icon: "🇵🇾", headline: "Did You Know?", body: "Paraguay charges 0% tax on foreign-sourced income. It's one of the most tax-friendly countries in the world for remote workers and entrepreneurs." },
  { icon: "💰", headline: "Did You Know?", body: "A family of 4 can live comfortably in Brazil's northeast for $2,000-3,000/month — including housing, food, healthcare, and education." },
  { icon: "🔄", headline: "Always Up to Date", body: "Our data is refreshed weekly — visa rules, cost of living, property markets, and safety ratings. Your report reflects today's reality, not last year's blog post." },
  { icon: "🇺🇾", headline: "Did You Know?", body: "Uruguay generates 98% of its electricity from renewable sources. It's consistently ranked as one of the safest countries in the Americas." },
  { icon: "🇨🇴", headline: "Did You Know?", body: "Colombia is the only country in South America with coastlines on both the Pacific and Caribbean. Medellín's \"eternal spring\" climate averages 22°C (72°F) year-round." },
  { icon: "🏥", headline: "Did You Know?", body: "Brazil's SUS (Unified Health System) provides free healthcare to all residents — including foreigners with a CPF. Private plans start at $50-150/month per person." },
  { icon: "🇪🇨", headline: "Did You Know?", body: "Ecuador uses the US dollar as its official currency — no exchange rate risk. The country has 4 distinct climate zones within a territory smaller than Nevada." },
  { icon: "🛂", headline: "Visa Rules Change Fast", body: "In the past 12 months alone, multiple countries updated their residency visa requirements. Our AI tracks these changes so your report is always current." },
  { icon: "🇨🇱", headline: "Did You Know?", body: "Chile stretches 4,300 km north to south but averages only 177 km wide. It has the world's driest desert (Atacama) and some of the best wine regions in the Americas." },
  { icon: "📚", headline: "Did You Know?", body: "International schools worldwide offer IB and US/UK curricula from $200-800/month — a fraction of equivalent schools in North America or Europe." },
  { icon: "💻", headline: "Did You Know?", body: "Brazil, Argentina, Colombia, and Ecuador now offer dedicated digital nomad visas. Working remotely from abroad can save families 40-60% on cost of living." },
  { icon: "🛡️", headline: "Beyond the Headlines", body: "Many international cities are safer than major US metros. Cuenca, Montevideo, Santiago, and dozens of smaller towns rank among the safest in the Americas." },
  { icon: "👨‍👩‍👧‍👦", headline: "You're Not Alone", body: "Thousands of families relocate internationally every year. Expat communities worldwide offer support networks, school info, and local knowledge." },
];

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    // Progress bar: fill to ~90% over 100 seconds
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) return p;
        return p + 0.9;
      });
    }, 1000);

    // Rotate messages every 9 seconds
    const messageInterval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % progressMessages.length);
    }, 9000);

    // Rotate cards every 10 seconds
    const cardInterval = setInterval(() => {
      setCardIndex((i) => (i + 1) % contentCards.length);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(cardInterval);
    };
  }, []);

  const card = contentCards[cardIndex];

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌎</div>
          <h2 className="text-xl font-bold text-[#1a365d] mb-6">Creating Your Relocation Plan</h2>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="bg-[#38b2ac] h-3 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${Math.min(progress, 95)}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mb-1">{Math.round(Math.min(progress, 95))}%</p>
          <p className="text-sm text-[#1a365d] font-medium h-6">{progressMessages[messageIndex]}</p>
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center transition-opacity duration-500">
          <div className="text-3xl mb-3">{card.icon}</div>
          <h3 className="font-bold text-[#1a365d] mb-2">{card.headline}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
        </div>

        {/* Card dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {contentCards.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === cardIndex ? "bg-[#38b2ac]" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400">Reloca.ai — AI-powered relocation intelligence</p>
        <p className="text-xs text-gray-400">Built by expats, for expats</p>
      </div>
    </div>
  );
}

// All 23+ covered countries
const COVERED_COUNTRIES = new Set([
  'brazil', 'argentina', 'paraguay', 'uruguay', 'panama', 'el salvador', 'costa rica',
  'mexico', 'colombia', 'ecuador', 'chile', 'peru', 'bolivia',
  'portugal', 'spain', 'italy', 'greece', 'malta', 'cyprus', 'estonia', 'andorra',
  'singapore', 'dubai', 'uae', 'thailand', 'malaysia',
]);

// Single sort utility — used everywhere country recommendations appear
function sortedRecommendations(recs: Array<{ country: string; score: number }>) {
  return [...recs].sort((a, b) => b.score - a.score);
}

function MatchCard({ country, score, rank }: { country: string; score: number; rank: number }) {
  const flags: Record<string, string> = {
    brazil: "🇧🇷", argentina: "🇦🇷", paraguay: "🇵🇾", uruguay: "🇺🇾",
    panama: "🇵🇦", "el salvador": "🇸🇻", "costa rica": "🇨🇷",
    mexico: "🇲🇽", colombia: "🇨🇴", ecuador: "🇪🇨", chile: "🇨🇱", peru: "🇵🇪",
    portugal: "🇵🇹", spain: "🇪🇸", italy: "🇮🇹", greece: "🇬🇷",
    malta: "🇲🇹", cyprus: "🇨🇾", estonia: "🇪🇪", andorra: "🇦🇩",
    singapore: "🇸🇬", dubai: "🇦🇪", uae: "🇦🇪", thailand: "🇹🇭", malaysia: "🇲🇾",
    bolivia: "🇧🇴",
  };
  const flag = flags[country.toLowerCase()] || "🌎";
  
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-4">
      <div className="text-4xl">{flag}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#38b2ac]">#{rank}</span>
          <h3 className="font-bold text-[#1a365d] text-lg">{country}</h3>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-[#38b2ac]">{score}%</div>
        <div className="text-xs text-gray-400">match</div>
      </div>
    </div>
  );
}

function CouponInput({ couponCode, setCouponCode, couponError }: { couponCode: string; setCouponCode: (v: string) => void; couponError: string }) {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 justify-center max-w-xs mx-auto">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Coupon code"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:border-[#38b2ac] focus:ring-1 focus:ring-[#38b2ac]"
        />
      </div>
      {couponError && <p className="text-red-500 text-xs mt-1 text-center">{couponError}</p>}
    </div>
  );
}

function CountdownTimer({ createdAt }: { createdAt: string }) {
  const [timeLeft, setTimeLeft] = useState('');
  const [expired, setExpired] = useState(false);
  
  useEffect(() => {
    const deadline = new Date(createdAt).getTime() + 48 * 60 * 60 * 1000; // 48h from creation
    
    const tick = () => {
      const now = Date.now();
      const diff = deadline - now;
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft('00:00:00');
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`);
    };
    
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [createdAt]);
  
  if (expired) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
        <p className="text-red-600 font-bold text-sm">⚠️ Launch price has expired — but we&apos;ll honor $49 if you act now</p>
      </div>
    );
  }
  
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
      <p className="text-amber-800 font-bold text-sm">⏰ Launch price expires in <span className="font-mono text-lg">{timeLeft}</span></p>
      <p className="text-amber-600 text-xs">After this, the price goes back to $79</p>
    </div>
  );
}

function ReportSection({ content, isPaid, onCheckout, checkoutLoading, couponCode, setCouponCode, couponError, createdAt }: { content: string; isPaid: boolean; onCheckout?: () => void; checkoutLoading?: boolean; couponCode?: string; setCouponCode?: (v: string) => void; couponError?: string; createdAt?: string }) {
  // Split content into free preview (first ~20%) and paid sections
  const sections = content.split(/(?=^#{1,2}\s)/m);
  const freeCount = 1; // Show only #1 match, tease the rest

  if (isPaid) {
    // Split content into sections for CTA injection
    const reportSections = content.split(/(?=^#{1,2}\s)/m);
    
    // Find section indices for CTA placement
    const execSummaryIdx = reportSections.findIndex(s => /executive\s*summary/i.test(s));
    const taxIdx = reportSections.findIndex(s => /\btax\b/i.test(s) && /section|implication|analysis|optimization/i.test(s));
    const countryIndices = reportSections.reduce<number[]>((acc, s, i) => {
      if (/^#{1,2}\s.*(?:match|country|recommendation|#[123])/i.test(s.trim())) acc.push(i);
      return acc;
    }, []);

    return (
      <div className="prose prose-gray max-w-none">
        {reportSections.map((section, i) => (
          <div key={i}>
            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(section) }} />
            
            {/* After Executive Summary → Roadmap PDF CTA */}
            {i === execSummaryIdx && (
              <div className="not-prose my-6 bg-gradient-to-r from-[#1a365d]/5 to-[#38b2ac]/5 border border-[#1a365d]/10 rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1a365d] mb-1">📋 Skip months of research</p>
                <p className="text-sm text-gray-600 mb-3">Get a Complete Relocation Roadmap PDF with your personalized timeline, checklists, and action steps.</p>
                {/* TODO: Replace with real Stripe Payment Link */}
                <a href="https://buy.stripe.com/ROADMAP_PLACEHOLDER" target="_blank" rel="noopener" className="inline-block bg-[#1a365d] hover:bg-[#2d4a7a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
                  Get Relocation Roadmap PDF — $129 →
                </a>
              </div>
            )}

            {/* After Tax Section → Strategy Consultation + Tax Specialists */}
            {i === taxIdx && taxIdx > 0 && (
              <div className="not-prose my-6 space-y-4">
                <div className="bg-gradient-to-r from-[#38b2ac]/5 to-[#1a365d]/5 border border-[#38b2ac]/10 rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1a365d] mb-1">🎯 Ready to move? Get your personalized action plan</p>
                  <p className="text-sm text-gray-600 mb-3">45-min strategy call with our relocation expert — visa roadmap, tax optimization, and timeline tailored to your situation.</p>
                  {/* TODO: Replace with real Stripe Payment Link */}
                  <a href="https://buy.stripe.com/CONSULTATION_PLACEHOLDER" target="_blank" rel="noopener" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
                    Book Strategy Call — $149 →
                  </a>
                </div>
                <p className="text-sm text-gray-500 italic">
                  💼 <a href="mailto:support@reloca.ai?subject=Tax Specialist Referral" className="text-[#38b2ac] hover:underline">Connect with vetted international tax specialists</a> who understand cross-border obligations.
                </p>
              </div>
            )}

            {/* After each country section → Explore properties link */}
            {countryIndices.includes(i) && (
              <p className="not-prose text-sm text-[#38b2ac] my-4">
                🏠 <a href={`/relocate-to/${section.match(/(?:#{1,2}\s*(?:#?\d\.?\s*)?)([A-Za-z\s]+)/)?.[1]?.trim().toLowerCase().replace(/\s+/g, '-') || 'portugal'}`} className="hover:underline font-medium">
                  Explore {section.match(/(?:#{1,2}\s*(?:#?\d\.?\s*)?)([A-Za-z\s]+)/)?.[1]?.trim() || 'country'} properties →
                </a>
              </p>
            )}
          </div>
        ))}

        {/* End-of-Report Multi-CTA Block */}
        <div className="not-prose mt-10 pt-8 border-t border-gray-200 space-y-4">
          <h3 className="text-xl font-bold text-[#1a365d] text-center mb-6">Ready for Your Next Step?</h3>
          
          {/* Primary: Strategy Consultation */}
          <div className="bg-gradient-to-r from-[#38b2ac] to-[#2c9a94] rounded-xl p-6 text-center">
            <p className="text-white font-bold text-lg mb-1">🎯 Get Your Personalized Action Plan</p>
            <p className="text-white/80 text-sm mb-4">45-min strategy call with our relocation expert — visa roadmap, tax optimization, and timeline</p>
            {/* TODO: Replace with real Stripe Payment Link */}
            <a href="https://buy.stripe.com/CONSULTATION_PLACEHOLDER" target="_blank" rel="noopener" className="inline-block bg-white text-[#38b2ac] font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition">
              Book Strategy Call — $149 →
            </a>
          </div>

          {/* Secondary: Roadmap PDF */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-[#1a365d] font-bold text-lg mb-1">📋 Complete Relocation Roadmap PDF</p>
            <p className="text-gray-500 text-sm mb-4">Your personalized timeline, checklists, legal steps, and action items</p>
            {/* TODO: Replace with real Stripe Payment Link */}
            <a href="https://buy.stripe.com/ROADMAP_PLACEHOLDER" target="_blank" rel="noopener" className="inline-block bg-[#1a365d] hover:bg-[#2d4a7a] text-white font-bold px-8 py-3 rounded-xl transition">
              Get Roadmap PDF — $129 →
            </a>
          </div>

          {/* Tertiary: Intel Subscription */}
          <div className="bg-[#fafaf9] border border-gray-100 rounded-xl p-6 text-center">
            <p className="text-[#1a365d] font-bold mb-1">📊 Stay Ahead of Visa Changes & New Opportunities</p>
            <p className="text-gray-500 text-sm mb-4">Relocation Intel Subscription — Updated reports, market alerts, and priority support</p>
            {/* TODO: Replace with real Stripe Payment Link */}
            <a href="https://buy.stripe.com/SUBSCRIPTION_PLACEHOLDER" target="_blank" rel="noopener" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-xl transition">
              Get Intel Subscription — $39/mo →
            </a>
          </div>

          {/* Text links */}
          <div className="text-center space-y-3 pt-4">
            <p className="text-sm">
              <a href="mailto:support@reloca.ai?subject=Local Professional Referral" className="text-[#38b2ac] hover:underline font-medium">
                💼 Connect with Vetted Local Professionals — attorneys, real estate agents, tax advisors
              </a>
            </p>
            <p className="text-sm">
              <a href="/plan-36?gift=true" className="text-[#1a365d] hover:underline font-medium">
                🎁 Buy Reloca for a Friend — $49
              </a>
            </p>
            <p className="text-sm">
              <button onClick={() => document.getElementById('share-card')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-500 hover:text-[#38b2ac] hover:underline font-medium cursor-pointer">
                📤 Share Your Results
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Free version: show first few sections, blur the rest
  const freeSections = sections.slice(0, freeCount).join("\n");
  const lockedSections = sections.slice(freeCount);

  return (
    <div>
      <div className="prose prose-gray max-w-none">
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(freeSections) }} />
      </div>
      {lockedSections.length > 0 && (
        <div className="mt-6 bg-gradient-to-r from-[#38b2ac]/10 to-[#1a365d]/10 rounded-xl p-4 text-center">
          <p className="text-[#1a365d] font-semibold">🏆 2 more country matches + full breakdown inside your report</p>
          <p className="text-gray-500 text-sm mt-1">Including visa roadmaps, tax strategies, cost analysis & relocation timeline</p>
        </div>
      )}
      {lockedSections.length > 0 && (
        <div className="relative mt-8">
          <div className="prose prose-gray max-w-none blur-sm select-none pointer-events-none opacity-60">
            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(lockedSections.slice(0, 3).join("\n")) }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-white/80 to-white">
            <div className="text-center p-8 max-w-md mx-auto">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                Unlock Your Full Relocation Report
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Your full report includes everything you need to make your move with confidence:
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-1.5 mb-4">
                <li className="flex items-start gap-2"><span>✅</span> Step-by-step visa & residency roadmap</li>
                <li className="flex items-start gap-2"><span>✅</span> Personalized tax optimization (potential savings: $10K–$100K+/year)</li>
                <li className="flex items-start gap-2"><span>✅</span> Real cost of living breakdown with local prices</li>
                <li className="flex items-start gap-2"><span>✅</span> Healthcare, education & safety assessment</li>
                <li className="flex items-start gap-2"><span>✅</span> Month-by-month relocation timeline</li>
              </ul>
              {createdAt && <CountdownTimer createdAt={createdAt} />}

              {/* Cost comparison */}
              <div className="bg-gray-50 rounded-lg p-3 mb-3 text-xs text-gray-600">
                <p className="font-semibold text-[#1a365d] mb-1">What others pay for this research:</p>
                <div className="flex justify-between"><span>Immigration lawyer consultation</span><span className="line-through text-gray-400">$200–$500/hr</span></div>
                <div className="flex justify-between"><span>Relocation consultant</span><span className="line-through text-gray-400">$2,000–$5,000</span></div>
                <div className="flex justify-between"><span>DIY research (your time)</span><span className="line-through text-gray-400">40–100+ hours</span></div>
                <div className="flex justify-between mt-1 pt-1 border-t border-gray-200 font-bold text-[#38b2ac]"><span>Your Reloca report</span><span>$49</span></div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-gray-400 line-through text-lg">$79</span>
                <span className="text-3xl font-bold text-[#38b2ac]">$49</span>
              </div>
              <p className="text-xs text-red-500 font-medium mb-3">⏰ Launch price expires soon — then it&apos;s $79</p>
              <button onClick={onCheckout} disabled={checkoutLoading} className="w-full bg-gradient-to-r from-[#38b2ac] to-[#319795] hover:from-[#2c9a94] hover:to-[#28908a] text-white font-bold px-8 py-4 rounded-xl transition disabled:opacity-50 text-lg shadow-lg shadow-[#38b2ac]/25">
                {checkoutLoading ? 'Redirecting to checkout...' : 'Get My Full Report →'}
              </button>

              {/* Money-back guarantee badge */}
              <div className="flex items-center justify-center gap-2 mt-3 mb-2 bg-green-50 rounded-lg px-3 py-2">
                <span className="text-lg">🛡️</span>
                <p className="text-xs text-green-700 font-medium">30-day money-back guarantee — no questions asked. If you are not satisfied, we refund you. Period.</p>
              </div>

              {setCouponCode && <CouponInput couponCode={couponCode || ""} setCouponCode={setCouponCode} couponError={couponError || ""} />}
              
              {/* Testimonials */}
              <div className="mt-4 pt-4 border-t border-gray-100 text-left space-y-3">
                <p className="text-xs text-gray-600 italic">&ldquo;$49 versus the months I spent researching all of this by hand.&rdquo;</p>
                <p className="text-xs text-gray-400">— Hispanic Nomad, 60+ countries visited · <a href="https://x.com/hispanicnomad" target="_blank" rel="noopener noreferrer" className="underline">@hispanicnomad</a></p>
                <p className="text-xs text-gray-600 italic">&ldquo;The tax section alone saved me more than $10K. I had no idea about the NHR program.&rdquo;</p>
                <p className="text-xs text-gray-400">— Marcus T., London → Spain</p>
                <p className="text-xs text-gray-600 italic">&ldquo;We were deciding between 5 countries for retirement. Reloca narrowed it down to 3 with real data.&rdquo;</p>
                <p className="text-xs text-gray-400">— David & Linda R., Canada → Ecuador</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* "Report Ready" section at the bottom */}
      {!isPaid && (
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#38b2ac] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-2">Your Personalized Report Is Ready to Be Built</h2>
            <p className="text-gray-600 mb-4">Based on your answers, our AI has identified key insights about your ideal relocation — but the full picture is inside your report.</p>
          </div>

          <div className="bg-gradient-to-br from-[#38b2ac]/5 to-[#1a365d]/5 rounded-xl p-5 mb-6 text-left">
            <p className="font-semibold text-[#1a365d] mb-3">🗺️ What your Full Report includes:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start"><span className="mr-2">•</span>Your top 3 country matches with detailed scoring</li>
              <li className="flex items-start"><span className="mr-2">•</span>Step-by-step visa & residency roadmap for each</li>
              <li className="flex items-start"><span className="mr-2">•</span>Personalized tax optimization strategy (potential savings: $10K–$100K+/year)</li>
              <li className="flex items-start"><span className="mr-2">•</span>Cost of living comparison vs. your current situation</li>
              <li className="flex items-start"><span className="mr-2">•</span>Healthcare, education & safety analysis for your profile</li>
              <li className="flex items-start"><span className="mr-2">•</span>Timeline and actionable checklist to make it happen</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">⚡ Built live using our proprietary data + real expat families feedback + your answers + verified official and professional sources.</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 italic mb-3">💡 People who relocate with a plan save an average of 6 months and thousands in avoidable mistakes.</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 line-through text-lg">$79</span>
              <span className="text-3xl font-bold text-[#38b2ac]">$49</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">One report. One investment. A lifetime of clarity.</p>
            <button onClick={onCheckout} disabled={checkoutLoading} className="w-full bg-gradient-to-r from-[#38b2ac] to-[#319795] hover:from-[#2c9a94] hover:to-[#28908a] text-white font-bold px-8 py-4 rounded-xl transition disabled:opacity-50 text-lg shadow-lg shadow-[#38b2ac]/25">
              {checkoutLoading ? 'Redirecting to checkout...' : 'Get My Full Report →'}
            </button>
            <div className="flex items-center justify-center gap-2 mt-3 bg-green-50 rounded-lg px-3 py-2">
              <span className="text-lg">🛡️</span>
              <p className="text-xs text-green-700 font-medium">30-day money-back guarantee — no questions asked</p>
            </div>
            {setCouponCode && <CouponInput couponCode={couponCode || ""} setCouponCode={setCouponCode} couponError={couponError || ""} />}
          </div>
        </div>
      )}
    </div>
  );
}

// Simple markdown to HTML converter
function markdownToHtml(md: string): string {
  return md
    // Headers
    .replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-[#2d4a7c] mt-4 mb-1">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-[#1a365d] mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-[#1a365d] mt-8 mb-3 pb-2 border-b border-gray-100">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-[#1a365d] mt-10 mb-4">$1</h1>')
    // Horizontal rules
    .replace(/^---+$/gm, '<hr class="my-6 border-gray-200" />')
    .replace(/^━+$/gm, '<hr class="my-6 border-[#38b2ac] border-2" />')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1a365d]">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Emoji-prefixed highlight blocks (like 💡 FEATURED, 🏠 PROPERTY, etc.)
    .replace(/^[┌│└┐┘├┤┬┴┼─]+.*$/gm, '') // Remove box-drawing chars
    // Lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-600 mb-1 list-disc">$1</li>')
    .replace(/^• (.+)$/gm, '<li class="ml-4 text-gray-600 mb-1 list-disc">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 text-gray-600 mb-1"><span class="font-semibold text-[#1a365d]">$1.</span> $2</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-3 space-y-1">$1</ul>')
    // Tables (simple)
    .replace(/^\|(.+)\|$/gm, (_, row) => {
      const cells = row.split('|').map((c: string) => c.trim()).filter(Boolean);
      return '<tr>' + cells.map((c: string) => `<td class="px-3 py-1.5 border-b border-gray-100 text-sm text-gray-600">${c}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (m) => `<table class="w-full my-4 border-collapse">${m}</table>`)
    // Remove separator rows (|---|---|)
    .replace(/<tr>(<td[^>]*>-+<\/td>)+<\/tr>/g, '')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="text-gray-600 mb-3 leading-relaxed">')
    // Clean up
    .replace(/^(?!<[htulpd])/gm, '');
}

export default function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [resolvedId, setResolvedId] = useState<string>("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");

  useEffect(() => {
    params.then(p => {
      setResolvedId(p.id);
      const url = new URL(window.location.href);
      if (url.searchParams.get('paid') === 'true') {
        pollForPaid(p.id);
      } else {
        loadReport(p.id);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  // Initialize referral tracking and update social meta tags
  useEffect(() => {
    initReferralTracking();
    
    if (report && report.country_recommendations?.length > 0) {
      const topMatch = sortedRecommendations(report.country_recommendations)[0];
      const ogImageUrl = `${window.location.origin}/api/og?country=${encodeURIComponent(topMatch.country)}&score=${topMatch.score}`;
      
      // Update OG tags dynamically
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', ogImageUrl);
      
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', `My #1 Country Match: ${topMatch.country} (${topMatch.score}% match!)`);
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', 'I just discovered my perfect relocation match! Find yours with this free AI-powered quiz →');
      
      // Twitter card
      let twitterCard = document.querySelector('meta[name="twitter:card"]');
      if (!twitterCard) {
        twitterCard = document.createElement('meta');
        twitterCard.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCard);
      }
      twitterCard.setAttribute('content', 'summary_large_image');
    }
  }, [report]);

  async function pollForPaid(id: string, attempts = 0) {
    const { data } = await supabase.from("reports").select("*").eq("id", id).single();
    if (data?.report_type === 'paid' || attempts >= 10) {
      setReport(data);
      setLoading(false);
    } else {
      setTimeout(() => pollForPaid(id, attempts + 1), 1500);
    }
  }

  async function handleCheckout() {
    setCheckoutLoading(true);
    setCouponError("");
    try {
      const body: Record<string, string> = { reportId: resolvedId };
      if (couponCode.trim()) body.couponCode = couponCode.trim();
      // Auto-attach referral code for attribution tracking
      const ref = typeof window !== "undefined" ? localStorage.getItem("reloca_ref") : null;
      if (ref) body.referralCode = ref;
      // Auto-apply referral promo code if no manual coupon entered
      if (!body.couponCode && ref) body.couponCode = ref;
      
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        setCouponError(data.error);
        setCheckoutLoading(false);
      } else {
        alert('Failed to create checkout. Please try again.');
        setCheckoutLoading(false);
      }
    } catch {
      alert('Something went wrong. Please try again.');
      setCheckoutLoading(false);
    }
  }

  async function loadReport(id: string) {
    const { data, error: fetchError } = await supabase
      .from("reports")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !data) {
      setError("Report not found.");
      setLoading(false);
      return;
    }

    // If report is pending, trigger generation and poll
    if (data.report_type === 'pending' && !data.report_content) {
      triggerGeneration(id);
      return;
    }

    setReport(data);
    setLoading(false);
  }

  async function triggerGeneration(reportId: string) {
    // Fire off generation via process-reports endpoint (don't await)
    fetch('/api/process-reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reportId }),
    }).catch(() => {});

    // Clear stored data
    sessionStorage.removeItem('reloca_answers');
    sessionStorage.removeItem('reloca_userId');

    // Poll for completion
    pollForReport(reportId);
  }

  async function pollForReport(id: string, attempts = 0) {
    if (attempts >= 60) { // ~3 minutes max
      setError("Report generation is taking longer than expected. Please refresh the page in a minute.");
      setLoading(false);
      return;
    }

    const { data } = await supabase.from("reports").select("*").eq("id", id).single();

    if (data?.report_content && data.report_type !== 'pending') {
      setReport(data);
      setLoading(false);
      sessionStorage.removeItem('reloca_answers');
      sessionStorage.removeItem('reloca_userId');
    } else {
      setTimeout(() => pollForReport(id, attempts + 1), 3000);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-lg font-semibold text-[#1a365d] mb-2">Something went wrong</h2>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button onClick={() => { setLoading(true); setError(""); loadReport(resolvedId); }} className="text-[#38b2ac] hover:underline text-sm">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!report) return null;

  const isPaid = report.report_type === "paid";

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          {isPaid && (
            <button
              onClick={() => {
                // Create a print-friendly version
                const printWindow = window.open('', '_blank');
                if (!printWindow) return;
                printWindow.document.write(`
                  <!DOCTYPE html>
                  <html>
                  <head>
                    <title>Reloca.ai — Your Personalized Relocation Plan</title>
                    <style>
                      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; color: #1a365d; line-height: 1.6; }
                      h1 { font-size: 24px; border-bottom: 2px solid #38b2ac; padding-bottom: 8px; }
                      h2 { font-size: 20px; color: #1a365d; margin-top: 32px; }
                      h3 { font-size: 16px; color: #2d4a7c; }
                      strong { color: #1a365d; }
                      li { margin-bottom: 4px; }
                      .header { text-align: center; margin-bottom: 40px; }
                      .header img { width: 120px; }
                      .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096; font-size: 12px; }
                      @media print { body { padding: 0; } }
                    </style>
                  </head>
                  <body>
                    <div class="header">
                      <h1 style="border:none;">Reloca.ai</h1>
                      <p style="color: #718096;">Your Personalized Relocation Plan</p>
                      <p style="color: #718096; font-size: 12px;">Generated ${new Date(report.created_at).toLocaleDateString()}</p>
                    </div>
                    ${markdownToHtml(report.report_content)}
                    <div class="footer">
                      <p>Generated by Reloca.ai</p>
                      <p>reloca.ai</p>
                    </div>
                  </body>
                  </html>
                `);
                printWindow.document.close();
                setTimeout(() => printWindow.print(), 500);
              }}
              className="text-sm bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-4 py-2 rounded-lg transition"
            >
              Download PDF
            </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-2">
            Your Relocation Match
          </h1>
          <p className="text-sm text-gray-400">
            Generated {new Date(report.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Top matches — sorted descending by score, show ALL (up to 3) */}
        {report.country_recommendations && report.country_recommendations.length > 0 && (() => {
          const sorted = sortedRecommendations(report.country_recommendations);
          // Bug 3 fix: Only show "Request a Country" if user's quiz answers suggest
          // interest in countries outside our 22-country catalog
          const allMatchesCovered = sorted.every(rec => 
            COVERED_COUNTRIES.has(rec.country.toLowerCase())
          );
          return (
            <div className="space-y-3 mb-10">
              <h2 className="text-lg font-bold text-[#1a365d] mb-3">
                Your Top {sorted.length} Match{sorted.length !== 1 ? 'es' : ''}
              </h2>
              {sorted.map((rec, i) => (
                <MatchCard key={rec.country} country={rec.country} score={rec.score} rank={i + 1} />
              ))}
              {!allMatchesCovered && (
                <p className="text-center mt-4">
                  <Link href="/request-country" className="text-sm text-[#38b2ac] hover:text-[#2c9a94] transition">
                    Don&apos;t see your country? Request it →
                  </Link>
                </p>
              )}
            </div>
          );
        })()}

        {/* Share Prompt — Placement 1: After Free Summary (pre-purchase) */}
        {report.country_recommendations && report.country_recommendations.length > 0 && (() => {
          const topMatch = sortedRecommendations(report.country_recommendations)[0];
          return (
          <div className="mb-10">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2 text-center">
                Share your #1 match {!isPaid && <span className="text-[#38b2ac]">(and get $10 off when friends buy)</span>}
              </h3>
              <p className="text-gray-500 text-sm mb-4 text-center">
                {isPaid 
                  ? 'Help a friend find their perfect country — you both save $10 on future reports'
                  : 'Show your friends your result and earn $10 off your report when they purchase'
                }
              </p>
              
              <ShareableCard
                country={topMatch.country}
                score={topMatch.score}
                reportId={report.id}
                reasons={[
                  { icon: '🏠', text: 'Perfect property market' },
                  { icon: '💰', text: 'Great value for money' },
                  { icon: '🌎', text: 'Ideal for families' }
                ]}
              />
            </div>
          </div>
          );
        })()}

        {/* Report content */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
          <ReportSection content={report.report_content} isPaid={isPaid} onCheckout={handleCheckout} checkoutLoading={checkoutLoading} couponCode={couponCode} setCouponCode={setCouponCode} couponError={couponError} createdAt={report.created_at} />
        </div>

        {/* Upsell with comparison table */}
        {!isPaid && (
          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#1a365d] mb-2 text-center">You did the hard part. Now get the answers.</h2>
            <p className="text-gray-500 text-sm mb-6 text-center max-w-md mx-auto">
              Your free summary shows WHERE to go. The full report shows HOW — visa steps, tax savings, real costs, and a timeline.
            </p>
            <p className="text-sm font-semibold text-[#1a365d] mb-4 text-center">Unlock your complete 16-section report for <span className="line-through text-gray-400">$79</span> $49 (Launch Special):</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-500 font-medium">Feature</th>
                    <th className="text-center py-2 px-4 text-gray-500 font-medium">Free Summary</th>
                    <th className="text-center py-2 pl-4 text-[#38b2ac] font-bold">Full Report (<span className="line-through text-gray-400">$79</span> $49)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    ["Top 3 matches", true, true],
                    ["Brief explanations", true, true],
                    ["Cost estimate", true, true],
                    ["All matches + scores", false, true],
                    ["Detailed analysis", false, true],
                    ["Full cost breakdown", false, true],
                    ["Visa options & requirements", false, true],
                    ["Property market analysis", false, true],
                    ["Tax implications", false, true],
                    ["Healthcare overview", false, true],
                    ["Education options", false, true],
                    ["Safety assessment", false, true],
                    ["Personalized timeline", false, true],
                    ["Downloadable PDF", false, true],
                  ].map(([feature, free, paid], i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="py-2 pr-4">{feature as string}</td>
                      <td className="text-center py-2 px-4">{free ? <span className="text-[#38b2ac]">✅</span> : <span className="text-gray-300">—</span>}</td>
                      <td className="text-center py-2 pl-4"><span className="text-[#38b2ac]">✅</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <button onClick={handleCheckout} disabled={checkoutLoading} className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-8 py-3 rounded-xl transition disabled:opacity-50">
                {checkoutLoading ? 'Redirecting to checkout...' : <>Get My Full Report — <span className="line-through text-white/50">$79</span> $49</>}
              </button>
              <CouponInput couponCode={couponCode} setCouponCode={setCouponCode} couponError={couponError} />
            </div>
          </div>
        )}

        {/* Share Prompt — Placement 2: After Full Report (post-purchase) */}
        {isPaid && report.country_recommendations && report.country_recommendations.length > 0 && (() => {
          const topMatch = sortedRecommendations(report.country_recommendations)[0];
          return (
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2 text-center">
                Help a friend find their perfect country <span className="text-[#38b2ac]">(you both save $10)</span>
              </h3>
              <p className="text-gray-500 text-sm mb-4 text-center">
                Share your result — when a friend buys their report with your link, you both get $10 off future reports
              </p>
              <ShareableCard
                country={topMatch.country}
                score={topMatch.score}
                reportId={report.id}
                reasons={[
                  { icon: '🏠', text: 'Perfect property market' },
                  { icon: '💰', text: 'Great value for money' },
                  { icon: '🌎', text: 'Ideal for families' }
                ]}
              />
            </div>
          );
        })()}

        {/* Upsell CTAs now inside ReportSection — removed duplicate external CTAs */}
      </main>

      {/* Sticky bottom CTA for unpaid users */}
      {!isPaid && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 py-3 px-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#1a365d]"><span className="line-through text-gray-400 font-normal">$79</span> $49 — Full Report</p>
              <p className="text-xs text-gray-500 truncate">🛡️ 30-day money-back guarantee</p>
            </div>
            <button onClick={handleCheckout} disabled={checkoutLoading} className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-5 py-2.5 rounded-xl transition disabled:opacity-50 text-sm whitespace-nowrap shadow-lg shadow-[#38b2ac]/25">
              {checkoutLoading ? 'Loading...' : 'Unlock Now →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
