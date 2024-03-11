/*
  Warnings:

  - Made the column `cep` on table `organizations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `organizations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "organizations" ALTER COLUMN "cep" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;
