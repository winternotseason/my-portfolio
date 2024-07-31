import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-4">
      {/* intro */}
      <h1 className="text-xl font-semibold">
        <span className="text-green-500">#</span>MINE
      </h1>
      <div className="w-full text-xs mt-3 border-[1px] border-dotted p-3">
        <p className="mb-2 font-medium">[웹 사이트 설명]</p>
        <p className="font-light">
          전국의 음식점을 방문하고, <br />
          감명 깊었던 맛에 대한 리뷰를 공유하는 커뮤니티 사이트
        </p>
        <p className="mt-4 mb-2 font-medium">[웹 사이트 설명]</p>
        <p className="font-light">
          전국의 음식점을 방문하고, <br />
          감명 깊었던 맛에 대한 리뷰를 공유하는 커뮤니티 사이트
        </p>
      </div>
    </div>
  );
};

export default Mine;
