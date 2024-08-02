import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col px-4 pb-5">
      <div className="w-full justify-around flex flex-col font-light mt-5 md:mt-10">
        {/* 소개 */}
        <div className="flex flex-col justify-center md:text-5xl py-12 md:py-32 ">
          <p>안녕하세요.</p>
          <p>
            프론트엔드 개발자 <span className="font-semibold">황서연</span>
            입니다.
          </p>
        </div>
        {/* 깃허브, 이메일 아이콘 */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/winternotseason"
            target="_blank"
            className="group flex flex-col justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-xl bg-white shadow-md hover:bg-black/90 transition-colors duration-300 cursor-pointer"
          >
            <svg
              className="group-hover:fill-white transition-colors duration-300 w-6 h-6 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p className="dark:text-black text-xs font-medium md:text-base mt-1 group-hover:text-white transition-colors duration-300">
              Github
            </p>
          </Link>
          <Link
            href="https://seodevelopment.tistory.com/"
            target="_blank"
            className="group flex flex-col justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-xl bg-white shadow-md hover:bg-red-500 transition-colors duration-300 cursor-pointer"
          >
            <svg
              className="fill-red-500 group-hover:fill-white transition-colors duration-300 w-6 h-6 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 459 459"
            >
              <path d="M229.5 0C102.75 0 0 102.75 0 229.5S102.75 459 229.5 459 459 356.25 459 229.5 356.25 0 229.5 0m-99.29 191.45a39.57 39.57 0 1 1 39.56-39.57 39.58 39.58 0 0 1-39.56 39.57M229.5 390a39.56 39.56 0 1 1 39.56-39.56A39.56 39.56 0 0 1 229.5 390m0-99.29a39.56 39.56 0 1 1 39.56-39.56 39.56 39.56 0 0 1-39.56 39.59Zm0-99.29a39.57 39.57 0 1 1 39.56-39.57 39.57 39.57 0 0 1-39.56 39.6Zm99.29 0a39.57 39.57 0 1 1 39.57-39.57 39.57 39.57 0 0 1-39.57 39.6Z" />
            </svg>
            <p className="mt-1 dark:text-black text-xs font-medium md:text-base group-hover:text-white transition-colors duration-300">
              Blog
            </p>
          </Link>
          <Link
            href="mailto:xitseo@naver.com"
            target="_blank"
            className="group flex flex-col justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-xl bg-white shadow-md hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
          >
            <svg
              className="fill-blue-500 group-hover:fill-white transition-colors duration-300 w-6 h-6 md:w-10 md:h-10"
              viewBox="0 -960 960 960"
              focusable="false"
            >
              <path d="M168-192q-29.7,0-50.85-21.16T96-264.04V-696.28Q96-726 117.15-747T168-768H553q-2,17-1,35.5t6,36.5H168L480-517l140-81q14,13 37,24t41,16L480-432L168-611v347H792V-558.46q20-4.54 37.5-14.04T864-594v329.77Q864-234 842.5-213T792-192H168Zm0-504v432V-696Zm576,72q-50,0-85-35t-35-85t35-85t85-35t85,35t35,85t-35,85t-85,35Z"></path>
            </svg>
            <p className="dark:text-black text-xs font-medium md:text-base group-hover:text-white transition-colors duration-300">
              Email
            </p>
          </Link>
        </div>
        {/* About me */}
        <div className="mt-5 md:mt-10 flex flex-col items-start space-y-1 border-[1px] border-dotted p-6">
          <h1 className="font-medium md:font-semibold text-sm mb-2 md:mb-4 md:text-2xl">
            🔍 ABOUT ME
          </h1>
          <p className="text-xs md:text-base">
            <span className="font-medium">학력 · </span>인하대학교 졸업 경영학 /
            산업경영공학 (3.91 / 4.5)
          </p>
          <p className="text-xs md:text-base">
            <span className="font-medium">생년월일 · </span>2001.11.27
          </p>
          <p className="text-xs md:text-base">
            <span className="font-medium">연락처 · </span>010-8477-8820
          </p>
        </div>
        {/* Certification */}
        <div className="mt-7 flex flex-col items-start space-y-1 border-[1px] border-dotted p-6">
          <h1 className="font-medium md:font-semibold text-sm mb-2 md:mb-4 md:text-2xl">
            🪪 Certificate
          </h1>
          <p className="text-xs md:text-base">
            <span className="font-medium">정보처리기사 최종합격 · </span> 실기
            (23.11.15) · 필기 (23.07.22)
          </p>
          <p className="text-xs md:text-base">
            <span className="font-medium">토익스피킹 IM3 · </span>23.12.09
          </p>
        </div>
        {/* Introduce */}
        <div className="mt-7 text-xs md:text-base border-[1px] border-dotted p-6">
          <h1 className="font-medium md:font-semibold text-sm mb-2 md:mb-4 md:text-2xl">
            ☑️ Introduce
          </h1>
          <p>
            안녕하세요. 배움이라는 것에 끝이 있다고 생각하지 않고, 어떻게 하면
            더 나은 사용자 경험을 창조할 수 있을지에 대해 생각하고 학습하는
            프론트엔드 개발자 황서연입니다.
          </p>
          <p className="mt-2 md:mt-4">
            쉽지 않은 개발의 길에서 함께 나아가고 싶은 개발자가 될 수 있도록
            끊임없이 노력하겠습니다.
          </p>
          <p className="mt-2 md:mt-4">
            저를 보여드릴 수 있는 포트폴리오 사이트에 방문해주셔서 다시 한번
            진심으로 감사드립니다!
          </p>
        </div>
        {/* Skills */}
        <div className="mt-7 text-xs md:text-base border-[1px] border-dotted p-6">
          <h1 className="font-medium md:font-semibold text-sm mb-2 md:mb-4 md:text-2xl">
            📓 Skills
          </h1>
          <p className="font-medium mb-2">· HTML, CSS, Javascript</p>
          <p className="mb-1">
            - 기본적인 JS문법 뿐만 아니라 화살표 함수, 템플릿 리터럴,
            구조분해할당과 같은 ES6 문법을 잘 숙지하고 활용할 수 있습니다.
          </p>
          <p className="mb-1">
            - Promise를 기반으로 동작하는 async/await 패턴을 효과적으로 활용하여
            가독정 좋은 비동기 처리를 할 수 있습니다.
          </p>
          <p className="mb-2 md:mb-4">
            - REST API를 통한 HTTP 요청을 잘 이해하고 있으며, API 서버와
            효과적으로 연동할 수 있습니다.
          </p>
          <p className="font-medium mb-2">· React, Next.JS</p>
          <p className="mb-1">
            - useState, useEffect 등과 같은 Hook에 익숙하여 프로젝트에 활용할 수
            있고, 다양한 라이브러리들을 적용할 수 있습니다.
          </p>
          <p className="mb-2 md:mb-4">
            - Next.js API Routes를 활용하여 서버리스 환경에서 API 엔드포인트를
            생성하고 관리할 수 있으며, 이미지·폰트 최적화 기능을 통해 성능을
            최적화 할 수 있습니다.
          </p>
          <p className="font-medium mb-2">
            · 상태 관리 : Tanstack react-query, Zustand
          </p>

          <p className="font-medium mb-2">· 데이터베이스 : MongoDB</p>
        </div>
      </div>
      <Link
        href="/project"
        className="dark:bg-white dark:text-black mt-4 hover:bg-black/60 dark:hover:bg-white/80 transition-colors duration-200 self-end bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-base md:py-3 md:px-5"
      >
        ► PROJECT
      </Link>
    </div>
  );
};

export default Home;
