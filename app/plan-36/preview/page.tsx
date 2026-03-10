"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";

export default function QuizPreviewEnd() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "Test",
          answers: {
            1: ["lower-cost", "tax-benefits"],
            2: "1-2-years",
            3: "single",
            4: "45-54",
            5: "us",
            12: ["employment"],
            28: ["Argentina", "Uruguay"],
            31: ["legal-complexity"],
          },
          skipped: [],
        }),
      });
      if (response.ok) {
        const data = await response.json();
        window.location.href = `/report/${data.reportId}`;
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#38b2ac] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac]"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-400">*</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac]"
              placeholder="your@email.com"
            />
            {!email && <p className="text-xs text-gray-400 mt-1">Required to receive your report</p>}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!email || isSubmitting}
            className="w-full bg-gradient-to-r from-[#38b2ac] to-[#319795] hover:from-[#2c9a94] hover:to-[#28908a] text-white font-bold py-4 px-6 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? "Generating Your Report..." : "Get My Relocation Report →"}
          </button>
        </div>

        <p className="text-xs text-center text-gray-300 mt-4">⚙️ Debug shortcut — skips quiz with sample answers</p>
      </div>
    </div>
  );
}
