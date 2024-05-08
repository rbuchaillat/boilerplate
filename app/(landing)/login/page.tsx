import { SignInWithGitHub, SignInWithGoogle } from "@/components/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Sign in to your account with Google or Github
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <SignInWithGoogle />
          <SignInWithGitHub />
        </div>
      </CardContent>
    </Card>
  );
}
