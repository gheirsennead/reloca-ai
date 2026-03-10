"use client";

import { useState, useEffect } from "react";

interface CountryData {
  country: string;
  flag: string;
  costIndex: number;
  safetyIndex: number;
  visaEase: string;
  taxRate: string;
  avgRent: number;
  healthcare: string;
  climate: string;
  internet: string;
  language: string;
}

const COUNTRY_DB: Record<string, CountryData> = {
  Portugal: { country: "Portugal", flag: "🇵🇹", costIndex: 55, safetyIndex: 81, visaEase: "Easy (D7/Golden)", taxRate: "0-20% (NHR)", avgRent: 900, healthcare: "Excellent (SNS)", climate: "Mediterranean", internet: "Fast (100+ Mbps)", language: "Portuguese" },
  Spain: { country: "Spain", flag: "🇪🇸", costIndex: 58, safetyIndex: 78, visaEase: "Moderate (Non-Lucrative)", taxRate: "24% (Beckham Law)", avgRent: 950, healthcare: "Excellent", climate: "Mediterranean", internet: "Fast (100+ Mbps)", language: "Spanish" },
  Italy: { country: "Italy", flag: "🇮🇹", costIndex: 62, safetyIndex: 76, visaEase: "Moderate (Elective)", taxRate: "7% flat (South, retirees)", avgRent: 850, healthcare: "Very Good (SSN)", climate: "Mediterranean", internet: "Good (50+ Mbps)", language: "Italian" },
  Greece: { country: "Greece", flag: "🇬🇷", costIndex: 48, safetyIndex: 74, visaEase: "Easy (Golden Visa)", taxRate: "22-44%", avgRent: 600, healthcare: "Good", climate: "Mediterranean", internet: "Good (50+ Mbps)", language: "Greek" },
  Thailand: { country: "Thailand", flag: "🇹🇭", costIndex: 35, safetyIndex: 70, visaEase: "Easy (Elite/Retirement)", taxRate: "0-35%", avgRent: 450, healthcare: "Good (Private)", climate: "Tropical", internet: "Fast (100+ Mbps)", language: "Thai" },
  Malaysia: { country: "Malaysia", flag: "🇲🇾", costIndex: 33, safetyIndex: 68, visaEase: "Moderate (MM2H)", taxRate: "0-30%", avgRent: 400, healthcare: "Very Good", climate: "Tropical", internet: "Fast (100+ Mbps)", language: "Malay/English" },
  Singapore: { country: "Singapore", flag: "🇸🇬", costIndex: 85, safetyIndex: 95, visaEase: "Hard (EntrePass)", taxRate: "0-22%", avgRent: 2500, healthcare: "World-class", climate: "Tropical", internet: "Ultra-fast", language: "English" },
  UAE: { country: "UAE", flag: "🇦🇪", costIndex: 72, safetyIndex: 88, visaEase: "Easy (Golden Visa)", taxRate: "0% income", avgRent: 1800, healthcare: "Excellent", climate: "Desert/Hot", internet: "Ultra-fast", language: "Arabic/English" },
  Brazil: { country: "Brazil", flag: "🇧🇷", costIndex: 38, safetyIndex: 42, visaEase: "Moderate (Investor)", taxRate: "7.5-27.5%", avgRent: 500, healthcare: "Good (SUS)", climate: "Tropical/Varied", internet: "Good (50+ Mbps)", language: "Portuguese" },
  Mexico: { country: "Mexico", flag: "🇲🇽", costIndex: 36, safetyIndex: 45, visaEase: "Easy (Temp Resident)", taxRate: "1.92-35%", avgRent: 550, healthcare: "Good (IMSS)", climate: "Varied", internet: "Good (50+ Mbps)", language: "Spanish" },
  Colombia: { country: "Colombia", flag: "🇨🇴", costIndex: 30, safetyIndex: 38, visaEase: "Easy (Digital Nomad)", taxRate: "0-39%", avgRent: 400, healthcare: "Good (EPS)", climate: "Tropical/Varied", internet: "Good (50+ Mbps)", language: "Spanish" },
  Ecuador: { country: "Ecuador", flag: "🇪🇨", costIndex: 28, safetyIndex: 40, visaEase: "Easy (Jubilado)", taxRate: "0-37%", avgRent: 350, healthcare: "Good (IESS)", climate: "Varied", internet: "Moderate (30+ Mbps)", language: "Spanish" },
  Argentina: { country: "Argentina", flag: "🇦🇷", costIndex: 25, safetyIndex: 44, visaEase: "Easy (Rentista)", taxRate: "5-35%", avgRent: 350, healthcare: "Very Good", climate: "Varied", internet: "Good (50+ Mbps)", language: "Spanish" },
  Chile: { country: "Chile", flag: "🇨🇱", costIndex: 50, safetyIndex: 70, visaEase: "Moderate (Temporary Resident)", taxRate: "0-40%", avgRent: 550, healthcare: "Very Good", climate: "Varied (Desert to Glacial)", internet: "Good (100+ Mbps)", language: "Spanish" },
  Uruguay: { country: "Uruguay", flag: "🇺🇾", costIndex: 52, safetyIndex: 72, visaEase: "Easy (Residency)", taxRate: "0-36%", avgRent: 650, healthcare: "Very Good", climate: "Temperate", internet: "Good (50+ Mbps)", language: "Spanish" },
  Panama: { country: "Panama", flag: "🇵🇦", costIndex: 45, safetyIndex: 55, visaEase: "Easy (Friendly Nations)", taxRate: "0% foreign income", avgRent: 700, healthcare: "Good", climate: "Tropical", internet: "Good (50+ Mbps)", language: "Spanish" },
  "Costa Rica": { country: "Costa Rica", flag: "🇨🇷", costIndex: 48, safetyIndex: 62, visaEase: "Easy (Pensionado)", taxRate: "0% foreign income", avgRent: 650, healthcare: "Very Good (Caja)", climate: "Tropical", internet: "Good (50+ Mbps)", language: "Spanish" },
  Malta: { country: "Malta", flag: "🇲🇹", costIndex: 60, safetyIndex: 82, visaEase: "Moderate (Nomad)", taxRate: "15% flat (HNWI)", avgRent: 1000, healthcare: "Very Good", climate: "Mediterranean", internet: "Fast (100+ Mbps)", language: "English/Maltese" },
  Cyprus: { country: "Cyprus", flag: "🇨🇾", costIndex: 55, safetyIndex: 80, visaEase: "Moderate", taxRate: "12.5% corp", avgRent: 800, healthcare: "Good (GeSY)", climate: "Mediterranean", internet: "Fast (100+ Mbps)", language: "Greek/English" },
  Estonia: { country: "Estonia", flag: "🇪🇪", costIndex: 50, safetyIndex: 78, visaEase: "Easy (e-Residency)", taxRate: "20% flat", avgRent: 700, healthcare: "Good", climate: "Northern/Cold", internet: "Ultra-fast", language: "Estonian/English" },
  Andorra: { country: "Andorra", flag: "🇦🇩", costIndex: 65, safetyIndex: 90, visaEase: "Moderate (Passive)", taxRate: "Max 10%", avgRent: 1100, healthcare: "Good (CASS)", climate: "Mountain", internet: "Good (50+ Mbps)", language: "Catalan/Spanish" },
  Paraguay: { country: "Paraguay", flag: "🇵🇾", costIndex: 22, safetyIndex: 48, visaEase: "Very Easy (Residency)", taxRate: "10% flat", avgRent: 300, healthcare: "Basic", climate: "Subtropical", internet: "Moderate (30+ Mbps)", language: "Spanish/Guaraní" },
  "El Salvador": { country: "El Salvador", flag: "🇸🇻", costIndex: 30, safetyIndex: 35, visaEase: "Easy (Bitcoin)", taxRate: "0% foreign income", avgRent: 400, healthcare: "Basic", climate: "Tropical", internet: "Moderate (30+ Mbps)", language: "Spanish" },
};

