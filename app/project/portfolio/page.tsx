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
            <strong>- Frontend. </strong> React(Vite), Javascript, zustand
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
          <p className="font-semibold">· 회원 기능</p>
          <div className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            <p>
              - Auth.js 라이브러리를 활용하여 안전한 회원 인증 로직을
              구현하였습니다.
              <br />- 회원가입, 로그인 로직 구현 : Zod 라이브러리와
              React-hook-form을 활용하여 유효성 검사와 form 컴포넌트를 분리시켜
              가독성 있게 구현하였습니다.
              <br /> - 글쓰기와 나의 정보 페이지는 인증이 된 회원만 접근
              가능하도록 구현하였습니다.
            </p>
          </div>

          <p className="font-semibold mt-2">
            · 카카오 맵 API를 활용한 위치 정보 기반 글 작성
          </p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            {" "}
            - 카카오 맵 API를 사용하여 사용자가 특정 음식점을 선택하고, 해당
            위치 정보를 DB에 함께 저장하여 작성된 글을 볼 때 지도와 함께
            표시되도록 구현하였습니다.
          </p>
          <p className="font-semibold mt-2">· 카테고리, 지역 필터링</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            - Next.js의 동적 라우팅을 기반으로 params를 받아 API 호출을 통해
            필터링된 데이터들을 불러와 사용자들이 해당 카테고리와 지역에 맞는
            리뷰들을 탐색할 수 있도록 구현하였습니다.
          </p>
          <p className="font-semibold mt-2">· 상호명 검색</p>
          <p className="text-xs md:text-base pl-4 font-light md:font-normal mt-1">
            - API Routes 내부에서 MongoDB의 $regex 함수를 사용해 상호명 검색
            기능을 구현하였습니다.
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
          <p className="font-semibold mt-2">- 첫 react-query 도입의 어려움</p>
          <p className="pl-4">
            - 서버 상태와 클라이언트 상태를 명확히 구분하기 위해 리액트 쿼리를
            도입하였습니다. 자주 사용되는 개념들(InfinityQuery, useMutaion,
            useQuery...) 위주로 학습하여 적용해보았고, 나아가 사용자의 경험을 더
            높일 수 있는 react-query의 세부적인 기능 학습의 필요성을 느꼈습니다.
          </p>
          <p className="font-semibold mt-2">
            - 작성된 글 배열 데이터를 가져오기 위해 MongoDB의 find 메서드 호출
            시 겪었던 오류
          </p>
          <p className="pl-4">
            - MongoDB의 find 메서드는 배열 자체가 아닌 cursor를 return 하므로
            toArray() 메서드를 사용하여 배열 형태로 변환하고 응답 데이터를
            보냄으로써 문제를 해결하였습니다.
          </p>
          <p className="font-semibold mt-2">
            - 글 작성 시 POST된 이미지를 cloudinary의 이미지 URL로 변환 후
            next/image로 해당 이미지 URL을 src 속성으로 사용할 때 오류
          </p>
          <p className="pl-4">
            - next/image로 외부 경로의 이미지를 불러올 때에는 hostname 설정이
            필요하므로 next.config.mjs에서 cloudinary의 URL을 hostname으로 별도
            설정 해줌으로써 문제를 해결하였습니다.
          </p>
        </div>
        {/* After Working */}
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold">
            🏁 After Working
          </h3>
          <p className="text-xs md:text-base font-light md:font-normal mt-2">
            NextJS의 API Routes 기능을 활용하면서 글쓰기, 인피니트 스크롤링을
            활용한 글 목록 불러오기, 해당 지역에 맞는 리뷰 불러오기 등 API
            엔드포인트를 직접 구축해보는 경험을 하게 되었습니다. 이러한 경험을
            바탕으로 클라이언트와 서버 간 데이터의 흐름을 전체적으로 이해하는 데
            큰 도움이 되었습니다. 또 react-query를 도입하여 서버 상태와
            클라이언트 상태를 분리하여 관리함으로써 직관적이고 효율적인 서버측
            데이터 관리가 가능하였고, 해당 라이브러리의 큰 장점인 캐싱 기능을
            느껴보면서 불필요한 페칭을 줄이며 react-query의 이점을 실감할 수
            있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mine;
