"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface PartnerInfo {
  name: string;
  handle: string;
  platform: string;
  code: string;
  discount: number;
}

export function ReferralTracker() {
  const searchParams = useSearchParams();
  const [partner, setPartner] = useState<PartnerInfo | null>(null);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      // Store referral code in localStorage + cookie (60-day expiry)
      localStorage.setItem("reloca_ref", ref);
      localStorage.setItem("reloca_ref_ts", Date.now().toString());
      
      // Set cookie for server-side access (60 days)
      const expires = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `reloca_ref=${ref}; expires=${expires}; path=/; SameSite=Lax`;

      // Track the click
      fetch("/api/referral-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: ref, url: window.location.href }),
      }).catch(() => {});

      // Fetch partner info for co-branded banner
      fetch(`/api/partner-info?ref=${ref}`)
        .then(r => r.json())
        .then(data => {
          if (data.partner) setPartner(data.partner);
        })
        .catch(() => {});
    } else {
      // Check if we have a stored ref (returning visitor)
      const storedRef = localStorage.getItem("reloca_ref");
      if (storedRef) {
        fetch(`/api/partner-info?ref=${storedRef}`)
          .then(r => r.json())
          .then(data => {
            if (data.partner) setPartner(data.partner);
          })
          .catch(() => {});
      }
    }
  }, [searchParams]);

  if (!partner) return null;

  const platformIcon = partner.platform === 'twitter' ? '𝕏' : partner.platform === 'instagram' ? '📸' : partner.platform === 'youtube' ? '▶️' : '🌐';

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white py-2 px-4 text-center text-sm">
      <span className="opacity-90">
        {platformIcon} Recommended by <strong>{partner.name}</strong>
        {partner.handle && <span className="opacity-70"> ({partner.handle})</span>}
      </span>
      {partner.discount > 0 && (
        <span className="ml-2 bg-[#38b2ac] text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {partner.discount}% OFF with code {partner.code}
        </span>
      )}
    </div>
  );
}
