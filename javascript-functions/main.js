// printing function
function print(...arg) {
  console.log(...arg);
} // trying to type less console.log, just for this exercise

const convertMinutesToSeconds = (minutes) => minutes * 60;
print('convert 5 minutes to seconds: ', convertMinutesToSeconds(5));

const greet = (name) => print(`Hey, ${name}!!!`);
greet('Travis');

const getArea = (width, height) => width * height;
print('Area of 18 by 48 room is ', getArea(18, 48));

function getFirstName(person) {
  print(`the first name of the person is ${person.firstName}.`);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  return array.at(-1);
}
const arr = ['propane', 'and', 'propane', 'accessories'];
print(`the last element of array [ ${arr} ] is ${getLastElement(arr)}`);
