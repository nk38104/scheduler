import { prisma } from "../utils/prisma.db";

const get = async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return user;
};

const update = async (id: string, email: string) => {
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      email,
    },
  });

  return user;
};

const remove = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });

  return user;
};

export default {
  get,
  update,
  remove,
};
