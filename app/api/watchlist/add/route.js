// import { connectDB } from "@/server/config/db"; // tumhe ye banana hoga
// import Watchlist from "@/models/Watchlist"; // model bhi banana hoga

// export async function POST(req) {
//     try {
//         const { userId, stock } = await req.json();

//         if (!userId || !stock) {
//             return Response.json({ error: "Missing data" }, { status: 400 });
//         }

//         await connectDB();

//         // check duplicate
//         const exists = await Watchlist.findOne({
//             userId,
//             "stock.symbol": stock.symbol,
//         });

//         if (exists) {
//             return Response.json({ message: "Already added" });
//         }

//         await Watchlist.create({
//             userId,
//             stock,
//         });

//         return Response.json({ success: true });
//     } catch (err) {
//         return Response.json({ error: "Server error" }, { status: 500 });
//     }
// }

import connectDB from "@/server/config/db";
import Watchlist from "@/server/models/Watchlist";

export async function POST(req) {
  const { userId, stock } = await req.json();

  await connectDB();

  let user = await Watchlist.findOne({ userId });

  if (!user) {
    // first time user
    await Watchlist.create({
      userId,
      stocks: [stock],
    });
  } else {
    // avoid duplicate
    const exists = user.stocks.find(
      (s) => s.symbol === stock.symbol
    );

    if (!exists) {
      user.stocks.push(stock);
      await user.save();
    }
  }

  return Response.json({ success: true });
}