import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './db';

dotenv.config({
  path: './config/.env'
});

const dbUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@budgetmanager.sslaq.mongodb.net/?retryWrites=true&w=majority&appName=BudgetManager`;

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send('Express + TypeScript Server');
});

app.post('/', (req: Request, res: Response) => {
  res.statusCode = 201
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  connectMongoDB(dbUrl);
});