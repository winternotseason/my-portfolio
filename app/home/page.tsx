"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 6000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <div className="w-full justify-around flex flex-col md:flex-row font-light mt-5">
        {/* 소개 */}
        <div className="flex flex-col justify-center">
          <p>안녕하세요.</p>
          <p>
            프론트엔드 개발자 <span className="font-semibold">황서연</span>
            입니다.
          </p>
          <p>제 포트폴리오 사이트에 방문해주셔서 감사합니다.</p>
        </div>
        {/* 깃허브, 이메일 */}
        <div className="flex items-center mt-5 space-x-4">
          <div className="group flex flex-col justify-center items-center w-16 h-16 rounded-xl bg-white shadow-md hover:bg-black/90 transition-colors duration-300 cursor-pointer">
            <svg
              className="group-hover:fill-white transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p className="text-xs font-medium mt-1 group-hover:text-white transition-colors duration-300">
              Github
            </p>
          </div>
          <div className="group flex flex-col justify-center items-center w-16 h-16 rounded-xl bg-white shadow-md hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
            <svg
              className="fill-blue-500 group-hover:fill-white transition-colors duration-300"
              viewBox="0 -960 960 960"
              height="25"
              width="25"
              focusable="false"
            >
              <path d="M168-192q-29.7,0-50.85-21.16T96-264.04V-696.28Q96-726 117.15-747T168-768H553q-2,17-1,35.5t6,36.5H168L480-517l140-81q14,13 37,24t41,16L480-432L168-611v347H792V-558.46q20-4.54 37.5-14.04T864-594v329.77Q864-234 842.5-213T792-192H168Zm0-504v432V-696Zm576,72q-50,0-85-35t-35-85t35-85t85-35t85,35t35,85t-35,85t-85,35Z"></path>
            </svg>
            <p className="text-xs font-medium group-hover:text-white transition-colors duration-300">
              Email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
