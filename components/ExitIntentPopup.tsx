"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && !dismissed) {
      // Check if already shown this session
      if (sessionStorage.getItem("exit_popup_shown")) return;
      setShow(true);
      sessionStorage.setItem("exit_popup_shown", "1");
    }
  }, [dismissed]);

  useEffect(() => {
    // Only show after 5 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  // Also show on mobile after 30s of inactivity + scroll up
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      // If user scrolls back up significantly and has been on page
      if (currentY < lastScrollY - 200 && currentY > 300 && !dismissed && !sessionStorage.getItem("exit_popup_shown")) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setShow(true);
          sessionStorage.setItem("exit_popup_shown", "1");
        }, 500);
      }
      lastScrollY = currentY;
    };

    // Only add mobile scroll listener after 15s
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setDismissed(true)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="text-4xl mb-4">🌎</div>
          <h2 className="text-2xl font-bold text-[#1a365d] mb-3">
            Before you go...
          </h2>
          <p className="text-gray-600 mb-4">
            Take our <strong>free 10-minute quiz</strong> and discover which of our 23+ countries is the best fit for your lifestyle, budget, and goals.
          </p>

          {/* Quick testimonial */}
          <div className="bg-gray-50 rounded-xl p-3 mb-4 text-left">
            <p className="text-xs text-gray-600 italic">&ldquo;$49 versus the months I spent researching all of this by hand.&rdquo;</p>
            <p className="text-xs text-gray-400 mt-1">— Hispanic Nomad, 60+ countries visited</p>
          </div>

          <div className="bg-[#38b2ac]/10 rounded-xl p-3 mb-5">
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-[#1a365d]">23+</div>
                <div className="text-xs text-gray-500">Countries</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <div className="text-xl font-bold text-[#1a365d]">10 min</div>
                <div className="text-xs text-gray-500">Quiz</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <div className="text-xl font-bold text-[#38b2ac]">Free</div>
                <div className="text-xs text-gray-500">Results</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">🛡️</div>
                <div className="text-xs text-gray-500">Guarantee</div>
              </div>
            </div>
          </div>

          <Link
            href="/plan-36"
            onClick={() => setDismissed(true)}
            className="block w-full bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold py-4 rounded-xl transition text-lg shadow-lg shadow-[#38b2ac]/25 mb-2"
          >
            Take the Free Quiz →
          </Link>
          <p className="text-xs text-gray-400 mb-2">No credit card needed. Free preview included.</p>
          <button
            onClick={() => setDismissed(true)}
            className="text-sm text-gray-400 hover:text-gray-600 transition"
          >
            No thanks, I&apos;ll keep browsing
          </button>
        </div>
      </div>
    </div>
  );
}
