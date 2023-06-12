const bookArray = [
  {
    isbn: '90101',
    title: 'JavaScript level 1',
    author: 'JohnDoe Jr.',
  },
  {
    isbn: '90102',
    title: 'JavaScript level 2',
    author: 'JohnDoe',
  },
  {
    isbn: '90103',
    title: 'JavaScript level 3',
    author: 'JohnDoe Sr.',
  },
];

for (const book of bookArray) {
  console.log('Book Array element: ', book);
  console.log('Type of element: ', typeof book);
}

console.log('Book array: ', bookArray);
console.log('Type of book aray: ', typeof bookArray);

const bookArrayJSON = JSON.stringify(bookArray);
console.log('Book array JSON: ', bookArrayJSON);
console.log('Type of Book Array JSON: ', typeof bookArrayJSON);

const stringJSON = `{
	"numberId": 1595516899,
	"name": "Dove John"
}`;

console.log('stringJSON: ', stringJSON);
console.log('Type of stringJSON: ', typeof stringJSON);

const student = JSON.parse(stringJSON);
console.log('Student: ', student);
console.log('Type of Student: ', typeof student);
