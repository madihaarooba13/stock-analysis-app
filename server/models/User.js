// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,

//   watchlist: [
//     {
//       symbol: String,
//       price: Number,
//       change: String,
//     },
//   ],
// });

// module.exports = mongoose.models.User || mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  watchlist: [
    {
      symbol: String,
      price: Number,
      change: String,
    },
  ],
});

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);