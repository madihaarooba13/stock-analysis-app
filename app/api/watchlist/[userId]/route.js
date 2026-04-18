// import { connectDB } from "@/server/config/db";
// import Watchlist from "@/server/models/Watchlist";

// export async function GET(req, { params }) {
//     const { userId } = await params;

//     await connectDB();

//     const stocks = await Watchlist.find({ userId });

//     return Response.json({
//         stocks: stocks.map((item) => item.stock),
//     });
// }

import connectDB from "@/server/config/db";
import Watchlist from "@/server/models/Watchlist";

export async function GET(req, { params }) {
  const { userId } = await params;

  await connectDB();

  const user = await Watchlist.findOne({ userId });

  return Response.json({
    stocks: user?.stocks || [],
  });
}