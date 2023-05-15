/* exported reverseWord */
const reverseWord = (word) => {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
};
