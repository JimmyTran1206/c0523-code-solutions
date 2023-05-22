/* exported zip */
const zip = (first, second) => {
  const length = Math.min(first.length, second.length);
  const result = [];
  let element = [];
  for (let i = 0; i < length; i++) {
    element.push(first[i]);
    element.push(second[i]);
    result.push(element);
    element = []; // reset each loop, otherwise the pushed value will accumulate
  }
  return result;
};
