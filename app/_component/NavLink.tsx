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
        path === href ? "text-indigo-700 border-b-2 border-indigo-700 hover:text-indigo-400 hover:border-indigo-400" : "text-indigo-700 hover:text-indigo-300"
      }
    >
      <div>{children}</div>
    </Link>
  );
}
