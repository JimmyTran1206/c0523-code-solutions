/* exported filterOutStrings */
const filterOutStrings = (values) => {
  return values.reduce((filteredArray, val) => {
    if (typeof val !== 'string') {
      filteredArray.push(val);
    }
    return filteredArray;
  }, []);
};
