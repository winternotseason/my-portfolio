import Link from "next/link";
import React from "react";
import PortfolioImages from "./PortfolioImages";

const PortfolioInfo = () => {
  return (
    <div
      id="portfolio"
      className="mt-8 flex flex-col space-y-1 border-[1px] border-dotted p-5"
    >
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        👩🏻‍💻 Portfolio
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center">
        <PortfolioImages />
        <div className="w-full mt-5 md:mt-0 md:w-1/2 text-xs md:text-base md:ml-10">
          <p className="pt-2  text-base md:text-lg">
            <span className="font-semibold">프로젝트명</span> · Seoyeon&apos;s
            Portfolio
          </p>
          <p className="mt-2 mb-3 ">
            Next.js로 개발한<strong> 개인 포트폴리오 웹사이트</strong>입니다.
          </p>
          <p className="mb-1 font-bold">[기능]</p>
          <p className="mb-3">
            <strong className="text-green-600">
              인적사항과 자기소개, 프로젝트 경험, 학력, 자격증 내역
            </strong>{" "}
            등을 공유하고 있으며, next-themes 라이브러리를 활용하여 다크모드를
            구현하였습니다.
            <strong className="text-green-600">
              다크모드 토글 버튼이 달과 해로 애니메이션되며 전환되는 효과
            </strong>
            를 추가하였습니다.
          </p>
          <p className="mb-1 font-bold">[배운점]</p>
          <p className="mb-3">
            포트폴리오 웹사이트에서 가장 중요한 요소 중 하나는{" "}
            <strong>검색 엔진 최적화(SEO)</strong>라고 생각했습니다. 이를
            충족하기 위해 Next.js를 사용하여 프로젝트를 진행하였고,{" "}
            <strong>
              Lighthouse를 통해 SEO 점수를 확인한 결과, 100점을 기록하여 목표를
              성공적으로 달성
            </strong>
            하였습니다. 이 경험을 통해 SEO 최적화의 중요성과 Next.js의 강력한
            기능을 체감할 수 있었습니다.
          </p>

          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2">
            <span className="font-semibold">Skills</span>· NextJS, Typescript,
            TailwindCSS
          </p>
          <p className="pt-2 pb-8">
            <span className="font-semibold">Github</span> ·{" "}
            <Link
              href="https://github.com/winternotseason/my-portfolio"
              target="_blank"
            >
              github.com/winternotseason/my-portfolio
            </Link>
          </p>
          <div className="space-x-4">
            <Link
              href="https://seoyeon-portfolio.vercel.app/"
              target="_blank"
              className="dark:bg-white dark:text-black md:mt-4 hover:bg-black/60 dark:hover:bg-white/80 transition-colors duration-200 self-end bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-sm md:py-3 md:px-5"
            >
              ► 배포사이트
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
