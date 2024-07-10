import { CiMenuBurger } from "react-icons/ci";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 shadow-bottom">
        <div className="">🖥️ Developer. Seoyeon</div>
        <div className="cursor-pointer">
          <CiMenuBurger size={35} color="#A5A5A5" />
        </div>
      </header>
      <div className="w-3/5 mt-16"></div>
    </div>
  );
}
