/* exported isLowerCased */
const isLowerCased = (word) => {
  for (const x of word) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      return false;
    }
  }
  return true;
};
