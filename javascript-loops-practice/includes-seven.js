/* exported includesSeven */
const includesSeven = (array) => {
  return array.reduce((isSeven, val) => {
    if (val === 7) {
      isSeven = true;
    }
    return isSeven;
  }, false);
};
