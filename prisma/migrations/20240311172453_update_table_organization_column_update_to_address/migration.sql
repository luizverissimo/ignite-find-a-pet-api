/*
  Warnings:

  - You are about to drop the column `endereco` on the `organizations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "endereco",
ADD COLUMN     "address" TEXT;
