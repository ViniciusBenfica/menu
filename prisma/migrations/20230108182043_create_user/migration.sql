-- CreateTable
CREATE TABLE "Itens" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Itens_pkey" PRIMARY KEY ("id")
);
