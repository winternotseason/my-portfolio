import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col py-4 px-6">
      {/* intro */}
      <h1 className="text-base md:text-4xl font-extrabold mb-2 md:mb-4 text-center">
        <span className="text-green-500">#</span>MINE
      </h1>
      <p className="text-base md:text-2xl font-medium md:font-semibold pb-5">
        ► 배포 URL <br />
        <Link
          className="pl-5 mt-3 text-sm md:text-base "
          href="https://mine-community-w.vercel.app"
        >
          https://mine-community-w.vercel.app
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
            <strong>- Frontend. </strong> NextJS, Typescript, react-query,
            zustand
          </p>
          <p>
            <strong>- Backend. </strong> NextJS
          </p>
          <p>
            <strong>- Styling. </strong>Tailwind CSS
          </p>
          <p>
            <strong>- Database. </strong>MongoDB
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
        </div>
      </div>
    </div>
  );
};

export default Mine;
