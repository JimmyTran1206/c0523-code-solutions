/* exported omit */
const omit = (source, keys) => {
  const result = { ...source }; // copy of the source object for manipulation, why deleting does not work on original 'source'????
  for (const x of Object.keys(result)) {
    for (const y of keys) {
      if (x === y) {
        delete result[x];
      }
    }
  }
  return result;
};
