import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="fixed bg-white z-10 top-0 w-full flex justify-between items-center px-6 h-16 dark:bg-black">
      <h1 className="text-indigo-700 font-bold text-2xl">Dev. SEO</h1>
      <div className="gap-3 md:gap-10 font-medium flex text-sm md:text-lg">
        <NavLink href="/">About</NavLink>
        <NavLink href="/project">Project</NavLink>
      </div>
    </header>
  );
};

export default Header;
