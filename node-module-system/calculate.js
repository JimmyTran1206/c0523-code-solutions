import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const arg1 = process.argv[2];
const operation = process.argv[3];
const arg2 = process.argv[4];

const operationObj = {
  plus: add,
  minus: subtract,
  times: multiply,
  over: divide,
};

// Output Results
if (Object.keys(operationObj).includes(operation)) {
  console.log('Result: ', operationObj[operation](+arg1, +arg2));
} else {
  console.log('Invalid Operations');
}
