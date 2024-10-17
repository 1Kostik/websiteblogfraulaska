export const fullPrice = (
  priceWithDiscount: number,
  discountPercent: number
) => {
  const fullPrice = Math.round(
    (priceWithDiscount * 100) / (100 - discountPercent)
  );
  return fullPrice;
};
