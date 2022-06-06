-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskname" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "datecompleted" TIMESTAMP(3),
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
