/* exported take */
const take = (array, count) => {
  const result = [];
  if (array.length !== 0) {
    for (let i = 0; i < count; i++) {
      result.push(array[i]);
    }
    return result;
  }
  return [];
};
