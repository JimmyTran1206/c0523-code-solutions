/* exported getWords */
const getWords = (string) => {
  if (string.length !== 0) {
    return string.split(' ');
  } else {
    return [];
  }
};
