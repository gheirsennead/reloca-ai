/**
 * Structured Data (JSON-LD) components for SEO and AI discoverability.
 * Schema.org markup for Organization, WebSite, Product, FAQ, Article, BreadcrumbList.
 */

// ─── Organization (site-wide) ───────────────────────────────────────────────
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reloca.ai",
    url: "https://reloca.ai",
    logo: "https://reloca.ai/images/reloca-logo.png",
    description:
      "AI-powered global relocation intelligence. Personalized relocation reports covering 23+ countries across 3 continents.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://reloca.ai",
      email: "support@reloca.ai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── WebSite + SearchAction (homepage only) ─────────────────────────────────
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reloca.ai",
    url: "https://reloca.ai",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Product (homepage + pages mentioning the $49 report) ───────────────────
export function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Reloca.ai Full Relocation Report",
    description:
      "Personalized AI-generated relocation intelligence report covering visa requirements, cost of living, tax implications, healthcare, and more for 23+ countries.",
    brand: {
      "@type": "Brand",
      name: "Reloca.ai",
    },
    offers: {
      "@type": "Offer",
      price: "49.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://reloca.ai/plan-36",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── FAQ Schema ─────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Article Schema (blog posts) ────────────────────────────────────────────
interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  slug,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Reloca.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Reloca.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://reloca.ai/images/reloca-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://reloca.ai/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── BreadcrumbList Schema ──────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://reloca.ai",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
