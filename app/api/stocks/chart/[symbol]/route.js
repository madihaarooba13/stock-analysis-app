// export async function GET(req, { params }) {
//   const { symbol } = await params;

//   try {
//     const res = await fetch(
//       `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
//     );

//     const data = await res.json();

//     return Response.json(data.chart.result[0]);
//   } catch (err) {
//     return Response.json({ error: "Failed" });
//   }
// }

export async function GET(req, { params }) {
  const { symbol } = await params;

  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
    );

    const data = await res.json();

    const timestamps = data.chart.result[0].timestamp;
    const prices =
      data.chart.result[0].indicators.quote[0].close;

    const formatted = timestamps.map((time, i) => ({
      time,
      price: prices[i],
    }));

    return Response.json(formatted);
  } catch (err) {
    return Response.json({ error: "Failed" });
  }
}