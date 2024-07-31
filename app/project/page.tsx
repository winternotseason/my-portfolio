import Link from "next/link";
import MineImages from "./_component/MineImages";
import MovieFinderImages from "./_component/MovieFinderImages";

const Project = () => {
  return (
    <div className="w-full h-full px-4 pt-2 md:px-10 md:py-7">
      <p className="mt-5 font-light text-sm md:text-xl">
        📑 진행했던 프로젝트들에 관한 간단한 설명이 담긴 페이지입니다.
      </p>
      {/* mine */}
      <div className="mt-8 flex flex-col space-y-1 border-[1px] border-dotted p-3 md:p-5 overflow-hidden">
        <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
          <span className="text-green-500">#</span>MINE
        </h1>
        <div className="flex flex-col md:flex-row w-full items-center">
          <MineImages />
          <div className="w-full md:w-1/2 text-xs md:text-base ml-4">
            <p className="pt-3">
              <span className="font-semibold">
                전국 각지 음식점들의 리뷰를 공유하는 커뮤니티 사이트
              </span>
              입니다.
            </p>
            <p className="mt-2 mb-3">
              <span className="font-semibold text-green-600">
                나만 알고 싶지 않은 맛집들을 공유
              </span>
              하기 위해, 또{" "}
              <span className="font-semibold text-green-600">
                남이 아는 맛집을 알기 위해
              </span>
              제작한 맛집 공유 웹 사이트 입니다.
            </p>{" "}
            <p className="mb-3">
              Auth.js 라이브러리를 활용하여 <strong>회원 기능을 구현</strong>
              하였고, 리뷰를 작성할 때 해당 음식점의 위치 또한 공유할 수 있도록{" "}
              <strong>카카오 맵 API</strong>를 활용하여 사용자들이 정확한 위치를
              알고 방문할 수 있도록 구현하였습니다.
              <br />
            </p>{" "}
            <p>
              또 한꺼번에 데이터베이스의 모든 글을 불러오지 않도록{" "}
              <strong>
                react-query의 InfinityQuery 기능을 활용하여 인피니티 스크롤링을
                구현
              </strong>
              하였습니다.
            </p>
            <p className="pt-2">
              <span className="font-semibold">개발인원</span> · 1명 (개인개발)
            </p>
            <p className="pt-2 pb-5">
              <span className="font-semibold">Skills</span>· NextJS, Typescript,
              TailwindCSS, react-query, MongoDB
            </p>
            <Link
              href="/project/mine"
              className=" hover:bg-black/60 transition-colors duration-200 bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-sm md:py-2 md:px-3"
            >
              ► DETAIL
            </Link>
          </div>
        </div>
      </div>
      {/* moviefinder */}
      <div className="mt-8 flex flex-col items-start space-y-1 border-[1px] border-dotted p-3 md:p-5 text-sm md:text-xl overflow-hidden">
        <h1 className="font-medium mb-2">📒 프로젝트명 : MOVIEFINDER</h1>
        <MovieFinderImages />
        <div className="text-xs md:text-base">
          <p className="pt-3">
            <span className="font-semibold">
              최신 영화 일간/주간 순위와 영화 검색 기능, 각 영화의
              줄거리·등장인물·스틸컷 등 영화의 정보를 제공하는 사이트
            </span>
            입니다.
          </p>
          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2 pb-3 md:pb-5">
            <span className="font-semibold">Skills</span>· React, Javascript,
            TailwindCSS
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
