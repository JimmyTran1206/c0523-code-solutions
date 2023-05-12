/* exported lastChars */
const lastChars = (length, string) =>
  string.length > length ? string.slice(string.length - length) : string;
