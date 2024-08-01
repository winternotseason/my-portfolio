import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-4">
      {/* intro */}
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        <span className="text-green-500">#</span>MINE
      </h1>
      <div className="w-full">
        {/* 배운점 자세하게 */}
        {/* 트러블 슈팅 */}
        {/* After Working */}
         {/* 마무리 */}
      </div>
    </div>
  );
};

export default Mine;
