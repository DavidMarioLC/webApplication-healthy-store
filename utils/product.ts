export const totalPriceByProduct = (
  unit: string,
  priceUnit: number,
  priceKg: number,
  quantity: number
) => {
  if (unit === 'kg') {
    const total = Math.round(priceKg * quantity);
    return total;
  }

  return Math.round(priceUnit * quantity);
};
