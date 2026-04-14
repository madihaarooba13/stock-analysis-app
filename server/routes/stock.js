

// const express = require("express");
// const router = express.Router();
// const fetch = require("node-fetch");

// // 🔥 MULTIPLE STOCKS (LIGHT + STABLE)
// router.get("/multi/demo", async (req, res) => {
//   try {
//     const symbols = ["AAPL", "TSLA", "MSFT", "AMZN"];

//     const results = await Promise.all(
//       symbols.map(async (symbol) => {
//         try {
//           const response = await fetch(
//             `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=2&apikey=${process.env.API_KEY}`
//           );

//           const data = await response.json();

//           if (!data.values || data.values.length < 2) {
//             return { symbol, price: "N/A", change: "0" };
//           }

//           const latest = data.values[0];
//           const prev = data.values[1];

//           const price = Number(latest.close);
//           const prevClose = Number(prev.close);
//           const change = ((price - prevClose) / prevClose) * 100;

//           return {
//             symbol,
//             price,
//             change: change.toFixed(2),
//           };
//         } catch {
//           return { symbol, price: "N/A", change: "0" };
//         }
//       })
//     );

//     res.json(results);
//   } catch (err) {
//     console.error("MULTI ERROR:", err);
//     res.status(500).json({ error: "Failed" });
//   }
// });



// // router.get("/index/market", async (req, res) => {
// //   try {
// //     const symbols = [
// //       { name: "NIFTY 50", symbol: "^NSEI" },
// //       { name: "SENSEX", symbol: "^BSESN" },
// //     ];

// //     const results = await Promise.all(
// //       symbols.map(async (item) => {
// //         try {
// //           console.log("FETCHING:", item.symbol);

// //           const response = await fetch(
// //             `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(item.symbol)}`,
// //             {
// //               headers: {
// //                 "User-Agent":
// //                   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
// //               },
// //             }
// //           );

// //           console.log("STATUS:", response.status);

// //           const data = await response.json();

// //           // ✅ SAFE CHECK
// //           if (
// //             !data.chart ||
// //             !data.chart.result ||
// //             !data.chart.result[0]
// //           ) {
// //             console.log("INVALID DATA:", item.symbol, data);
// //             return null;
// //           }

// //           const result = data.chart.result[0];

// //           const meta = result.meta || {};
// //           const timestamps = result.timestamp || [];
// //           const prices = result.indicators?.quote?.[0]?.close || [];

// //           const price = meta.regularMarketPrice || 0;
// //           const prevClose = meta.previousClose || 0;

// //           const change =
// //             prevClose === 0 ? 0 : ((price - prevClose) / prevClose) * 100;

// //           const chart = prices.slice(-10).map((p, i) => ({
// //             time: timestamps[i] || i,
// //             value: p ?? 0,
// //           }));

// //           return {
// //             name: item.name,
// //             price,
// //             change: change.toFixed(2),
// //             sentiment: change >= 0 ? "Bullish" : "Bearish",
// //             chart,
// //           };
// //         } catch (err) {
// //           console.log("INNER ERROR:", err);
// //           return null;
// //         }
// //       })
// //     );

// //     const finalData = results.filter(Boolean);

// //     // ✅ fallback
// //     if (finalData.length === 0) {
// //       return res.json([
// //         {
// //           name: "NIFTY 50",
// //           price: 0,
// //           change: "0",
// //           sentiment: "Neutral",
// //           chart: [],
// //         },
// //       ]);
// //     }

// //     res.json(finalData);
// //   } catch (err) {
// //     console.error("FINAL ERROR:", err);
// //     res.status(500).json({ error: "Market fetch failed" });
// //   }
// // });

// router.get("/index/market", async (req, res) => {
//   try {
//     const symbols = [
//       { name: "NIFTY 50", symbol: "^NSEI" },
//       { name: "SENSEX", symbol: "^BSESN" },
//     ];

//     const results = await Promise.all(
//       symbols.map(async (item) => {
//         try {
//           console.log("FETCHING:", item.symbol);

//           const response = await fetch(
//             `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(item.symbol)}`,
//             {
//               headers: {
//                 "User-Agent":
//                   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
//               },
//             }
//           );

//           console.log("STATUS:", response.status);

//           const data = await response.json();

//           // ✅ SAFE CHECK
//           if (
//             !data.chart ||
//             !data.chart.result ||
//             !data.chart.result[0]
//           ) {
//             console.log("INVALID DATA:", item.symbol, data);
//             return null;
//           }

//           const result = data.chart.result[0];

//           const meta = result.meta || {};
//           const timestamps = result.timestamp || [];
//           const prices = result.indicators?.quote?.[0]?.close || [];

//           const price = meta.regularMarketPrice || 0;
//           const prevClose = meta.previousClose || 0;

