"use client";

import {
  signInWithGitHubAction,
  signInWithGoogleAction,
  signOutAction,
} from "@/actions/auth";
import { Button } from "./ui/button";

export function SignInWithGitHub() {
  return (
    <Button size="sm" onClick={() => signInWithGitHubAction()}>
      Sign in with GitHub
    </Button>
  );
}

export function SignInWithGoogle() {
  return (
    <Button size="sm" onClick={() => signInWithGoogleAction()}>
      Sign in with Google
    </Button>
  );
}

export function SignOut() {
  return (
    <Button size="sm" onClick={() => signOutAction()}>
      Sign out
    </Button>
  );
}
