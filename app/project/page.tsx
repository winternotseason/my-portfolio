"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const Project = () => {
  const [index, setIndex] = useState(1);

  const handleLeftClick = () => {
    setIndex(index - 1); // 왼쪽으로 300px 이동
  };

  const handleRightClick = () => {
    setIndex(index + 1); // 오른쪽으로 300px 이동
  };

  return (
    <div className="w-full h-full px-4 pt-2">
      <p className="mt-5 font-light text-sm">
        📑 진행했던 프로젝트들에 관한 간단한 설명이 담긴 페이지입니다.
      </p>
      <div className="mt-8 flex flex-col items-start space-y-1 border-[1px] border-dotted p-3 text-sm overflow-hidden">
        <h1 className="font-medium text-base mb-2">📒 프로젝트명 : MINE</h1>
        <div className="flex w-full relative flex-col justify-center items-center">
          <Image
            src={`/new/mine/mine-pc-${index}.webp`}
            alt="mine-pc"
            width={300}
            height={200}
          />
          <div className="w-full flex justify-center space-x-5">
            <button
              disabled={index === 1}
              className={`${index === 1 && "text-gray-400"} `}
              onClick={handleLeftClick}
            >
              ◀
            </button>
            <button
              disabled={index === 3}
              className={`${index === 3 && "text-gray-400"} `}
              onClick={handleRightClick}
            >
              ▶
            </button>
          </div>
        </div>
        <div className="text-xs">
          <p className="pt-3">
            <span className="font-semibold">
              전국 각지 음식점들의 리뷰를 공유하는 커뮤니티 사이트
            </span>
            입니다.
          </p>
          <p className="pt-2"><span className="font-medium">개발인원</span> · 1명 (개인개발)</p>
          <p className="pt-2 pb-3">
            <span className="font-medium">Skills</span>· NextJS, Typescript, TailwindCSS, react-query, MongoDB
          </p>
        </div>
        <Link href="/" className="self-end mt-3 bg-black text-white py-1 px-2 rounded-2xl text-xs">► Detail</Link>
      </div>
    </div>
  );
};

export default Project;

// pc-2 240px
// pc-3 500px
