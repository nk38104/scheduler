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

const getById = async (id: number) => {
  const schoolClass = await prisma.class.findUniqueOrThrow({
    where: { id },
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

const update = async (id: number, name: string, studentCount: number) => {
  const schoolClass = await prisma.class.update({
    where: { id },
    data: {
      name,
      studentCount,
    },
  });

  return schoolClass;
};

const remove = async (id: number) => {
  const schoolClass = await prisma.class.delete({
    where: { id },
  });

  return schoolClass;
};

export default {
  create,
  getById,
  getAll,
  update,
  remove,
};
