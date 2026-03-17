"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  country_from: string | null;
  country_to: string | null;
  rating: number | null;
  featured: boolean;
}

export function DynamicTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/api/testimonials?limit=5")
      .then((res) => res.json())
      .then((data) => {
        if (data.testimonials?.length > 0) {
          setTestimonials(data.testimonials);
        }
      })
      .catch(() => {}); // Fail silently — static testimonials still show
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <div className="space-y-3">
      {testimonials.map((t) => (
        <div key={t.id}>
          <p className="text-xs text-gray-600 italic">
            &ldquo;{t.text}&rdquo;
          </p>
          <p className="text-xs text-gray-400">
            — {t.name}
            {t.country_from && t.country_to && `, ${t.country_from} → ${t.country_to}`}
          </p>
        </div>
      ))}
    </div>
  );
}
