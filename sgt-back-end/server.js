import express from 'express';
import pg from 'pg';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

const app = express();
app.use(express.json());
app.use(errorMiddleware);

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const queryObj = {
  get: `
    select *
      from "grades"`,
  getId: `
    select *
      from "grades"
      where "gradeId" = $1`,
  post: `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;`,
  put: `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *;`,
  delete: `
    delete
    from "grades"
    where "gradeId" = $1
    returning*;`,
};

app.get('/api/grades', async (req, res, next) => {
  try {
    const queryString = queryObj.get;
    const result = await db.query(queryString);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const queryString = queryObj.getId;
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const params = [gradeId];
    const result = await db.query(queryString, params);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    validateName(name);
    validateCourse(course);
    validateScore(score);
    const querytString = queryObj.post;
    const params = [name, course, score];
    const result = await db.query(querytString, params);
    res.status(201).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    validateGradeId(gradeId);
    validateName(name);
    validateCourse(course);
    validateScore(score);
    const queryString = queryObj.put;
    const params = [gradeId, name, course, score];
    const result = await db.query(queryString, params);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.status(204).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const queryString = queryObj.delete;
    const params = [gradeId];
    const result = await db.query(queryString, params);
    const grade = result.rows[0];
    console.log(grade);
    validateGrade(grade, gradeId);
    const deletedData = JSON.stringify(grade);
    res
      .status(201)
      .send(`The data with Id ${gradeId} has been deleted:\n ${deletedData}`);
  } catch (err) {
    next(err);
  }
});

// Erorr handling fucntions
function validateGradeId(gradeId) {
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    throw new ClientError(400, `gradeId must be a positive integer`);
  }
}

function validateGrade(grade, gradeId) {
  if (!grade) {
    throw new ClientError(404, `cannot find grade with "gradeId" ${gradeId}`);
  }
}

function validateName(name) {
  if (!name) {
    throw new ClientError(400, `name is required`);
  }
}

function validateCourse(course) {
  if (!course) {
    throw new ClientError(400, `course is required`);
  }
}

function validateScore(score) {
  if (!score || Number.isNaN(score) || score < 0 || score > 100) {
    throw new ClientError(400, `score must be a number between 0 and 100`);
  }
}

app.listen(8080, () => console.log('Listenning to port 8080'));
