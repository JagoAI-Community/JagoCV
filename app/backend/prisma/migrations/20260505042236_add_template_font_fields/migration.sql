-- Add template, font, color columns to Document table
ALTER TABLE "Document" ADD COLUMN "templateId" TEXT DEFAULT 'standard';
ALTER TABLE "Document" ADD COLUMN "fontFamily" TEXT DEFAULT 'Inter';
ALTER TABLE "Document" ADD COLUMN "themeColor" TEXT DEFAULT 'blue';
