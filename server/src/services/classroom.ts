import { prisma } from "../utils/prisma.db";

const create = async (userId: number, name: string, capacity: number) => {
  const classroom = await prisma.classroom.create({
    data: {
      userId,
      name,
      capacity,
    },
  });

  return classroom;
};

const get = async (id: string) => {
  const classroom = await prisma.classroom.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return classroom;
};

const getAll = async () => {
  const classroom = await prisma.classroom.findMany();

  return classroom;
};

const update = async (id: number, name: string, capacity: number) => {
  const classroom = await prisma.classroom.update({
    where: { id },
    data: {
      name,
      capacity,
    },
  });

  return classroom;
};

const remove = async (id: number) => {
  const classroom = await prisma.classroom.delete({
    where: { id },
  });

  return classroom;
};

export default {
  create,
  get,
  getAll,
  update,
  remove,
};
