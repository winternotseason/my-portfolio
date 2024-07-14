import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="md:mt-14 w-full max-w-[40rem] md:max-w-[70rem] pt-16 px-10 flex flex-col ">
        <h1 className="font-semibold text-3xl mt-10 pb-3 border-b-2">MINE</h1>
        <p className="my-4 space-y-3">
          <p>
            네이버 쇼핑 API를 이용하여{" "}
            <span className="font-semibold">
              사용자가 원하는 상품을 최저가로 만나볼 볼 수 있는 NextJS로 구현한
              쇼핑 사이트
            </span>
            입니다.
          </p>
          <p>
            NextJS의 새로운 App Router 방식을 처음 사용해보며 기존에 배우고
            싶었던 라우팅 방식을 프로젝트에서 적극적으로 활용함으로써 확실히
            익혀볼 수 있었습니다.
          </p>
          <p>
            또 복잡한 방식으로 상태관리를 해야했던 Redux 대신 편리하게 상태
            관리가 가능한 zustand를 이번 프로젝트에서 도입해보면서 빠르고
            간결하게 상태관리를 할 수 있었습니다.
          </p>
        </p>
        <div className="flex relative">
          <div className="absolute -left-[28rem] w-[27rem] md:min-h-[55rem] hidden md:block">
            <Image src="/mine/mine-mobile-1.png" fill alt="mine-main" />
          </div>
          <div className="w-full aspect-[2/1.7] md:min-h-[55rem] relative">
            <Image src="/mine/mine-main.png" fill alt="mine-main" />
          </div>
          <div className="absolute -right-[28rem] w-[27rem] aspect-[2/1.7] md:min-h-[55rem] hidden md:block">
            <Image src="/mine/mine-mobile-2.png" fill alt="mine-main" />
          </div>
        </div>

        <Link
          href="https://mine-shopping.vercel.app/"
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
            <SkillsIcon skillName="MongoDB" />
            <SkillsIcon skillName="Zustand" />
          </div>
        </div>
        {/* 주요 기능 */}
        <div className="mt-10 md:mt-10">
          <h2 className="font-semibold text-2xl">Key Functions</h2>
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              ⁃ 웹사이트 내부 회원 시스템 구현
            </h3>
            <div className="p-4">
              <h3 className="font-semibold">
                1. NextJS 자체 API Route를 활용한 회원가입 구현
              </h3>
              <p className="mt-2 ">
                회원가입 기능을 도입하기 위해 MongoDB 데이터베이스를
                사용하였습니다. 별도의 서버 설정 없이 api/register/route.ts에
                간편하게 API를 구축함으로써 개발 초기 설정 시간과 노력을 크게
                절약할 수 있었습니다. <br /> 코드 변경 사항을 실시간으로 반영할
                수 있어 빠른 피드백을 받을 수 있어 효울성과 생산성의 향상을 느낄
                수 있었습니다.
              </p>
              <h3 className="mt-5 font-semibold">
                2. Next-Auth 라이브러리를 사용한 회원 인증 기능
              </h3>
              <p className="mt-2">
                Next-Auth 라이브러리를 회원 인증 및 세션 관리를 위해
                도입함으로써 보안 토큰, 세션 쿠키 등의 보안관리를 자동으로
                처리해준다는 장점을 통해 보안 위험을 최소화 할 수 있었고, 세션을
                자동으로 생성하고 관리해주는 기능도 갖추고 있었기 때문에, 세션
                유지 및 만료를 쉽게 처리할 수 있었습니다.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">
              ⁃ 네이버 검색 &gt; 쇼핑 Open API을 통해 사용자의 검색 데이터를
              수신
            </h3>
            <p className="mt-2">
              검색 기능을 구현하기위해 네이버 검색 Open API를 사용하였습니다.
              실제 데이터와의 상호작용을 통해 RESTful API와 HTTP 메서드를 익힐
              수 있었습니다. <br /> 또 Postman 플랫폼으로 응답 데이터를
              실시간으로 확인하여, 명확한 데이터 구조를 미리 파악하였습니다.
              덕분에 프론트엔드 코드에서 가공해야할 부분을 빠르게 파악하여
              수정할 수 있었습니다.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-10">
          <h2 className="font-semibold text-2xl mb-2">After Working</h2>
          <p>
            ⁃ 로그인과 회원가입을 구현하는데 fetch 함수의 Pending 상태가 적지
            않은 시간을 할애하면서 사용자가 느끼기에 사이트가 멈춘 것 같은
            느낌이 들었습니다. <br />
            해당 문제를 useFormStatus Hook을 통해 로딩 상태로 처리 해보면서
            사용자 경험의 가치의 중요성을 다시한번 느낄 수 있었던 계기가
            되었습니다.
          </p>
          <p className="mt-4">
            ⁃ 서버 사이드 렌더링을 지원하는 Next.js 기반의 프로젝트를 개발하면서
            SEO 최적화와 빠른 초기 로딩의 장점을 경험했고, next/image 컴포넌트를
            통해 이미지 최적화를 자동으로 처리함으로써 이미지 로딩 속도의 개선을
            느낄 수 있었습니다.
          </p>
        </div>
        <div className="mt-10 pb-10 md:mt-10">
          <Link
            href="https://github.com/winternotseason/mine-shopping/"
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

export default Mine;
