


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const watchlistRoutes = require("./routes/watchlist");

require("dotenv").config();

// const watchlistRoutes = require("./routes/watchlist");
// app.use("/api/watchlist", watchlistRoutes);

const app = express();
app.use(cors());
app.use(express.json());

//import routes
const stockRoutes = require("./routes/stock");
app.use("/api/stocks", stockRoutes);
app.use("/api/watchlist", watchlistRoutes);
//test route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

//db connect
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

//server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
}); 

