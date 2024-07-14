import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieFinder = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="md:mt-14 w-full max-w-[40rem] md:max-w-[70rem] pt-16 px-10 flex flex-col ">
        <h1 className="font-semibold text-3xl mt-10 pb-3 border-b-2">
          MOVIE FINDER - Find attractive movies!
        </h1>
        <div className="my-4 space-y-3">
          <p>
            TMDB Open API를 이용하여 개발한
            <span className="ml-1 font-semibold">
              영화 검색 결과, 세부 영화 정보, 인기 영화 순위와 개봉 예정 영화
              차트를 만나볼 수 있는 사이트
            </span>
            입니다.
          </p>
          <p>
            기존의 webpack을 사용하여 빌드하는 CRA 대신 ESBuild를 사용한 Vite를
            빌드 도구로 채택하면서, 빨라진 개발환경을 크게 체감할 수 있었습니다.
          </p>
          <p>
            또 비동기 통신 라이브러리 axios를 이용하여 서버와 데이터를 주고
            받음으로써 HTTP 메서드에 대해 익힐 수 있었고, async/await 구문을
            사용하여 간결하고 효율적인 코드를 작성할 수 있었습니다.
          </p>
        </div>
        <div className="flex relative">
          <div className="absolute -left-[28rem] w-[70rem] md:min-h-[55rem] hidden md:block hover:z-20 brightness-75 hover:brightness-100">
            <Image
              src="/movie-finder/moviefinder-side2.webp"
              fill
              alt="mine-main"
               quality={50}
              sizes="100%"
              priority
            />
          </div>
          <div className="w-full aspect-[1/0.8] md:min-h-[55rem] relative z-10 brightness-100">
            <Image
              src="/movie-finder/moviefinder-main.webp"
              fill
              alt="mine-main"
              quality={50}
              sizes="100%"
              priority
            />
          </div>
          <div className="absolute -right-[28rem] w-[70rem] md:min-h-[55rem] hidden brightness-75 md:block hover:z-20 hover:brightness-100">
            <Image
              src="/movie-finder/moviefinder-side1.webp"
              fill
              alt="mine-main"
              quality={50}
              sizes="100%"
              priority
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-7">
          <h2 className="font-semibold text-2xl mb-2">Skills</h2>
          <div className="h-24 flex space-x-4 items-end font-semibold">
            <SkillsIcon skillName="React" />
            <SkillsIcon skillName="Javascript" />
            <SkillsIcon skillName="Styled-C" />
          </div>
        </div>
        {/* 주요 기능 */}
        <div className="mt-10 md:mt-10">
          <h2 className="font-semibold text-2xl">Key Functions</h2>
          <div className="mt-4">
            <h3 className="text-lg font-bold">⁃ 메인 영화 차트 UI 구현</h3>
            <p className="mt-2">
              TMDB Open API 서버와의 통신을 통해 영화 인기 차트와 개봉 예정 영화
              데이터를 가져와서 가로 스크롤 형식의 Slider로 구현했습니다.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">⁃ 영화 검색 기능</h3>
            <p className="mt-2">
              모달 창에서 사용자가 입력한 검색어를 POST 요청의 body 데이터로
              전달합니다. 이를 통해 검색어에 맞는 영화 목록을 가져옵니다.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">⁃ 세부 영화 정보 확인</h3>
            <p className="mt-2">
              사용자가 검색한 영화 목록에서 선택한 영화의 ID를 기반으로 POST
              요청을 보내어 해당 영화의 세부 정보를 가져옵니다. 이 정보에는
              등장인물, 장르, 런타임 등이 포함됩니다. 또한, 스틸 컷을 배경으로
              한 세부 영화 정보 페이지를 확인할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-10">
          <h2 className="font-semibold text-2xl mb-2">After Working</h2>
          <p>
            ⁃ axios를 활용하여 비동기 작업을 어떻게 관리하고 처리하는지에 대해
            깊이 있게 이해할 수 있었습니다. RESTful API를 axios를 통해 호출하고
            데이터를 주고받으면서, 프론트엔드에서의 데이터 흐름을 더욱 명확히
            이해할 수 있었습니다.
          </p>
          <p className="mt-4">
            ⁃ 기존의 CRA 빌드 방식에서 벗어나 Vite를 사용함으로써 초기 로딩
            속도를 최적화하여 사용자 경험을 개선할 수 있었습니다.
          </p>
          <p className="mt-4">
            ⁃ Styled-components를 채택하면서 CSS-in-JS 방식으로 스타일을
            정의하고 컴포넌트에 적용하는 경험을 통해 스타일링의 유연성과
            재사용성을 크게 느낄 수 있었습니다.
          </p>
        </div>
        <div className="mt-10 pb-10 md:mt-10">
          <Link
            href="https://github.com/winternotseason/moviefinder/"
            target="_blank"
            className="bg-black dark:bg-white w-40 text-white py-3 px-4 text-sm text-center self-center dark:text-black"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieFinder;
