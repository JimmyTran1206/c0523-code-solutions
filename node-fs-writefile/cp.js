import { writeFile, readFile } from 'node:fs/promises';
try {
  const [, , ...fileList] = process.argv;
  const data = await readFile(fileList[0], 'utf-8');
  await writeFile(fileList[1], data, 'utf8');
} catch (err) {
  console.log('Error: ', err.message);
}
