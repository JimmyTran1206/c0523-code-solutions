/* exported pick */
const pick = (source, keys) => {
  const result = {};
  for (const x of keys) {
    if (typeof source[x] !== 'undefined') {
      result[x] = source[x];
    }
  }
  return result;
};
