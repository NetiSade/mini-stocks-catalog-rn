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
    ticker: "SPY",
  },
  {
    description: "Apple Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AAPL.png",
    price: 235.2,
    ticker: "AAPL",
  },
  {
    description: "Alphabet Inc - Class A",
    logoUrl:
      "https://storage.googleapis.com/heyblink-resources/logos/GOOGL.png",
    price: 210.1,
    ticker: "GOOGL",
  },
  {
    description: "Zim Integrated Shipping Services Ltd",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/ZIM.png",
    price: 25.3,
    ticker: "ZIM",
  },
  {
    description: "Blink Charging Co",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/BLNK.png",
    price: 190.41,
    ticker: "BLNK",
  },
  {
    description: "Taiwan Semiconductor Manufacturing - ADR",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/TSM.png",
    price: 230.5,
    ticker: "TSM",
  },
  {
    description: "American Express Co.",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AXP.png",
    price: 50.65,
    ticker: "AXP",
  },
  {
    description: "Microsoft Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/MSFT.png",
    price: 415.75,
    ticker: "MSFT",
  },
  {
    description: "Amazon.com Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AMZN.png",
    price: 178.35,
    ticker: "AMZN",
  },
  {
    description: "NVIDIA Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/NVDA.png",
    price: 495.22,
    ticker: "NVDA",
  },
  {
    description: "Tesla Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/TSLA.png",
    price: 248.5,
    ticker: "TSLA",
  },
  {
    description: "Meta Platforms Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/META.png",
    price: 512.32,
    ticker: "META",
  },
  {
    description: "Netflix Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/NFLX.png",
    price: 625.18,
    ticker: "NFLX",
  },
  {
    description: "Visa Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/V.png",
    price: 278.45,
    ticker: "V",
  },
  {
    description: "JPMorgan Chase & Co",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/JPM.png",
    price: 195.88,
    ticker: "JPM",
  },
  {
    description: "The Coca-Cola Company",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/KO.png",
    price: 62.15,
    ticker: "KO",
  },
  {
    description: "Intel Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/INTC.png",
    price: 43.67,
    ticker: "INTC",
  },
  {
    description: "Adobe Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/ADBE.png",
    price: 548.92,
    ticker: "ADBE",
  },
  {
    description: "PayPal Holdings Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/PYPL.png",
    price: 64.38,
    ticker: "PYPL",
  },
  {
    description: "Walmart Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/WMT.png",
    price: 72.45,
    ticker: "WMT",
  },
  {
    description: "Salesforce Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/CRM.png",
    price: 285.67,
    ticker: "CRM",
  },
  {
    description: "Pfizer Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/PFE.png",
    price: 28.92,
    ticker: "PFE",
  },
  {
    description: "Johnson & Johnson",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/JNJ.png",
    price: 157.33,
    ticker: "JNJ",
  },
  {
    description: "Procter & Gamble Co",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/PG.png",
    price: 168.54,
    ticker: "PG",
  },
  {
    description: "Nike Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/NKE.png",
    price: 98.76,
    ticker: "NKE",
  },
  {
    description: "Disney (Walt) Co",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/DIS.png",
    price: 112.88,
    ticker: "DIS",
  },
  {
    description: "McDonald's Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/MCD.png",
    price: 293.45,
    ticker: "MCD",
  },
  {
    description: "Boeing Company",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/BA.png",
    price: 178.92,
    ticker: "BA",
  },
  {
    description: "Advanced Micro Devices Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/AMD.png",
    price: 142.65,
    ticker: "AMD",
  },
  {
    description: "Oracle Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/ORCL.png",
    price: 132.87,
    ticker: "ORCL",
  },
  {
    description: "Cisco Systems Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/CSCO.png",
    price: 54.23,
    ticker: "CSCO",
  },
  {
    description: "Starbucks Corporation",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/SBUX.png",
    price: 96.18,
    ticker: "SBUX",
  },
  {
    description: "Bank of America Corp",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/BAC.png",
    price: 38.76,
    ticker: "BAC",
  },
  {
    description: "General Electric Company",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/GE.png",
    price: 167.92,
    ticker: "GE",
  },
  {
    description: "Ford Motor Company",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/F.png",
    price: 11.45,
    ticker: "F",
  },
  {
    description: "AT&T Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/T.png",
    price: 18.67,
    ticker: "T",
  },
  {
    description: "Uber Technologies Inc",
    logoUrl: "https://storage.googleapis.com/heyblink-resources/logos/UBER.png",
    price: 73.24,
    ticker: "UBER",
  },
];
