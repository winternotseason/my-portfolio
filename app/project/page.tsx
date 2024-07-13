import Image from "next/image";

import React from "react";

const Project = () => {
  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="mt-10 md:mt-14 w-full max-w-[40rem] md:max-w-[70rem] flex flex-col items-center pt-16">
        <h2 className="md:mt-12 text-4xl font-bold my-4 md:my-10 md:text-6xl">PROJECT</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="w-4/5">
            <div className="w-full aspect-[3/2.4] relative">
              <Image src="/MINE.png" fill alt="mine" />
            </div>
            <div className="py-7">
              <p className="text-xl font-semibold hover:animate-bounce">
                &gt; MINE
              </p>
              <p className="mt-1 text-lg">
                네이버 쇼핑 API를 이용하여 사용자가 원하는 상품을 최저가로
                만나볼 볼 수 있는 NextJS로 구현한 쇼핑 사이트입니다. MongoDB와
                Next-Auth 라이브러리를 통해 자체 회원 기능을 마련하였고, 실제
                구매 사이트로 이동이 가능합니다.
              </p>
              <button className="mt-3 bg-black text-white py-3 px-5 rounded-3xl text-sm font-semibold hover:bg-black/80 dark:bg-white dark:text-black">
                자세히 보기
              </button>
            </div>
          </div>
          <div className="w-4/5 mt-4 md:mt-0">
            <div className="w-full aspect-[3/2.4] relative">
              <Image src="/moviefinder.png" fill alt="mine" />
            </div>
            <div className="py-7">
              <p className="text-xl font-semibold hover:animate-bounce">
                &gt; MOVIE FINDER
              </p>
              <p className="mt-1 text-lg">
                TMDB Open API를 활용한 영화 검색 사이트입니다. 비동기 통신 최신
                영화 순위와 개봉예정영화 차트를 볼 수 있으며, 사용자가 검색한
                영화의 세부 정보들을 찾아볼 수 있습니다.
              </p>
              <button className="mt-3 bg-black text-white py-3 px-5 rounded-3xl text-sm font-semibold hover:bg-black/80 dark:bg-white dark:text-black">
                자세히 보기
              </button>
            </div>
          </div>
          <div className="w-4/5 mt-4 md:mt-0">
            <div className="w-full aspect-[3/2.4] relative">
              <Image src="/TOYINMAC.png" fill alt="mine" />
            </div>
            <div className="py-7">
              <p className="text-xl font-semibold hover:animate-bounce">
                &gt; Toy Projects IN MAC
              </p>
              <p className="mt-1 text-lg">
                실제와 비슷하게 구현한 OS UI에 개인 토이 프로젝트를 모달형태로
                구현한 앱입니다. 계산기 앱과 서울, 도쿄, 뉴욕, 런던, 파리의
                실시간 날씨를 그에 맞는 배경화면 이미지와 함께 확인할 수 있는
                날씨앱을 구현하여 두었습니다.
              </p>
              <button className="mt-3 bg-black text-white py-3 px-5 rounded-3xl text-sm font-semibold hover:bg-black/80 dark:bg-white dark:text-black">
                자세히 보기
              </button>
            </div>
          </div>
          <div className="w-4/5 mt-4 md:mt-0">
            <div className="w-full aspect-[3/2.4] relative">
              <Image src="/moviefinder.png" fill alt="mine" />
            </div>
            <div className="py-7">
              <p className="text-xl font-semibold hover:animate-bounce">
                &gt; MOVIEFINDER
              </p>
              <p className="mt-1 text-lg">포트폴리오 사이트</p>
              <button className="mt-3 bg-black text-white py-3 px-5 rounded-3xl text-sm font-semibold hover:bg-black/80 dark:bg-white dark:text-black">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
