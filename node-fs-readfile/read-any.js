import { readFile } from 'node:fs/promises';
try {
  const file = await readFile(`${process.argv[2]}`, 'utf8');
  console.log(file);
} catch (err) {
  console.log('Error: ', err.message);
}
