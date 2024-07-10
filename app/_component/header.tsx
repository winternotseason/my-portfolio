"use client";

import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 shadow-bottom">
      <div className="">🖥️ Developer. Seoyeon</div>
      <ul className="flex gap-10">
        <li onClick={()=>router.push('/')}>HOME</li>
        <li onClick={()=>router.push('/about')}>ABOUT ME</li>
        <li>PROJECT</li>
        <li>ONE WORD</li>
      </ul>
    </header>
  );
};

export default Header;
