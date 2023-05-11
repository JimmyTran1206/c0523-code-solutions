/* exported filterOutNulls */
const filterOutNulls = (values) => {
  return values.reduce((filteredArray, val) => {
    if (val !== null) {
      filteredArray.push(val);
    }
    return filteredArray;
  }, []);
};
