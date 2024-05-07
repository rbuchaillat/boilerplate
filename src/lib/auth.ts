import { redirect } from "next/navigation";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { Routes } from "@/types/routes.type";
import { prisma } from "./prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
});

export const currentUser = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  return session.user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect(Routes.Logout);
  }

  return user;
};
