/* exported getValues */
const getValues = (object) => {
  const result = [];
  for (const x in object) {
    result.push(object[x]);
  }
  return result;
};
