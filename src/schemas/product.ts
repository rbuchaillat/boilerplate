import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(2).max(50),
});

export type ProductType = z.infer<typeof ProductSchema>;
