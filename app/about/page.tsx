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
        <div className="w-full border-b-2 py-10">
          <h2 className="font-bold text-4xl mb-9">📖 SKILLS</h2>
          <div className="flex px-6">
            <div className="text-2xl font-bold">FrontEnd.</div>
            <div className="flex flex-col ml-10 text-base font-semibold">
              <div className="flex">
                <SkillsIcon skillName="HTML" />
                <SkillsIcon skillName="CSS" />
                <SkillsIcon skillName="JS" />
                <SkillsIcon skillName="TS" />
              </div>
              <div className="flex mt-2">
                <SkillsIcon skillName="React" />
                <SkillsIcon skillName="NextJS" />
                <SkillsIcon skillName="Tailwind" />
                <SkillsIcon skillName="Zustand" />
                <SkillsIcon skillName="Styled-C" />
              </div>
            </div>
          </div>
          <div className="flex px-6 mt-8">
            <div className="text-2xl font-bold">Others.</div>
            <div className="flex items-center ml-[4.5rem] text-base space-x-6 font-semibold relative">
              <SkillsIcon skillName="MongoDB" />
              <SkillsIcon skillName="MySQL" />
              <SkillsIcon skillName="Vercel" />
              <SkillsIcon skillName="NodeJS" />
            </div>
          </div>
        </div>
        {/* 학력 */}
        <div className="w-full border-b-2 py-10">
          <h2 className="font-bold text-4xl mb-9">🎓 Education</h2>
          <div className="flex text-lg">
            <div className="ml-10 font-bold space-y-1">
              <p>학교명</p>
              <p>학과명</p>
              <p>학점</p>
            </div>
            <div className="ml-16 space-y-1">
              <p>인하대학교</p>
              <p>경영학, 산업경영공학 복수전공</p>
              <p>3.91/4.5</p>
            </div>
          </div>
        </div>
        {/* 자격증 */}
        <div className="w-full pt-12 pb-20">
          <h2 className="font-bold text-4xl mb-9">🪪 Certification</h2>
          <div className="flex text-lg">
            <div className="ml-10 font-bold space-y-1">
              <p>자격증명</p>
              <p>취득일</p>
              <p>주관</p>
            </div>
            <div className="ml-16 space-y-1">
              <p>정보처리기사</p>
              <p>실기 : 2023.10 | 필기 2023.08</p>
              <p>한국산업인력공단</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
