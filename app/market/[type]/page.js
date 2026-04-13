"use client";

import { useParams } from "next/navigation";
import BigChart from "../../../components/BigChart";
import { useEffect, useState } from "react";

export default function MarketDetail() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const symbol =
        params.type === "nifty" ? "^NSEI" : "^BSESN";

      const res = await fetch(
        `http://localhost:5000/api/stocks/chart/${symbol}`
      );

      const chartData = await res.json();
      setData(chartData);
    };

    fetchData();
  }, [params]);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2">
        {params.type.toUpperCase()}
      </h1>

      {/* PRICE */}
      <p className="text-xl text-gray-400 mb-6">
        Live Market Chart
      </p>

      {/* CHART */}
      <div className="bg-white/5 p-6 rounded-2xl">
        <BigChart data={data} />
      </div>

      {/* FILTERS */}
      <div className="flex gap-4 mt-6">
        {["1D", "1W", "1M", "1Y"].map((t) => (
          <button
            key={t}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {t}
          </button>
        ))}
      </div>

    </div>
  );
}