const countries = Object.keys(COUNTRY_DB);

function StatBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function CountryComparisonCard({ countryA: initialA, countryB: initialB }: { countryA?: string; countryB?: string }) {
  const [countryA, setCountryA] = useState(initialA || "Portugal");
  const [countryB, setCountryB] = useState(initialB || "Thailand");

  const a = COUNTRY_DB[countryA];
  const b = COUNTRY_DB[countryB];

  if (!a || !b) return null;

  const rows: { label: string; a: string | number; b: string | number; type: "bar" | "text"; max?: number; lowerBetter?: boolean }[] = [
    { label: "Cost Index", a: a.costIndex, b: b.costIndex, type: "bar", max: 100, lowerBetter: true },
    { label: "Safety Index", a: a.safetyIndex, b: b.safetyIndex, type: "bar", max: 100 },
    { label: "Avg Rent (1BR)", a: `$${a.avgRent}`, b: `$${b.avgRent}`, type: "text" },
    { label: "Visa Ease", a: a.visaEase, b: b.visaEase, type: "text" },
    { label: "Tax Rate", a: a.taxRate, b: b.taxRate, type: "text" },
    { label: "Healthcare", a: a.healthcare, b: b.healthcare, type: "text" },
    { label: "Climate", a: a.climate, b: b.climate, type: "text" },
    { label: "Internet", a: a.internet, b: b.internet, type: "text" },
    { label: "Language", a: a.language, b: b.language, type: "text" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header with selectors */}
      <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="text-center">
          <select
            value={countryA}
            onChange={(e) => setCountryA(e.target.value)}
            className="bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium border border-white/30 w-full appearance-none cursor-pointer text-center"
          >
            {countries.map(c => <option key={c} value={c} className="text-gray-900">{COUNTRY_DB[c].flag} {c}</option>)}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg font-bold opacity-60">VS</span>
        </div>
        <div className="text-center">
          <select
            value={countryB}
            onChange={(e) => setCountryB(e.target.value)}
            className="bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium border border-white/30 w-full appearance-none cursor-pointer text-center"
          >
            {countries.map(c => <option key={c} value={c} className="text-gray-900">{COUNTRY_DB[c].flag} {c}</option>)}
          </select>
        </div>
      </div>

      {/* Comparison rows */}
      <div className="divide-y divide-gray-50">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-3 gap-4 px-6 py-3 items-center">
            <div className="text-right">
              {row.type === "bar" ? (
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-sm font-medium text-[#1a365d]">{row.a as number}</span>
                  <div className="w-20">
                    <StatBar value={row.a as number} max={row.max!} color={row.lowerBetter ? "bg-green-400" : "bg-[#38b2ac]"} />
                  </div>
                </div>
              ) : (
                <span className="text-sm text-gray-700">{row.a}</span>
              )}
            </div>
            <div className="text-center">
              <span className="text-xs font-medium text-gray-400 uppercase">{row.label}</span>
            </div>
            <div>
              {row.type === "bar" ? (
                <div className="flex items-center gap-2">
                  <div className="w-20">
                    <StatBar value={row.b as number} max={row.max!} color={row.lowerBetter ? "bg-green-400" : "bg-[#38b2ac]"} />
                  </div>
                  <span className="text-sm font-medium text-[#1a365d]">{row.b as number}</span>
                </div>
              ) : (
                <span className="text-sm text-gray-700">{row.b}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-6 bg-gradient-to-r from-[#38b2ac]/5 to-[#1a365d]/5 text-center">
        <p className="text-sm text-gray-600 mb-3">Want a detailed comparison personalized to YOUR situation?</p>
        <a href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition text-sm">
          Get My Personalized Report →
        </a>
      </div>
    </div>
  );
}
