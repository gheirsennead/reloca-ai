import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/auth/login");

  // Get user record from our users table
  const { data: dbUser } = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("email", user.email)
    .single();

  // Get user's reports
  const { data: reports } = await supabaseAdmin
    .from("reports")
    .select("id, report_type, created_at, country_recommendations")
    .eq("user_id", dbUser?.id)
    .order("created_at", { ascending: false });

  const isProSubscriber = dbUser?.subscription_status === "active";
  const hasPaidReport = reports?.some((r) => r.report_type === "paid");

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{user.email}</span>
            <form action="/api/auth/signout" method="POST">
              <button className="text-xs text-gray-400 hover:text-gray-600 transition">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#1a365d] mb-6">Your Dashboard</h1>

        {/* Subscription Status */}
        {isProSubscriber ? (
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] rounded-2xl p-6 mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold">Reloca Pro</span>
                <span className="bg-[#38b2ac] text-white text-xs font-bold px-2 py-0.5 rounded-full">Active</span>
              </div>
              <p className="text-blue-200 text-sm">Monthly updates, market alerts, and priority support.</p>
            </div>
            <a
              href="/api/create-portal-session"
              className="text-sm text-[#38b2ac] hover:text-white font-medium transition whitespace-nowrap"
            >
              Manage subscription →
            </a>
          </div>
        ) : hasPaidReport ? (
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] rounded-2xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold mb-1">Keep Your Report Fresh with Reloca Pro</h3>
                <p className="text-blue-200 text-sm">
                  Visa rules, costs, and markets change fast. Get monthly updated reports, market alerts, and priority support for just <span className="text-[#38b2ac] font-bold">$29/mo</span>.
                </p>
              </div>
              <ProSubscribeButton />
            </div>
          </div>
        ) : null}

        {/* Reports */}
        <h2 className="text-lg font-bold text-[#1a365d] mb-4">Your Reports</h2>
        {reports && reports.length > 0 ? (
          <div className="space-y-3">
            {reports.map((report) => {
              const countries = report.country_recommendations?.slice(0, 3) || [];
              const flags: Record<string, string> = {
                brazil: "🇧🇷", argentina: "🇦🇷", paraguay: "🇵🇾", uruguay: "🇺🇾",
                panama: "🇵🇦", "el salvador": "🇸🇻", "costa rica": "🇨🇷",
                mexico: "🇲🇽", colombia: "🇨🇴", ecuador: "🇪🇨", chile: "🇨🇱", peru: "🇵🇪",
              };
              return (
                <Link
                  key={report.id}
                  href={`/report/${report.id}`}
                  className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-[#1a365d]">
                          Relocation Report
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          report.report_type === "paid"
                            ? "bg-[#38b2ac]/10 text-[#38b2ac]"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {report.report_type === "paid" ? "Full" : "Free"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(report.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {countries.map((c: { country: string; score: number }) => (
                        <span key={c.country} className="text-xl" title={c.country}>
                          {flags[c.country.toLowerCase()] || "🌎"}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <p className="text-gray-400 text-sm mb-4">No reports yet.</p>
            <Link
              href="/plan"
              className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Create Your First Plan →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

// Client component for the subscribe button
function ProSubscribeButton() {
  return (
    <form action="/api/create-pro-subscription" method="POST">
      <button
        type="submit"
        className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition whitespace-nowrap"
      >
        Get Reloca Pro — $29/mo
      </button>
    </form>
  );
}
