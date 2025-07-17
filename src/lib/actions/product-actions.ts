"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get Latest Products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get Single Product by its slug
export async function getSingleProduct(slug: string) {
  const data = await prisma.product.findUnique({ where: { slug } });
  return convertToPlainObject(data);
}
