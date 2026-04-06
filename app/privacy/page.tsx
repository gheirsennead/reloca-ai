import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy — Reloca.ai",
  description: "Learn how Reloca.ai collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy — Reloca.ai",
    description: "Learn how Reloca.ai collects, uses, and protects your personal information.",
    url: "https://reloca.ai/privacy",
    type: "website",
    siteName: "Reloca.ai",
    images: [{ url: "https://reloca.ai/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Reloca.ai",
    description: "Learn how Reloca.ai collects, uses, and protects your personal information.",
    images: ["https://reloca.ai/images/og-image.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <BreadcrumbSchema items={[{ name: "Privacy Policy", url: "https://reloca.ai/privacy" }]} />
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: February 16, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">1. Who We Are</h2>
            <p>Reloca.ai ("we," "us," "our") is an AI-powered relocation planning platform an AI-powered relocation intelligence platform. Our website is located at https://reloca.ai.</p>
            <p><strong>Contact:</strong> <a href="mailto:privacy@reloca.ai" className="text-[#38b2ac] hover:underline">privacy@reloca.ai</a></p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">2. Information We Collect</h2>
            
            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Questionnaire responses:</strong> When you use our relocation planning tool, you answer up to 36 questions about your personal situation, including family composition, budget, destination preferences, employment status, and lifestyle priorities.</li>
              <li><strong>Email address:</strong> Required to receive your free summary report or purchase a full report.</li>
              <li><strong>Payment information:</strong> When purchasing a report ($49) or subscribing to Reloca Pro ($49/month), payment is processed securely through Stripe. We do not store your credit card number, CVV, or full card details on our servers.</li>
              <li><strong>Account information:</strong> If you create an account (Reloca Pro subscribers), we store your name, email, and subscription status.</li>
              <li><strong>Communications:</strong> If you contact us via email or support channels, we retain those messages.</li>
            </ul>

            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Usage data:</strong> Pages visited, time spent on site, questionnaire completion rates, and button clicks (collected via privacy-friendly analytics).</li>
              <li><strong>Device information:</strong> Browser type, operating system, screen resolution, and language settings.</li>
              <li><strong>IP address:</strong> Collected for security, fraud prevention, and approximate geographic location (country-level only).</li>
              <li><strong>Cookies:</strong> We use essential cookies for site functionality and analytics cookies to improve the service (see Section 7).</li>
            </ul>

            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">2.3 Information We Do NOT Collect</h3>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>We do not collect government ID numbers, passport numbers, or social security numbers.</li>
              <li>We do not collect health or medical records.</li>
              <li>We do not require real names in questionnaire responses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Generate your relocation report:</strong> Your questionnaire responses are processed by our AI to produce personalized relocation recommendations.</li>
              <li><strong>Deliver your report:</strong> Via email and/or your account dashboard.</li>
              <li><strong>Process payments:</strong> Through Stripe for report purchases and subscriptions.</li>
              <li><strong>Send service emails:</strong> Report delivery, purchase confirmations, and subscription management.</li>
              <li><strong>Send marketing emails:</strong> If you opt in, we may send weekly relocation insights, Relocation Pulse intelligence updates (subscribers), and product updates. You can unsubscribe at any time.</li>
              <li><strong>Improve our service:</strong> Aggregated, anonymized questionnaire data helps us improve report quality, add new countries, and refine recommendations.</li>
              <li><strong>Country demand tracking:</strong> If you request a country we don't yet cover, we track aggregate demand (not linked to your identity) to prioritize expansion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">4. How We Share Your Information</h2>
            <p><strong>We do not sell your personal information. Ever.</strong></p>
            <p>We may share information with:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Stripe:</strong> Payment processing. Stripe's privacy policy applies to payment data: <a href="https://stripe.com/privacy" className="text-[#38b2ac] hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></li>
              <li><strong>AI providers (Anthropic):</strong> Your questionnaire responses are sent to Anthropic's Claude API to generate your report. Anthropic does not use API inputs to train their models. See: <a href="https://www.anthropic.com/privacy" className="text-[#38b2ac] hover:underline" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/privacy</a></li>
              <li><strong>Email service provider (Resend/SendGrid):</strong> To deliver emails. They process your email address under our instructions.</li>
              <li><strong>Analytics provider:</strong> Privacy-friendly analytics (no personal data shared).</li>
              <li><strong>Reloca.ai:</strong> As our founding partner, Reloca.ai may receive aggregated, anonymized market insights (e.g., "40% of users are interested in Brazil"). Your individual questionnaire responses are NOT shared with Reloca.ai unless you explicitly request a consultation or membership.</li>
              <li><strong>Legal requirements:</strong> If required by law, court order, or government request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">5. Data Retention</h2>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Questionnaire responses:</strong> Retained for as long as your account is active or for 2 years from your last report generation, whichever is longer.</li>
              <li><strong>Email address:</strong> Until you unsubscribe and request deletion.</li>
              <li><strong>Payment records:</strong> Retained as required by financial regulations (typically 7 years for tax/accounting purposes).</li>
              <li><strong>Account data (Reloca Pro):</strong> Until you cancel your subscription and request deletion.</li>
              <li><strong>Analytics data:</strong> Aggregated and anonymized; retained indefinitely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Access</strong> your personal data we hold.</li>
              <li><strong>Correct</strong> inaccurate information.</li>
              <li><strong>Delete</strong> your personal data ("right to be forgotten").</li>
              <li><strong>Export</strong> your data in a portable format.</li>
              <li><strong>Opt out</strong> of marketing emails at any time (link in every email).</li>
              <li><strong>Withdraw consent</strong> for data processing where consent is the legal basis.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:privacy@reloca.ai" className="text-[#38b2ac] hover:underline">privacy@reloca.ai</a>. We will respond within 30 days.</p>

            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">For EU/EEA Residents (GDPR)</h3>
            <p>Our legal basis for processing your data is:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Contract performance:</strong> Generating reports you've purchased.</li>
              <li><strong>Legitimate interest:</strong> Improving our service, fraud prevention, analytics.</li>
              <li><strong>Consent:</strong> Marketing emails and non-essential cookies.</li>
            </ul>
            <p className="mt-2">You have the right to lodge a complaint with your local data protection authority.</p>

            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">For California Residents (CCPA)</h3>
            <p>You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information. We do not sell personal information.</p>

            <h3 className="text-base font-semibold text-[#1a365d] mt-6 mb-2">For Brazilian Residents (LGPD)</h3>
            <p>Under Brazil's Lei Geral de Proteção de Dados, you have similar rights to access, correct, delete, and port your data. Contact: <a href="mailto:privacy@reloca.ai" className="text-[#38b2ac] hover:underline">privacy@reloca.ai</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">7. Cookies</h2>
            <p><strong>Essential cookies:</strong> Required for site functionality (session management, payment processing). Cannot be disabled.</p>
            <p><strong>Analytics cookies:</strong> Help us understand how visitors use the site. No personal data is tracked. You can opt out via your browser settings or our cookie banner.</p>
            <p>We do not use advertising cookies or third-party tracking pixels.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">8. Data Security</h2>
            <p>We implement industry-standard security measures:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>All data transmitted via HTTPS/TLS encryption.</li>
              <li>Payment processing handled by PCI-compliant Stripe.</li>
              <li>Database access restricted and encrypted.</li>
              <li>Regular security reviews.</li>
            </ul>
            <p className="mt-2">No system is 100% secure. If we discover a data breach affecting your personal information, we will notify you within 72 hours as required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">9. International Data Transfers</h2>
            <p>Your data may be processed in the United States (where our hosting and AI providers are located) and Brazil (where our team operates). We ensure appropriate safeguards are in place for international transfers in compliance with applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">10. Children's Privacy</h2>
            <p>Reloca.ai is not directed at children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, contact us at <a href="mailto:privacy@reloca.ai" className="text-[#38b2ac] hover:underline">privacy@reloca.ai</a> and we will delete it.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">11. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of material changes via email or a prominent notice on our website. The "Last Updated" date at the top reflects the most recent revision.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a365d] mt-8 mb-3">12. Contact Us</h2>
            <p>For any privacy-related questions or requests:</p>
            <p><strong>Email:</strong> <a href="mailto:privacy@reloca.ai" className="text-[#38b2ac] hover:underline">privacy@reloca.ai</a><br />
            <strong>Website:</strong> https://reloca.ai</p>
          </section>
        </div>
      </main>
    </div>
  );
}