//           // 🔥 ADDED (NEW FIELDS)
//           // const open = meta.regularMarketOpen || 0;
//           const open = 
//   meta.regularMarketOpen || 
//   meta.chartPreviousClose || 
//   0;
//           const high = meta.regularMarketDayHigh || 0;
//           const low = meta.regularMarketDayLow || 0;

//           const change =
//             prevClose === 0 ? 0 : ((price - prevClose) / prevClose) * 100;

//           const chart = prices.slice(-10).map((p, i) => ({
//             time: timestamps[i] || i,
//             value: p ?? 0,
//           }));

//           return {
//             name: item.name,
//             price,
//             change: change.toFixed(2),
//             sentiment: change >= 0 ? "Bullish" : "Bearish",
//             chart,

//             // 🔥 ADDED HERE (no break)
//             open,
//             high,
//             low,
//           };
//         } catch (err) {
//           console.log("INNER ERROR:", err);
//           return null;
//         }
//       })
//     );

//     const finalData = results.filter(Boolean);

//     // ✅ fallback
//     if (finalData.length === 0) {
//       return res.json([
//         {
//           name: "NIFTY 50",
//           price: 0,
//           change: "0",
//           sentiment: "Neutral",
//           chart: [],
//           open: 0,
//           high: 0,
//           low: 0,
//         },
//       ]);
//     }

//     res.json(finalData);
//   } catch (err) {
//     console.error("FINAL ERROR:", err);
//     res.status(500).json({ error: "Market fetch failed" });
//   }
// });


// // 🔥 SINGLE STOCK (NO QUOTE API)



// // 🔥 CHART (LOW DATA)
// router.get("/chart/:symbol", async (req, res) => {
//   const symbol = req.params.symbol;

//   try {
//     const response = await fetch(
//       `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=40&apikey=${process.env.API_KEY}`
//     );

//     const data = await response.json();

//     if (!data.values) return res.json([]);

//     const formatted = data.values.map((item) => ({
//       time: item.datetime.split(" ")[0],
//       value: Number(item.close),
//     })).reverse();

//     res.json(formatted);

//   } catch (err) {
//     console.error("CHART ERROR:", err);
//     res.status(500).json({ error: "Chart failed" });
//   }
// });

// // 🔥 MARKET INDEX (NIFTY + SENSEX)

// // router.get("/index/market", async (req, res) => {
// //   try {
// //     const symbols = [
// //       { name: "NIFTY 50", symbol: "^NSEI" },
// //       { name: "SENSEX", symbol: "^BSESN" },
// //     ];

// //     const results = await Promise.all(
// //       symbols.map(async (item) => {
// //         const response = await fetch(
// //           `https://api.twelvedata.com/time_series?symbol=${item.symbol}&interval=1day&outputsize=10&apikey=${process.env.API_KEY}`
// //         );

// //         const data = await response.json();
// //         console.log(item.symbol, data);

// //         if (!data.values) {
// //   return {
// //     name: item.name,
// //     price: 0,
// //     change: "0",
// //     sentiment: "Neutral",
// //     chart: [],
// //   };
// // }

// //         const latest = data.values[0];
// //         const prev = data.values[1];

// //         const price = Number(latest.close);
// //         const prevClose = Number(prev.close);
// //         const change = ((price - prevClose) / prevClose) * 100;

// //         return {
// //           name: item.name,
// //           price,
// //           change: change.toFixed(2),
// //           sentiment: change >= 0 ? "Bullish" : "Bearish",
// //           // chart: data.values.slice(0, 10).map((d) => ({
// //           //   value: Number(d.close),
// //           // })).reverse(),
// //           chart: data.values.slice(0, 10).map((d) => ({
// //   time: Math.floor(new Date(d.datetime).getTime() / 1000),
// //   value: Number(d.close),
// // })).reverse(),
// //         };
// //       })
// //     );

// //     res.json(results);
// //   } catch (err) {
// //     res.status(500).json({ error: "Market fetch failed" });
// //   }
// // });


// router.get("/:symbol", async (req, res) => {
//   const symbol = req.params.symbol;

//   try {
//     const response = await fetch(
//       `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=2&apikey=${process.env.API_KEY}`
//     );

//     const data = await response.json();

//     if (!data.values || data.values.length < 2) {
//       return res.json({
//         price: "N/A",
//         open: "N/A",
//         high: "N/A",
//         low: "N/A",
//         prevClose: "N/A",
//         change: "0",
//       });
//     }

//     const latest = data.values[0];
//     const prev = data.values[1];

//     const price = Number(latest.close);
//     const prevClose = Number(prev.close);
//     const change = ((price - prevClose) / prevClose) * 100;

//     res.json({
//       price,
//       open: Number(latest.open),
//       high: Number(latest.high),
//       low: Number(latest.low),
//       prevClose,
//       change: change.toFixed(2),
//     });

//   } catch (err) {
//     console.error("ERROR:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// module.exports = router;


