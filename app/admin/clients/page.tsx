"use client";

import { useState, useEffect } from "react";

interface UserRecord {
  id: string;
  email: string;
  created_at: string;
  paid: boolean;
  payment_date: string | null;
  questionnaire_completed: boolean;
  report_generated: boolean;
  stripe_customer_id: string | null;
  membership_tier: string | null;
  membership_status: string | null;
  subscription_plan: string | null;
  target_countries: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  reports: { id: string; report_type: string; created_at: string; country_recommendations: any; pdf_url: string | null }[];
  emails_scheduled: number;
  emails_sent: number;
}

interface Stats {
  total: number;
  paid: number;
  free: number;
  with_report: number;
}

export default function AdminClients() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, paid: 0, free: 0, with_report: 0 });
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "paid" | "free">("all");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/clients", {
        headers: { "x-admin-password": secret },
      });
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setUsers(data.users || []);
      setStats(data.stats || { total: 0, paid: 0, free: 0, with_report: 0 });
      setAuthenticated(true);
    } catch {
      alert("Invalid password");
    }
    setLoading(false);
  };

  const filteredUsers = users.filter((u) => {
    if (filter === "paid") return u.paid;
    if (filter === "free") return !u.paid;
    return true;
  });

  const formatDate = (d: string | null) => {
    if (!d) return "—";
    return new Date(d).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit",
    });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">🔐 Admin — Clients</h1>
          <input
            type="password"
            placeholder="Admin password"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchData()}
          />
          <button
            onClick={fetchData}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">👥 Clients & Prospects</h1>
          <button onClick={fetchData} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
            🔄 Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-5">
            <div className="text-sm text-gray-500">Total Contacts</div>
            <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="text-sm text-gray-500">💰 Paying Clients</div>
            <div className="text-3xl font-bold text-green-600">{stats.paid}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="text-sm text-gray-500">🆓 Free Prospects</div>
            <div className="text-3xl font-bold text-blue-600">{stats.free}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="text-sm text-gray-500">📄 Reports Generated</div>
            <div className="text-3xl font-bold text-purple-600">{stats.with_report}</div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6">
          {(["all", "paid", "free"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-50"
              }`}
            >
              {f === "all" ? `All (${stats.total})` : f === "paid" ? `Paid (${stats.paid})` : `Free (${stats.free})`}
            </button>
          ))}
        </div>

        {/* Client list */}
        <div className="space-y-3">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow">
              <div
                className="p-5 cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${user.paid ? "bg-green-500" : "bg-gray-300"}`} />
                    <div>
                      <div className="font-semibold text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">Joined {formatDate(user.created_at)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {user.paid && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        💰 PAID
                      </span>
                    )}
                    {user.report_generated && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        📄 Report
                      </span>
                    )}
                    {user.emails_sent > 0 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        ✉️ {user.emails_sent}/{user.emails_scheduled}
                      </span>
                    )}
                    <span className="text-gray-400">{expandedUser === user.id ? "▲" : "▼"}</span>
                  </div>
                </div>
              </div>

              {expandedUser === user.id && (
                <div className="border-t px-5 py-4 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">📋 Details</h4>
                      <div className="text-sm space-y-1 text-gray-600">
                        <div><strong>Email:</strong> {user.email}</div>
                        <div><strong>Signed up:</strong> {formatDate(user.created_at)}</div>
                        <div><strong>Paid:</strong> {user.paid ? `Yes — ${formatDate(user.payment_date)}` : "No"}</div>
                        <div><strong>Quiz completed:</strong> {user.questionnaire_completed ? "✅" : "❌"}</div>
                        <div><strong>Report generated:</strong> {user.report_generated ? "✅" : "❌"}</div>
                        {user.stripe_customer_id && <div><strong>Stripe:</strong> {user.stripe_customer_id}</div>}
                        {user.target_countries && <div><strong>Countries:</strong> {user.target_countries}</div>}
                        {user.membership_tier && <div><strong>Membership:</strong> {user.membership_tier} ({user.membership_status})</div>}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">📊 Tracking</h4>
                      <div className="text-sm space-y-1 text-gray-600">
                        {user.utm_source && <div><strong>Source:</strong> {user.utm_source}</div>}
                        {user.utm_medium && <div><strong>Medium:</strong> {user.utm_medium}</div>}
                        {user.utm_campaign && <div><strong>Campaign:</strong> {user.utm_campaign}</div>}
                        {!user.utm_source && !user.utm_medium && <div className="text-gray-400">No UTM data</div>}
                        <div><strong>Emails:</strong> {user.emails_sent} sent / {user.emails_scheduled} scheduled</div>
                      </div>
                      {user.reports.length > 0 && (
                        <>
                          <h4 className="font-semibold text-gray-700 mt-4 mb-2">📄 Reports</h4>
                          <div className="text-sm space-y-1 text-gray-600">
                            {user.reports.map((r) => (
                              <div key={r.id} className="flex justify-between">
                                <span>{r.report_type === "paid" ? "💰 Paid" : "🆓 Free"} — {formatDate(r.created_at)}</span>
                                {r.pdf_url && <a href={r.pdf_url} target="_blank" className="text-blue-600 hover:underline">PDF ↗</a>}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredUsers.length === 0 && (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              No {filter === "all" ? "" : filter} clients yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
