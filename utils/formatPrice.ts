export const formatPrice = (price: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
