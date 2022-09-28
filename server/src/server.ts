import express, { Application } from "express";
import cors from "cors";
import router from "./routes";
import server from "./config/server";

const port = server.port;
const hostname = server.hostname;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  }),
);
app.use("/api", router);

app.listen(port, (): void => {
  console.log(`Server running at 'http://${hostname}:${port}' ...`);
});
