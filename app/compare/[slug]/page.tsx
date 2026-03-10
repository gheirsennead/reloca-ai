import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import Link from "next/link";

interface CountryStats {
  name: string; flag: string; slug: string;
  costIndex: number; safetyIndex: number; avgRent: number;
  taxHighlight: string; visa: string; visaTime: string;
  healthcare: string; internet: string; climate: string; language: string;
}

const CS: Record<string, CountryStats> = {
  portugal: { name: "Portugal", flag: "🇵🇹", slug: "portugal", costIndex: 55, safetyIndex: 82, avgRent: 900, taxHighlight: "NHR: 20% flat for 10 years", visa: "D7 Passive Income", visaTime: "3-6 mo", healthcare: "Excellent (SNS)", internet: "100+ Mbps", climate: "Mediterranean", language: "Portuguese" },
  spain: { name: "Spain", flag: "🇪🇸", slug: "spain", costIndex: 60, safetyIndex: 78, avgRent: 1100, taxHighlight: "Beckham Law: 24% flat for 6 years", visa: "Non-Lucrative / DN Visa", visaTime: "3-6 mo", healthcare: "Excellent", internet: "100+ Mbps", climate: "Mediterranean", language: "Spanish" },
  italy: { name: "Italy", flag: "🇮🇹", slug: "italy", costIndex: 62, safetyIndex: 76, avgRent: 950, taxHighlight: "7% flat (South, retirees) or 100K flat", visa: "Elective Residency", visaTime: "3-6 mo", healthcare: "Very Good (SSN)", internet: "50+ Mbps", climate: "Mediterranean", language: "Italian" },
  greece: { name: "Greece", flag: "🇬🇷", slug: "greece", costIndex: 42, safetyIndex: 74, avgRent: 550, taxHighlight: "7% flat for retirees, 50% cut for workers", visa: "Golden Visa", visaTime: "2-4 mo", healthcare: "Good", internet: "50+ Mbps", climate: "Mediterranean", language: "Greek" },
  thailand: { name: "Thailand", flag: "🇹🇭", slug: "thailand", costIndex: 30, safetyIndex: 65, avgRent: 400, taxHighlight: "LTR: 17% flat. Territorial system.", visa: "Elite Visa / LTR", visaTime: "1-3 mo", healthcare: "Excellent (low cost)", internet: "50-100 Mbps", climate: "Tropical", language: "Thai" },
  malaysia: { name: "Malaysia", flag: "🇲🇾", slug: "malaysia", costIndex: 28, safetyIndex: 68, avgRent: 450, taxHighlight: "Territorial: foreign income exempt", visa: "MM2H", visaTime: "3-6 mo", healthcare: "Excellent (low cost)", internet: "50-100 Mbps", climate: "Tropical", language: "Malay & English" },
  uae: { name: "Dubai (UAE)", flag: "🇦🇪", slug: "uae", costIndex: 70, safetyIndex: 84, avgRent: 1800, taxHighlight: "0% income tax", visa: "Golden Visa (10yr)", visaTime: "2-4 wk", healthcare: "Excellent (private)", internet: "100+ Mbps", climate: "Desert (hot summers)", language: "Arabic & English" },
  singapore: { name: "Singapore", flag: "🇸🇬", slug: "singapore", costIndex: 85, safetyIndex: 92, avgRent: 2500, taxHighlight: "0-22% income. 0% capital gains.", visa: "EntrePass / EP", visaTime: "2-3 mo", healthcare: "World-class", internet: "1Gbps+", climate: "Tropical", language: "English" },
  mexico: { name: "Mexico", flag: "🇲🇽", slug: "mexico", costIndex: 35, safetyIndex: 55, avgRent: 650, taxHighlight: "1.92-35% (low cost offsets)", visa: "Temporary Resident", visaTime: "1-3 mo", healthcare: "Good (affordable)", internet: "50-100 Mbps", climate: "Varied", language: "Spanish" },
  colombia: { name: "Colombia", flag: "🇨🇴", slug: "colombia", costIndex: 25, safetyIndex: 55, avgRent: 450, taxHighlight: "5yr grace on worldwide income", visa: "Digital Nomad (2yr)", visaTime: "1-3 mo", healthcare: "Excellent (low cost)", internet: "50-100 Mbps", climate: "Eternal spring (Medellín)", language: "Spanish" },
  brazil: { name: "Brazil", flag: "🇧🇷", slug: "brazil", costIndex: 35, safetyIndex: 50, avgRent: 550, taxHighlight: "0-27.5% progressive", visa: "Digital Nomad / Retirement", visaTime: "2-4 mo", healthcare: "SUS (free) + private", internet: "50-100 Mbps", climate: "Tropical/subtropical", language: "Portuguese" },
  argentina: { name: "Argentina", flag: "🇦🇷", slug: "argentina", costIndex: 22, safetyIndex: 65, avgRent: 400, taxHighlight: "5-35% (ultra-low USD costs)", visa: "Rentista", visaTime: "2-4 mo", healthcare: "Very Good", internet: "50+ Mbps", climate: "Temperate", language: "Spanish" },
  chile: { name: "Chile", flag: "🇨🇱", slug: "chile", costIndex: 50, safetyIndex: 70, avgRent: 600, taxHighlight: "3yr foreign income exemption", visa: "Temporary Resident / DN", visaTime: "2-4 mo", healthcare: "Very Good", internet: "200+ Mbps", climate: "Extremely varied", language: "Spanish" },
  panama: { name: "Panama", flag: "🇵🇦", slug: "panama", costIndex: 45, safetyIndex: 55, avgRent: 700, taxHighlight: "0% on foreign income (territorial)", visa: "Friendly Nations", visaTime: "2-4 mo", healthcare: "Good", internet: "50+ Mbps", climate: "Tropical", language: "Spanish" },
  "costa-rica": { name: "Costa Rica", flag: "🇨🇷", slug: "costa-rica", costIndex: 48, safetyIndex: 62, avgRent: 600, taxHighlight: "0% on foreign income (territorial)", visa: "Pensionado / Rentista", visaTime: "3-6 mo", healthcare: "Very Good (CAJA)", internet: "50+ Mbps", climate: "Tropical/spring", language: "Spanish" },
  ecuador: { name: "Ecuador", flag: "🇪🇨", slug: "ecuador", costIndex: 25, safetyIndex: 52, avgRent: 350, taxHighlight: "Retiree discounts: 50% off flights/utilities", visa: "Jubilado / Professional", visaTime: "2-4 mo", healthcare: "Good (affordable)", internet: "30-50 Mbps", climate: "Eternal spring (highlands)", language: "Spanish" },
  uruguay: { name: "Uruguay", flag: "🇺🇾", slug: "uruguay", costIndex: 52, safetyIndex: 72, avgRent: 650, taxHighlight: "0% foreign income for 11 years", visa: "Residency Visa", visaTime: "3-6 mo", healthcare: "Very Good", internet: "50+ Mbps", climate: "Temperate", language: "Spanish" },
  paraguay: { name: "Paraguay", flag: "🇵🇾", slug: "paraguay", costIndex: 20, safetyIndex: 58, avgRent: 300, taxHighlight: "10% flat. 0% on foreign income.", visa: "Permanent Residency", visaTime: "1-3 mo", healthcare: "Basic/affordable", internet: "30-50 Mbps", climate: "Subtropical", language: "Spanish & Guaraní" },
  malta: { name: "Malta", flag: "🇲🇹", slug: "malta", costIndex: 58, safetyIndex: 80, avgRent: 1000, taxHighlight: "No tax on non-remitted foreign income", visa: "Nomad Permit / GRP", visaTime: "2-4 mo", healthcare: "Very Good (#5 WHO)", internet: "50+ Mbps", climate: "Mediterranean", language: "English & Maltese" },
  cyprus: { name: "Cyprus", flag: "🇨🇾", slug: "cyprus", costIndex: 52, safetyIndex: 82, avgRent: 750, taxHighlight: "Non-dom: 0% dividends for 17 years", visa: "Permanent Residency", visaTime: "2-3 mo", healthcare: "Good (GESY)", internet: "50+ Mbps", climate: "Mediterranean", language: "Greek & English" },
  estonia: { name: "Estonia", flag: "🇪🇪", slug: "estonia", costIndex: 45, safetyIndex: 80, avgRent: 700, taxHighlight: "0% corp tax on reinvested profits", visa: "DN Visa / e-Residency", visaTime: "1-2 mo", healthcare: "Good", internet: "100+ Mbps (fastest EU)", climate: "Northern (cold winters)", language: "Estonian" },
  andorra: { name: "Andorra", flag: "🇦🇩", slug: "andorra", costIndex: 65, safetyIndex: 90, avgRent: 1100, taxHighlight: "Max 10% income tax. 0% inheritance.", visa: "Passive/Active Residency", visaTime: "3-6 mo", healthcare: "Good (CASS)", internet: "Fiber available", climate: "Mountain", language: "Catalan" },
  "el-salvador": { name: "El Salvador", flag: "🇸🇻", slug: "el-salvador", costIndex: 22, safetyIndex: 45, avgRent: 400, taxHighlight: "0% on foreign income. 0% BTC gains.", visa: "Bitcoin Freedom Visa", visaTime: "1-2 mo", healthcare: "Basic/affordable", internet: "30-50 Mbps", climate: "Tropical", language: "Spanish" },
};

