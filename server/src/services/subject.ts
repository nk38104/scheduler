import { prisma } from "../utils/prisma.db";

const create = async (
  userId: number,
  subjectCode: string,
  name: string,
  hoursPerWeek: number,
  maxHoursPerDay: number,
) => {
  const subject = await prisma.subject.create({
    data: {
      userId,
      subjectCode,
      name,
      hoursPerWeek,
      maxHoursPerDay,
    },
  });

  return subject;
};

const getById = async (id: number) => {
  const subject = await prisma.subject.findUniqueOrThrow({
    where: { id },
  });

  return subject;
};

const getAll = async (userId: number) => {
  const subject = await prisma.subject.findMany({
    where: {
      userId,
    },
  });

  return subject;
};

const update = async (
  id: number,
  subjectCode: string,
  name: string,
  hoursPerWeek: number,
  maxHoursPerDay: number,
) => {
  const subject = await prisma.subject.update({
    where: { id },
    data: {
      subjectCode,
      name,
      hoursPerWeek,
      maxHoursPerDay,
    },
  });

  return subject;
};

const remove = async (id: number) => {
  const subject = await prisma.subject.delete({
    where: { id },
  });

  return subject;
};

export default {
  create,
  getById,
  getAll,
  update,
  remove,
};
