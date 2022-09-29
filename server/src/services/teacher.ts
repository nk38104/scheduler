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

const get = async (id: string) => {
  const teacher = await prisma.teacher.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return teacher;
};

const getAll = async () => {
  const teacher = await prisma.teacher.findMany();

  return teacher;
};

const update = async (id: string, teacherCode: string, firstName: string, lastName: string) => {
  const teacher = await prisma.teacher.update({
    where: { id: Number(id) },
    data: {
      teacherCode,
      firstName,
      lastName,
    },
  });

  return teacher;
};

const remove = async (id: string) => {
  const teacher = await prisma.teacher.delete({
    where: { id: Number(id) },
  });

  return teacher;
};

export default {
  create,
  get,
  getAll,
  update,
  remove,
};
