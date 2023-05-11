/* exported isUpperCased */
const isUpperCased = (word) => {
  for (const x of word) {
    if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      return false;
    }
  }
  return true;
};
