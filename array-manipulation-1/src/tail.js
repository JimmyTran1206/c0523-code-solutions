/* exported tail */
const tail = (array) => {
  // using rest collection
  const [, ...result] = array;
  return result;
};
