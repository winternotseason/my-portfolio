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
    <Link href={href} className="inline-block hover:after:scale-x-100 after:transition-all duration-75 relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:scale-x-0 after:bottom-0 after:left-0 after:bg-indigo-500">
      {children}
    </Link>
  );
}

/*
 path === href
          ? " text-white/100 font-light hover:text-white/80"
          : " text-white/60 hover:text-white/80  font-light" */
