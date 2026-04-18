export async function GET() {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI"
    );
    const data = await res.json();

    const price =
      data.chart.result[0].meta.regularMarketPrice;

    return Response.json([
      { name: "NIFTY", price },
      { name: "SENSEX", price } // temporary same
    ]);
  } catch (err) {
    return Response.json({ error: "Failed" });
  }
}