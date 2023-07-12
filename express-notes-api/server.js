import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

async function fileReader() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function fileWriter(data, res) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

function handleError(res, err) {
  console.error(err);
  res.status(500).json({ error: 'an unexpected error has occurred' });
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await fileReader();
    const notesArr = [];
    for (const note in data.notes) {
      notesArr.push(data.notes[note]);
    }
    res.status(200).json(notesArr);
  } catch (err) {
    handleError(res, err);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await fileReader();
    const id = req.params.id;
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'invalid id. Positive integer expected' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `id ${id} not found` });
      return;
    }
    res.status(200).json(data.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const data = await fileReader();
    const newNote = {
      id: data.nextId++,
      content: req.body.content,
    };
    data.notes[newNote.id] = newNote;
    await fileWriter(data, res);
    res.status(201).json(newNote);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fileReader();

    if (id <= 0 || isNaN(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete data.notes[id];
    await fileWriter(data, res);
    res.sendStatus(204);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fileReader();
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field.' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    data.notes[id].content = req.body.content;
    await fileWriter(data, res);
    res.status(200).json(data.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
