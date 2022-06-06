-- CreateTable
CREATE TABLE "PrismaUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "PrismaUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrismaUser_username_key" ON "PrismaUser"("username");
