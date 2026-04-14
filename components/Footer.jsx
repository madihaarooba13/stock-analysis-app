"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-white">MarketMind</h2>
          <p className="text-sm text-gray-400 mt-2">
            Smart stock insights. Clean UI. Real-time feel.
          </p>

          {/* SOCIAL / DEV */}
          <p className="text-xs text-gray-500 mt-4">
            Built by Madiha
          </p>
          <a
            href="https://github.com/madihaarooba13"
            target="_blank"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            GitHub →
          </a>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <p className="text-white font-medium mb-1">Navigation</p>
          <Link href="/" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            Home
          </Link>
          <Link href="/markets" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            Markets
          </Link>
          <Link href="/watchlist" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            Watchlist
          </Link>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <p className="text-white font-medium mb-1">Legal</p>
          <Link href="/about" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white transition-all duration-300 hover:translate-x-1">
            Privacy Policy
          </Link>
        </div>

        {/* EXTRA / FEATURE */}
        <div className="text-sm text-gray-400">
          <p className="text-white font-medium mb-1">Stay Updated</p>

          {/* INPUT */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-3 py-2 rounded-lg bg-white/10 text-sm outline-none focus:ring-2 focus:ring-white/20"
          />

          <button className="mt-3 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-all duration-300">
            Subscribe
          </button>

          {/* MARKET STATUS */}
          <p className="mt-4 text-green-400 text-xs">
            ● Market Status: Open
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} MarketMind. All rights reserved.
      </div>
    </footer>
  );
}