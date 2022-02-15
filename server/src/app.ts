import express, { Application, Request, Response } from 'express';
import { routes } from './routes';
import { connectDB } from './database';
import 'dotenv/config';
import { checkError } from './middlewares/checkError';

const app: Application = express();

connectDB();

app.use(express.json());
app.use(routes);
app.use(checkError);

export { app };
