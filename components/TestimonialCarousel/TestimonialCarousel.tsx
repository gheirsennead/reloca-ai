"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  role: string;
  featured?: boolean;
  handle?: string;
  handleUrl?: string;
  platform?: string;
  rating?: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I visited 60+ countries before finding the right one for me. For years I lived with a backpack, a laptop, and the belief that 'the next country' would be the one. $49 versus the months I spent researching all of this by hand.",
    name: "Hispanic Nomad",
    location: "60+ countries visited",
    role: "Digital Nomad & Content Creator",
    featured: true,
    handle: "@hispanicnomad",
    handleUrl: "https://x.com/hispanicnomad",
    platform: "𝕏",
  },
  {
    quote: "I was overwhelmed trying to figure out which country to move to. Reloca matched me with Portugal in 10 minutes — and the visa roadmap alone saved me weeks of research.",
    name: "Sarah K.",
    location: "🇺🇸 Texas → 🇵🇹 Portugal",
    role: "Remote Worker",
  },
  {
    quote: "The tax optimization section was eye-opening. I didn't even know about Portugal's IFICI regime. This report paid for itself 100x over.",
    name: "Marcus T.",
    location: "🇬🇧 London → 🇪🇸 Spain",
    role: "Entrepreneur",
  },
  {
    quote: "We were deciding between 5 countries for retirement. Reloca narrowed it down to 3 with detailed cost breakdowns and safety scores. Worth every penny.",
    name: "David & Linda R.",
    location: "🇨🇦 Canada → 🇪🇨 Ecuador",
    role: "Retirees",
  },
  {
    quote: "As a digital nomad, I needed to understand visa and tax implications across multiple countries. Reloca gave me a clear comparison I couldn't find anywhere else.",
    name: "Johan S.",
    location: "🇸🇪 Sweden → 🇹🇭 Thailand",
    role: "Digital Nomad",
  },
];

export function TestimonialCarousel({ autoPlay = true, interval = 5000 }: { autoPlay?: boolean; interval?: number }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);

  // Fetch real feedback from API
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('/api/feedback');
        if (response.ok) {
          const { feedback } = await response.json();
          if (feedback && feedback.length > 0) {
            // Transform API feedback to testimonial format
            const realTestimonials: Testimonial[] = feedback.map((f: any) => ({
              quote: f.comment || "This report provided exactly what I needed to make my relocation decision.",
              name: f.display_name || "Anonymous",
              location: "Verified User",
              role: "Reloca.ai User",
              rating: f.rating,
            }));
            
            // Mix real testimonials with fallback ones for variety
            const mixed = [...realTestimonials.slice(0, 3), ...TESTIMONIALS.slice(0, 2)];
            setTestimonials(mixed);
          }
        }
      } catch (error) {
        console.log('Using fallback testimonials');
        // Keep default testimonials on error
      }
    };

    fetchFeedback();
  }, []);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo, testimonials.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo, testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const t = testimonials[current];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative">
        {/* Testimonial content */}
        <div className={`p-8 sm:p-10 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, j) => (
              <svg 
                key={j} 
                className={`w-5 h-5 ${j < (t.rating || 5) ? 'text-amber-400' : 'text-gray-200'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 min-h-[80px]">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-[#1a365d]">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.role} · {t.location}
                {t.handleUrl && (
                  <> · <a href={t.handleUrl} target="_blank" rel="noopener noreferrer" className="text-[#38b2ac] hover:underline">{t.platform} {t.handle}</a></>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#1a365d] transition"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#1a365d] transition"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 pb-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-[#38b2ac] w-6" : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
