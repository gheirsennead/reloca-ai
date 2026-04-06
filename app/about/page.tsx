import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Reloca.ai — Built by Expats, for Expats",
  description: "Reloca.ai was built by a family who relocated across continents. 25+ years of expat experience turned into AI-powered relocation intelligence for 23+ countries.",
  openGraph: {
    title: "About Reloca.ai — Built by Expats, for Expats",
    description: "25+ years of expat experience across 3 continents. Built by someone who's lived the relocation journey.",
    url: "https://reloca.ai/about",
    type: "website",
    siteName: "Reloca.ai",
    images: [{ url: "https://reloca.ai/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Reloca.ai — Built by Expats, for Expats",
    description: "25+ years of expat experience across 3 continents. Built by someone who's lived the relocation journey.",
    images: ["https://reloca.ai/images/og-image.png"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <BreadcrumbSchema items={[{ name: "About", url: "https://reloca.ai/about" }]} />
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 1: Hero / Opening */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Built by a Family That Did It First
          </h1>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              We relocated our family — two adults, two young children — from Europe (France) to Latin America. No guide. No roadmap. Just months of scattered research across dozens of websites, Facebook groups, and outdated forum posts.
            </p>
            <p>
              We spent countless hours piecing together visa requirements, comparing costs of living, figuring out school options, and trying to understand tax implications — only to discover much of what we found was wrong, outdated, or incomplete.
            </p>
            <p className="text-xl font-semibold text-[#1a365d]">
              Reloca.ai is the tool we wished existed when we started.
            </p>
          </div>
        </section>

        {/* Section 2: Founder's Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">From Research Chaos to AI-Powered Clarity</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The founder is a father of two and CRECI-licensed real estate professional who has spent over 25 years living and working across multiple countries — Brazil, Argentina, Paraguay, and Uruguay.
              </p>
              <p>
                What began as a personal relocation turned into a mission. After experiencing firsthand how fragmented and unreliable relocation information was, he founded Reloca.ai to help other families navigate the same journey.
              </p>
              <p>
                But one-on-one consulting doesn't scale. The same questions kept coming up — visa timelines, real costs, best cities for families, tax implications, school quality. Families needed answers faster, cheaper, and more comprehensively than any single consultant could provide.
              </p>
              <p>
                That's why we built Reloca.ai — an AI-powered platform trained on comprehensive expert Q&As, real relocation data, and years of on-the-ground experience. Every report reflects what we've learned helping families relocate, verified against current government data, cost-of-living databases, and local market intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Not Just AI — Real Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">We Live It</h3>
              <p className="text-gray-600 leading-relaxed">
                This isn't a Silicon Valley product built by people who've never left the country. Our team has lived across multiple continents. We deal with the same bureaucracy, costs, and daily realities our reports cover.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Real Data, Not Guesswork</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI is powered by verified relocation data — actual visa processing times, real property prices, current cost-of-living figures. Not scraped travel blogs or AI hallucinations. Updated weekly.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Expert-Backed</h3>
              <p className="text-gray-600 leading-relaxed">
                Built by CRECI-licensed professionals with direct experience relocating across Europe, the Americas, and Asia. Every recommendation is grounded in professional expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Our Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Where Our Intelligence Comes From</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Reloca.ai report draws from multiple verified sources:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Government immigration portals</strong> — Official visa requirements, processing times, and policy updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Cost-of-living databases</strong> — Numbeo, Expatistan, and proprietary local research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Real estate market data</strong> — Active listings, historical pricing, and regional trends</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Exchange rate APIs</strong> — Real-time currency conversion for accurate cost comparisons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Tax authority databases</strong> — Current tax brackets, treaties, and obligations by residency status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b2ac] mr-2">•</span>
                  <span><strong>Firsthand experience</strong> — Over 25 years of real relocations, real families, real outcomes</span>
                </li>
              </ul>
            </div>
            <p className="text-[#1a365d] font-semibold mt-6">
              Our data is updated weekly. When visa rules change, tax laws shift, or costs move — your report reflects reality, not last year's numbers.
            </p>
          </div>
        </section>

        {/* Section 5: Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Relocation Intelligence for Everyone</h2>
          <div className="bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] rounded-2xl p-8 text-white text-center">
            <p className="text-lg leading-relaxed mb-6">
              Hiring a relocation consultant costs $1,000-$3,000. Spending months researching on your own costs you time, stress, and often leads to expensive mistakes.
            </p>
            <p className="text-xl font-semibold text-[#38b2ac] mb-6">
              Reloca.ai delivers comprehensive, personalized relocation intelligence for $49.
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              In 10 minutes, you get what used to take months of research — tailored to your family, your budget, your priorities.
            </p>
            <p className="text-white/90 leading-relaxed">
              Reloca.ai covers 23+ countries across 3 continents — wherever families are looking to start a new chapter, we help them make informed decisions.
            </p>
          </div>
        </section>

        {/* Section 6: Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">23+ Countries Across 3 Continents</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-sm font-semibold text-[#1a365d] mb-2 uppercase tracking-wide">Europe</p>
            <div className="text-3xl mb-4 leading-relaxed">
              🇵🇹 Portugal · 🇪🇸 Spain · 🇮🇹 Italy · 🇬🇷 Greece · 🇲🇹 Malta · 🇨🇾 Cyprus · 🇪🇪 Estonia · 🇦🇩 Andorra
            </div>
            <p className="text-sm font-semibold text-[#1a365d] mb-2 uppercase tracking-wide">Asia & Middle East</p>
            <div className="text-3xl mb-4 leading-relaxed">
              🇸🇬 Singapore · 🇦🇪 Dubai (UAE) · 🇹🇭 Thailand · 🇲🇾 Malaysia
            </div>
            <p className="text-sm font-semibold text-[#1a365d] mb-2 uppercase tracking-wide">The Americas</p>
            <div className="text-3xl mb-4 leading-relaxed">
              🇧🇷 Brazil · 🇦🇷 Argentina · 🇨🇱 Chile · 🇺🇾 Uruguay · 🇵🇾 Paraguay · 🇲🇽 Mexico · 🇵🇦 Panama · 🇨🇷 Costa Rica · 🇸🇻 El Salvador · 🇨🇴 Colombia · 🇪🇨 Ecuador
            </div>
            <p className="text-gray-600 mb-4">Don't see your country?</p>
            <Link href="/request-country" className="inline-block bg-[#38b2ac] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#319795] transition">
              Request it →
            </Link>
            <p className="text-sm text-gray-500 mt-3">We expand based on demand. Your vote helps us prioritize what's next.</p>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8">Ready to Plan Your Move?</h2>
          <Link href="/plan" className="inline-block bg-[#38b2ac] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#319795] transition mb-4">
            Start My Free Plan →
          </Link>
          <p className="text-gray-600">Smart questions. 10 minutes. Your personalized relocation plan.</p>
        </section>
      </main>
    </div>
  );
}