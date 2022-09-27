import bcrypt from "bcrypt";

export const user = {
  email: "admin@skula.com",
  password: bcrypt.hashSync("admin1234", parseInt(process.env.SALT_ROUNDS || "10")),
};
