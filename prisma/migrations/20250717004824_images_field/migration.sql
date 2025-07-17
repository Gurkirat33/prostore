-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT[],
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "category" SET DATA TYPE TEXT;
