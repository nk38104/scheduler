import express, { Application, Request, Response } from "express";
import cors from "cors";
import server from "./config/server";

const port = server.port;
const hostname = server.hostname;
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello there!");
});

app.listen(port, (): void => {
  console.log(`Server running at 'http://${hostname}:${port}' ...`);
});
