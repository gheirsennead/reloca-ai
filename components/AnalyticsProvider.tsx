'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views on route changes
    analytics.trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    // Initialize analytics on mount
    if (typeof window !== 'undefined') {
      // Track geolocation
      analytics.trackGeolocation();

      // Track scroll depth
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if ([25, 50, 75, 90].includes(scrollPercent)) {
            analytics.trackFeatureUsage('page', 'scroll', { depth: scrollPercent });
          }
        }
      };

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Date.now() - startTime;
        analytics.trackFeatureUsage('page', 'time_spent', { seconds: Math.round(timeSpent / 1000) });
      };

      window.addEventListener('scroll', trackScroll);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, []);

  return null;
}