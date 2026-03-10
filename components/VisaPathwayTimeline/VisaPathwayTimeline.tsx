"use client";

import { useState } from "react";

interface VisaStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  locked?: boolean;
}

interface VisaPathway {
  country: string;
  flag: string;
  visaName: string;
  totalTime: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  steps: VisaStep[];
}

const PATHWAYS: Record<string, VisaPathway> = {
  Portugal: { country: "Portugal", flag: "🇵🇹", visaName: "D7 Passive Income Visa", totalTime: "3-6 months", difficulty: "Easy", steps: [
    { step: 1, title: "Gather Documents", duration: "2-4 weeks", description: "Proof of income (€760+/month), criminal record, health insurance, NIF (tax number)" },
    { step: 2, title: "Open Portuguese Bank Account", duration: "1-2 weeks", description: "Required for the application. Can be done remotely with some banks." },
    { step: 3, title: "Submit Application at Consulate", duration: "1 day", description: "Apply at Portuguese consulate or through VFS Global." },
    { step: 4, title: "Wait for Approval", duration: "2-3 months", description: "Processing time varies. You'll receive a temporary visa to enter Portugal.", locked: true },
    { step: 5, title: "Arrive & Get Residence Permit", duration: "1-2 months", description: "Schedule appointment at AIMA for biometrics and residence card.", locked: true },
    { step: 6, title: "Path to Citizenship", duration: "After 5 years", description: "Apply for permanent residency or Portuguese citizenship.", locked: true },
  ]},
  Spain: { country: "Spain", flag: "🇪🇸", visaName: "Non-Lucrative Visa", totalTime: "3-6 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Prove Financial Means", duration: "1-2 weeks", description: "€28,800/year minimum (IPREM x4). Bank statements for last 12 months." },
    { step: 2, title: "Gather Documents", duration: "2-4 weeks", description: "Criminal record, medical certificate, private health insurance, proof of accommodation." },
    { step: 3, title: "Apply at Spanish Consulate", duration: "1 day", description: "Submit in person. Appointment required." },
    { step: 4, title: "Wait for Approval", duration: "1-3 months", description: "Processing at consulate. You cannot work in Spain on this visa.", locked: true },
    { step: 5, title: "Enter Spain & Get TIE Card", duration: "1 month", description: "Enter within 90 days. Apply for foreigner ID card (TIE) at police station.", locked: true },
    { step: 6, title: "Renew or Switch", duration: "After 1 year", description: "Renew annually or switch to work permit after residency.", locked: true },
  ]},
  Italy: { country: "Italy", flag: "🇮🇹", visaName: "Elective Residency Visa", totalTime: "3-6 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Prove Passive Income", duration: "1-2 weeks", description: "€31,000/year minimum for single applicant. Pension, investments, or rental income." },
    { step: 2, title: "Secure Housing", duration: "2-4 weeks", description: "Rental contract or property ownership proof in Italy required." },
    { step: 3, title: "Apply at Italian Consulate", duration: "1 day", description: "Submit application with all documents. Appointment needed." },
    { step: 4, title: "Wait for Approval", duration: "2-3 months", description: "Consulate processes application. May request additional documents.", locked: true },
    { step: 5, title: "Arrive & Register", duration: "2-4 weeks", description: "Register at local Questura within 8 days. Get permesso di soggiorno.", locked: true },
    { step: 6, title: "Flat Tax Option", duration: "Ongoing", description: "Apply for €100K flat tax regime for foreign income.", locked: true },
  ]},
  Greece: { country: "Greece", flag: "🇬🇷", visaName: "Golden Visa (Real Estate)", totalTime: "2-4 months", difficulty: "Easy", steps: [
    { step: 1, title: "Find Property (€250K+)", duration: "2-4 weeks", description: "Minimum €250K real estate investment (€500K in Athens/Thessaloniki)." },
    { step: 2, title: "Get Greek Tax Number (AFM)", duration: "1 week", description: "Apply at local tax office. Need passport and proof of address." },
    { step: 3, title: "Complete Purchase", duration: "2-4 weeks", description: "Sign contract, transfer funds, notarize deed.", locked: true },
    { step: 4, title: "Submit Residency Application", duration: "1 day", description: "Apply at Decentralized Administration office.", locked: true },
    { step: 5, title: "Receive 5-Year Permit", duration: "1-2 months", description: "Residence permit for you and family. Renewable as long as investment held.", locked: true },
  ]},
  Malta: { country: "Malta", flag: "🇲🇹", visaName: "Nomad Residence Permit", totalTime: "2-4 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Prove Remote Work", duration: "1 week", description: "Employment contract or freelance evidence. €2,700+/month income." },
    { step: 2, title: "Gather Documents", duration: "2 weeks", description: "Health insurance, criminal record, proof of accommodation in Malta." },
    { step: 3, title: "Apply Online", duration: "1 day", description: "Submit via Residency Malta Agency portal.", locked: true },
    { step: 4, title: "Approval & Visa", duration: "1-2 months", description: "Receive approval and collect residence permit.", locked: true },
    { step: 5, title: "Tax Registration", duration: "1-2 weeks", description: "Register for Maltese tax. 15% flat rate for HNWI programs.", locked: true },
  ]},
  Cyprus: { country: "Cyprus", flag: "🇨🇾", visaName: "Permanent Residency (F Category)", totalTime: "2-3 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Prove Secure Income", duration: "1 week", description: "€50,000+/year from abroad. Pension, dividends, or rental income." },
    { step: 2, title: "Open Cypriot Bank Account", duration: "1-2 weeks", description: "Deposit minimum €30,000 from abroad." },
    { step: 3, title: "Submit Application", duration: "1 day", description: "Apply at Civil Registry and Migration Department.", locked: true },
    { step: 4, title: "Receive Permit", duration: "1-2 months", description: "Fast-track available. Permanent residency for you and family.", locked: true },
    { step: 5, title: "Tax Benefits", duration: "Ongoing", description: "12.5% corporate tax. Non-dom status: 0% on dividends for 17 years.", locked: true },
  ]},
  Estonia: { country: "Estonia", flag: "🇪🇪", visaName: "Digital Nomad Visa", totalTime: "1-2 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Remote Income", duration: "1 week", description: "€3,504/month minimum. Employment contract or freelance proof." },
    { step: 2, title: "Apply Online", duration: "1 day", description: "Submit through Estonian e-Residency portal or embassy." },
    { step: 3, title: "Receive Visa", duration: "2-4 weeks", description: "Up to 1 year. Can work remotely from Estonia.", locked: true },
    { step: 4, title: "e-Residency (Optional)", duration: "2-4 weeks", description: "Digital identity for running EU business. €100 application fee.", locked: true },
    { step: 5, title: "Permanent Path", duration: "After 5 years", description: "Apply for long-term residency after continuous legal stay.", locked: true },
  ]},
  Andorra: { country: "Andorra", flag: "🇦🇩", visaName: "Passive Residency Permit", totalTime: "3-6 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Financial Requirements", duration: "1-2 weeks", description: "€50,000 deposit with Andorran Financial Authority. €350K+ investment or business." },
    { step: 2, title: "Health Insurance & Housing", duration: "2-4 weeks", description: "Private health insurance. Lease or purchase property in Andorra." },
    { step: 3, title: "Submit Application", duration: "1 day", description: "Apply at Government Immigration Office in Andorra la Vella.", locked: true },
    { step: 4, title: "Background Check", duration: "1-3 months", description: "Criminal record check and financial verification.", locked: true },
    { step: 5, title: "Receive Permit", duration: "1-2 weeks", description: "1-year renewable permit. Max 10% income tax.", locked: true },
  ]},
  Singapore: { country: "Singapore", flag: "🇸🇬", visaName: "EntrePass (Entrepreneur)", totalTime: "2-3 months", difficulty: "Hard", steps: [
    { step: 1, title: "Register Company (ACRA)", duration: "1-2 days", description: "Register business with Accounting and Corporate Regulatory Authority." },
    { step: 2, title: "Prepare Business Plan", duration: "2-4 weeks", description: "Detailed plan with funding proof. Must meet innovation/investment criteria." },
    { step: 3, title: "Submit EntrePass Application", duration: "1 day", description: "Apply online through Ministry of Manpower portal.", locked: true },
    { step: 4, title: "Assessment & Approval", duration: "4-8 weeks", description: "MOM evaluates business viability and applicant credentials.", locked: true },
    { step: 5, title: "Collect Pass & Start", duration: "1-2 weeks", description: "1-year pass. Renew by meeting employment and revenue milestones.", locked: true },
  ]},
  UAE: { country: "UAE", flag: "🇦🇪", visaName: "Golden Visa (10-Year)", totalTime: "2-4 weeks", difficulty: "Easy", steps: [
    { step: 1, title: "Check Eligibility", duration: "1 day", description: "Real estate ($545K+), entrepreneur, specialized talent, or outstanding student." },
    { step: 2, title: "Prepare Documents", duration: "1-2 weeks", description: "Passport, photos, proof of investment/income, health insurance." },
    { step: 3, title: "Submit via ICP Portal", duration: "1 day", description: "Apply through Federal Authority for Identity & Citizenship.", locked: true },
    { step: 4, title: "Medical & Emirates ID", duration: "1-2 weeks", description: "Complete medical fitness test and biometrics.", locked: true },
    { step: 5, title: "Visa Stamped", duration: "3-5 days", description: "10-year renewable residence visa. 0% income tax.", locked: true },
  ]},
  Thailand: { country: "Thailand", flag: "🇹🇭", visaName: "Thailand Elite Visa", totalTime: "1-3 months", difficulty: "Easy", steps: [
    { step: 1, title: "Choose Membership Tier", duration: "1 day", description: "5-year (฿600K), 10-year (฿1M), or 20-year (฿2M)." },
    { step: 2, title: "Submit Application Online", duration: "1-2 weeks", description: "Apply on Thailand Privilege website. Passport, photo, proof of funds." },
    { step: 3, title: "Background Check", duration: "2-4 weeks", description: "Thai Immigration runs verification.", locked: true },
    { step: 4, title: "Payment & Visa Issuance", duration: "1-2 weeks", description: "Pay membership fee. Receive approval letter.", locked: true },
    { step: 5, title: "Arrive & Activate", duration: "1 day", description: "VIP airport welcome. Elite visa stamped.", locked: true },
  ]},
  Malaysia: { country: "Malaysia", flag: "🇲🇾", visaName: "MM2H (My Second Home)", totalTime: "3-6 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Meet Financial Requirements", duration: "1-2 weeks", description: "RM1.5M liquid assets + RM40K/month offshore income (50+ age bracket)." },
    { step: 2, title: "Prepare Application", duration: "2-4 weeks", description: "Medical report, criminal record, bank statements, passport copies." },
    { step: 3, title: "Submit via Licensed Agent", duration: "1 day", description: "Must apply through MM2H-approved agency.", locked: true },
    { step: 4, title: "Conditional Approval", duration: "2-4 months", description: "Immigration Department Malaysia processes application.", locked: true },
    { step: 5, title: "Fixed Deposit & Visa", duration: "2-4 weeks", description: "Open fixed deposit (RM1M). Collect 5-year renewable social visit pass.", locked: true },
  ]},
  Brazil: { country: "Brazil", flag: "🇧🇷", visaName: "Digital Nomad Visa (VITEM XIV)", totalTime: "2-4 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Prove Remote Income", duration: "1 week", description: "Minimum $1,500/month from foreign employer or freelance work." },
    { step: 2, title: "Gather Documents", duration: "2-4 weeks", description: "Criminal record (apostilled), health insurance, employment proof, bank statements." },
    { step: 3, title: "Apply at Brazilian Consulate", duration: "1 day", description: "Submit in person with appointment.", locked: true },
    { step: 4, title: "Wait for Processing", duration: "1-3 months", description: "Consulate processes. May request interview.", locked: true },
    { step: 5, title: "Enter & Register", duration: "2-4 weeks", description: "Register at Federal Police within 90 days. Get CPF (tax ID).", locked: true },
  ]},
  Chile: { country: "Chile", flag: "🇨🇱", visaName: "Temporary Resident Visa", totalTime: "2-4 months", difficulty: "Moderate", steps: [
    { step: 1, title: "Gather Documents", duration: "2-3 weeks", description: "Criminal record, birth certificate, proof of income or employment (apostilled)." },
    { step: 2, title: "Apply at Chilean Consulate", duration: "1 day", description: "Submit application with all documents. Appointment required." },
    { step: 3, title: "Enter Chile", duration: "1 day", description: "Enter within 90 days of visa approval.", locked: true },
    { step: 4, title: "Register at PDI", duration: "2-4 weeks", description: "Register with Policía de Investigaciones within 30 days. Get RUN (tax ID).", locked: true },
    { step: 5, title: "Permanent Residency", duration: "After 1-2 years", description: "Apply after 1 year (work visa) or 2 years (other visas). Chile has a fast path.", locked: true },
  ]},
  Argentina: { country: "Argentina", flag: "🇦🇷", visaName: "Rentista Visa", totalTime: "2-4 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Passive Income", duration: "1 week", description: "Minimum ~$1,500/month from investments, pension, or rental income." },
    { step: 2, title: "Apply at Consulate", duration: "1 day", description: "Submit at Argentine consulate with apostilled documents." },
    { step: 3, title: "Enter Argentina", duration: "1 day", description: "Enter with visa and begin residency process.", locked: true },
    { step: 4, title: "DNI (National ID)", duration: "2-4 weeks", description: "Apply for DNI at RENAPER. Needed for daily life.", locked: true },
    { step: 5, title: "Citizenship (Fastest Path)", duration: "After 2 years", description: "Argentina offers citizenship after just 2 years of legal residency.", locked: true },
  ]},
  Uruguay: { country: "Uruguay", flag: "🇺🇾", visaName: "Residency Visa", totalTime: "3-6 months", difficulty: "Easy", steps: [
    { step: 1, title: "Gather Documents", duration: "2-4 weeks", description: "Criminal record, birth certificate (apostilled), proof of income." },
    { step: 2, title: "Enter Uruguay", duration: "1 day", description: "Enter as tourist. Begin residency application in-country." },
    { step: 3, title: "Apply at Dirección Nacional de Migración", duration: "1 day", description: "Submit residency application at immigration office in Montevideo.", locked: true },
    { step: 4, title: "Wait for Processing", duration: "2-6 months", description: "You can stay in Uruguay while application is processed.", locked: true },
    { step: 5, title: "Receive Cédula", duration: "1-2 weeks", description: "Get Uruguayan ID card. Access to banking, healthcare.", locked: true },
  ]},
  Paraguay: { country: "Paraguay", flag: "🇵🇾", visaName: "Permanent Residency", totalTime: "1-3 months", difficulty: "Easy", steps: [
    { step: 1, title: "Bank Deposit ($5,500)", duration: "1 week", description: "Deposit ~$5,500 in a Paraguayan bank account." },
    { step: 2, title: "Gather Documents", duration: "2-3 weeks", description: "Criminal record, birth certificate, police clearance (apostilled)." },
    { step: 3, title: "Submit at Migraciones", duration: "1 day", description: "Apply at General Directorate of Migration in Asunción.", locked: true },
    { step: 4, title: "Receive Permanent Residency", duration: "2-8 weeks", description: "One of the fastest permanent residency processes worldwide.", locked: true },
    { step: 5, title: "Cédula & Tax Benefits", duration: "1-2 weeks", description: "Get Paraguayan ID. 10% flat tax, territorial system.", locked: true },
  ]},
  Mexico: { country: "Mexico", flag: "🇲🇽", visaName: "Temporary Resident Visa", totalTime: "1-3 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Financial Solvency", duration: "1 day", description: "$2,500+/month income or $42,000+ in savings (12 months statements)." },
    { step: 2, title: "Consulate Interview", duration: "1-2 weeks", description: "Schedule appointment at Mexican consulate. Bring all documents." },
    { step: 3, title: "Enter Mexico", duration: "1 day", description: "Enter within 180 days of approval.", locked: true },
    { step: 4, title: "INM Card Exchange", duration: "2-4 weeks", description: "Visit local INM office within 30 days for resident card.", locked: true },
    { step: 5, title: "Permanent Residency", duration: "After 4 years", description: "Apply for permanent after 4 consecutive years.", locked: true },
  ]},
  Panama: { country: "Panama", flag: "🇵🇦", visaName: "Friendly Nations Visa", totalTime: "2-4 months", difficulty: "Easy", steps: [
    { step: 1, title: "Establish Economic Tie", duration: "1-2 weeks", description: "Open Panama bank account with $5,000+ OR get employment letter OR register business." },
    { step: 2, title: "Gather Documents", duration: "2-3 weeks", description: "Criminal record, health certificate, passport photos (apostilled)." },
    { step: 3, title: "Submit via Immigration Lawyer", duration: "1 day", description: "Lawyer-assisted application at National Immigration Service.", locked: true },
    { step: 4, title: "Receive Temporary Permit", duration: "1-3 months", description: "Provisional carnet issued quickly. Full processing takes longer.", locked: true },
    { step: 5, title: "Permanent Residency", duration: "After 2 years", description: "Convert to permanent. No minimum stay requirements.", locked: true },
  ]},
  "Costa Rica": { country: "Costa Rica", flag: "🇨🇷", visaName: "Pensionado Visa", totalTime: "3-6 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Monthly Income", duration: "1 week", description: "Minimum $1,000/month pension or retirement income." },
    { step: 2, title: "Gather Documents", duration: "2-4 weeks", description: "Criminal record, birth/marriage certificates, income proof (apostilled)." },
    { step: 3, title: "Submit at DGME", duration: "1 day", description: "Apply at General Directorate of Migration in San José.", locked: true },
    { step: 4, title: "Wait for Processing", duration: "3-6 months", description: "Can stay in Costa Rica while application processes.", locked: true },
    { step: 5, title: "CAJA Healthcare", duration: "After approval", description: "Mandatory enrollment in CAJA (public healthcare). ~$100/month.", locked: true },
  ]},
  "El Salvador": { country: "El Salvador", flag: "🇸🇻", visaName: "Bitcoin Freedom Visa", totalTime: "1-2 months", difficulty: "Easy", steps: [
    { step: 1, title: "Deposit 1 BTC", duration: "1 day", description: "Deposit 1 Bitcoin (or equivalent) to qualify for the freedom visa." },
    { step: 2, title: "Apply Online", duration: "1 day", description: "Submit application through El Salvador immigration portal." },
    { step: 3, title: "Background Check", duration: "2-4 weeks", description: "Standard security verification process.", locked: true },
    { step: 4, title: "Receive Residency", duration: "1-2 weeks", description: "Residency permit issued. 0% tax on foreign income.", locked: true },
    { step: 5, title: "Citizenship Path", duration: "After 5 years", description: "Apply for Salvadoran citizenship after 5 years.", locked: true },
  ]},
  Colombia: { country: "Colombia", flag: "🇨🇴", visaName: "Digital Nomad Visa", totalTime: "1-3 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Remote Income", duration: "1 week", description: "Minimum 3x Colombian minimum wage (~$900/month) from foreign source." },
    { step: 2, title: "Apply Online", duration: "1 day", description: "Submit through Colombian Ministry of Foreign Affairs visa portal." },
    { step: 3, title: "Upload Documents", duration: "1-2 weeks", description: "Employment contract, bank statements, health insurance, passport.", locked: true },
    { step: 4, title: "Visa Approval", duration: "2-4 weeks", description: "Digital visa issued. Valid for 2 years.", locked: true },
    { step: 5, title: "Register & Get Cédula", duration: "1-2 weeks", description: "Register at Migración Colombia. Get foreigner ID card.", locked: true },
  ]},
  Ecuador: { country: "Ecuador", flag: "🇪🇨", visaName: "Jubilado Visa (Retiree)", totalTime: "2-4 months", difficulty: "Easy", steps: [
    { step: 1, title: "Prove Pension Income", duration: "1 week", description: "Minimum $1,375/month pension or Social Security income." },
    { step: 2, title: "Gather Documents", duration: "2-4 weeks", description: "Criminal record, birth certificate, pension proof (apostilled + translated)." },
    { step: 3, title: "Apply at Ecuadorian Consulate", duration: "1 day", description: "Submit application with all required documents.", locked: true },
    { step: 4, title: "Enter & Register", duration: "1-2 months", description: "Enter Ecuador. Register at civil registry for cédula.", locked: true },
    { step: 5, title: "Retiree Benefits", duration: "Ongoing", description: "50% off flights, 50% off utilities, tax benefits. USD economy.", locked: true },
  ]},
};

