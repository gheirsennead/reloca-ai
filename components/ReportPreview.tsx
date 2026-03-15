"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ReportPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportPreview({ isOpen, onClose }: ReportPreviewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      if (e.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPage, onClose]);

  if (!isOpen) return null;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [
    // Page 1: Cover
    {
      content: (
        <div className="text-center py-8 px-6">
          <div className="text-3xl font-bold text-[#38b2ac] mb-4">RELOCA.AI</div>
          <div className="text-xl font-semibold text-[#1a365d] mb-8">Personalized Relocation Report</div>
          
          <div className="text-6xl mb-6">🇧🇷</div>
          <div className="text-2xl font-bold text-[#1a365d] mb-4">Your Relocation Plan for Brazil</div>
          
          <div className="bg-[#fafaf9] rounded-xl p-6 max-w-sm mx-auto space-y-2 text-sm">
            <div className="font-medium">Generated for: <span className="text-[#38b2ac]">Sample Family</span></div>
            <div>Profile: US Family of 4</div>
            <div>Budget: $200-400K</div>
            <div>Timeline: 12 months</div>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            <div>Report Date: February 2026</div>
            <div className="font-medium text-[#38b2ac]">16 Comprehensive Sections</div>
          </div>
        </div>
      )
    },

    // Page 2: Table of Contents
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-2xl font-bold text-[#1a365d] text-center mb-8">Table of Contents</h3>
          <div className="grid gap-3 text-sm max-w-lg mx-auto">
            {[
              "Executive Summary & Top Matches",
              "Country Compatibility Analysis", 
              "Detailed Regional Breakdown",
              "Visa & Legal Requirements",
              "Cost of Living Analysis",
              "Property Market Overview",
              "Healthcare System Guide",
              "Education Options",
              "Tax Implications",
              "Safety & Security Assessment",
              "Climate & Lifestyle Match",
              "Banking & Financial Setup",
              "Transportation & Infrastructure",
              "Cultural Integration Guide",
              "Personalized Timeline",
              "Next Steps & Expert Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <span className="text-[#38b2ac] font-medium">{i + 1}.</span>
                <span className="flex-1">{item}</span>
                <span className="text-[#38b2ac]">✓</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            Total Pages: 45-60 (varies by profile)
          </div>
        </div>
      )
    },

    // Page 3: Country Compatibility
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-2xl font-bold text-[#1a365d] text-center mb-6">Your Top Country Matches</h3>
          
          <div className="space-y-6 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🥇</span>
                <div>
                  <div className="font-bold text-lg">BRAZIL</div>
                  <div className="text-sm font-medium text-[#38b2ac]">Score: 94/100</div>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Lifestyle Match</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Visa Accessibility</span>
                  <span>⭐⭐⭐⭐☆</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost of Living</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Language Barrier</span>
                  <span>⭐⭐⭐☆☆</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-yellow-200 text-xs text-gray-600">
                <div>Best Regions: Ceará, Santa Catarina</div>
                <div>Est. Monthly Cost: $2,800-4,200</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🥈</span>
                <div>
                  <div className="font-bold">PARAGUAY</div>
                  <div className="text-sm text-[#38b2ac]">Score: 87/100</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                <div>⭐⭐⭐⭐☆ Lifestyle • ⭐⭐⭐⭐⭐ Visa • ⭐⭐⭐⭐⭐ Tax Benefits</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🥉</span>
                <div>
                  <div className="font-bold">URUGUAY</div>
                  <div className="text-sm text-[#38b2ac]">Score: 82/100</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                <div>⭐⭐⭐⭐☆ Safety • ⭐⭐⭐☆☆ Cost • ⭐⭐⭐⭐☆ Banking</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-gray-500">
            [+7 more detailed country analyses]
          </div>
        </div>
      )
    },

    // Page 4: Cost of Living
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-xl font-bold text-[#1a365d] text-center mb-6">
            Brazil - Monthly Cost Breakdown
            <div className="text-sm font-normal text-gray-500">(Family of 4)</div>
          </h3>
          
          <div className="space-y-4 max-w-md mx-auto text-sm">
            <div className="bg-[#fafaf9] rounded-lg p-3">
              <div className="flex items-center gap-2 font-medium text-[#1a365d] mb-2">
                <span>🏠</span> Housing
              </div>
              <div className="space-y-1 text-xs text-gray-600 pl-6">
                <div className="flex justify-between">
                  <span>Rent (3br house)</span>
                  <span>$800-1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities</span>
                  <span>$120-200</span>
                </div>
                <div className="flex justify-between">
                  <span>Internet</span>
                  <span>$35-50</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fafaf9] rounded-lg p-3">
              <div className="flex items-center gap-2 font-medium text-[#1a365d] mb-2">
                <span>🍽️</span> Food & Dining
              </div>
              <div className="space-y-1 text-xs text-gray-600 pl-6">
                <div className="flex justify-between">
                  <span>Groceries</span>
                  <span>$400-600</span>
                </div>
                <div className="flex justify-between">
                  <span>Dining out</span>
                  <span>$200-400</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fafaf9] rounded-lg p-3">
              <div className="flex items-center gap-2 font-medium text-[#1a365d] mb-2">
                <span>🚗</span> Transportation
              </div>
              <div className="space-y-1 text-xs text-gray-600 pl-6">
                <div className="flex justify-between">
                  <span>Car payment</span>
                  <span>$300-500</span>
                </div>
                <div className="flex justify-between">
                  <span>Fuel</span>
                  <span>$150-250</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fafaf9] rounded-lg p-3">
              <div className="flex items-center gap-2 font-medium text-[#1a365d] mb-2">
                <span>👨‍⚕️</span> Healthcare & Education
              </div>
              <div className="space-y-1 text-xs text-gray-600 pl-6">
                <div className="flex justify-between">
                  <span>Private insurance</span>
                  <span>$200-400</span>
                </div>
                <div className="flex justify-between">
                  <span>International school</span>
                  <span>$800-1,500</span>
                </div>
              </div>
            </div>

            <div className="bg-[#38b2ac]/10 border border-[#38b2ac]/20 rounded-lg p-3 text-center">
              <div className="font-bold text-[#1a365d]">TOTAL MONTHLY: $2,800-4,200</div>
              <div className="text-xs text-gray-600">ANNUAL: $33,600-50,400</div>
            </div>
          </div>
        </div>
      )
    },

    // Page 5: Visa Options
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-xl font-bold text-[#1a365d] text-center mb-6">
            Brazil Visa Options
            <div className="text-sm font-normal text-gray-500">(Based on Your Profile)</div>
          </h3>
          
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🏆</span>
                <div className="font-bold text-[#1a365d]">RECOMMENDED: Investor Visa (VIPER)</div>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Investment:</strong> $150,000-500,000</div>
                <div><strong>Timeline:</strong> 6-12 months</div>
                <div><strong>Benefits:</strong> Path to permanent residency</div>
                <div><strong>Best for:</strong> Your property budget range</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⭐</span>
                <div className="font-bold text-[#1a365d]">ALTERNATIVE: Digital Nomad Visa</div>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Income req:</strong> $2,000/month</div>
                <div><strong>Timeline:</strong> 2-4 months</div>
                <div><strong>Benefits:</strong> 1 year renewable</div>
                <div><strong>Best for:</strong> Remote work transition</div>
              </div>
            </div>

            <div className="bg-[#fafaf9] rounded-lg p-4">
              <div className="font-medium text-[#1a365d] mb-2">📋 Step-by-Step Process:</div>
              <div className="space-y-1 text-xs text-gray-600">
                <div>Week 1-2: Document preparation</div>
                <div>Week 3-6: Submit application</div>
                <div>Week 7-12: Processing & approval</div>
                <div>Week 13-16: Final registration</div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="font-medium text-[#1a365d] mb-2">💰 Total Costs:</div>
              <div className="space-y-1 text-xs">
                <div>Government fees: $2,500-4,000</div>
                <div>Legal fees: $3,000-8,000</div>
                <div>Document prep: $500-1,500</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Page 6: Regional Breakdown
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-xl font-bold text-[#1a365d] text-center mb-6">Brazil - Best Regions for You</h3>
          
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🏆</span>
                <div>
                  <div className="font-bold text-[#1a365d]">#1 MATCH: CEARÁ (NORTHEAST)</div>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Climate:</strong> 24-30°C year-round</div>
                <div><strong>Cost:</strong> 40% below São Paulo</div>
                <div><strong>Expat community:</strong> Growing (200+ families)</div>
                <div><strong>Airport:</strong> Fortaleza (international)</div>
                <div><strong>Highlights:</strong> Beaches, mountains, culture</div>
              </div>
              <div className="mt-3 pt-2 border-t border-orange-200">
                <div className="font-medium text-xs mb-1">Top Cities:</div>
                <div className="text-xs space-y-1 text-gray-600">
                  <div>• Fortaleza - Urban beach life</div>
                  <div>• Guaramiranga - Mountain retreat</div>
                  <div>• Jericoacoara - Surf/kite paradise</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span>🥈</span>
                <div className="font-bold text-[#1a365d]">#2 MATCH: SANTA CATARINA (SOUTH)</div>
              </div>
              <div className="text-xs text-gray-600">
                <div>15-25°C, four seasons • 20% below São Paulo</div>
                <div>Established expat community (500+) • German influence</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span>🥉</span>
                <div className="font-bold text-[#1a365d]">#3 MATCH: RIO GRANDE DO SUL</div>
              </div>
              <div className="text-xs text-gray-600">
                <div>12-28°C, distinct seasons • Gaucho lifestyle</div>
                <div>Wine country • European feel</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-gray-500">
            [Detailed analysis of 6 more regions...]
          </div>
        </div>
      )
    },

    // Page 7: Timeline
    {
      content: (
        <div className="py-6 px-6">
          <h3 className="text-xl font-bold text-[#1a365d] text-center mb-6">Your 12-Month Relocation Plan</h3>
          
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-red-50 border-l-4 border-red-300 rounded-r-lg p-3">
              <div className="font-bold text-[#1a365d] mb-2">MONTHS 1-3: PREPARATION PHASE</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Passport renewal (if needed)</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Document apostille process</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Portuguese language basics</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Tax consultation (US obligations)</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> School research for kids</div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-300 rounded-r-lg p-3">
              <div className="font-bold text-[#1a365d] mb-2">MONTHS 4-6: APPLICATION PHASE</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Visa application submission</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Property scouting trip (2 weeks)</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Banking relationship setup</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Healthcare provider research</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-300 rounded-r-lg p-3">
              <div className="font-bold text-[#1a365d] mb-2">MONTHS 7-9: APPROVAL & SETUP</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Visa approval & travel authorization</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Property purchase/rental finalization</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> School enrollment applications</div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-300 rounded-r-lg p-3">
              <div className="font-bold text-[#1a365d] mb-2">MONTHS 10-12: RELOCATION & INTEGRATION</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Official move & residency registration</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Tax residency establishment</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Local integration & community</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Page 8: CTA
    {
      content: (
        <div className="py-8 px-6 text-center">
          <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Ready for Your Report?</h3>
          
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            This sample shows the structure and depth of our analysis. Your personalized report will be customized for:
          </p>
          
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto text-xs mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your specific country preferences</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your exact budget and timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your family size and ages</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your visa/residency situation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your work/business requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38b2ac]">✓</span>
              <span>Your lifestyle and climate preferences</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 mb-6">
            Every recommendation is tailored to <strong>YOU</strong>.
          </div>

          <div className="bg-gradient-to-r from-[#38b2ac] to-[#2c9a94] text-white rounded-xl p-6 max-w-sm mx-auto">
            <div className="text-lg font-bold mb-2">GET YOUR REPORT</div>
            <div className="text-2xl font-bold mb-1">
              $49
              <span className="text-sm font-normal"> (Launch Special)</span>
            </div>
            
            <Link
              href="/plan"
              className="mt-4 block bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition"
              onClick={onClose}
            >
              Get My Personalized Report
            </Link>
            
            <div className="space-y-1 text-xs mt-4 text-white/80">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> 16 sections, 45-60 pages
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Personalized to your profile
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Downloadable PDF
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Updated weekly with fresh data
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          >
            ✕
          </button>
          <h3 className="font-semibold text-[#1a365d]">Sample Report Preview</h3>
          <Link
            href="/plan"
            onClick={onClose}
            className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Get My Report →
          </Link>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 text-sm font-medium text-[#38b2ac] disabled:text-gray-400 disabled:cursor-not-allowed hover:text-[#2c9a94] transition"
          >
            ◀ Previous
          </button>
          <span className="text-sm text-gray-600">
            Page <span className="font-medium text-[#1a365d]">{currentPage}</span> of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 text-sm font-medium text-[#38b2ac] disabled:text-gray-400 disabled:cursor-not-allowed hover:text-[#2c9a94] transition"
          >
            Next ▶
          </button>
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh]">
          <div className="min-h-[400px]">
            {pages[currentPage - 1]?.content}
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            This is a sample. Your personalized report will be customized to your specific profile.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ReportPreviewButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-[#38b2ac] hover:text-[#2c9a94] font-semibold text-sm transition border-2 border-[#38b2ac]/20 hover:border-[#38b2ac]/40 px-4 py-2 rounded-lg hover:bg-[#38b2ac]/5"
      >
        <span>👁️</span> Preview Sample Report
      </button>
      <ReportPreview isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}