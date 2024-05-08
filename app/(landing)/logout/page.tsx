import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Routes } from "@/types/routes";

export default function LogoutPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Leaving already?</CardTitle>
        <CardDescription>
          Did you know? There is no need to disconnect from Boilerplate every
          time. You should only do so if you are on a shared or public computer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" asChild>
          <Link href={Routes.Login}>Sign in</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
