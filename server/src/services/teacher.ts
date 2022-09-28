import { prisma } from "../utils/prisma.db";

const create = async (userId: number, teacherCode: string, firstName: string, lastName: string) => {
  const teacher = await prisma.teacher.create({
    data: {
      userId,
      teacherCode,
      firstName,
      lastName,
    },
  });

  return teacher;
};

const getById = async (id: number) => {
  const teacher = await prisma.teacher.findUniqueOrThrow({
    where: { id },
  });

  return teacher;
};

const getAll = async (userId: number) => {
  const teacher = await prisma.teacher.findMany({
    where: {
      userId,
    },
  });

  return teacher;
};

const update = async (id: number, teacherCode: string, firstName: string, lastName: string) => {
  const teacher = await prisma.teacher.update({
    where: { id },
    data: {
      teacherCode,
      firstName,
      lastName,
    },
  });

  return teacher;
};

const remove = async (id: number) => {
  const teacher = await prisma.teacher.delete({
    where: { id },
  });

  return teacher;
};

export default {
  create,
  getById,
  getAll,
  update,
  remove,
};
