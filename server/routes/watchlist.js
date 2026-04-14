const express = require("express");
const router = express.Router();
const Watchlist = require("../models/Watchlist");

// GET watchlist
router.get("/:userId", async (req, res) => {
  const data = await Watchlist.findOne({ userId: req.params.userId });
  res.json(data || { stocks: [] });
});

// ADD stock
router.post("/add", async (req, res) => {
  const { userId, stock } = req.body;

  let wl = await Watchlist.findOne({ userId });

  if (!wl) {
    wl = new Watchlist({ userId, stocks: [stock] });
  } else {
    const exists = wl.stocks.find(s => s.symbol === stock.symbol);
    if (!exists) wl.stocks.push(stock);
  }

  await wl.save();
  res.json(wl);
});

// REMOVE stock
router.post("/remove", async (req, res) => {
  const { userId, symbol } = req.body;

  const wl = await Watchlist.findOne({ userId });

  if (wl) {
    wl.stocks = wl.stocks.filter(s => s.symbol !== symbol);
    await wl.save();
  }

  res.json(wl);
});

module.exports = router;