/* exported reverse */
const reverse = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // result[i]=array[array.length-1-i];
    // similar expression using array.at:
    result[i] = array.at(0 - i - 1);
  }
  return result;
};
