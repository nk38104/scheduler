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

const get = async (id: number) => {
  const timetable = await prisma.timetable.findUniqueOrThrow({
    where: { userId: id },
  });

  return timetable;
};

const update = async (id: number, newTimetableData: Prisma.JsonObject) => {
  const timetable = await prisma.timetable.update({
    where: {
      userId: id,
    },
    data: {
      timetableData: newTimetableData,
    },
  });

  return timetable;
};

const remove = async (id: number) => {
  const timetable = await prisma.timetable.delete({
    where: { id },
  });

  return timetable;
};

export default {
  create,
  get,
  update,
  remove,
};
