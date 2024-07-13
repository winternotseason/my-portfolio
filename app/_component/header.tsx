"use client";

import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    if (path === currentPath) {
      location.reload();
    } else {
      router.push(path);
    }
  };
  return (
    <header className="fixed bg-white z-10 top-0 w-full flex justify-end items-center px-6 h-16 shadow-bottom dark:bg-black">
      <ul className="gap-3 md:gap-10 font-semibold flex text-sm">
        <li className="cursor-pointer" onClick={() => handleNavigate("/")}>
          About
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleNavigate("/project")}
        >
          Project
        </li>
        <li className="cursor-pointer" onClick={() => handleNavigate("/board")}>
          Board
        </li>
      </ul>
    </header>
  );
};

export default Header;
