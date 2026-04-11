"use client";

import { useEffect, useRef } from "react";
import { createChart, LineSeries } from "lightweight-charts";

export default function StockChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 300,
      layout: {
        background: { color: "#020617" },
        textColor: "#ffffff",
      },
    });

    const lineSeries = chart.addSeries(LineSeries);

    lineSeries.setData(data);

    return () => chart.remove();
  }, [data]);

  return <div ref={chartRef} className="w-full mt-6" />;
}