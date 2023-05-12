/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  const stringArray = string.split('');
  [stringArray[firstIndex], stringArray[secondIndex]] = [
    stringArray[secondIndex],
    stringArray[firstIndex],
  ];
  return stringArray.join('');
};
