import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToyInMac = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="md:mt-14 w-full max-w-[40rem] md:max-w-[70rem] pt-16 px-10 flex flex-col ">
        <h1 className="font-semibold text-3xl mt-10 pb-3 border-b-2">
          Toy IN mac OS
        </h1>
        <p className="my-4 space-y-3">
          <p>
            NextJS APP router 라우팅 시스템으로 개발한
            <span className="ml-1 font-semibold">
              계산기, 날씨 앱을 mac OS UI에 나타낸 앱
            </span>
            입니다.
          </p>
          <p>
            최근 NextJS에 도입된 Parallel Route와 Intercepting Route 기능을
            사용하여 토이 프로젝트들을 모달처럼 배치하면서, NextJS의 다양한
            기능들을 익힐 수 있었습니다.
          </p>
          <p>
            openweatherApi와의 통신을 통해 날씨 앱을 구현하였습니다. 그
            과정속에서 데이터를 적절히 가공하는데 Promise.all과 같은 평소에 자주
            사용해보지 못했던 자바스크립트 함수를 다시 한번 확실히 익힐 수 있는
            계기가 되었습니다.
          </p>
        </p>
        <div className="flex relative">
          <div className="absolute -left-[28rem] w-[70rem] md:min-h-[55rem] hidden md:block hover:z-20 brightness-75 hover:brightness-100">
            <Image src="/toyinmac/toy-main.png" fill alt="mine-main" />
          </div>
          <div className="w-full aspect-[1/0.8] md:min-h-[55rem] relative z-10 brightness-100">
            <Image src="/toyinmac/toy-weather.png" fill alt="mine-main" />
          </div>
          <div className="absolute -right-[28rem] w-[70rem] md:min-h-[55rem] hidden brightness-75 md:block hover:z-20 hover:brightness-100">
            <Image src="/toyinmac/toy-calculator.png" fill alt="mine-main" />
          </div>
        </div>
        <Link
          href="https://toy-in-mac.vercel.app/"
          target="_blank"
          className="bg-black dark:bg-white w-40 text-white py-3 text-sm text-center self-center dark:text-black"
        >
          배포 사이트 바로가기
        </Link>
        {/* Skills */}
        <div className="mt-7">
          <h2 className="font-semibold text-2xl mb-2">Skills</h2>
          <div className="h-24 flex space-x-4 items-end font-semibold">
            <SkillsIcon skillName="NextJS" />
            <SkillsIcon skillName="Typescript" />
            <SkillsIcon skillName="TailwindCSS" />
            <SkillsIcon skillName="Zustand" />
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
            href="https://github.com/winternotseason/with-mac"
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

export default ToyInMac;
