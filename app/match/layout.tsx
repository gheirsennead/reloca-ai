import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Country Match | Reloca.ai',
  description: 'Find your perfect country match — take the free 5-minute quiz at Reloca.ai',
  openGraph: {
    title: 'Find Your Perfect Country Match | Reloca.ai',
    description: 'Take the free 5-minute quiz and discover where you should live abroad',
    images: [{ url: '/api/og?country=PT&score=85', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'Reloca.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Your Perfect Country Match | Reloca.ai',
    description: 'Take the free 5-minute quiz and discover where you should live abroad',
    images: ['/api/og?country=PT&score=85'],
  },
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
