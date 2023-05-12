/* exported reverseWords */
const reverseWords = (string) => {
  const stringArr = string.split(' '); // split, put in the array
  const resultArr = stringArr.map((x) => x.split('').reverse().join('')); // process each array element and record the result in the new array.
  return resultArr.join(' '); // join the words
};
