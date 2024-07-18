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
          ? " text-white/100 font-light hover:text-white/80"
          : " text-white/60 hover:text-white/80  font-light"
      }
    >
      <div>{children}</div>
    </Link>
  );
}
