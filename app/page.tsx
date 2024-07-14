import Info from "./_component/info";
import SkillsIcon from "./_component/skillsIcon";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      {/* header */}
      <div className="w-full md:w-[60rem] mt-16 p-8 md:p-0">
        {/* main-contents header */}
        <div className="w-full flex items-center py-10 md:py-14 md:px-10 md:justify-normal">
          <div className="text-2xl md:text-4xl border-l-8 border-indigo-800 pl-3 font-semibold dark:border-indigo-600">
            황서연(Hwang SeoYeon)
          </div>
        </div>
        <Info />
        {/* Skills */}
        <div className="w-full flex flex-col border-b-2 py-10 md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-4 md:mb-9 md:text-start text-indigo-800 dark:text-indigo-600">
            Introduce
          </h2>
          <div className="text-gray-700 font-semibold md:text-lg dark:text-white">
            <p>
              안녕하세요. 사용자의 경험에 큰 가치를 두고 있는 프론트엔드 개발자
              황서연입니다.
            </p>
            <br />
            <p>
              웹/앱을 방문하는 사용자와 최전방에서 상호작용하는 개발자의 마음을
              가지고 항상 적극적으로 최적화를 하기 위해 노력하고 있습니다.
            </p>
            <br />
            <p>
              또, 모르거나 알아야만 하는 지식에 대해 회피하기보다는 적극적으로
              배우려는 학습적 태도를 생활화합니다.
            </p>
            <br />
            <p>누구보다 트렌드를 따라가는 프론트엔드 개발자가 되고 싶습니다.</p>
          </div>
        </div>
        <div className="w-full flex flex-col border-b-2 py-10 md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-9 md:text-start text-indigo-800 dark:text-indigo-600">
            SKILLS
          </h2>
          <div className="flex flex-col md:flex-row ">
            <div className="text-lg md:text-2xl font-bold md:text-start">
              FrontEnd.
            </div>
            <div className="flex flex-col mt-2 md:mt-0  md:items-start md:ml-10 text-sm md:text-base font-semibold">
              <div className="flex">
                <SkillsIcon skillName="HTML" />
                <SkillsIcon skillName="CSS" />
                <SkillsIcon skillName="Javascript" />
                <SkillsIcon skillName="Typescript" />
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
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-start ">
            <div className="text-lg md:text-2xl font-bold md:text-start">
              Database
            </div>
            <div className="flex items-center ml-0 md:ml-[4.5rem] text-base space-x-5 font-semibold relative">
              <SkillsIcon skillName="MongoDB" />
              <SkillsIcon skillName="MySQL" />
            </div>
          </div>
        </div>
        {/* 학력 */}
        <div className="w-full border-b-2 py-6 md:py-10 flex flex-col  md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-4 md:mb-9 text-indigo-800 dark:text-indigo-600">
            Education
          </h2>
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
        <div className="w-full pt-8 md:pt-12 py-6 md:pb-10 flex flex-col  md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl mb-4 md:mb-9 text-indigo-800 dark:text-indigo-600">
            Certification
          </h2>
          <div className="flex flex-col justify-center  md:items-start pb-10 md:flex-row">
            <div className="flex text-md md:text-lg  pr-7 md:border-r-2 md:border-b-0">
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
