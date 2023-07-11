import express from 'express';
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArr = [];
  for (const grade in grades) {
    gradeArr.push(grades[grade]);
  }
  res.status(201).json(gradeArr);
});

app.use(express.json());

let nextId = 1;
app.post('/api/grades/', (req, res) => {
  const obj = req.body;
  obj.id = nextId++;
  grades[obj.id] = obj;
  res.json(obj);
});

app.listen('8080', () => console.log('Listening to port 8080'));
