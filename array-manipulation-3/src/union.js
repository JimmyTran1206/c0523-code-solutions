/* exported union */
const union = (first, second) => {
  // combine and unique in order
  return [...first, ...second].filter(
    (val, indx, arr) => arr.indexOf(val) === indx
  );
};
