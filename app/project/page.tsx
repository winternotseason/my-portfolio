import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="flex flex-col w-[70rem] mt-16 pt-10 relative">
        <ul className="flex gap-4 font-semibold text-lg">
          <li>🗂️ All</li>
          <li>📁 React</li>
          <li>📁 NextJS</li>
        </ul>
        <ul className="grid grid-cols-2 mt-20">
          <li className="relative w-[32rem] h-[24rem] border-2 p-2 group rounded-md">
            <Image
              src="/MINE.png"
              fill
              alt="mine"
              className="hover:brightness-25 rounded-md"
            />
            <div className="flex flex-col justify-center px-4 w-[32rem] h-[24rem] absolute box-border text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-5xl font-bold">MINE</p>
              <p className="text-lg font-semibold mt-7">
                네이버 검색 쇼핑 api를 활용한 프론트엔드 쇼핑몰 구현 프로젝트
              </p>
              <p className="text-lg font-semibold">
                NextJS, CSS-module, MongoDB, Vercel
              </p>
              <p>2024.06.27-2024.07.11</p>
              <p>황서연 (개인개발)</p>
            </div>
          </li>
          <li className="relative w-[32rem] h-[24rem] border-2 p-2 group rounded-md">
            <Image
              src="/MINE.png"
              fill
              alt="mine"
              className="hover:brightness-25 rounded-md"
            />
            <div className="flex flex-col justify-center  w-[32rem] h-[24rem] absolute box-border text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-5xl font-bold">MINE</p>
              <p className="text-lg font-semibold mt-7">
                네이버 검색 쇼핑 api를 활용한 프론트엔드 쇼핑몰 구현 프로젝트
              </p>
              <p className="text-lg font-semibold">
                NextJS, CSS-module, MongoDB, Vercel
              </p>
              <p>2024.06.27-2024.07.11</p>
              <p>황서연 (개인개발)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
