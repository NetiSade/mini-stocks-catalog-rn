import { STOCKS_MOCK_DATA } from "@/data/stocks";

describe("Stocks Data", () => {
  it("should have valid stock data", () => {
    expect(STOCKS_MOCK_DATA).toBeDefined();
    expect(STOCKS_MOCK_DATA.length).toBeGreaterThan(0);
  });

  it("should have required fields for each stock", () => {
    STOCKS_MOCK_DATA.forEach((stock) => {
      expect(stock).toHaveProperty("ticker");
      expect(stock).toHaveProperty("description");
      expect(stock).toHaveProperty("price");
      expect(stock).toHaveProperty("logoUrl");

      expect(typeof stock.ticker).toBe("string");
      expect(typeof stock.description).toBe("string");
      expect(typeof stock.price).toBe("number");
      expect(typeof stock.logoUrl).toBe("string");
    });
  });

  it("should have unique tickers", () => {
    const tickers = STOCKS_MOCK_DATA.map((s) => s.ticker);
    const uniqueTickers = new Set(tickers);

    expect(tickers.length).toBe(uniqueTickers.size);
  });
});
