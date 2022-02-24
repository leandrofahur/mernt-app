import express, { Application } from 'express';
import cors from 'cors';

import { routes } from './routes';
import { connectDB } from './database';

import 'dotenv/config';
import { checkServer } from '@middlewares/checkServer';

const app: Application = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(checkServer);

export { app };
