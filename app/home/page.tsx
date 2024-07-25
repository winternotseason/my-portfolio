import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full bg-universe bg-cover bg-center relative">
      {/* overlay 그라디언트 이미지 */}
      <Image
        src="/main-black-background.png"
        fill
        alt="gradient"
        className="absolute top-0 left-0 z-0"
      />

      <div className="relative z-20 w-full h-full pt-16 flex justify-center items-center">
        {/* 메인 내용 */}
        <div className="flex justify-between flex-col px-7 lg:px-0 lg:flex-row">
          {/*메인 왼쪽 */}
          <div className="">
            <div className="bg-gradient-to-b from-purple-300 to-white inline-block text-transparent bg-clip-text">
              <p className="text-5xl lg:text-[5rem] font-bold">SEOYEON</p>
              <p className="text-5xl lg:text-[5rem] font-bold ">PORTFOLIO</p>
            </div>
            <div className="flex flex-col space-y-3 lg:space-x-1 mt-10 lg:mt-10 text-sm  text-white">
              <div className="flex items-center justify-center w-32 text-xs border-[1px] rounded-3xl p-3 lg:py-2 lg:px-4 cursor-pointer border-white/50 hover:border-white/80 hover:text-white/80">
                ABOUT ME
              </div>
              <div className="flex items-center justify-center w-32 text-xs border-[1px] rounded-3xl p-3 lg:py-2 lg:px-4 cursor-pointer border-white/50 hover:border-white/80 hover:text-white/80">
                PROJECT
              </div>
              <div className="flex items-center justify-center w-32 text-xs border-[1px] rounded-3xl p-3 lg:py-2 lg:px-4 cursor-pointer border-white/50 hover:border-white/80 hover:text-white/80">
                GITHUB
              </div>
              <div className="flex items-center justify-center w-32 text-xs border-[1px]  rounded-3xl p-3 lg:py-2 lg:px-4 cursor-pointer border-white/50 hover:border-white/80 hover:text-white/80">
                BLOG
              </div>
            </div>
          </div>
          {/* 메인 오른쪽 */}
          <div className="text-white/70 lg:ml-20">
            <p>안녕하세요.... 프론트엔드개발자...황서연입니다..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
