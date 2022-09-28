import { prisma } from "../utils/prisma.db";

const get = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

export default {
  get,
};
