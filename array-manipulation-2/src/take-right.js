/* exported takeRight */
const takeRight = (array, count) => {
  if (count >= array.length) {
    return array;
  } else {
    return array.slice(-count);
  }
};
