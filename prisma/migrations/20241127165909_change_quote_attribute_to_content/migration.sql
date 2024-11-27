/*
  Warnings:

  - You are about to drop the column `quote` on the `quote` table. All the data in the column will be lost.
  - Added the required column `content` to the `quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quote" DROP COLUMN "quote",
ADD COLUMN     "content" TEXT NOT NULL;
