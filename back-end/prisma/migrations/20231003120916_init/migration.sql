-- CreateTable
CREATE TABLE "clicks" (
    "id" SERIAL NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "clicks_pkey" PRIMARY KEY ("id")
);
