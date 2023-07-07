import { writeFile } from 'node:fs/promises';
try {
  const data = `${Math.random().toString()} \n`;
  await writeFile('random.txt', data, 'utf8');
} catch (err) {
  console.log('Error: ', err.message);
}
