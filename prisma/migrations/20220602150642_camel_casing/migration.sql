/*
  Warnings:

  - You are about to drop the column `datecompleted` on the `ToDo` table. All the data in the column will be lost.
  - You are about to drop the column `taskname` on the `ToDo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ToDo" DROP COLUMN "datecompleted",
DROP COLUMN "taskname",
ADD COLUMN     "dateCompleted" TIMESTAMP(3),
ADD COLUMN     "taskName" TEXT;
