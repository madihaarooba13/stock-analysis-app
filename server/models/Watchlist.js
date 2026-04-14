const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  stocks: [
    {
      symbol: String,
      price: Number,
      change: String,
    },
  ],
});

module.exports = mongoose.model("Watchlist", watchlistSchema);