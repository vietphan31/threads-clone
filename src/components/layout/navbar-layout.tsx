"use client";

import { useModal } from "@/hooks/use-modal-store";
import { cn } from "@/lib/utils";
import { HeartIcon, HomeIcon, PenSquareIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface NavbarLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const NavbarLayout = ({ className }: NavbarLayoutProps) => {
  const currentRoute = usePathname();
  const { onOpen } = useModal();

  const itemClassName =
    "flex flex-1 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700";
  const iconClassName = (path: string) => cn("text-zinc-400", currentRoute === path && "text-black dark:text-white");

  return (
    <div className={cn("item-center flex h-full w-[620px] max-w-full justify-center gap-x-2 py-2", className)}>
      <Link href="/" className={itemClassName}>
        <HomeIcon className={iconClassName("/")} />
      </Link>
      <Link href="/search" className={itemClassName}>
        <SearchIcon className={iconClassName("/search")} />
      </Link>
      <button className={itemClassName} onClick={() => onOpen("createThread")}>
        <PenSquareIcon className="text-zinc-400" />
      </button>
      <Link href="/activity" className={itemClassName}>
        <HeartIcon className={iconClassName("/activity")} />
      </Link>
      <Link href="/me" className={itemClassName}>
        <UserIcon className={iconClassName("/me")} />
      </Link>
    </div>
  );
};

export default NavbarLayout;
