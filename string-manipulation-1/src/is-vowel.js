/* exported isVowel */
const isVowel = (char) => {
  switch (char.toLowerCase()) {
    case 'i':
    case 'e':
    case 'a':
    case 'u':
    case 'o':
      return true;
    default:
      return false;
  }
};
