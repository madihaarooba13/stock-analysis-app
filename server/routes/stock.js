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
const express = require("express");
const router = express.Router();

router.get("/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    console.log("API HIT for:", symbol);

    const response = await fetch(
      `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.API_KEY}`
    );

    console.log("STATUS:", response.status);

    const data = await response.json();
    console.log("DATA:", data);

    res.json(data);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;