const pathwayKeys = Object.keys(PATHWAYS);

export function VisaPathwayTimeline({ country: initialCountry }: { country?: string }) {
  const [selectedCountry, setSelectedCountry] = useState(initialCountry || "Portugal");
  const pathway = PATHWAYS[selectedCountry];
  if (!pathway) return null;

  const difficultyColor = pathway.difficulty === "Easy" ? "bg-green-100 text-green-700" : pathway.difficulty === "Moderate" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-lg font-bold">Visa Pathway Preview</h3>
            <p className="text-sm opacity-70">See the steps to get your visa</p>
          </div>
          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium border border-white/30 appearance-none cursor-pointer">
            {pathwayKeys.map(c => <option key={c} value={c} className="text-gray-900">{PATHWAYS[c].flag} {c}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <span className="text-sm opacity-90">{pathway.flag} {pathway.visaName}</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColor}`}>{pathway.difficulty}</span>
          <span className="text-xs opacity-70">⏱ {pathway.totalTime} total</span>
        </div>
      </div>

      <div className="p-6">
        <div className="relative">
          {pathway.steps.map((step, i) => (
            <div key={step.step} className="flex gap-4 mb-6 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${step.locked ? "bg-gray-100 text-gray-400" : "bg-[#38b2ac] text-white"}`}>
                  {step.locked ? "🔒" : step.step}
                </div>
                {i < pathway.steps.length - 1 && <div className={`w-0.5 flex-1 mt-2 ${step.locked ? "bg-gray-200" : "bg-[#38b2ac]/30"}`} />}
              </div>
              <div className={`flex-1 pb-2 ${step.locked ? "opacity-50" : ""}`}>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-[#1a365d] text-sm">{step.title}</h4>
                  <span className="text-xs text-gray-400">({step.duration})</span>
                </div>
                {step.locked ? (
                  <p className="text-xs text-gray-400 italic">Unlock full details in your personalized report</p>
                ) : (
                  <p className="text-sm text-gray-600">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-[#38b2ac]/5 to-[#1a365d]/5 text-center border-t border-gray-50">
        <p className="text-sm text-gray-600 mb-3">Get the complete visa roadmap with document checklists & timelines</p>
        <a href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition text-sm">
          Get My Full Visa Roadmap →
        </a>
      </div>
    </div>
  );
}
