import { readFile } from 'node:fs/promises';
try {
  // obtaining the file list using array destructuring
  const [, , ...fileList] = process.argv;
  // making the read promise array
  const fileListReadPromise = fileList.map((item) => readFile(item, 'utf8'));
  // executing the promises all at once
  const concatTextArray = await Promise.all(fileListReadPromise);
  // joining array elements as text
  const concatText = concatTextArray.join('');
  // log the text
  console.log(concatText);
} catch (err) {
  console.log('Error: ', err.message);
}
