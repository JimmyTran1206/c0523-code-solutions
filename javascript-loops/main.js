/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
const getNumbersToTen = () => {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
};

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count++ <= times) {
    repeated += word + ' ';
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  const double = [];
  for (let i = 0; i < numbers.length; i++) {
    double[i] = numbers[i] * 2;
  }
  return double;
}

function getKeys(object) {
  const keys = [];
  for (const x in object) {
    keys.push(x);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const x in object) {
    values.push(object[x]);
  }
  return values;
}
