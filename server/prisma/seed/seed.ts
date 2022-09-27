import { classes, classrooms, subjects, teachers, timetables, user } from "./data/index";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await createUser();

  await prisma.$transaction([
    prisma.timetable.createMany({
      data: timetables.map((timetable) => ({ ...timetable, userId: user.id })),
    }),
    prisma.classroom.createMany({
      data: classrooms.map((classroom) => ({ ...classroom, userId: user.id })),
    }),
    prisma.teacher.createMany({
      data: teachers.map((teacher) => ({ ...teacher, userId: user.id })),
    }),
    prisma.subject.createMany({
      data: subjects.map((subject) => ({ ...subject, userId: user.id })),
    }),
    prisma.class.createMany({
      data: classes.map((schoolClass) => ({ ...schoolClass, userId: user.id })),
    }),
  ]);
}

async function createUser() {
  const userExists = await prisma.user.findFirst();

  if (userExists) throw Error("User already exits. Please, change user seed data.");

  return await prisma.user.create({
    data: user,
  });
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Successfully seeded database. Closing connection.");
    prisma.$disconnect();
  });
