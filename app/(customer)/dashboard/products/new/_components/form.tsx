"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProductSchema, type ProductType } from "@/schemas/product";
import { createProductAction } from "@/actions/product";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Routes } from "@/types/routes";

export function NewProductForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ProductType) => {
      const { data, serverError } = await createProductAction(values);
      if (serverError || !data) {
        toast({
          title: "Product was not created!",
          description: serverError,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Product created!",
      });
      router.push(Routes.Products);
    },
  });

  async function onSubmit(values: ProductType) {
    await mutation.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
