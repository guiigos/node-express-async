import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import async from './middlewares/async.js';
import usage from './routes/usage.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(async());

app.use('/usage', usage);

app.use((req, res, next) => {
  res.promise(Promise.reject(404));
});
app.use((err, req, res, next) => {
  res.promise(Promise.reject(err));
});

export default app;
