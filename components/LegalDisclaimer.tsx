import Link from "next/link";

export function FooterDisclaimer() {
  return (
    <div className="mt-6 pt-6 border-t border-blue-800">
      <p className="text-xs text-blue-400/80 leading-relaxed text-center max-w-3xl mx-auto italic">
        Reloca.ai provides AI-generated relocation guidance for informational purposes only. We are not immigration attorneys, tax advisors, or licensed legal professionals. Our reports do not constitute legal, financial, or immigration advice. Always consult qualified professionals before making relocation decisions.{" "}
        <Link href="/terms" className="text-blue-300 hover:text-white underline">
          Full Terms
        </Link>
      </p>
    </div>
  );
}

export function QuizDisclaimer() {
  return (
    <p className="text-xs text-gray-400 text-center mt-4 max-w-md mx-auto leading-relaxed">
      By completing this assessment, you acknowledge that results are AI-generated guidance, not professional legal or immigration advice.{" "}
      <Link href="/terms" className="text-[#38b2ac] hover:underline">Terms</Link>
      {" · "}
      <Link href="/privacy" className="text-[#38b2ac] hover:underline">Privacy</Link>
    </p>
  );
}
