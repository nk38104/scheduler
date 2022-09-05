import express, { Request, Response, Application } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello there!");
});

app.listen(3000, (): void => {
  console.log(`Server running on port 3000...`);
});
