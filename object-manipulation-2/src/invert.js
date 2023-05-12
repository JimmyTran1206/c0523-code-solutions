/* exported invert */
const invert = (source) => {
  const keys = Object.keys(source);
  const values = Object.values(source);
  const result = {};
  for (let i = 0; i < values.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
};
