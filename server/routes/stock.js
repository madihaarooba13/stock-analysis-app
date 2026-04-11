// const express = require("express");
// const router = express.Router();
// // const fetch = require("node-fetch");
// router.get("/:symbol", async (req, res) => {
//     const symbol = req.params.symbol;
//     try{
//          const response = await fetch(`https://api.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.API_KEY}`);
//          const data = await response.json();
//          res.json(data);

//     }
//     catch(err){
//         console.error("Error fetching stock data:", err);
//         res.status(500).json({ error: "Failed to fetch stock data" });
//     }
   


// });
// module.exports = router;


// const express = require("express");
// const router = express.Router();

// router.get("/:symbol", async (req, res) => {
//   const symbol = req.params.symbol;

//   try {
//     console.log("API HIT for:", symbol);

//     const response = await fetch(
//       `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.API_KEY}`
//     );

//     console.log("STATUS:", response.status);

//     const data = await response.json();
//     console.log("DATA:", data);

//     res.json(data);
//   } catch (err) {
//     console.error("ERROR:", err);
//     res.status(500).json({ error: "Failed to fetch stock data" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const fetch = require("node-fetch");

// // 🔥 MULTIPLE STOCKS (WITH CHANGE)
// router.get("/multi/demo", async (req, res) => {
//   try {
//     const symbols = ["AAPL", "TSLA", "MSFT", "AMZN"];

//     const results = await Promise.all(
//       symbols.map(async (symbol) => {
//         const response = await fetch(
//           `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${process.env.API_KEY}`
//         );

//         const data = await response.json();

//         return {
//           symbol,
//           price: data.close || "N/A",
//           change: data.percent_change || "0",
//         };
//       })
//     );

//     res.json(results);
//   } catch (err) {
//     console.error("MULTI ERROR:", err);
//     res.status(500).json({ error: "Failed to fetch multiple stocks" });
//   }
// });

// // 🔥 SINGLE STOCK
// router.get("/:symbol", async (req, res) => {
//   const symbol = req.params.symbol;

//   try {
//     const response = await fetch(
//       `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.API_KEY}`
//     );

//     const data = await response.json();

//     if (!data.price) {
//       return res.status(400).json({ error: "Invalid symbol" });
//     }

//     res.json({ price: data.price });
//   } catch (err) {
//     console.error("SINGLE ERROR:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.get("/chart/:symbol", async (req, res) => {
//   try {
//     const symbol = req.params.symbol;

//     const response = await fetch(
//       `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${process.env.API_KEY}`
//     );

//     const data = await response.json();

//     const formatted = data.values.map((item) => ({
//       time: item.datetime.split(" ")[0],
//       value: parseFloat(item.close),
//     })).reverse();

//     res.json(formatted);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Chart fetch failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// 🔥 MULTIPLE STOCKS (TOP)
router.get("/multi/demo", async (req, res) => {
  try {
    const symbols = ["AAPL", "TSLA", "MSFT", "AMZN"];

    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const response = await fetch(
          `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${process.env.API_KEY}`
        );

        const data = await response.json();

        return {
          symbol,
          price: data.close || "N/A",
          change: data.percent_change || "0",
        };
      })
    );

    res.json(results);
  } catch (err) {
    console.error("MULTI ERROR:", err);
    res.status(500).json({ error: "Failed to fetch multiple stocks" });
  }
});

// 🔥 CHART ROUTE (SECOND)
router.get("/chart/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;

    const response = await fetch(
      `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${process.env.API_KEY}`
    );

    const data = await response.json();

    const formatted = data.values.map((item) => ({
      time: item.datetime.split(" ")[0],
      value: parseFloat(item.close),
    })).reverse();

    res.json(formatted);
  } catch (err) {
    console.error("CHART ERROR:", err);
    res.status(500).json({ error: "Chart fetch failed" });
  }
});

// 🔥 SINGLE STOCK (LAST)
router.get("/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await fetch(
      `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.API_KEY}`
    );

    const data = await response.json();

    if (!data.price) {
      return res.status(400).json({ error: "Invalid symbol" });
    }

    res.json({ price: data.price });
  } catch (err) {
    console.error("SINGLE ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;