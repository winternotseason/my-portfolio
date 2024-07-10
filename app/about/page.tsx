import Image from "next/image";
import Info from "../_component/info";
import SkillsIcon from "../_component/skillsIcon";

export default function About() {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      {/* header */}
      <div className="w-[60rem] mt-16">
        {/* main-contents header */}
        <div className="w-full flex items-center py-14 px-10">
          <div className="text-4xl border-l-8 border-indigo-800 pl-3 font-semibold">
            황서연(Hwang SeoYeon)
          </div>
        </div>
        <Info />
        {/* Skills */}
        <div className="w-full border-b-2 pb-5">
          <h2 className="font-bold text-4xl mt-5 mb-7">SKILLS</h2>
          <div className="flex px-6">
            <div className="text-2xl font-bold">FrontEnd.</div>
            <div className="flex flex-col ml-10 text-base font-semibold">
              <p className="flex">
                <SkillsIcon skillName="HTML" />
                <SkillsIcon skillName="CSS" />
                <SkillsIcon skillName="JS" />
                <SkillsIcon skillName="TS" />
              </p>
              <p className="flex">
                <SkillsIcon skillName="React" />
                <SkillsIcon skillName="NextJS" />
                <SkillsIcon skillName="Tailwind" />
                <SkillsIcon skillName="Zustand" />
                <SkillsIcon skillName="Styled-C" />
              </p>
            </div>
          </div>
          <div className="flex px-6 mt-6">
            <div className="text-2xl font-bold">etc.</div>
            <div className="flex items-center ml-icon text-base space-x-6 font-semibold relative">
              <SkillsIcon skillName="MongoDB" />
              <SkillsIcon skillName="MySQL" />
              <SkillsIcon skillName="Vercel" />
              <SkillsIcon skillName="NodeJS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
