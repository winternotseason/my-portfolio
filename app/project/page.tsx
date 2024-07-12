"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Project = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="flex flex-col w-3/4 md:w-[70rem] md:mt-16 md:pt-10 mt-5 relative">
        <ul className="grid md:grid-cols-2 gap-10 md:gap-3 mt-20 pb-10 justify-center md:justify-normal">
          <li className="relative w-72 h-52 md:w-[32rem] md:h-[24rem] border-2 p-2 group rounded-md">
            <Image
              src="/MINE.png"
              fill
              alt="mine"
              className="hover:brightness-25 rounded-md"
            />
            <div className="flex flex-col justify-center px-4 w-72 h-52 md:w-[32rem] md:h-[24rem] absolute top-0 left-0 box-border text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl md:text-5xl font-bold">MINE</p>
              <p className="text-xs md:text-lg font-semibold mt-3 md:mt-7">
                네이버 검색 쇼핑 api를 활용한 프론트엔드 쇼핑몰 구현 프로젝트
              </p>
              <p className="text-xs md:text-lg font-semibold">
                NextJS, CSS-module, MongoDB, Vercel
              </p>
              <p className="text-xs md:text-base mt-1 md:mt-0">2024.06.27-2024.07.11</p>
              <p className="text-xs md:text-base">황서연 (개인개발)</p>
            </div>
          </li>
          <li className="relative w-72 h-52 md:w-[32rem] md:h-[24rem]  border-2 p-2 group rounded-md">
            <Image
              src="/moviefinder.png"
              fill
              alt="mine"
              className="hover:brightness-25 rounded-md"
            />
            <div className="flex flex-col justify-center px-4 w-72 h-52 md:w-[32rem] md:h-[24rem] absolute top-0 left-0 box-border text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl md:text-5xl font-bold">MOVIE FINDER</p>
              <p className="text-xs md:text-lg font-semibold mt-3 md:mt-7">
                TMDB Open API를 활용한 영화 검색 앱
              </p>
              <p className="text-xs md:text-lg font-semibold">
                React, Javascript, Styled-components
              </p>
              <p className="text-xs md:text-base mt-1 md:mt-0">
                2024.05.30-2024.06.11
              </p>
              <p className="text-xs md:text-base">황서연 (개인개발)</p>
            </div>
          </li>
          <li className="relative w-72 h-52 md:w-[32rem] md:h-[24rem]  border-2 p-2 group rounded-md md:mt-10">
            <Image
              src="/TOYINMAC.png"
              fill
              alt="mine"
              className="hover:brightness-25 rounded-md"
            />
            <div className="flex flex-col justify-center px-4 w-72 h-52 md:w-[32rem] md:h-[24rem] absolute top-0 left-0 box-border text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl md:text-5xl font-bold">Toy Project IN Mac</p>
              <p className="text-xs md:text-lg font-semibold mt-3 md:mt-7">
                NextJS의 Prallel/Intercepting routes를 활용한 <br /> MAC UI 속
                토이 프로젝트
              </p>
              <p className="text-xs md:text-lg font-semibold">
                NextJS, Typescript, TailwindCSS
              </p>
              <p className="text-xs md:text-base mt-1 md:mt-0">2024.07.09-2024.07.12</p>
              <p className="text-xs md:text-base">황서연 (개인개발)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
