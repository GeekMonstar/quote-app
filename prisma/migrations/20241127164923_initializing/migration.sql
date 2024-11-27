-- CreateEnum
CREATE TYPE "QuoteType" AS ENUM ('INSPIRATIONAL', 'MOTIVATIONAL', 'LOVE', 'LIFE', 'FRIENDSHIP', 'FUNNY', 'PHILOSOPHICAL', 'LITERATURE', 'MEME', 'OTHER');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('BOOK', 'MOVIE', 'SONG', 'TV_SHOW', 'OTHER');

-- CreateTable
CREATE TABLE "quotes" (
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

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);
