'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

export function FrenchBlogTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Track French content engagement
    if (pathname.startsWith('/fr')) {
      analytics.trackFeatureUsage('french_content', 'page_view', {
        page: pathname,
        language: 'fr',
        content_type: pathname.includes('/blog/') ? 'blog_article' : 'landing_page'
      });

      // Track reading progress for blog articles
      if (pathname.includes('/fr/blog/') && pathname !== '/fr/blog') {
        let readingProgress = 0;
        let hasStartedReading = false;
        
        const trackReading = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          );
          
          // Mark as started reading after 10% scroll
          if (scrollPercent >= 10 && !hasStartedReading) {
            hasStartedReading = true;
            analytics.trackFeatureUsage('french_content', 'reading_start', {
              article: pathname,
              language: 'fr'
            });
          }
          
          // Track reading milestones
          if (scrollPercent > readingProgress) {
            readingProgress = scrollPercent;
            if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
              analytics.trackFeatureUsage('french_content', 'reading_progress', {
                article: pathname,
                language: 'fr',
                progress: scrollPercent
              });
            }
          }
        };

        // Track article completion
        const trackCompletion = () => {
          if (readingProgress >= 75) {
            analytics.trackFeatureUsage('french_content', 'article_complete', {
              article: pathname,
              language: 'fr',
              max_progress: readingProgress
            });
          }
        };

        window.addEventListener('scroll', trackReading);
        window.addEventListener('beforeunload', trackCompletion);

        return () => {
          window.removeEventListener('scroll', trackReading);
          window.removeEventListener('beforeunload', trackCompletion);
        };
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Track French newsletter signups
    const handleNewsletterClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.textContent === "S'abonner" || target.closest('form')) {
        analytics.trackFeatureUsage('french_content', 'newsletter_click', {
          page: pathname,
          language: 'fr'
        });
      }
    };

    // Track French CTA clicks
    const handleCTAClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = (target as HTMLAnchorElement).href || target.closest('a')?.href;
      
      if (href && (
        href.includes('/fr/plan-36') ||
        target.textContent?.includes('rapport') ||
        target.textContent?.includes('Créer') ||
        target.textContent?.includes('Obtenir')
      )) {
        analytics.trackFeatureUsage('french_content', 'cta_click', {
          page: pathname,
          language: 'fr',
          cta_text: target.textContent,
          destination: href
        });
      }
    };

    document.addEventListener('click', handleNewsletterClick);
    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleNewsletterClick);
      document.removeEventListener('click', handleCTAClick);
    };
  }, [pathname]);

  return null;
}