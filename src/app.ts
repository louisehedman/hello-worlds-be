import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello Worlds!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
