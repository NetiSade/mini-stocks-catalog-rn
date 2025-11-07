/**
 * Format price with dollar sign and 2 decimal places
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

/**
 * Format percentage with sign and 2 decimal places
 */
export function formatPercent(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

/**
 * Check if stock ticker is valid (3-5 uppercase letters)
 */
export function isValidTicker(ticker: string): boolean {
  return /^[A-Z]{3,5}$/.test(ticker);
}
