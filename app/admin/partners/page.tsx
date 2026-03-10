"use client";

import { useState, useEffect } from "react";

interface Application {
  id: string;
  name: string;
  email: string;
  platform: string;
  handle: string;
  audience_size: string;
  pitch: string | null;
  status: string;
  created_at: string;
  notes: string | null;
}

const TIERS: Record<string, string> = {
  "1k-20k": "🌱 Micro — 10% off, 20% commission",
  "20k-80k": "🔥 Mid — 15% off, 25% commission",
  "80k+": "👑 Top — 25% off, 30% commission",
};

export default function AdminPartners() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState("");

  async function fetchApplications() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/partners?secret=${encodeURIComponent(secret)}`);
      const data = await res.json();
      if (data.error) {
        setActionMsg(data.error);
        return;
      }
      setApplications(data.applications || []);
      setAuthenticated(true);
    } catch {
      setActionMsg("Failed to load applications");
    } finally {
      setLoading(false);
    }
  }

  async function approvePartner(id: string) {
    setActionMsg("Approving...");
    try {
      const res = await fetch("/api/approve-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationId: id, secret }),
      });
      const data = await res.json();
      if (data.success) {
        setActionMsg(`✅ Approved! Code: ${data.referralCode} | Link: ${data.referralLink}`);
        fetchApplications(); // refresh
      } else {
        setActionMsg(`❌ ${data.error || "Failed to approve"}`);
      }
    } catch {
      setActionMsg("❌ Error approving partner");
    }
  }

  async function rejectPartner(id: string) {
    setActionMsg("Rejecting...");
    try {
      const res = await fetch(`/api/admin/partners`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationId: id, secret, action: "reject" }),
      });
      const data = await res.json();
      if (data.success) {
        setActionMsg("Rejected.");
        fetchApplications();
      }
    } catch {
      setActionMsg("❌ Error");
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">
          <h1 className="text-2xl font-bold text-[#1a365d] mb-4">Partner Admin</h1>
          <p className="text-gray-500 mb-6 text-sm">Enter admin secret to continue</p>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchApplications()}
            placeholder="Admin secret"
            className="w-full border rounded-lg px-4 py-3 mb-4 text-sm"
          />
          <button
            onClick={fetchApplications}
            disabled={loading || !secret}
            className="w-full bg-[#1a365d] text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          {actionMsg && <p className="text-red-500 text-sm mt-3">{actionMsg}</p>}
        </div>
      </div>
    );
  }

  const pending = applications.filter((a) => a.status === "pending");
  const approved = applications.filter((a) => a.status === "approved");
  const rejected = applications.filter((a) => a.status === "rejected");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1a365d]">Partner Applications</h1>
          <button onClick={fetchApplications} className="text-sm text-[#38b2ac] hover:underline">
            ↻ Refresh
          </button>
        </div>

        {actionMsg && (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 mb-6 text-sm">
            {actionMsg}
          </div>
        )}

        {/* Pending */}
        <h2 className="text-xl font-semibold text-[#1a365d] mb-4">
          ⏳ Pending ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="text-gray-400 mb-8">No pending applications</p>
        ) : (
          <div className="space-y-4 mb-8">
            {pending.map((app) => (
              <div key={app.id} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-[#1a365d]">{app.name}</h3>
                    <p className="text-gray-500 text-sm">{app.email}</p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>📱 {app.platform}</span>
                      <span>🔗 {app.handle}</span>
                      <span>👥 {app.audience_size}</span>
                    </div>
                    {app.pitch && (
                      <p className="mt-2 text-sm text-gray-500 italic">"{app.pitch}"</p>
                    )}
                    <p className="mt-1 text-xs text-gray-400">
                      {TIERS[app.audience_size] || app.audience_size} • Applied{" "}
                      {new Date(app.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => approvePartner(app.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => rejectPartner(app.id)}
                      className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      ✗ Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Approved */}
        <h2 className="text-xl font-semibold text-[#1a365d] mb-4">
          ✅ Approved ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <p className="text-gray-400 mb-8">No approved partners yet</p>
        ) : (
          <div className="space-y-3 mb-8">
            {approved.map((app) => {
              let notes: any = {};
              try { notes = JSON.parse(app.notes || "{}"); } catch {}
              return (
                <div key={app.id} className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#1a365d]">{app.name}</span>
                      <span className="text-gray-400 text-sm ml-2">{app.email}</span>
                      <span className="text-gray-400 text-sm ml-2">• {app.platform}</span>
                    </div>
                    <div className="text-right text-sm">
                      {notes.referral_code && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-mono font-bold">
                          {notes.referral_code}
                        </span>
                      )}
                      {notes.discount_percent && (
                        <span className="text-gray-400 ml-2">
                          {notes.discount_percent}% off / {notes.commission_percent}% comm
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Rejected */}
        {rejected.length > 0 && (
          <>
            <h2 className="text-xl font-semibold text-gray-400 mb-4">
              ✗ Rejected ({rejected.length})
            </h2>
            <div className="space-y-2 mb-8">
              {rejected.map((app) => (
                <div key={app.id} className="bg-gray-100 rounded-lg p-4 text-sm text-gray-500">
                  {app.name} — {app.email} — {app.platform}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
