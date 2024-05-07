"use server";

import { signIn, signOut } from "@/lib/auth";
import { Routes } from "@/types/routes.type";

export const signInWithGitHubAction = async () => {
  await signIn("github", { redirectTo: Routes.Dashboard });
};

export const signInWithGoogleAction = async () => {
  await signIn("google", { redirectTo: Routes.Dashboard });
};

export const signOutAction = async () => {
  await signOut();
};
