/* exported toObject */
const toObject = (keyValuePair) => {
  const object = {};
  const [key, value] = keyValuePair;
  object[key] = value;
  return object;
};
