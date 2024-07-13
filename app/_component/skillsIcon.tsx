import Image from "next/image";
import React from "react";

interface Props {
  skillName: string;
}

const SkillsIcon = ({ skillName }: Props) => {
  return (
    <div className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-xl hover:bg-slate-100">
      <div className="relative w-10 h-10">
        <Image src={`/${skillName}.png`} alt="" fill sizes="100%" />
      </div>
      <div className="mt-1">{skillName}</div>
    </div>
  );
};

export default SkillsIcon;
