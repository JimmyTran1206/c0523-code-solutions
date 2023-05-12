/* exported capitalizeWords */

const capitalizeWords = (string) => {
  const result = string.toLowerCase().split(' ');
  for (let i = 0; i < result.length; i++) {
    result[i] = wordCap(result[i]);
  }
  return result.join(' ');
};

function wordCap(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
