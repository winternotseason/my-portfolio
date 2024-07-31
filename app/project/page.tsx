import Link from "next/link";
import MineImages from "./_component/MineImages";
import MovieFinderImages from "./_component/MovieFinderImages";

const Project = () => {
  return (
    <div className="w-full h-full px-4 pt-2">
      <p className="mt-5 font-light text-sm md:text-xl">
        📑 진행했던 프로젝트들에 관한 간단한 설명이 담긴 페이지입니다.
      </p>
      {/* mine */}
      <div className="mt-8 flex flex-col items-start space-y-1 border-[1px] border-dotted p-3 md:p-5 text-sm md:text-xl overflow-hidden">
        <h1 className="font-medium mb-2">📒 프로젝트명 : MINE</h1>
        <MineImages />
        <div className="text-xs md:text-base">
          <p className="pt-3">
            <span className="font-semibold">
              전국 각지 음식점들의 리뷰를 공유하는 커뮤니티 사이트
            </span>
            입니다.
          </p>
          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2 pb-3 md:pb-5">
            <span className="font-semibold">Skills</span>· NextJS, Typescript,
            TailwindCSS, react-query, MongoDB
          </p>
        </div>
        <Link
          href="/project/mine"
          className=" hover:bg-black/60 transition-colors duration-200 bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-base md:py-3 md:px-5"
        >
          ► DETAIL
        </Link>
      </div>
      {/* moviefinder */}
      <div className="mt-8 flex flex-col items-start space-y-1 border-[1px] border-dotted p-3 md:p-5 text-sm md:text-xl overflow-hidden">
        <h1 className="font-medium mb-2">📒 프로젝트명 : MOVIEFINDER</h1>
        <MovieFinderImages />
        <div className="text-xs md:text-base">
          <p className="pt-3">
            <span className="font-semibold">
              최신 영화 일간/주간 순위와 영화 검색 기능, 각 영화의 줄거리·등장인물·스틸컷 등 영화의 정보를 제공하는 사이트
            </span>
            입니다.
          </p>
          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2 pb-3 md:pb-5">
            <span className="font-semibold">Skills</span>· React, Javascript, TailwindCSS
          </p>
        </div>
        <Link
          href="/project/moviefinder"
          className=" hover:bg-black/60 transition-colors duration-200 bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-base md:py-3 md:px-5"
        >
          ► DETAIL
        </Link>
      </div>
    </div>
  );
};

export default Project;

// pc-2 240px
// pc-3 500px
