import * as dotenv from "dotenv";

dotenv.config();

export const serverConfig = {
  hostname: process.env.HOST || "localhost",
  port: process.env.PORT || 8000,
};
