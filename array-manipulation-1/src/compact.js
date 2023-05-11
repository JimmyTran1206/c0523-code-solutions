/* exported compact */
const compact = (array) => {
  const result = [];
  if (array.length !== 0) {
    for (const x of array) {
      if (x) {
        result.push(x);
      }
    }
    return result;
  } else {
    return array;
  }
};
