// import { connectDB } from "@/server/config/db";
// import Watchlist from "@/models/Watchlist";

// export async function POST(req) {
//     const { userId, symbol } = await req.json();

//     await connectDB();

//     await Watchlist.deleteOne({
//         userId,
//         "stock.symbol": symbol,
//     });

//     return Response.json({ success: true });
// }

import connectDB from "@/server/config/db";
import Watchlist from "@/server/models/Watchlist";

export async function POST(req) {
  const { userId, symbol } = await req.json();

  await connectDB();

  const user = await Watchlist.findOne({ userId });

  if (!user) return Response.json({ success: false });

  user.stocks = user.stocks.filter(
    (s) => s.symbol !== symbol
  );

  await user.save();

  return Response.json({ success: true });
}