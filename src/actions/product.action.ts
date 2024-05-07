"use server";

import { prisma } from "@/lib/prisma";
import { authAction } from "@/lib/safe-action";
import { ProductSchema } from "@/schemas/product.schema";

export const createProductAction = authAction(
  ProductSchema,
  async (input, context) => {
    const product = await prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return product;
  }
);
