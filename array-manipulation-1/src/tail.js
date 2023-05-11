/* exported tail */
const tail = (array) => {
  // using rest collection
  const [x, ...result] = array;
  console.log(x);
  return result;
};
