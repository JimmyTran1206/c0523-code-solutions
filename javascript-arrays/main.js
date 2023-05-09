// colors array
const colors = ['red', 'white', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(`Value of colors[${i}]: ${colors[i]}`);
}

const string1 =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string1);

colors[2] = 'green';
const string2 =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string2);
console.log('Value of colors: ', colors);

// students array
const students = [
  'Ma Baker',
  'Michaeal Corleone',
  'Vito Corleone',
  'The Joker',
];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('Value of students: ', students);
