// "use client";

// import { useEffect, useRef } from "react";
// import { createChart, LineSeries } from "lightweight-charts";
// export default function StockChart({ data }) {
//   const chartContainerRef = useRef(null);
//   const chartRef = useRef(null);
//   const seriesRef = useRef(null);

//   // ✅ chart ek baar create hoga
//   useEffect(() => {
//     const chart = createChart(chartContainerRef.current, {
//       width: chartContainerRef.current.clientWidth,
//       height: 300,
//       layout: {
//         background: { color: "#020617" },
//         textColor: "#ffffff",
//       },
//     });

//   const lineSeries = chart.addSeries(LineSeries);

//     chartRef.current = chart;
//     seriesRef.current = lineSeries;

//     return () => chart.remove();
//   }, []);

//   // ✅ sirf data update hoga
//   useEffect(() => {
//     if (!seriesRef.current) return;

//     const cleanData = Array.isArray(data)
//       ? data.filter((item) => item && item.time && item.value)
//       : [];

//     seriesRef.current.setData(cleanData);
//   }, [data]);

//   return <div ref={chartContainerRef} className="w-full mt-6" />;
// }

"use client";

import { useEffect, useRef, memo } from "react";
import { createChart, LineSeries } from "lightweight-charts";

function StockChart({ data }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  // ✅ CREATE CHART ONCE
//   useEffect(() => {
//     const chart = createChart(chartContainerRef.current, {
//   width: chartContainerRef.current.clientWidth,
//   height: 300,

//   layout: {
//     background: { color: "#020617" },
//     textColor: "#ffffff",
//   },

//   grid: {
//     vertLines: { color: "#1f2937" },
//     horzLines: { color: "#1f2937" },
//   },

//   // ✅ YAHAN ADD KAR
//   crosshair: {
//     mode: 1,
//   },
// });

//     const lineSeries = chart.addSeries(LineSeries, {
//       color: "#3b82f6",
//       lineWidth: 2,
//     });

//     chartRef.current = chart;
//     seriesRef.current = lineSeries;

//     // 🔥 RESIZE FIX
//     const handleResize = () => {
//       chart.applyOptions({
//         width: chartContainerRef.current.clientWidth,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       chart.remove();
//     };
//   }, []);


useEffect(() => {
  const chart = createChart(chartContainerRef.current, {
    width: chartContainerRef.current.clientWidth,
    height: 300,
    layout: {
      background: { color: "#020617" },
      textColor: "#ffffff",
    },
    grid: {
      vertLines: { color: "#1f2937" },
      horzLines: { color: "#1f2937" },
    },
    crosshair: {
      mode: 1,
    },
  });

  const lineSeries = chart.addSeries(LineSeries, {
    color: "#3b82f6",
    lineWidth: 2,
  });

  chartRef.current = chart;
  seriesRef.current = lineSeries;

  // 🔥 TOOLTIP START
  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.background = "#111";
  tooltip.style.padding = "6px 10px";
  tooltip.style.borderRadius = "6px";
  tooltip.style.color = "#fff";
  tooltip.style.fontSize = "12px";
  tooltip.style.display = "none";

  chartContainerRef.current.appendChild(tooltip);

  chart.subscribeCrosshairMove((param) => {
    if (!param.time || !param.seriesPrices) {
      tooltip.style.display = "none";
      return;
    }

    const price = param.seriesPrices.get(lineSeries);

    if (!price) return;

    tooltip.innerHTML = `₹ ${price.toFixed(2)}`;
    tooltip.style.display = "block";
    tooltip.style.left = param.point.x + 20 + "px";
    tooltip.style.top = param.point.y + "px";
  });
  // 🔥 TOOLTIP END

  const handleResize = () => {
    chart.applyOptions({
      width: chartContainerRef.current.clientWidth,
    });
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    chart.remove();
  };
}, []);

  // ✅ UPDATE DATA (LIGHT)
 useEffect(() => {
  if (!seriesRef.current || !data) return;

  const cleanData = data.filter(
    (item) => item && item.time && item.value
  );

  const limited = cleanData.slice(-30);

  seriesRef.current.setData(limited);

  // ✅ THIS MAKES IT FEEL ALIVE
  if (limited.length > 0) {
  chartRef.current.timeScale().fitContent();
}

}, [data]);

  return <div ref={chartContainerRef} className="w-full mt-6" />;
}

export default memo(StockChart);