import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col pt-4 pb-10 px-6">
      {/* intro */}
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        MOVIEFINDER
      </h1>
      <p className="text-base md:text-2xl font-medium md:font-semibold pb-5">
        ► 배포 URL <br />
        <Link
          className="pl-5 mt-3 text-sm md:text-base "
          href="https://moviefinder-lilac.vercel.app"
        >
          https://moviefinder-lilac.vercel.app
        </Link>
      </p>
      <hr />
      <div className="w-full pt-5 space-y-10 text-sm md:text-base">
        {/* Skills */}
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold mb-2">
            ⚒️ Skills
          </h3>
          <p>
            <strong>- Frontend. </strong> React, Javascript
          </p>
          <p>
            <strong>- Styling. </strong>Tailwind CSS
          </p>
          <p>
            <strong>- Deployment. </strong> Vercel
          </p>
        </div>

        {/* 기능 */}
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold mb-2">
            🖥️ Functions
          </h3>
          <p className="font-semibold">· 일간/주간 영화 차트 기능</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            실시간으로 업데이트되는 일간 및 주간 영화 차트를 제공합니다.
            사용자가 최신 인기 영화를 한눈에 파악할 수 있도록 구현하였습니다.
          </p>

          <p className="font-semibold mt-2">
            · KOBIS와 KMDB API를 연계하여 다양한 영화 정보 제공 구현
          </p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            KMDB와 KOBIS API를 통해 얻은 데이터를 기반으로 영화의 세부 정보,
            등장인물, 줄거리, 스틸컷, 수상 내역 등 관련 영화 정보들이 제공되도록
            구현하였습니다.
          </p>
          <p className="font-semibold mt-2">· 영화명 검색 기능</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            사용자가 영화명을 검색하면 해당 쿼리에 맞는 영화 목록들을 API를 통해
            호출하여 보여지도록 구현하였습니다.
          </p>
          <p className="font-semibold mt-2">· 반응형 웹사이트</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            - Tailwind CSS를 이용하여 다양한 디바이스에서 최적화된 반응형
            웹사이트를 구현하였습니다.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold">
            🚨 Challenges
          </h3>
          <p className="font-semibold mt-2">- 필요한 데이터의 부재</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            - KOBIS API 데이터는 영화 차트에 관련된 데이터만 존재하였고, KMDB
            API 데이터는 영화 차트에 관한 데이터가 없는 대신, 세부 영화 정보에
            관한 데이터들이 충분하였습니다. 그래서 두 API의 데이터를 조합하여
            사용해야 했는데, 이를 위해 KOBIS API에서 영화 차트 데이터를 가져온
            후, 해당 영화의 상세 정보를 KMDB API에서 추가로 조회하는 방식으로
            구현하여 원하는 기능을 구현할 수 있었습니다.
          </p>
        </div>
        {/* After Working */}
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold">
            🏁 After Working
          </h3>
          <p className="text-xs md:text-base font-light md:font-normal mt-2">
            이번 프로젝트에서 Vite를 사용하여 빌드 속도가 크게 향상되어 개발
            환경이 눈에 띄게 빨라졌음을 느꼈습니다. 또한, 다양한 API
            데이터를 조작하여 프론트엔드 프로젝트에 적용할 수 있었던 경험이 매우
            뿌듯했습니다. 이 과정을 통해 데이터 처리와 통합의 중요성을 깨닫게
            되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mine;
