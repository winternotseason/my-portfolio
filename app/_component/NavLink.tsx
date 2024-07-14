"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path === href
          ? "text-lg text-indigo-800 border-b-2 border-indigo-800 hover:text-indigo-400 hover:border-indigo-400 font-semibold dark:text-indigo-500 dark:border-indigo-500"
          : "text-lg text-indigo-800 hover:text-indigo-300 dark:text-indigo-500"
      }
    >
      <div>{children}</div>
    </Link>
  );
}
