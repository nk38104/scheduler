import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello there!");
});

app.listen(port || 5000, (): void => {
  console.log(`Server running on port ${port}...`);
});
