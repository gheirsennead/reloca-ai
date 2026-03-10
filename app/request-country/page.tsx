"use client";

import { useState } from "react";
import Link from "next/link";

const allCountries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
  "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius",
  "Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
  "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];

export default function RequestCountryPage() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!country) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/request-country", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country, city, email, reason }),
      });
      const data = await res.json();
      if (data.success) {
        setCount(data.count);
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

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
          <Link href="/plan" className="text-sm bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg transition">
            Start Plan
          </Link>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-3">Request a Country</h1>
          <p className="text-gray-500 text-sm">
            We&apos;re expanding based on demand. Tell us where you&apos;re interested and we&apos;ll prioritize it.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-[#1a365d] mb-2">Thank you!</h2>
            <p className="text-gray-500 text-sm mb-4">
              Your request for <strong className="text-[#1a365d]">{country}</strong> has been recorded.
            </p>
            {count > 1 && (
              <div className="bg-[#fafaf9] rounded-xl p-4 mb-6">
                <span className="text-2xl font-bold text-[#38b2ac]">{count}</span>
                <span className="text-sm text-gray-500 ml-2">
                  {count === 1 ? "person has" : "people have"} also requested {country}
                </span>
              </div>
            )}
            <Link href="/" className="text-sm text-[#38b2ac] hover:text-[#2c9a94] font-medium transition">
              ← Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1a365d] mb-1">Country *</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#38b2ac] focus:ring-1 focus:ring-[#38b2ac] bg-white"
              >
                <option value="">Select a country...</option>
                {allCountries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a365d] mb-1">City <span className="text-gray-400 font-normal">(optional)</span></label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Lisbon, Bangkok, Nairobi..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#38b2ac] focus:ring-1 focus:ring-[#38b2ac]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a365d] mb-1">Email <span className="text-gray-400 font-normal">(optional — we&apos;ll notify you when it&apos;s live)</span></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#38b2ac] focus:ring-1 focus:ring-[#38b2ac]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a365d] mb-1">Why are you interested? <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                placeholder="e.g. Considering retirement, remote work, family move..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#38b2ac] focus:ring-1 focus:ring-[#38b2ac] resize-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading || !country}
              className="w-full bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