const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


// 🔥 MULTIPLE STOCKS (YAHOO)
router.get("/multi/demo", async (req, res) => {
  try {
    const symbols = ["AAPL","TSLA","MSFT","AMZN","GOOGL","NVDA",
  "META","NFLX","INTC","AMD",
  "TCS.NS","RELIANCE.NS","INFY.NS","HDFCBANK.NS",
  "ICICIBANK.NS","SBIN.NS","WIPRO.NS","BAJFINANCE.NS"];

    const results = await Promise.all(
      symbols.map(async (symbol) => {
        try {
          const response = await fetch(
            `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
            {
              headers: {
                "User-Agent": "Mozilla/5.0",
              },
            }
          );

          const data = await response.json();

          if (!data.chart || !data.chart.result || !data.chart.result[0]) {
            return { symbol, price: "N/A", change: "0" };
          }

          const meta = data.chart.result[0].meta;

          const price = meta.regularMarketPrice || 0;
          const prevClose = meta.previousClose || 0;

          const change =
            prevClose === 0
              ? 0
              : ((price - prevClose) / prevClose) * 100;

          return {
            symbol,
            price,
            change: change.toFixed(2),
          };
        } catch {
          return { symbol, price: "N/A", change: "0" };
        }
      })
    );

    res.json(results);
  } catch (err) {
    console.error("MULTI ERROR:", err);
    res.status(500).json({ error: "Failed" });
  }
});


// 🔥 MARKET INDEX (NIFTY + SENSEX)
router.get("/index/market", async (req, res) => {
  try {
    const symbols = [
      { name: "NIFTY 50", symbol: "^NSEI" },
      { name: "SENSEX", symbol: "^BSESN" },
    ];

    const results = await Promise.all(
      symbols.map(async (item) => {
        try {
          const response = await fetch(
            `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(item.symbol)}`,
            {
              headers: {
                "User-Agent": "Mozilla/5.0",
              },
            }
          );

          const data = await response.json();

          if (!data.chart || !data.chart.result || !data.chart.result[0]) {
            return null;
          }

          const result = data.chart.result[0];
          const meta = result.meta || {};
          const timestamps = result.timestamp || [];
          const prices = result.indicators?.quote?.[0]?.close || [];

          const price = meta.regularMarketPrice || 0;
          const prevClose = meta.previousClose || 0;

         const open =
  meta.regularMarketOpen ??
  meta.chartPreviousClose ??
  meta.previousClose ??
  price;

          const high = meta.regularMarketDayHigh || 0;
          const low = meta.regularMarketDayLow || 0;

          const change =
            prevClose === 0
              ? 0
              : ((price - prevClose) / prevClose) * 100;

          const chart = prices.slice(-10).map((p, i) => ({
            time: timestamps[i] || i,
            value: p ?? 0,
          }));

          return {
            name: item.name,
            price,
            change: change.toFixed(2),
            sentiment: change >= 0 ? "Bullish" : "Bearish",
            chart,
            open,
            high,
            low,
          };
        } catch {
          return null;
        }
      })
    );

    const finalData = results.filter(Boolean);

    res.json(finalData.length ? finalData : []);
  } catch (err) {
    console.error("MARKET ERROR:", err);
    res.status(500).json({ error: "Market fetch failed" });
  }
});


// 🔥 CHART (YAHOO)
router.get("/chart/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const data = await response.json();

    if (!data.chart || !data.chart.result || !data.chart.result[0]) {
      return res.json([]);
    }

    const result = data.chart.result[0];

    const timestamps = result.timestamp || [];
    const prices = result.indicators?.quote?.[0]?.close || [];

    const chart = prices.map((p, i) => ({
      time: timestamps[i] || i,
      value: p ?? 0,
    }));

    res.json(chart);
  } catch (err) {
    console.error("CHART ERROR:", err);
    res.status(500).json({ error: "Chart failed" });
  }
});


// 🔥 SINGLE STOCK (YAHOO)
router.get("/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const data = await response.json();

    if (!data.chart || !data.chart.result || !data.chart.result[0]) {
      return res.json({
        price: "N/A",
        open: "N/A",
        high: "N/A",
        low: "N/A",
        prevClose: "N/A",
        change: "0",
      });
    }

    const meta = data.chart.result[0].meta;

    const price = meta.regularMarketPrice || 0;
    const prevClose = meta.previousClose || 0;

    const change =
      prevClose === 0
        ? 0
        : ((price - prevClose) / prevClose) * 100;

    res.json({
      price,
      open:
  meta.regularMarketOpen ??
  meta.chartPreviousClose ??
  meta.previousClose ??
  price,
      high: meta.regularMarketDayHigh || 0,
      low: meta.regularMarketDayLow || 0,
      prevClose,
      change: change.toFixed(2),
    });

  } catch (err) {
    console.error("SINGLE ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;