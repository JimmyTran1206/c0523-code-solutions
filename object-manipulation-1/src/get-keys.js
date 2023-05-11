/* exported getKeys */
const getKeys = (object) => {
  const result = [];
  for (const x in object) {
    result.push(x);
  }
  return result;
};
