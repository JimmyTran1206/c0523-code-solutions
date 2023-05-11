/* exported addSuffixToAll */
const addSuffixToAll = (words, suffix) => {
  return words.reduce((wordsAppended, val) => {
    wordsAppended.push(val + suffix);
    return wordsAppended;
  }, []);
};
