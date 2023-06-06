function ExampleConstructor() {}

console.log(
  'Prototype of ExampleConstructor(): ',
  ExampleConstructor.prototype
);
console.log(
  'Type of the ExampleConstructor prototype: ',
  typeof ExampleConstructor.prototype
);

const aFunction = new ExampleConstructor();
console.log('aFunction: ', aFunction);
const isInstance = aFunction instanceof ExampleConstructor;
console.log('is aFunction an instance of ExampleConstructors? ', isInstance);
