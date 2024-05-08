import { redirect } from "next/navigation";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { Routes } from "@/types/routes";
import { prisma } from "./prisma";
import { User } from "@prisma/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
});

export const currentUser = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const user = session.user as User;

  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect(Routes.Logout);
  }

  return user;
};
