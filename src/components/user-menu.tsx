"use client";

import Link from "next/link";
import { CreditCard, LogOut, User } from "lucide-react";

import { signOutAction } from "@/actions/auth";
import { Routes } from "@/types/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const UserMenu = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={Routes.Dashboard}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOutAction()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
