import { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma.db";

const create = async (id: number, newTimetableData: Prisma.JsonObject) => {
  const timetable = await prisma.timetable.create({
    data: {
      userId: id,
      timetableData: newTimetableData,
    },
  });

  return timetable;
};

const get = async (id: string) => {
  const timetable = await prisma.timetable.findUniqueOrThrow({
    where: { id: Number(id) },
  });

  return timetable;
};

const update = async (id: string, newTimetableData: Prisma.JsonObject) => {
  const timetable = await prisma.timetable.update({
    where: {
      id: Number(id),
    },
    data: {
      timetableData: newTimetableData,
    },
  });

  return timetable;
};

const remove = async (id: string) => {
  const timetable = await prisma.timetable.delete({
    where: { id: Number(id) },
  });

  return timetable;
};

export default {
  create,
  get,
  update,
  remove,
};
