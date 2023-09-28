"use client";

import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import ThreadsLogo from "@/assets/icons/threads-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavbarLayout from "./navbar-layout";

const HeaderLayout = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <header className="container fixed left-1/2 top-0 flex h-20 w-full -translate-x-1/2 items-center justify-between px-5">
        <Link href="/" className="group block">
          <ThreadsLogo className="transition-transform group-hover:scale-110 dark:fill-white" />
        </Link>

        <NavbarLayout className="hidden sm:flex" />
        <div className="group">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MenuIcon className="text-zinc-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
              <DropdownMenuItem
                className="text-base font-semibold"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                Switch appearance
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-300" />
              <DropdownMenuItem className="text-base font-semibold">About</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-300" />
              <DropdownMenuItem className="text-base font-semibold">Report a problem</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-300" />
              <DropdownMenuItem className="text-base font-semibold">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
