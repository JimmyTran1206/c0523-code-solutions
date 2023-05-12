/* exported isPalindromic */
const isPalindromic = (string) => {
  const stringProcessed = string.toLowerCase().split(' ').join(''); // remove spaces
  const stringReversed = stringProcessed.split('').reverse().join(''); // reverse and
  return stringProcessed === stringReversed;
};
