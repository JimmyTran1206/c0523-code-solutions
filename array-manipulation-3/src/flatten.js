/* exported flatten */
const flatten = (array) => {
  const result = [];
  for (const x of array) {
    if (!Array.isArray(x)) {
      result.push(x);
    } else {
      for (const y of x) {
        result.push(y);
      }
    }
  }
  return result;
};
