import Info from "./_component/info";
import SkillsIcon from "./_component/skillsIcon";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      {/* header */}
      <div className="w-4/5 md:w-[60rem] mt-16">
        {/* main-contents header */}
        <div className="w-full flex items-center justify-center py-10 md:py-14 md:px-10 md:justify-normal">
          <div className="text-2xl md:text-4xl border-l-8 border-indigo-800 pl-3 font-semibold ">
            황서연(Hwang SeoYeon)
          </div>
        </div>
        <Info />
        {/* Skills */}
        <div className="flex flex-col items-center w-full border-b-2 py-10  md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-9 md:text-start">📖 SKILLS</h2>
          <div className="flex flex-col md:flex-row px-6">
            <div className="text-lg md:text-2xl font-bold text-center md:text-start">FrontEnd.</div>
            <div className="flex flex-col mt-2 md:mt-0 items-center md:items-start md:ml-10 text-sm md:text-base font-semibold">
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
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row items-center md:items-start px-6">
            <div className="text-lg md:text-2xl font-bold  md:text-start">Others.</div>
            <div className="flex items-center ml-0 md:ml-[4.5rem] text-base space-x-6 font-semibold relative">
              <SkillsIcon skillName="MongoDB" />
              <SkillsIcon skillName="MySQL" />
              <SkillsIcon skillName="Vercel" />
              <SkillsIcon skillName="NodeJS" />
            </div>
          </div>
        </div>
        {/* 학력 */}
        <div className="w-full border-b-2 py-5 md:py-10 flex flex-col items-center md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-4 md:mb-9">🎓 Education</h2>
          <div className="flex md:text-lg">
            <div className="md:ml-10 font-bold space-y-1">
              <p>학교명</p>
              <p>학과명</p>
              <p>학점</p>
            </div>
            <div className="ml-10 md:ml-16 space-y-1">
              <p>인하대학교</p>
              <p>경영학, 산업경영공학 복수전공</p>
              <p>3.91/4.5</p>
            </div>
          </div>
        </div>
        {/* 자격증 */}
        <div className="w-full pt-8 md:pt-12 pb-5 md:pb-10 flex flex-col items-center md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-4 md:mb-9">🪪 Certification</h2>
          <div className="flex flex-col justify-center items-center md:items-start pb-10 md:flex-row">
            <div className="flex text-md md:text-lg border-b-2 pr-7 md:border-r-2 md:border-b-0">
              <div className="md:ml-10 font-bold space-y-1">
                <p>자격증명</p>
                <p>취득일</p>
                <p>주관</p>
              </div>
              <div className="mb-5 ml-10 md:ml-16 space-y-1 md:mb-0">
                <p>정보처리기사</p>
                <p>2023.10</p>
                <p>한국산업인력공단</p>
              </div>
            </div>
            <div className="flex text-md md:text-lg mt-5 md:mt-0">
              <div className="md:ml-10 font-bold space-y-1">
                <p>자격증명</p>
                <p>취득일</p>
                <p>주관</p>
              </div>
              <div className="ml-10 md:ml-16 space-y-1">
                <p>TOEIC Speaking IM3</p>
                <p>2023.12.09</p>
                <p>ETS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
