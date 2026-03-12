export function calculateDiscountedPrice(
  price: number,
  discountPercentage?: number,
): number {
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-SE", {
    style: "currency",
    currency: "SEK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}
