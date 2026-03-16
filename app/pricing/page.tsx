import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          <Link href="/plan" className="text-sm bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg transition">
            Start Plan
          </Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Reloca.ai Products */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1a365d] mb-3">Simple Pricing. Real Value.</h1>
          <p className="text-gray-500 text-sm">One report. Everything you need to make the move.</p>
        </div>

        <div className="max-w-md mx-auto mb-20">
          <div className="bg-[#1a365d] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-[#1a365d]">
              🔥 LAUNCH SPECIAL
            </div>
            <div className="text-sm font-bold text-[#38b2ac] mb-1">FULL REPORT</div>
            <div className="text-3xl font-bold text-white mb-1">
              <span className="line-through text-gray-400 text-xl mr-2">$49</span>$29
            </div>
            <p className="text-xs text-blue-300 mb-6">One-time payment. Yours forever.</p>
            <ul className="space-y-2 flex-1 text-sm text-blue-100">
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> All country matches with detailed scores</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Visa options &amp; requirements</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Full cost of living breakdown</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Property market analysis</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Tax implications</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Healthcare &amp; education overview</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Safety assessment by region</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Personalized timeline</li>
              <li className="flex items-start gap-2"><span className="text-[#38b2ac] shrink-0">✓</span> Downloadable PDF</li>
            </ul>
            <Link href="/plan" className="mt-8 block text-center bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition">
              Get My Full Report — <span className="line-through text-white/50">$49</span> $29
            </Link>
          </div>
        </div>

        {/* Reloca Pro Coming Soon */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold text-[#38b2ac] uppercase tracking-wider mb-2">Coming Soon</div>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-3">Reloca Pro</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Premium tools for serious relocators — side-by-side country comparisons, visa timeline trackers, monthly data alerts, and personalized cost calculators.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📊", title: "Country Comparisons", desc: "Compare your top matches side by side on every metric", color: "border-gray-200" },
              { icon: "📅", title: "Visa Tracker", desc: "Step-by-step visa timeline personalized to your situation", color: "border-[#38b2ac]" },
              { icon: "🔔", title: "Data Alerts", desc: "Get notified when costs, visa rules, or conditions change", color: "border-[#1a365d]" },
            ].map((f) => (
              <div
                key={f.title}
                className={`bg-white rounded-xl border-2 ${f.color} p-5 text-center`}
              >
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="font-bold text-[#1a365d] text-sm mb-1">{f.title}</div>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
