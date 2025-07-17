import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(+value)),
    "price must have exaclty 2 decimal places"
  );

// schema for interting products
export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be less than 100 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 charcters long"),
  brand: z.string().min(3, "brand must be at least 3 charcters long"),
  category: z.string().min(3, "Category must be at least 3 charcters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 charcters long"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
