import Link from "next/link";

import { Routes } from "@/types/routes";
import { currentUser } from "@/lib/auth";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/user-menu";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  return (
    <div>
      <header className="h-14 w-full flex px-4 sm:px-16 py-2 items-center justify-between border-b-slate-100 border border-solid">
        <Badge variant="secondary">boilerplate</Badge>
        <div className="flex gap-x-4 items-center">
          <ModeToggle />
          {user ? (
            <UserMenu>
              <Avatar className="size-9">
                {user.image && (
                  <AvatarImage src={user.image} alt={user.name ?? "Avatar"} />
                )}
                <AvatarFallback>{user.name?.at(0)}</AvatarFallback>
              </Avatar>
            </UserMenu>
          ) : (
            <Button size="sm" asChild>
              <Link href={Routes.Login}>Sign in</Link>
            </Button>
          )}
        </div>
      </header>
      {children}
    </div>
  );
}
