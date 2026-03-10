import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CountryComparisonCard } from "@/components/CountryComparison/CountryComparisonCard";
import { CostBreakdownChart } from "@/components/CostBreakdownChart/CostBreakdownChart";
import { VisaPathwayTimeline } from "@/components/VisaPathwayTimeline/VisaPathwayTimeline";

export const metadata: Metadata = {
  title: "Compare Countries for Relocation — Reloca.ai",
  description: "Compare countries side-by-side: cost of living, safety, visa options, taxes, healthcare. Find the best country to relocate to with AI-powered analysis.",
  keywords: ["compare countries", "cost of living comparison", "best country to move to", "expat comparison", "relocation comparison"],
  openGraph: {
    title: "Compare Countries for Relocation — Reloca.ai",
    description: "Side-by-side country comparison: costs, safety, visas, taxes. Find your perfect match.",
  },
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
            Compare Countries <span className="text-[#38b2ac]">Side by Side</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore key metrics across 23+ countries. For a full analysis personalized to your situation, take our free quiz.
          </p>
        </div>
      </section>

      {/* Country Comparison */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a365d] mb-4">🌍 Country Overview</h2>
          <CountryComparisonCard countryA="Portugal" countryB="Thailand" />
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a365d] mb-4">💰 Cost of Living</h2>
          <CostBreakdownChart cityA="Lisbon" cityB="Chiang Mai" />
        </div>
      </section>

      {/* Visa Timeline */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a365d] mb-4">📋 Visa Pathways</h2>
          <VisaPathwayTimeline country="Portugal" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Your Personalized Analysis?</h2>
          <p className="opacity-80 mb-6">These are general comparisons. Your report will include recommendations based on YOUR income, family, lifestyle, and goals.</p>
          <a href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-8 py-4 rounded-xl transition text-lg">
            Start My Free Assessment →
          </a>
        </div>
      </section>
    </div>
  );
}
