/**
 * Community Intelligence — Weekly
 * Source: Reddit JSON API (no auth needed for public subreddits)
 * Scrapes r/expats, r/digitalnomad, r/Brazil, r/argentina, r/uruguay, r/Paraguay
 */

import { db, logScrape, fetchWithRetry } from '../../lib/scraper-utils';

const SUBREDDITS = [
  { sub: 'expats', searchTerms: ['latin america', 'brazil', 'argentina', 'paraguay', 'uruguay', 'panama', 'el salvador'] },
  { sub: 'digitalnomad', searchTerms: ['brazil', 'argentina', 'medellin', 'mexico city', 'buenos aires', 'fortaleza'] },
  { sub: 'Brazil', searchTerms: ['expat', 'moving', 'relocate', 'visa', 'cost of living', 'safety'] },
  { sub: 'argentina', searchTerms: ['expat', 'moving', 'visa', 'bariloche', 'cost of living'] },
  { sub: 'uruguay', searchTerms: ['expat', 'moving', 'punta del este', 'montevideo'] },
  { sub: 'Paraguay', searchTerms: ['expat', 'moving', 'asuncion', 'tax', 'residency'] },
];

interface RedditPost {
  title: string;
  selftext: string;
  score: number;
  url: string;
  subreddit: string;
  created_utc: number;
  num_comments: number;
}

function detectCountry(text: string): string | null {
  const lower = text.toLowerCase();
  if (lower.includes('brazil') || lower.includes('brasil') || lower.includes('fortaleza') || lower.includes('são paulo') || lower.includes('rio de janeiro') || lower.includes('florianópolis')) return 'Brazil';
  if (lower.includes('argentina') || lower.includes('buenos aires') || lower.includes('bariloche') || lower.includes('mendoza')) return 'Argentina';
  if (lower.includes('paraguay') || lower.includes('asuncion') || lower.includes('asunción')) return 'Paraguay';
  if (lower.includes('uruguay') || lower.includes('montevideo') || lower.includes('punta del este')) return 'Uruguay';
  if (lower.includes('panama')) return 'Panama';
  if (lower.includes('el salvador')) return 'El Salvador';
  if (lower.includes('costa rica')) return 'Costa Rica';
  if (lower.includes('mexico') || lower.includes('méxico')) return 'Mexico';
  if (lower.includes('colombia') || lower.includes('medell')) return 'Colombia';
  if (lower.includes('ecuador') || lower.includes('quito')) return 'Ecuador';
  return null;
}

function detectTopic(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('visa') || lower.includes('residency') || lower.includes('residência')) return 'visa';
  if (lower.includes('cost') || lower.includes('budget') || lower.includes('expensive') || lower.includes('cheap') || lower.includes('salary')) return 'cost';
  if (lower.includes('safe') || lower.includes('danger') || lower.includes('crime') || lower.includes('security')) return 'safety';
  if (lower.includes('property') || lower.includes('rent') || lower.includes('apartment') || lower.includes('buy') || lower.includes('real estate')) return 'property';
  if (lower.includes('tax') || lower.includes('fiscal')) return 'tax';
  if (lower.includes('school') || lower.includes('education') || lower.includes('kid')) return 'education';
  if (lower.includes('health') || lower.includes('hospital') || lower.includes('doctor') || lower.includes('insurance')) return 'healthcare';
  if (lower.includes('bureaucra') || lower.includes('permit') || lower.includes('document')) return 'bureaucracy';
  return 'lifestyle';
}

function detectSentiment(text: string): string {
  const lower = text.toLowerCase();
  const positiveWords = ['love', 'great', 'amazing', 'wonderful', 'best', 'recommend', 'happy', 'beautiful', 'excellent', 'perfect', 'paradise'];
  const negativeWords = ['hate', 'terrible', 'worst', 'avoid', 'dangerous', 'scam', 'regret', 'horrible', 'nightmare', 'disappointed'];
  
  const posCount = positiveWords.filter(w => lower.includes(w)).length;
  const negCount = negativeWords.filter(w => lower.includes(w)).length;
  
  if (posCount > negCount) return 'positive';
  if (negCount > posCount) return 'negative';
  return 'neutral';
}

async function scrapeReddit(sub: string, searchTerm: string): Promise<RedditPost[]> {
  const url = `https://www.reddit.com/r/${sub}/search.json?q=${encodeURIComponent(searchTerm)}&sort=relevance&t=year&limit=10&restrict_sr=on`;
  
  try {
    const res = await fetchWithRetry(url);
    if (!res.ok) {
      logScrape('community', `Reddit ${sub} search "${searchTerm}" failed: ${res.status}`);
      return [];
    }
    const data = await res.json();
    return (data.data?.children || [])
      .map((c: any) => c.data)
      .filter((p: RedditPost) => p.score > 3 && p.num_comments > 1);
  } catch (e) {
    logScrape('community', `Reddit error: ${e}`);
    return [];
  }
}

async function scrapeCommunityIntel() {
  logScrape('community', 'Starting Reddit scrape...');

  // Clear old entries
  await db.from('community_intel').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  let totalInserted = 0;
  const seen = new Set<string>();

  for (const { sub, searchTerms } of SUBREDDITS) {
    for (const term of searchTerms) {
      const posts = await scrapeReddit(sub, term);
      
      const entries = posts
        .filter(p => !seen.has(p.url))
        .map(p => {
          seen.add(p.url);
          const combined = `${p.title} ${p.selftext}`;
          return {
            source: `reddit/r/${p.subreddit}`,
            country: detectCountry(combined),
            topic: detectTopic(combined),
            content_summary: `${p.title} (Score: ${p.score}, Comments: ${p.num_comments}). ${p.selftext?.slice(0, 300) || ''}`.trim(),
            sentiment: detectSentiment(combined),
            original_url: `https://reddit.com${p.url || ''}`,
          };
        })
        .filter(e => e.country); // Only keep if we can identify the country

      if (entries.length > 0) {
        const { error } = await db.from('community_intel').insert(entries);
        if (error) {
          logScrape('community', `DB error: ${error.message}`);
        } else {
          totalInserted += entries.length;
        }
      }

      // Rate limit Reddit
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  logScrape('community', `Done. ${totalInserted} community insights loaded.`);
  return { success: true, count: totalInserted };
}

export { scrapeCommunityIntel };

if (require.main === module) {
  scrapeCommunityIntel().then(r => console.log(JSON.stringify(r, null, 2)));
}
