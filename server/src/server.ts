import express, { Application, Request, Response } from "express";
import cors from "cors";

const port = process.env.PORT;
const hostname = process.env.HOST;
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello there!");
});

app.listen(port || 5000, (): void => {
  console.log(`Server running at 'http://${hostname}:${port}' ...`);
});
