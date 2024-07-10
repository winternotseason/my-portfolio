import Image from "next/image";
import React from "react";

interface Props {
  skillName: string;
}

const SkillsIcon = ({ skillName }: Props) => {
  return (
    <div className="w-24 h-24 flex flex-col items-center justify-center rounded-xl hover:bg-slate-100">
      <div className="relative w-14 h-14">
        <Image src={`/${skillName}.svg`} alt="" fill />
      </div>
      <div className="mt-1">{skillName}</div>
    </div>
  );
};

export default SkillsIcon;
