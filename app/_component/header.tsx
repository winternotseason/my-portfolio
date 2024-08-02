"use client";

import { useState } from "react";
import ThemeButton from "./ThemeButton";
import SideMenu from "./SideMenu";

const style =
  "w-5 h-[2px] bg-black/70 rounded-xl transition-transform duration-300 ease-in-out dark:bg-white";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="fixed z-50 top-0 w-full h-16 dark:bg-black dark:shadow-lg dark:shadow-gray-800 flex justify-center items-center bg-primary transition-colors duration-200">
      <div className="w-full flex justify-between items-center px-6 max-w-[90rem]">
        <h1 className="text-lg md:text-xl font-bold cursor-default dark:text-white">
          👩🏻‍💻 Portfolio
        </h1>
        {/* toggle DarkMode */}
        <div className="flex space-x-3">
          <ThemeButton />
          {/* toggle SideMenu */}
          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="flex flex-col space-y-2 cursor-pointer border-[1px] w-10 h-10 rounded-full p-1 items-center justify-center hover:bg-gray-200"
          >
            <span
              className={`${style} ${
                isMenuOpen && "translate-y-[5px] rotate-45"
              }`}
            />
            <span
              className={`${style} ${
                isMenuOpen && "-translate-y-[5px] -rotate-45"
              }`}
            />
          </div>
        </div>
      </div>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
//
