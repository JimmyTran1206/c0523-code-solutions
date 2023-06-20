const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const pricesArr = prices.map((item) => ({
  price: item,
  salePrice: item / 2,
}));
console.log('Price objects', pricesArr);

const pricesFormatted = prices.map((item) => `$${item.toFixed(2)}`);
console.log('Formatted prices: ', pricesFormatted);
