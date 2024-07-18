import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 w-full  h-16 dark:bg-black flex justify-center items-center backdrop-blur-sm border-b-[1px] border-white/20">
      <div className="w-full flex justify-between items-center px-6 max-w-[70rem]">
        <h1 className="text-white/60 text-lg font-bold cursor-default dark:text-indigo-500">
          Seo&apos; Portfolio
        </h1>
        <div className="gap-3 md:gap-10 flex">
          <NavLink href="/home">HOME</NavLink>
          <NavLink href="/">ABOUT ME</NavLink>
          <NavLink href="/project">PROJECT</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
