import type { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ country?: string; score?: string; ref?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const country = params.country || 'PT';
  const score = params.score || '85';
  
  const countryNames: Record<string, string> = {
    'BR': 'Brazil', 'AR': 'Argentina', 'PY': 'Paraguay', 'UY': 'Uruguay',
    'PA': 'Panama', 'SV': 'El Salvador', 'CR': 'Costa Rica', 'MX': 'Mexico',
    'CO': 'Colombia', 'EC': 'Ecuador', 'CL': 'Chile', 'PT': 'Portugal',
    'ES': 'Spain', 'IT': 'Italy', 'GR': 'Greece', 'MT': 'Malta',
    'CY': 'Cyprus', 'AD': 'Andorra', 'SG': 'Singapore', 'AE': 'Dubai',
    'TH': 'Thailand', 'MY': 'Malaysia', 'EE': 'Estonia',
  };
  
  const name = countryNames[country.toUpperCase()] || country;
  const title = `I'm a ${score}% match for ${name}! | Reloca.ai`;
  const description = `Find your perfect country match — take the free 5-minute quiz at Reloca.ai`;
  const ogImageUrl = `https://reloca.ai/api/og?country=${country}&score=${score}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      type: 'website',
      siteName: 'Reloca.ai',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
