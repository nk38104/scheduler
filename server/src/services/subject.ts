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

const get = async (id: string) => {
  const subject = await prisma.subject.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return subject;
};

const getAll = async () => {
  const subject = await prisma.subject.findMany();

  return subject;
};

const update = async (
  id: string,
  subjectCode: string,
  name: string,
  hoursPerWeek: number,
  maxHoursPerDay: number,
) => {
  const subject = await prisma.subject.update({
    where: { id: Number(id) },
    data: {
      subjectCode,
      name,
      hoursPerWeek,
      maxHoursPerDay,
    },
  });

  return subject;
};

const remove = async (id: string) => {
  const subject = await prisma.subject.delete({
    where: { id: Number(id) },
  });

  return subject;
};

export default {
  create,
  get,
  getAll,
  update,
  remove,
};
