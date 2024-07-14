"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex z-10 bg-white items-center justify-center fixed bottom-8 right-10 border-2 border-gray-100 w-14 h-14 shadow-lg rounded-full">
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <Image
            src="/sun.svg"
            width={30}
            height={30}
            alt="sun"
          />
        ) : (
          <Image
            src="/moon.svg"
            width={30}
            height={30}
            alt="moon"
          />
        )}
      </button>
    </div>
  );
}
