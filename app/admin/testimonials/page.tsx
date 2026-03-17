"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  country_from: string | null;
  country_to: string | null;
  rating: number | null;
  email: string | null;
  source: string;
  approved: boolean;
  featured: boolean;
  created_at: string;
  approved_at: string | null;
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");
  const [apiKey, setApiKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    text: "",
    country_from: "",
    country_to: "",
    rating: 5,
    email: "",
  });

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  async function fetchTestimonials() {
    if (!apiKey) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/testimonials?status=${filter}`, { headers });
      const data = await res.json();
      if (data.testimonials) setTestimonials(data.testimonials);
    } catch {
      alert("Failed to fetch testimonials");
    }
    setLoading(false);
  }

  useEffect(() => {
    const stored = localStorage.getItem("reloca_admin_key");
    if (stored) setApiKey(stored);
  }, []);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("reloca_admin_key", apiKey);
      fetchTestimonials();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey, filter]);

  async function handleApprove(id: string, approved: boolean) {
    await fetch("/api/admin/testimonials", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id, approved }),
    });
    fetchTestimonials();
  }

  async function handleFeature(id: string, featured: boolean) {
    await fetch("/api/admin/testimonials", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id, featured }),
    });
    fetchTestimonials();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    await fetch("/api/admin/testimonials", {
      method: "DELETE",
      headers,
      body: JSON.stringify({ id }),
    });
    fetchTestimonials();
  }

  async function handleAdd() {
    if (!newTestimonial.name || !newTestimonial.text) {
      alert("Name and text are required");
      return;
    }
    await fetch("/api/admin/testimonials", {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...newTestimonial,
        source: "manual",
        approved: true,
      }),
    });
    setNewTestimonial({ name: "", text: "", country_from: "", country_to: "", rating: 5, email: "" });
    setShowAddForm(false);
    fetchTestimonials();
  }

  if (!apiKey) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Admin Login</h1>
          <input
            type="password"
            placeholder="Admin API Key"
            className="w-full border rounded-lg px-4 py-2 mb-4"
            onKeyDown={(e) => {
              if (e.key === "Enter") setApiKey((e.target as HTMLInputElement).value);
            }}
          />
          <button
            onClick={() => {
              const input = document.querySelector("input") as HTMLInputElement;
              setApiKey(input.value);
            }}
            className="w-full bg-[#38b2ac] text-white py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
            <p className="text-sm text-gray-500">Manage customer testimonials displayed on the site</p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/analytics" className="text-sm text-gray-500 hover:text-gray-700">
              ← Analytics
            </Link>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              + Add Testimonial
            </button>
          </div>
        </div>

        {/* Add form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-4">Add New Testimonial</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Name (e.g. 'Sarah M.')"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <input
                placeholder="Email (optional)"
                value={newTestimonial.email}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, email: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <input
                placeholder="From (e.g. 'USA')"
                value={newTestimonial.country_from}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, country_from: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <input
                placeholder="To (e.g. 'Portugal')"
                value={newTestimonial.country_to}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, country_to: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <textarea
              placeholder="Testimonial text..."
              value={newTestimonial.text}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
              rows={3}
              className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating:</span>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNewTestimonial({ ...newTestimonial, rating: n })}
                    className={`text-lg ${n <= newTestimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <div className="flex-1" />
              <button onClick={() => setShowAddForm(false)} className="text-gray-500 text-sm">
                Cancel
              </button>
              <button onClick={handleAdd} className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Add & Approve
              </button>
            </div>
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4">
          {(["all", "pending", "approved"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                filter === f
                  ? "bg-[#1a365d] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === "pending" && testimonials.filter((t) => !t.approved).length > 0 && (
                <span className="ml-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {testimonials.filter((t) => !t.approved).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Testimonials list */}
        {loading ? (
          <p className="text-gray-500 text-center py-12">Loading...</p>
        ) : testimonials.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <p className="text-gray-400 text-lg mb-2">No testimonials yet</p>
            <p className="text-gray-400 text-sm">Add your first testimonial or wait for customers to submit them</p>
          </div>
        ) : (
          <div className="space-y-3">
            {testimonials.map((t) => (
              <div key={t.id} className={`bg-white rounded-xl shadow p-5 border-l-4 ${t.approved ? "border-green-400" : "border-yellow-400"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-800 italic mb-2">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="font-medium text-gray-700">{t.name}</span>
                      {t.country_from && t.country_to && (
                        <span>{t.country_from} → {t.country_to}</span>
                      )}
                      {t.rating && (
                        <span className="text-yellow-400">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</span>
                      )}
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-400">{t.source}</span>
                      {t.featured && <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">Featured</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleApprove(t.id, !t.approved)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        t.approved
                          ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700"
                          : "bg-yellow-100 text-yellow-700 hover:bg-green-100 hover:text-green-700"
                      }`}
                    >
                      {t.approved ? "✓ Approved" : "Approve"}
                    </button>
                    <button
                      onClick={() => handleFeature(t.id, !t.featured)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        t.featured
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-500 hover:bg-purple-50"
                      }`}
                    >
                      {t.featured ? "★ Featured" : "Feature"}
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
