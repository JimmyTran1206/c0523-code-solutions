/* exported drop */
const drop = (array, count) => {
  if (array.length !== 0) {
    return array.slice(count);
  } else {
    return [];
  }
};
