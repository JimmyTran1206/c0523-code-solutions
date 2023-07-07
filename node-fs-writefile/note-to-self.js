import { writeFile } from 'node:fs/promises';
try {
  const [, , ...data] = process.argv;
  await writeFile('note.txt', data.join(' \n'), 'utf8');
} catch (err) {
  console.log('Error: ', err.message);
}
