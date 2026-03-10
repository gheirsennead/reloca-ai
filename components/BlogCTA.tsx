import Link from 'next/link';

interface BlogCTAProps {
  country: string;
}

export function BlogCTA({ country }: BlogCTAProps) {
  return (
    <div className="my-10 bg-gradient-to-br from-[#38b2ac]/10 to-[#1a365d]/10 border border-[#38b2ac]/20 rounded-2xl p-8 text-center">
      <h3 className="text-xl font-bold text-[#1a365d] mb-2">
        Want a Personalized {country} Relocation Plan?
      </h3>
      <p className="text-gray-600 mb-5 max-w-lg mx-auto">
        Our AI analyzes your specific situation — income, family, goals — and creates a customized
        tax optimization and relocation roadmap in minutes.
      </p>
      <Link
        href="/plan-36"
        className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
      >
        Take the Free Quiz →
      </Link>
    </div>
  );
}
