"use client";

import { useState } from "react";
import { FooterDisclaimer } from "@/components/LegalDisclaimer";

export default function PartnersPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    handle: "",
    audienceSize: "",
    pitch: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [referralData, setReferralData] = useState<{
    email: string;
    referralLink: string;
    referralCode: string;
  } | null>(null);
  const [referralStatus, setReferralStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [referralEmail, setReferralEmail] = useState("");

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/partner-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const generateReferralLink = async () => {
    if (!referralEmail || !referralEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setReferralStatus("loading");
    try {
      const res = await fetch("/api/generate-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: referralEmail }),
      });
      
      if (res.ok) {
        const data = await res.json();
        setReferralData({
          email: referralEmail,
          referralLink: data.referralLink,
          referralCode: data.referralCode
        });
        setReferralStatus("success");
      } else {
        setReferralStatus("error");
      }
    } catch (error) {
      console.error('Referral generation error:', error);
      setReferralStatus("error");
    }
  };

  const copyReferralLink = () => {
    if (referralData) {
      navigator.clipboard.writeText(referralData.referralLink);
      alert('Referral link copied to clipboard!');
    }
  };

  const faqs = [
    {
      q: "How do I get paid?",
      a: "Monthly payouts via PayPal or bank transfer (minimum $5 for referrals, $50 for creators). Payouts happen within the first 5 days of each month.",
    },
    {
      q: "When do I get credit for a referral?",
      a: "Credits appear in your dashboard immediately after payment. Actual payouts are held for 14 days to account for refunds.",
    },
    {
      q: "How long do referral links last?",
      a: "60 days. If someone clicks your link and purchases within 60 days, you get credit.",
    },
    {
      q: "Can I refer myself?",
      a: "No. We detect and block self-referrals and referrals from the same household.",
    },
    {
      q: "What's the difference between the referral program and the partner program?",
      a: "The referral program is for anyone — share your link, earn $5 per sale. The partner program is for creators with an audience — you get 20–30% commission on every sale (based on your tier), custom coupon codes, a real-time dashboard, and your audience gets exclusive discounts of 10–25% off.",
    },
    {
      q: "Can I be in both programs?",
      a: "When you join the partner program, your partner commissions replace referral rewards — they're better. You'll earn 20–30% per sale instead of a flat $5.",
    },
    {
      q: "Can I run paid ads to promote Reloca?",
      a: "Yes, but you can't bid on Reloca brand terms (like \"Reloca.ai\" or \"Reloca\") in search ads. Social ads, display ads, and content promotion are all welcome.",
    },
    {
      q: "What if someone clicks my link but buys weeks later?",
      a: "Our 60-day cookie attribution covers you. As long as they purchase within 60 days of clicking your link, you get credit.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/images/reloca-logo.png"
              alt="Reloca.ai"
              className="h-14 w-auto"
            />
          </a>
          <a
            href="#get-started"
            className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition text-sm"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Share Reloca. Earn Rewards. 🌎
          </h1>
          <p className="text-xl sm:text-2xl mb-4 opacity-90">
            You helped someone discover their dream country — why not get
            rewarded for it?
          </p>
          <p className="text-lg mb-10 opacity-75">
            Whether you&apos;re a happy customer or a creator with an audience, we&apos;ve
            got a program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#referral"
              className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Refer a Friend →
            </a>
            <a
              href="#creator"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a365d] px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Become a Partner →
            </a>
          </div>
        </div>
      </section>

      {/* Give $5 Get $5 Section */}
      <section className="py-20 px-4" id="referral">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
              Give $5. Get $5. 🎁
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Know someone thinking about moving abroad? Send them
              Reloca and you both win.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 items-center mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#38b2ac] rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                🔗
              </div>
              <div className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Share</h3>
              <p className="text-gray-600">
                Send your unique referral link to a friend
              </p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-3xl text-[#38b2ac]">→</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38b2ac] rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                💰
              </div>
              <div className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                They Save
              </h3>
              <p className="text-gray-600">
                Your friend gets $5 off their full report (pays just $44)
              </p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-3xl text-[#38b2ac]">→</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38b2ac] rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                🎉
              </div>
              <div className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                You Earn
              </h3>
              <p className="text-gray-600">
                Get $5 cash (PayPal) or account credit
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#get-started"
              className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get My Referral Link
            </a>
          </div>
        </div>
      </section>

      {/* Creator Partner Program Section */}
      <section className="py-20 px-4 bg-gray-50" id="creator">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
              Creator Partner Program 🚀
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have an audience interested in relocation, travel, or expat life?
              Join our partner program and earn up to 30% commission on every sale —
              while your audience gets exclusive discounts.
            </p>
          </div>

          {/* Tiers — tiered discounts + commissions */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Micro */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                🌱
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-1">Micro</h3>
              <p className="text-sm text-gray-500 mb-4">1K – 20K followers</p>
              <div className="bg-[#fafaf9] rounded-xl p-4 mb-4">
                <div className="text-2xl font-bold text-[#38b2ac] mb-1">
                  10% off
                </div>
                <p className="text-xs text-gray-500">
                  Your audience pays $44 instead of $49
                </p>
              </div>
              <div className="text-sm font-semibold text-[#1a365d]">
                You earn{" "}
                <span className="text-[#38b2ac]">20% commission</span> per sale
              </div>
            </div>

            {/* Mid-Tier */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-2 border-[#38b2ac] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#38b2ac] text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                🔥
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-1">
                Mid-Tier
              </h3>
              <p className="text-sm text-gray-500 mb-4">20K – 80K followers</p>
              <div className="bg-[#fafaf9] rounded-xl p-4 mb-4">
                <div className="text-2xl font-bold text-[#38b2ac] mb-1">
                  15% off
                </div>
                <p className="text-xs text-gray-500">
                  Your audience pays $42 instead of $49
                </p>
              </div>
              <div className="text-sm font-semibold text-[#1a365d]">
                You earn{" "}
                <span className="text-[#38b2ac]">25% commission</span> per sale
              </div>
            </div>

            {/* Top-Tier */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                👑
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-1">
                Top-Tier
              </h3>
              <p className="text-sm text-gray-500 mb-4">80K+ followers</p>
              <div className="bg-[#fafaf9] rounded-xl p-4 mb-4">
                <div className="text-2xl font-bold text-[#38b2ac] mb-1">
                  25% off
                </div>
                <p className="text-xs text-gray-500">
                  Your audience pays $37 instead of $49
                </p>
              </div>
              <div className="text-sm font-semibold text-[#1a365d]">
                You earn{" "}
                <span className="text-[#38b2ac]">30% commission</span> per sale
              </div>
            </div>
          </div>

          {/* Creator Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <h3 className="text-xl font-bold text-[#1a365d] mb-6 text-center">
              What Every Partner Gets
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Free full report to try yourself",
                "Unique referral link + coupon code",
                "60-day cookie attribution",
                "Real-time dashboard",
                "Monthly payouts via PayPal or bank transfer",
                "Marketing assets & support",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#38b2ac] text-lg">✅</span>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#apply"
              className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Apply to Partner Program
            </a>
          </div>
        </div>
      </section>

      {/* How It Works (Creator) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-12">
            How the Partner Program Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔗",
                title: "Unique Link + Code",
                desc: "Get your personal referral link and custom coupon code to share with your audience.",
              },
              {
                icon: "🍪",
                title: "60-Day Attribution",
                desc: "When someone clicks your link, a 60-day cookie tracks them — even if they buy weeks later.",
              },
              {
                icon: "📊",
                title: "Real-Time Dashboard",
                desc: "Track clicks, conversions, and earnings in your partner dashboard. Updated in real time.",
              },
              {
                icon: "💸",
                title: "Monthly Payouts",
                desc: "Get paid monthly via PayPal or bank transfer. Minimum payout: $50.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-[#1a365d] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-bold text-[#1a365d] pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#38b2ac] shrink-0 transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="py-20 px-4" id="apply">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-4">
            Apply to the Partner Program
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Tell us about yourself and your audience. We review applications
            within 48 hours.
          </p>

          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Application Received!
              </h3>
              <p className="text-green-700">
                We&apos;ll review your application and get back to you within 48
                hours. Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1a365d] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a365d] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1a365d] mb-1">
                    Platform *
                  </label>
                  <select
                    required
                    value={formData.platform}
                    onChange={(e) =>
                      setFormData({ ...formData, platform: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm bg-white"
                  >
                    <option value="">Select platform</option>
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="blog">Blog / Website</option>
                    <option value="podcast">Podcast</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a365d] mb-1">
                    Handle / URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.handle}
                    onChange={(e) =>
                      setFormData({ ...formData, handle: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm"
                    placeholder="@yourhandle or URL"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a365d] mb-1">
                  Audience Size *
                </label>
                <select
                  required
                  value={formData.audienceSize}
                  onChange={(e) =>
                    setFormData({ ...formData, audienceSize: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm bg-white"
                >
                  <option value="">Select audience size</option>
                  <option value="1k-20k">1K – 20K followers</option>
                  <option value="20k-80k">20K – 80K followers</option>
                  <option value="80k+">80K+ followers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a365d] mb-1">
                  Brief Pitch
                </label>
                <textarea
                  value={formData.pitch}
                  onChange={(e) =>
                    setFormData({ ...formData, pitch: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-sm resize-none"
                  placeholder="Why would you be a great partner? Tell us about your audience and content..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full bg-[#1a365d] hover:bg-[#2a4a7f] text-white font-semibold px-8 py-4 rounded-xl transition text-lg disabled:opacity-50"
              >
                {formStatus === "loading" ? "Submitting..." : "Submit Application"}
              </button>
              {formStatus === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Get Started Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-[#38b2ac] to-[#1a365d] text-white"
        id="get-started"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-lg mb-2 opacity-90">
            Join our growing partner community
          </p>
          <p className="text-sm mb-10 opacity-75">
            Whether you share with one friend or a million followers, there&apos;s a
            program for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold mb-3">Referral Program</h3>
              <p className="text-sm mb-4 opacity-75">
                Perfect for happy customers
              </p>
              
              {!referralData ? (
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={referralEmail}
                    onChange={(e) => setReferralEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                    required
                  />
                  <button 
                    onClick={generateReferralLink}
                    disabled={referralStatus === "loading"}
                    className="bg-white text-[#38b2ac] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full disabled:opacity-50"
                  >
                    {referralStatus === "loading" ? "Generating..." : "Get Referral Link"}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3 text-sm">
                    <div className="font-medium mb-2">Your Referral Link:</div>
                    <div className="bg-white/30 rounded px-2 py-1 text-xs break-all">
                      {referralData.referralLink}
                    </div>
                  </div>
                  <button
                    onClick={copyReferralLink}
                    className="bg-white text-[#38b2ac] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
                  >
                    📋 Copy Link
                  </button>
                  <button
                    onClick={() => setReferralData(null)}
                    className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition w-full"
                  >
                    Generate New Link
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold mb-3">Creator Program</h3>
              <p className="text-sm mb-4 opacity-75">
                For content creators & influencers
              </p>
              <a
                href="#apply"
                className="block bg-white text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/reloca-logo.png"
              alt="Reloca.ai"
              className="h-14 w-auto brightness-0 invert mx-auto mb-4"
            />
            <p className="text-blue-300">AI-powered relocation intelligence</p>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <p className="text-blue-300 text-sm">
              © 2026 Reloca.ai — Global Relocation Intelligence
            </p>
          </div>
          <FooterDisclaimer />
        </div>
      </footer>
    </div>
  );
}