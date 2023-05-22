/* exported difference */
const difference = (first, second) => {
  // discard the duplicate and combine array
  return first
    .filter((x) => !second.includes(x))
    .concat(second.filter((x) => !first.includes(x)));
};
