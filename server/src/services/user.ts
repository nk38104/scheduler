import { prisma } from "../utils/prisma.db";

const get = async (id: number) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
  });

  return user;
};

const update = async (id: number, email: string) => {
  const updateUser = await prisma.user.update({
    where: { id },
    data: {
      email,
    },
  });

  return updateUser;
};

export default {
  get,
  update,
};
