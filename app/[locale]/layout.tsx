import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ReferralTracker } from "@/components/ReferralTracker";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { OrganizationSchema } from "@/components/StructuredData";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Reloca.ai — The Must-Start App for Moving Abroad",
  description:
    "The must-start app for anyone considering moving abroad. AI-powered relocation intelligence across 23+ countries on 3 continents. Built by expats, for expats. 🌍",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: ["relocation", "moving abroad", "expat", "visa", "cost of living", "relocate to Portugal", "relocate to Spain", "relocate to Thailand", "relocate to Dubai", "relocate to Brazil", "relocate to Mexico", "digital nomad", "retirement abroad", "international relocation", "tax optimization expat"],
  alternates: {
    canonical: "https://reloca.ai",
  },
  openGraph: {
    title: "Reloca.ai — The Must-Start App for Moving Abroad",
    description:
      "The must-start app for anyone considering moving abroad. AI-powered relocation intelligence across 23+ countries on 3 continents. Built by expats, for expats. 🌍",
    type: "website",
    url: "https://reloca.ai",
    siteName: "Reloca.ai",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reloca.ai — The Must-Start App for Moving Abroad",
    description: "AI-powered relocation intelligence across 23+ countries. Find your perfect country match in 10 minutes.",
    images: ["/images/og-image.png"],
  },
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html className={inter.variable} lang={locale}>
      <head>
        <OrganizationSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Reloca.ai",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web",
              "description": "AI-powered relocation intelligence platform covering 23+ countries across 3 continents. Get personalized country matches, visa roadmaps, tax optimization, and relocation timelines.",
              "offers": {
                "@type": "Offer",
                "price": "49",
                "priceCurrency": "USD",
                "description": "Full personalized relocation report"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "12"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fafaf9] text-[#1a365d]">
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>
            <ReferralTracker />
          </Suspense>
          <AnalyticsProvider />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}