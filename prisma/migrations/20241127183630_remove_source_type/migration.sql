/*
  Warnings:

  - You are about to drop the column `sourceType` on the `Quote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "sourceType";

-- DropEnum
DROP TYPE "SourceType";
