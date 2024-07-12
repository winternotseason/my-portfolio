"use client";

import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
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
          <MdOutlineWbSunny color="#000000"size={30} />
        ) : (
          <IoMoonOutline color="#edb60f" size={30} />
        )}
      </button>
    </div>
  );
}
