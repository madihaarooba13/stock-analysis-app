export async function GET() {
  const symbols = ["AAPL", "TSLA", "MSFT", "GOOG"];

  const results = await Promise.all(
    symbols.map(async (symbol) => {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
      );
      const data = await res.json();

      const price =
        data.chart.result[0].meta.regularMarketPrice;

      return { symbol, price, change: "+1.2" };
    })
  );

  return Response.json(results);
}