import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="md:mt-14 w-full max-w-[40rem] md:max-w-[65rem] pt-16 px-10 flex flex-col">
        <h1 className="font-semibold text-3xl mt-10">MINE</h1>
        <p className="my-4">
          네이버 쇼핑 API를 이용하여 사용자가 원하는 상품을 최저가로 만나볼 볼
          수 있는 NextJS로 구현한 쇼핑 사이트입니다. MongoDB와 Next-Auth
          라이브러리를 통해 자체 회원 기능을 마련하였고, 실제 구매 사이트로
          이동이 가능합니다.
        </p>
        <div className="w-full aspect-[2/1.7] relative">
          <Image src="/mine/mine-main.png" fill alt="mine-main" />
        </div>
        <Link
          href="https://mine-shopping.vercel.app/"
          target="_blank"
          className="bg-black dark:bg-white w-40 text-white py-3 text-sm text-center self-center"
        >
          배포 사이트 바로가기
        </Link>
        {/* Skills */}
        <div className="mt-7 p-4">
          <h2 className="font-semibold text-2xl mb-2">Skills</h2>
          <div className="space-y-2">
            <p>NextJS</p>
            <p>Typescript</p>
            <p>CSS-modules</p>
            <p>MongoDB</p>
            <p>zustand</p>
          </div>
        </div>
        {/* 구현 기능과 느낀점, 사용한 기능 */}
        <div className="mt-7 p-4">
        <h2 className="font-semibold text-2xl mb-2">구현 기능</h2>
        </div>
      </div>
    </div>
  );
};

export default Mine;
