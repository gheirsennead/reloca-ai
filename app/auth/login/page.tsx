"use client";

import { useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const supabase = createSupabaseBrowserClient();
      const redirectTo = new URL("/auth/callback", window.location.origin).toString();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) {
        setErrorMsg(error.message);
        setStatus("error");
      } else {
        setStatus("sent");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  async function handleResend() {
    setStatus("loading");
    try {
      const supabase = createSupabaseBrowserClient();
      const redirectTo = new URL("/auth/callback", window.location.origin).toString();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) {
        setErrorMsg(error.message);
        setStatus("error");
      } else {
        setStatus("sent");
      }
    } catch {
      setErrorMsg("Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {status === "sent" ? (
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h1 className="text-2xl font-bold text-[#1a365d] mb-3">Check Your Email</h1>
              <p className="text-gray-500 text-sm mb-2">
                We sent a magic link to <strong className="text-[#1a365d]">{email}</strong>
              </p>
              <p className="text-gray-400 text-xs mb-6">
                Click the link in the email to sign in. It expires in 1 hour.
              </p>
              <button
                onClick={handleResend}
                className="text-sm text-[#38b2ac] hover:text-[#2c9a94] font-medium transition"
              >
                Didn&apos;t get it? Resend →
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-[#1a365d] mb-2">Welcome Back</h1>
                <p className="text-gray-500 text-sm">Enter your email to access your dashboard and reports.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent"
                  required
                  autoFocus
                />
                {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Magic Link"}
                </button>
              </form>
              <p className="text-center text-xs text-gray-400 mt-6">
                No password needed. We&apos;ll email you a secure sign-in link.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
