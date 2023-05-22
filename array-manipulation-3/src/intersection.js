/* exported intersection */
const intersection = (first, second) => {
  return first.filter((x) => second.includes(x));
};
