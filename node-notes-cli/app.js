import { readFile, writeFile } from 'node:fs/promises';

// define operations
const getOperation = { read, create, delete: deleteEntry, update };
// try catch phases

try {
  let data = await readFile('data.json', 'utf-8');
  data = JSON.parse(data);
  const operation = process.argv[2];
  if (Object.keys(getOperation).includes(operation)) {
    getOperation[operation](data);
  } else {
    throw new Error(
      `Operation ${operation} is not defined. Try create, read, update, delete only`
    );
  }
} catch (err) {
  console.log('Error: ', err);
  process.exit(1);
}

// operation functions
function read(data) {
  for (const entryId in data.notes) {
    console.log(`${entryId}: ${data.notes[entryId]}`);
  }
}

async function create(data) {
  const text = process.argv[3];
  data.nextId++;
  const id = data.nextId.toString();
  data.notes[id] = text;
  console.log(`Entry ${id} has been successfully created`);
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}

async function deleteEntry(data) {
  const id = process.argv[3];
  if (Object.keys(data.notes).includes(id)) {
    delete data.notes[id];
    console.log(`Entry ${id} has been successfully deleted`);
  } else {
    throw new Error(`Entry ${id} does not exist`);
  }
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}

async function update(data) {
  const id = process.argv[3];
  const text = process.argv[4];
  if (Object.keys(data.notes).includes(id)) {
    data.notes[id] = text;
    console.log(`Entry ${id} has been successfully updated`);
  } else {
    throw new Error(`Entry ${id} does not exist`);
  }
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}
