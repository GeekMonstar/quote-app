/*
  Warnings:

  - You are about to drop the `quotes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "quotes";

-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL,
    "quoteType" "QuoteType" NOT NULL,
    "quote" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "sourceType" "SourceType" NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);
