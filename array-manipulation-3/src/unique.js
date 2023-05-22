/* exported unique */
// find the uniqueness in the index
const unique = (array) => {
  return array.filter((val, indx, arr) => arr.indexOf(val) === indx);
};
