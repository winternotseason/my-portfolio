import Link from "next/link";
import React from "react";
import MovieFinderImages from "./MovieFinderImages";

const MovieFinderInfo = () => {
  return (
    <div className="mt-8 flex flex-col space-y-1 border-[1px] border-dotted p-5">
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        MOVIEFINDER
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center">
        <MovieFinderImages />
        <div className="w-full mt-5 md:mt-0 md:w-1/2 text-xs md:text-base md:ml-10">
          <p className="pt-2  text-base md:text-lg">
            <span className="font-semibold">프로젝트명</span> · MOVIEFINDER
          </p>
          <p className="mt-2 mb-3 ">
            <strong className="text-green-600">일간/주간 영화 차트</strong>와{" "}
            <strong className="text-green-600">영화명 검색</strong>을 통해
            등장인물, 줄거리, 스틸컷 등 영화의 세부 정보를 제공하는 영화 정보
            사이트 입니다.
          </p>
          <p className="mb-1 font-bold">
            [기능]
            <br />
          </p>{" "}
          <p className="mb-3">
            KMDB와 KOBIS API를 연계하여 필요한 데이터를 수집하여{" "}
            <strong>일간차트, 주간차트를 예매율과 포스터 사진</strong>과 함께
            제공되도록 구현하였습니다.
          </p>
          <p className="mb-3">
            사용자가 탐색하길 원하는 <strong>영화명을 검색</strong>하면 API를
            호출하여 쿼리에 맞는 영화들의 목록이 표시되도록 구현하였습니다.
          </p>
          <p className="mb-3">
            영화 상세정보 페이지에서{" "}
            <strong>
              영화의 세부 정보, 등장인물, 줄거리, 스틸컷, 수상 내역 등
            </strong>
            이 제공되도록 구현하였습니다.
          </p>
          <p className="mb-1 font-bold">
            [배운점]
            <br />
          </p>
          <p className="mb-3">
            기존 빌드 도구로 사용하던 CRA 대신 <strong>Vite</strong>를
            프로젝트에 도입함으로써 빌드 속도를 크게 향상시켰습니다. 또,{" "}
            <strong>Postman</strong>을 활용하여 API 응답 데이터를 미리 확인하고
            검증함으로써 개발 과정에서 예상치 못한 오류를 줄일 수 있었습니다.
          </p>
          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2">
            <span className="font-semibold">Skills</span>· React, Javascript,
            TailwindCSS
          </p>
          <p className="pt-2 pb-8">
            <span className="font-semibold">Github</span> ·{" "}
            <Link
              href="https://github.com/winternotseason/moviefinder"
              target="_blank"
            >
              github.com/winternotseason/moviefinder
            </Link>
          </p>
          <div className="space-x-4">
            <Link
              href="/project/moviefinder"
              className="dark:bg-white dark:text-black mt-4 hover:bg-black/60 dark:hover:bg-white/80 transition-colors duration-200 self-end bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-sm md:py-3 md:px-5"
            >
              ► DETAIL
            </Link>
            <Link
              href="https://moviefinder-lilac.vercel.app/"
              target="_blank"
              className="dark:bg-white dark:text-black mt-4 hover:bg-black/60 dark:hover:bg-white/80 transition-colors duration-200 self-end bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-sm md:py-3 md:px-5"
            >
              ► 배포사이트
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieFinderInfo;
