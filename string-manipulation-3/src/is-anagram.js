/* exported isAnagram */
const isAnagram = (firstString, secondString) => {
  const firstStringProcessed = firstString
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .sort()
    .join(''); // remove spaces, sorted
  const secondStringProcessed = secondString
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .sort()
    .join(''); // remove spaces, sorted
  return firstStringProcessed === secondStringProcessed;
};
