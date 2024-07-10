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
    <header className="fixed bg-white z-10 top-0 w-full flex justify-between items-center px-6 h-16 shadow-bottom">
      <div
        className="font-bold text-lg cursor-pointer"
        onClick={() => {
          handleNavigate("/");
        }}
      >
        Dev. Seoyeon
      </div>
      <ul className="flex gap-10 font-semibold">
        <li className="cursor-pointer" onClick={() => handleNavigate("/")}>
          HOME
        </li>
        <li className="cursor-pointer" onClick={() => handleNavigate("/about")}>
          ABOUT ME
        </li>
        <li className="cursor-pointer">PROJECT</li>
        <li className="cursor-pointer"onClick={() => handleNavigate("/board")}>ONE WORD</li>
      </ul>
    </header>
  );
};

export default Header;
