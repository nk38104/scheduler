import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  /* eslint no-var: "off" */
  var _prisma: PrismaClient | undefined; // This must be a `var` and not a `let / const`
}

if (!global._prisma) {
  global._prisma = new PrismaClient();
}

/* eslint prefer-const: "off" */
prisma = global._prisma;

export { prisma };
