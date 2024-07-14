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
        <div className="my-4 space-y-3">
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
        </div>
        <div className="flex relative">
          <div className="absolute -left-[28rem] w-[70rem] md:min-h-[55rem] hidden md:block hover:z-20 brightness-75 hover:brightness-100">
            <Image
              src="/toyinmac/toy-main.png"
              fill
              alt="mine-main"
              quality={50}
              sizes="100%"
              priority
            />
          </div>
          <div className="w-full aspect-[1/0.8] md:min-h-[55rem] relative z-10 brightness-100">
            <Image
              src="/toyinmac/toy-weather.png"
              fill
              alt="mine-main"
              quality={50}
              sizes="100%"
              priority
            />
          </div>
          <div className="absolute -right-[28rem] w-[70rem] md:min-h-[55rem] hidden brightness-75 md:block hover:z-20 hover:brightness-100">
            <Image
              src="/toyinmac/toy-calculator.png"
              fill
              alt="mine-main"
              quality={50}
              sizes="100%"
              priority
            />
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
            <h3 className="text-lg font-bold">
              ⁃ 맥 OS의 기본 UI를 참고한 디자인
            </h3>
            <p className="mt-2">
              맥 OS의 기본 UI를 참고하여 바탕화면 디자인을 구현했습니다.
              Next.js의 패러렐 라우트와 인터셉팅 라우트를 활용하여 아이콘을
              클릭하면 모달 창처럼 앱이 나타나는 방식으로 토이 프로젝트들을
              구성했습니다. 이 방식으로 날씨 앱과 계산기 앱을 여러 앱을 간편하게
              실행할 수 있도록 만들었습니다.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">⁃ 계산기 앱</h3>
            <p className="mt-2">
              맥 OS 계산기 앱의 UI를 참고하여 디자인한 계산기 앱을 구현했습니다.
              실제 계산기를 사용해보면서 작동 로직을 분석하고, 이를 바탕으로
              다양한 계산 기능을 처리할 수 있는 함수를 작성했습니다. 사용자
              경험을 최대한 반영하여 직관적이고 사용하기 쉬운 인터페이스로
              만들었습니다.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">⁃ 날씨 앱</h3>
            <p className="mt-2">
              날씨 앱은 OpenWeather API를 사용하여 서울, 도쿄, 뉴욕, 런던, 파리
              등 5개 도시의 실시간 날씨 정보를 제공합니다. 날씨에 맞는 배경
              화면을 표시하기 위해, axios를 활용해 여러 도시의 날씨 데이터를
              동시에 요청하고, Promise.all을 사용하여 한 번에 처리했습니다. 이를
              통해 응답 데이터를 효과적으로 가공하여, 각 도시의 날씨에 맞는 배경
              화면을 동적으로 설정했습니다. 이 과정에서 switch 함수를 사용해
              날씨 상태를 분류하고, 이를 기반으로 적절한 배경 화면을
              적용했습니다.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-10">
          <h2 className="font-semibold text-2xl mb-2">After Working</h2>
          <p>
            ⁃ Next.js의 패러렐 라우트와 인터셉팅 라우트 기능을 사용해보면서,
            보다 유연하고 동적인 페이지 전환을 구현할 수 있었습니다. 이러한
            라우팅 시스템 덕분에 모달 창처럼 앱을 띄우는 방식이 가능해졌고, 이는
            사용자 경험을 더욱 향상시키는 데 큰 도움이 되었습니다.
          </p>
          <p className="mt-4">
            ⁃ OpenWeather API와의 통신을 통해 날씨 데이터를 받아오면서, 실시간
            데이터 처리와 이를 기반으로 한 UI 변경의 중요성을 배웠습니다. 날씨에
            맞는 배경화면을 동적으로 바꾸는 기능을 구현하면서, Promise.all과
            같은 비동기 처리 방식을 더욱 잘 이해하게 되었습니다.
          </p>
          <p className="mt-4">
            ⁃ Redux 대신 Zustand를 사용하여 상태 관리를 해보면서, 훨씬 더
            간편하고 직관적인 상태 관리가 가능하다는 것을 느꼈습니다. 특히,
            선택된 날씨에 맞는 배경화면을 보여주기 위해 selectedCity라는 store
            변수를 사용하였는데, 이렇게 간단한 상태 관리를 할 때는 Zustand가
            적합하다는 것을 깨달았습니다.
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
