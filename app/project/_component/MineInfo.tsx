import Link from "next/link";
import React from "react";
import MineImages from "./MineImages";

const MineInfo = () => {
  return (
    <div className="mt-8 flex flex-col space-y-1 border-[1px] border-dotted p-5">
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        <span className="text-green-500">#</span>MINE
      </h1>
      <div className="flex flex-col md:flex-row items-center ">
        <MineImages />
        <div className="w-full mt-5 md:mt-0 md:w-1/2 text-xs md:text-base md:ml-10">
          <p className="pt-2  text-base md:text-lg">
            <span className="font-semibold">프로젝트명</span> · #MINE
          </p>
          <p className="mt-2 mb-3">
            <span className="font-semibold text-green-600">
              나만 알고 싶지 않은 맛집들을 공유
            </span>
            하기 위해, 또{" "}
            <span className="font-semibold text-green-600">
              남이 아는 맛집을 알기 위해
            </span>{" "}
            제작한 맛집 공유 웹 사이트 입니다.
          </p>
          <p className="mb-1 font-bold">
            [기능]
            <br />
          </p>{" "}
          <p className="mb-3">
            Auth.js 라이브러리를 활용하여 <strong>회원 기능을 구현</strong>
            하였고, 리뷰를 작성할 때 해당 음식점의 위치 또한 공유할 수 있도록{" "}
            <strong>카카오 맵 API</strong>를 활용하여 사용자들이 정확한 위치를
            알고 방문할 수 있도록 구현하였습니다.
            <br />
          </p>{" "}
          <p className="mb-3">
            또 한꺼번에 데이터베이스의 모든 글을 불러오지 않도록{" "}
            <strong>
              react-query의 InfinityQuery 기능을 활용하여 인피니티 스크롤링을
              구현
            </strong>
            하였습니다.
          </p>
          <p className="mb-1 font-bold">
            [배운점]
            <br />
          </p>
          <p className="mb-3">
            NextJS의 API Routes 기능을 활용하면서 글쓰기, 페이지네이션을 통한 글
            목록 불러오기, 해당 지역에 맞는 리뷰 불러오기 등{" "}
            <strong>API 엔드포인트를 직접 구축해보는 경험</strong>을 하게
            되었습니다. 이러한 경험을 바탕으로{" "}
            <strong>
              클라이언트와 서버 간 데이터의 흐름을 전체적으로 이해
            </strong>
            하는 데 큰 도움이 되었습니다.
          </p>{" "}
          <p className="mb-3">
            <strong>
              회원가입과 로그인을 구현하는데 있어서 React Hook Form을 Zod
              라이브러리와 함께 사용
            </strong>
            해보면서, 폼 데이터와 유효성 검사를 간단하고 직관적으로 처리할 수
            있는 방법을 배우게 되었고 특히, Zod 라이브러리를 처음 활용해보면서{" "}
            <strong>
              유효성 검사 로직을 컴포넌트와 분리하여 코드의 가독성을 높이는 데
              효과적임
            </strong>
            을 느꼈습니다.
          </p>{" "}
          <p className="pt-2">
            <span className="font-semibold">개발인원</span> · 1명 (개인개발)
          </p>
          <p className="pt-2">
            <span className="font-semibold">Skills</span>· NextJS, Typescript,
            TailwindCSS, react-query, MongoDB
          </p>
          <p className="pt-2 pb-8">
            <span className="font-semibold">Github</span> ·{" "}
            <Link
              href="https://github.com/winternotseason/mine"
              target="_blank"
            >
              github.com/winternotseason/mine
            </Link>
          </p>
          <div className="space-x-4">
            <Link
              href="/project/mine"
              className="dark:bg-white dark:text-black mt-4 hover:bg-black/60 dark:hover:bg-white/80 transition-colors duration-200 self-end bg-black/70 w-fit text-white py-2 px-3 rounded-3xl text-xs md:text-sm md:py-3 md:px-5"
            >
              ► DETAIL
            </Link>
            <Link
              href="https://mine-community-w.vercel.app/"
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

export default MineInfo;
