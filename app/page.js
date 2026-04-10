"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStock = async (symbol) => {
    try {
      setLoading(true);

      const res = await fetch(`http://localhost:5000/api/stocks/${symbol}`);
      const data = await res.json();

      setPrice(data.price || "Not Found");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setPrice("Error");
      setLoading(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <Navbar onSearch={fetchStock} />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Image */}
        <Image
          src="/stock.jpg"
          alt="stock"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay (adaptive) */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center px-4 -mt-10">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
            Analyze Stocks <br /> Smarter 📈
          </h1>

          <p className=" text-white mb-6 text-sm sm:text-base md:text-lg opacity-90">
            Real-time insights. Better decisions.
          </p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:scale-105 active:scale-95">
            Start Exploring 🚀
          </button>

        </div>

      </section>

      {/* Result Section */}
      <section className="w-full flex flex-col items-center justify-center mt-20 px-4">

        <h1 className="text-3xl font-bold mb-6">
          Welcome to MarketMind 🚀
        </h1>

        {loading && <p className="text-blue-500 dark:text-blue-400">Loading...</p>}

        {price && (
          <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
            <h2 className="text-xl font-semibold">Stock Price</h2>
            <p className="text-2xl text-green-600 dark:text-green-400 mt-2">
              ₹ {price}
            </p>
          </div>
        )}

      </section>

    </div>
  );
}