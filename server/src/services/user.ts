import { prisma } from "../utils/prisma.db";

const get = async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return user;
};

const update = async (id: number, email: string) => {
  const user = await prisma.user.update({
    where: { id },
    data: {
      email,
    },
  });

  return user;
};

const remove = async (id: number) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};

export default {
  get,
  update,
  remove,
};
