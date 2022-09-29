import { prisma } from "../utils/prisma.db";

const create = async (userId: number, name: string, studentCount: number) => {
  const schoolClass = await prisma.class.create({
    data: {
      userId,
      name,
      studentCount,
    },
  });

  return schoolClass;
};

const get = async (id: string) => {
  const schoolClass = await prisma.class.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return schoolClass;
};

const getAll = async (userId: number) => {
  const schoolClass = await prisma.class.findMany({
    where: {
      userId,
    },
  });

  return schoolClass;
};

const update = async (id: string, name: string, studentCount: number) => {
  const schoolClass = await prisma.class.update({
    where: { id: Number(id) },
    data: {
      name,
      studentCount,
    },
  });

  return schoolClass;
};

const remove = async (id: string) => {
  const schoolClass = await prisma.class.delete({
    where: { id: Number(id) },
  });

  return schoolClass;
};

export default {
  create,
  get,
  getAll,
  update,
  remove,
};
