import { formatPercent, formatPrice, isValidTicker } from "@/utils/format";

describe("formatPrice", () => {
  it("should format price with dollar sign", () => {
    expect(formatPrice(123.45)).toBe("$123.45");
  });

  it("should format price with 2 decimal places", () => {
    expect(formatPrice(100)).toBe("$100.00");
    expect(formatPrice(99.9)).toBe("$99.90");
  });

  it("should handle large numbers", () => {
    expect(formatPrice(123456789.567)).toBe("$123456789.57");
  });
});

describe("formatPercent", () => {
  it("should format positive percentage with + sign", () => {
    expect(formatPercent(5.67)).toBe("+5.67%");
  });

  it("should format negative percentage with - sign", () => {
    expect(formatPercent(-3.21)).toBe("-3.21%");
  });

  it("should format zero percentage", () => {
    expect(formatPercent(0)).toBe("+0.00%");
  });
});

describe("isValidTicker", () => {
  it("should validate correct tickers", () => {
    expect(isValidTicker("AAPL")).toBe(true);
    expect(isValidTicker("GOOGL")).toBe(true);
    expect(isValidTicker("SPY")).toBe(true);
  });

  it("should reject invalid tickers", () => {
    expect(isValidTicker("aa")).toBe(false); // too short
    expect(isValidTicker("TOOLONG")).toBe(false); // too long
    expect(isValidTicker("aapl")).toBe(false); // lowercase
    expect(isValidTicker("AA1")).toBe(false); // contains number
  });
});
