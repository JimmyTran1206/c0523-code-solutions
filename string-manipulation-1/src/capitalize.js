/* exported capitalize */
const capitalize = (word) => {
  let result = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  return result;
};
