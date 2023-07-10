import express from 'express';
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.json(gradesArr);
});

app.delete('/api/grades/:id', (req, res) => {
  const userId = req.params.id;
  if (!grades[userId]) {
    res.send(`ID ${userId} not found`);
    res.sendStatus(404);
  } else {
    delete grades[userId];
    res.sendStatus(204);
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080...');
});
