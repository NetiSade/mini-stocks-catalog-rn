export interface Stock {
  description: string;
  logoUrl: string;
  price: number;
  ticker: string;
}

export const STOCKS_MOCK_DATA: Stock[] = [
  {
    description: "SPDR S&P 500 ETF Trust",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/SPY.png",
    price: 458.88,
    ticker: "SPY"
  },
  {
    description: "Apple Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AAPL.png",
    price: 235.2,
    ticker: "AAPL"
  },
  {
    description: "Alphabet Inc - Class A",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/GOOGL.png",
    price: 210.1,
    ticker: "GOOGL"
  },
  {
    description: "Zim Integrated Shipping Services Ltd",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/ZIM.png",
    price: 25.3,
    ticker: "ZIM"
  },
  {
    description: "Blink Charging Co",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/BLNK.png",
    price: 190.41,
    ticker: "BLNK"
  },
  {
    description: "Taiwan Semiconductor Manufacturing - ADR",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/TSM.png",
    price: 230.5,
    ticker: "TSM"
  },
  {
    description: "American Express Co.",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AXP.png",
    price: 50.65,
    ticker: "AXP"
  }
];

