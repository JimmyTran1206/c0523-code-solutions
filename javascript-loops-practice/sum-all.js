/* exported sumAll */
const sumAll = (numbers) => {
  let total = 0;
  for (const x of numbers) {
    total += x;
  }
  return total;
};
