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

export default {
  create,
};
