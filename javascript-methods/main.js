// Math object
const num1 = 6;
const num2 = 8;
const num3 = 12;
const maximumValue = Math.max(num1, num2, num3);
console.log('Maximum value: ', maximumValue);

const heros = ['Thor', 'Hulk', 'Ironman', 'Captain America'];
let randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random index: ', randomIndex);
const randomHero = heros[randomIndex];
console.log('random hero: ', randomHero);

// Array Methods
const library = [
  { title: 'HTML&CSS', author: 'Jon Ducket' },
  { title: 'Javascript and JQuery', author: 'Jon Ducket' },
  { title: 'Eloquent Javascript', author: 'Marijn Haverbeke' },
];
const lastBook = library.pop();
console.log('last book: ', lastBook);
const firstBook = library.shift();
console.log('first book: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library: ', library);

// String methods
const fullName = 'Jimmy Tran';
const firstAndLastName = fullName.split(' ');
console.log('first and last name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
