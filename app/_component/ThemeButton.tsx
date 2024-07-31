"use client";

import { useTheme } from "next-themes";


export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="flex justify-center items-center w-10 h-10 border-[1px] rounded-full cursor-pointer hover:bg-gray-200 group"
    >
      {/* main circle */}
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-r ${
          theme === "dark"
            ? "from-red-600 to-orange-400"
            : "from-purple-800 to-indigo-300"
        }  relative`}
      >
        {/* mini circle */}
        <div
          className={`absolute right-0 w-4 h-4 rounded-full bg-white group-hover:bg-gray-200 transition-transform duration-300 ${
            theme === "dark" && "scale-0"
          }`}
        />
      </div>
    </div>
  );
}
