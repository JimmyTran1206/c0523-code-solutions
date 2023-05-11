/* exported initial */
const initial = (array) => {
  if (array.length !== 0) {
    array.length -= 1;
    return array;
  } else {
    return array; // empty array input []
  }
};
