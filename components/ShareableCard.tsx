"use client";

import { useState, useEffect } from 'react';

interface ShareableCardProps {
  country: string;
  score: number;
  reportId: string;
  userName?: string;
  reasons?: Array<{ icon: string; text: string }>;
}

const countryFlags: Record<string, string> = {
  'BRAZIL': '🇧🇷',
  'ARGENTINA': '🇦🇷', 
  'PARAGUAY': '🇵🇾',
  'URUGUAY': '🇺🇾',
  'PANAMA': '🇵🇦',
  'EL SALVADOR': '🇸🇻',
  'COSTA RICA': '🇨🇷',
  'MEXICO': '🇲🇽',
  'COLOMBIA': '🇨🇴',
  'ECUADOR': '🇪🇨',
  'CHILE': '🇨🇱',
  'PERU': '🇵🇪'
};

const defaultReasons = [
  { icon: '🏠', text: 'Great property market' },
  { icon: '💰', text: 'Affordable cost of living' },
  { icon: '🌎', text: 'Perfect for families' }
];

export function ShareableCard({ country, score, reportId, userName, reasons = defaultReasons }: ShareableCardProps) {
  const [showCard, setShowCard] = useState(false);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [showDiscountBanner, setShowDiscountBanner] = useState(false);
  const [isGeneratingDiscount, setIsGeneratingDiscount] = useState(false);
  
  const flag = countryFlags[country.toUpperCase()] || '🌎';
  const displayName = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  const header = userName ? `${userName}'s #1 Country Match` : 'My #1 Country Match';
  
  // Calculate ring animation
  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - score / 100);
  
  const shareUrl = `${window.location.origin}/plan?ref=${reportId}`;
  const shareText = `I just found out ${displayName} is my #1 country match with ${score}% compatibility! 🌎\n\nFind yours →`;

  const generateShareDiscount = async (platform: string) => {
    if (isGeneratingDiscount || discountCode) return; // Already generated or in progress
    
    setIsGeneratingDiscount(true);
    try {
      // Try to get user email from localStorage or URL params
      const userEmail = localStorage.getItem('userEmail') || 
                       new URLSearchParams(window.location.search).get('email') || 
                       'anonymous@reloca.ai';

      const response = await fetch('/api/generate-share-discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail,
          reportId,
          sharePlatform: platform
        })
      });

      const data = await response.json();
      
      if (data.success && data.couponCode) {
        setDiscountCode(data.couponCode);
        setShowDiscountBanner(true);
      }
    } catch (error) {
      console.error('Failed to generate discount:', error);
    } finally {
      setIsGeneratingDiscount(false);
    }
  };

  const handleShare = async (platform: string) => {
    // Generate discount for share actions (not for download)
    if (platform !== 'download') {
      await generateShareDiscount(platform);
    }

    switch (platform) {
      case 'copy':
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert('Link copied!');
        break;
        
      case 'twitter':
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        break;

      case 'facebook':
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        break;

      case 'linkedin':
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('My Relocation Match')}&summary=${encodeURIComponent(shareText)}`;
        window.open(linkedinUrl, '_blank', 'width=600,height=400');
        break;
        
      case 'whatsapp':
        const waUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
        window.open(waUrl, '_blank');
        break;
        
      case 'download':
        // Use html2canvas for image download
        if (typeof window !== 'undefined' && (window as any).html2canvas) {
          const card = document.getElementById('share-card');
          if (card) {
            try {
              const canvas = await (window as any).html2canvas(card, {
                scale: 2,
                backgroundColor: null,
                useCORS: true,
              });
              const link = document.createElement('a');
              link.download = `my-relocation-match-${displayName.toLowerCase()}.png`;
              link.href = canvas.toDataURL('image/png');
              link.click();
            } catch (err) {
              alert('Could not generate image. Try taking a screenshot!');
            }
          }
        }
        break;
    }
  };

  // Load html2canvas for image export
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        try {
          document.body.removeChild(script);
        } catch {
          // Script might have already been removed
        }
      };
    }
  }, []);

  if (!showCard) {
    return (
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2">🎉 Share Your Result!</h3>
        <p className="mb-4 opacity-90">Show your friends your perfect country match</p>
        <button
          onClick={() => setShowCard(true)}
          className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Create Shareable Card
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* The Shareable Card */}
      <div 
        id="share-card" 
        className="bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center max-w-md mx-auto shadow-xl"
      >
        <div className="text-sm uppercase tracking-wider opacity-90 mb-4">
          {header}
        </div>
        
        <div className="text-6xl mb-4">{flag}</div>
        <div className="text-3xl font-bold mb-6">{displayName}</div>
        
        {/* Score Ring */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
            />
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{score}%</span>
          </div>
        </div>
        <div className="text-sm opacity-75 mb-6">Compatibility Score</div>
        
        {/* Reasons */}
        <div className="space-y-2 mb-6">
          {reasons.slice(0, 3).map((reason, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-sm">
              <span className="text-xl">{reason.icon}</span>
              <span>{reason.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-lg font-semibold">
          Find yours → <strong>reloca.ai</strong>
        </div>
        
        {/* Branding */}
        <div className="mt-4 opacity-75 text-xs">
          Reloca.ai
        </div>
      </div>
      
      {/* Discount Banner */}
      {showDiscountBanner && discountCode && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white text-center">
          <div className="text-lg font-bold mb-2">🎉 You shared! Thanks for spreading the word!</div>
          <div className="text-sm mb-2">Use code <span className="font-mono text-lg bg-white/20 px-2 py-1 rounded">{discountCode}</span> for $10 off your report</div>
          <div className="text-xs opacity-90">Valid for one-time use on your report purchase</div>
        </div>
      )}
      
      {/* Share Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => handleShare('copy')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-gray-700 font-medium"
        >
          📋 Copy Link
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition font-medium"
        >
          𝕏 Share on X
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
        >
          📘 Facebook
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition font-medium"
        >
          💼 LinkedIn
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium"
        >
          💬 WhatsApp
        </button>
        <button
          onClick={() => handleShare('download')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium"
        >
          ⬇️ Save Image
        </button>
      </div>
      
      <div className="text-center">
        <button
          onClick={() => setShowCard(false)}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Hide card
        </button>
      </div>
    </div>
  );
}