// Top 20 comparison pairs by search volume
const COMPARISONS = [
  ["portugal", "spain"], ["thailand", "malaysia"], ["portugal", "greece"], ["uae", "singapore"],
  ["mexico", "colombia"], ["portugal", "italy"], ["thailand", "uae"], ["spain", "italy"],
  ["costa-rica", "panama"], ["brazil", "argentina"], ["portugal", "uae"], ["greece", "italy"],
  ["malaysia", "thailand"], ["chile", "argentina"], ["ecuador", "colombia"], ["mexico", "costa-rica"],
  ["spain", "greece"], ["malta", "cyprus"], ["uruguay", "paraguay"], ["estonia", "portugal"],
];

function slugToKey(slug: string): string[] {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return [];
  return parts;
}

export async function generateStaticParams() {
  return COMPARISONS.map(([a, b]) => ({ slug: `${a}-vs-${b}` }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [aKey, bKey] = slugToKey(slug);
  const a = CS[aKey]; const b = CS[bKey];
  if (!a || !b) return { title: "Comparison Not Found" };

  return {
    title: `${a.name} vs ${b.name} for Expats — Cost, Visa, Tax Comparison | Reloca.ai`,
    description: `${a.name} vs ${b.name}: Which is better for relocation? Compare cost of living ($${a.avgRent} vs $${b.avgRent}/mo rent), visa options, tax benefits, safety, healthcare. Data-driven comparison for expats.`,
    keywords: [`${a.name.toLowerCase()} vs ${b.name.toLowerCase()}`, `move to ${a.name.toLowerCase()} or ${b.name.toLowerCase()}`, `${a.name.toLowerCase()} or ${b.name.toLowerCase()} expat`, `best country to relocate`],
    openGraph: {
      title: `${a.flag} ${a.name} vs ${b.flag} ${b.name} — Which Is Better for Expats?`,
      description: `Side-by-side comparison: cost of living, visa, tax, safety, healthcare. Find which country suits you better.`,
    },
  };
}

function StatBar({ label, a, b, aName, bName, aFlag, bFlag, suffix, higher }: { label: string; a: number; b: number; aName: string; bName: string; aFlag: string; bFlag: string; suffix?: string; higher?: "better" | "worse" }) {
  const max = Math.max(a, b) || 1;
  const aWins = higher === "worse" ? a < b : a > b;
  return (
    <div className="mb-4">
      <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-8 text-sm">{aFlag}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
            <div className={`h-6 rounded-full flex items-center justify-end px-2 ${aWins ? "bg-[#38b2ac]" : "bg-gray-300"}`} style={{ width: `${(a / max) * 100}%`, minWidth: "40px" }}>
              <span className="text-xs font-bold text-white">{typeof a === "number" && suffix === "$" ? `$${a.toLocaleString()}` : a}{suffix && suffix !== "$" ? suffix : ""}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 text-sm">{bFlag}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
            <div className={`h-6 rounded-full flex items-center justify-end px-2 ${!aWins ? "bg-[#38b2ac]" : "bg-gray-300"}`} style={{ width: `${(b / max) * 100}%`, minWidth: "40px" }}>
              <span className="text-xs font-bold text-white">{typeof b === "number" && suffix === "$" ? `$${b.toLocaleString()}` : b}{suffix && suffix !== "$" ? suffix : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function CompareVsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [aKey, bKey] = slugToKey(slug);
  const a = CS[aKey]; const b = CS[bKey];
  if (!a || !b) notFound();

  const rentDiff = Math.abs(a.avgRent - b.avgRent);
  const cheaper = a.avgRent < b.avgRent ? a : b;
  const saferCountry = a.safetyIndex > b.safetyIndex ? a : b;

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />

      <section className="pt-24 pb-8 px-4 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {a.flag} {a.name} <span className="text-[#38b2ac]">vs</span> {b.flag} {b.name}
        </h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">Which country is better for your relocation? Here is the data.</p>
      </section>

      {/* Quick Verdict */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">💰 More Affordable</p>
            <p className="text-lg font-bold text-[#1a365d]">{cheaper.flag} {cheaper.name}</p>
            <p className="text-xs text-gray-400">${rentDiff}/mo cheaper rent</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">🛡️ Safer</p>
            <p className="text-lg font-bold text-[#1a365d]">{saferCountry.flag} {saferCountry.name}</p>
            <p className="text-xs text-gray-400">Safety index: {saferCountry.safetyIndex}/100</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">🎯 Best For You?</p>
            <p className="text-sm font-bold text-[#38b2ac]">Take the quiz</p>
            <p className="text-xs text-gray-400">It depends on YOUR situation</p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a365d] mb-6">📊 Head-to-Head Comparison</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <StatBar label="Cost of Living Index (lower = cheaper)" a={a.costIndex} b={b.costIndex} aName={a.name} bName={b.name} aFlag={a.flag} bFlag={b.flag} higher="worse" />
            <StatBar label="Monthly Rent (1BR, center)" a={a.avgRent} b={b.avgRent} aName={a.name} bName={b.name} aFlag={a.flag} bFlag={b.flag} suffix="$" higher="worse" />
            <StatBar label="Safety Index (higher = safer)" a={a.safetyIndex} b={b.safetyIndex} aName={a.name} bName={b.name} aFlag={a.flag} bFlag={b.flag} suffix="/100" higher="better" />
          </div>
        </div>
      </section>

      {/* Side by Side Details */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a365d] mb-6">📋 Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Category</th>
                  <th className="text-center py-3 px-4 font-bold text-[#1a365d]">{a.flag} {a.name}</th>
                  <th className="text-center py-3 px-4 font-bold text-[#1a365d]">{b.flag} {b.name}</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["💰 Tax Benefits", a.taxHighlight, b.taxHighlight],
                  ["📋 Main Visa", a.visa, b.visa],
                  ["⏱️ Visa Timeline", a.visaTime, b.visaTime],
                  ["🏥 Healthcare", a.healthcare, b.healthcare],
                  ["📶 Internet", a.internet, b.internet],
                  ["☀️ Climate", a.climate, b.climate],
                  ["🗣️ Language", a.language, b.language],
                ].map(([cat, va, vb], i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-3 px-4 font-medium">{cat}</td>
                    <td className="text-center py-3 px-4">{va}</td>
                    <td className="text-center py-3 px-4">{vb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{a.name} or {b.name}? Let the Data Decide.</h2>
          <p className="opacity-80 mb-6">Take our 10-minute quiz and get a personalized report that compares these countries (and 21 more) based on YOUR income, family, goals, and lifestyle.</p>
          <Link href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-[#38b2ac]/25">
            Find My Best Country Match →
          </Link>
          <p className="text-xs opacity-50 mt-3">Free quiz · Full report: $49 · 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Other Comparisons */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1a365d] mb-6">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {COMPARISONS.filter(([x, y]) => !(x === aKey && y === bKey)).slice(0, 12).map(([x, y]) => (
              <Link key={`${x}-${y}`} href={`/compare/${x}-vs-${y}`} className="inline-flex items-center gap-1 bg-gray-50 hover:bg-[#38b2ac]/10 border border-gray-200 hover:border-[#38b2ac]/30 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:text-[#1a365d] transition">
                {CS[x]?.flag} {CS[x]?.name} vs {CS[y]?.flag} {CS[y]?.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": `Is ${a.name} or ${b.name} cheaper to live in?`, "acceptedAnswer": { "@type": "Answer", "text": `${cheaper.name} is more affordable with average rent of $${cheaper.avgRent}/month vs $${(cheaper === a ? b : a).avgRent}/month.` }},
          { "@type": "Question", "name": `Is ${a.name} or ${b.name} safer?`, "acceptedAnswer": { "@type": "Answer", "text": `${saferCountry.name} has a higher safety index (${saferCountry.safetyIndex}/100).` }},
          { "@type": "Question", "name": `What are the tax benefits of ${a.name} vs ${b.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `${a.name}: ${a.taxHighlight}. ${b.name}: ${b.taxHighlight}.` }},
        ]
      })}} />
    </div>
  );
}
