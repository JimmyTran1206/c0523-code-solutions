/* exported numVowels */
const numVowels = (string) => {
  let vowelNumbers = 0;
  const stringArray = string.toLowerCase().split('');
  for (const x of stringArray) {
    switch (x) {
      case 'i':
      case 'e':
      case 'a':
      case 'u':
      case 'o':
        vowelNumbers++;
    }
  }
  return vowelNumbers;
};
