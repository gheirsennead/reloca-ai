"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    import("@/lib/auth-client").then(({ createSupabaseBrowserClient }) => {
      const supabase = createSupabaseBrowserClient();
      supabase.auth.getSession().then(({ data: { session } }) => {
        setIsLoggedIn(!!session);
      });
    });
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-14 w-auto" />
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/#how-it-works" className="text-gray-600 hover:text-[#1a365d] transition">How It Works</Link>
          <Link href="/about" className="text-gray-600 hover:text-[#1a365d] transition">About</Link>
          <Link href="/#pricing" className="text-gray-600 hover:text-[#1a365d] transition">Pricing</Link>
          <Link href="/compare" className="text-gray-600 hover:text-[#1a365d] transition">Compare</Link>
          <Link href="/partners" className="text-gray-600 hover:text-[#1a365d] transition">Partners</Link>
          <Link href="/#faq" className="text-gray-600 hover:text-[#1a365d] transition">FAQ</Link>
          {isLoggedIn ? (
            <Link href="/dashboard" className="text-gray-600 hover:text-[#1a365d] transition font-medium">Dashboard</Link>
          ) : (
            <Link href="/auth/login" className="text-gray-600 hover:text-[#1a365d] transition">Login</Link>
          )}
          <Link href="/plan-36" className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition">Start Planning</Link>
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-[#1a365d] transition"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">How It Works</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">About</Link>
          <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Pricing</Link>
          <Link href="/compare" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Compare</Link>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Partners</Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">FAQ</Link>
          {isLoggedIn ? (
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm font-medium">Dashboard</Link>
          ) : (
            <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1a365d] transition text-sm">Login</Link>
          )}
          <Link href="/plan-36" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-3 rounded-lg text-sm font-medium transition">Start Planning</Link>
        </div>
      )}
    </header>
  );
}
