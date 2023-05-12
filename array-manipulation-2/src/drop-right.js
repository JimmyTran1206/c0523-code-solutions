/* exported dropRight */
const dropRight = (array, count) => {
  if (count >= array.length) {
    return [];
  } else {
    return array.slice(0, array.length - count); // or array.slice(0,-count)
  }
};
