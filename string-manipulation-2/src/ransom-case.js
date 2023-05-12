/* exported ransomCase */
const ransomCase = (string) => {
  const result = string.toLowerCase().split('');
  for (let i = 1; i < result.length; i += 2) {
    result[i] = result[i].toUpperCase();
  }
  return result.join('');
};
