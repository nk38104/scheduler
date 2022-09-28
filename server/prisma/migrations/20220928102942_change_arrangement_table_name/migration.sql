/*
  Warnings:

  - You are about to drop the `ClassesOnSubjectsOnTeachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassesOnSubjectsOnTeachers" DROP CONSTRAINT "ClassesOnSubjectsOnTeachers_classId_fkey";

-- DropForeignKey
ALTER TABLE "ClassesOnSubjectsOnTeachers" DROP CONSTRAINT "ClassesOnSubjectsOnTeachers_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "ClassesOnSubjectsOnTeachers" DROP CONSTRAINT "ClassesOnSubjectsOnTeachers_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "ClassesOnSubjectsOnTeachers" DROP CONSTRAINT "ClassesOnSubjectsOnTeachers_userId_fkey";

-- DropTable
DROP TABLE "ClassesOnSubjectsOnTeachers";

-- CreateTable
CREATE TABLE "Arrangement" (
    "userId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Arrangement_pkey" PRIMARY KEY ("userId","classId","teacherId","subjectId")
);

-- AddForeignKey
ALTER TABLE "Arrangement" ADD CONSTRAINT "Arrangement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arrangement" ADD CONSTRAINT "Arrangement_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arrangement" ADD CONSTRAINT "Arrangement_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arrangement" ADD CONSTRAINT "Arrangement_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
