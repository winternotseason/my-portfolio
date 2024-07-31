"use client";
import Image from "next/image";
import React, { useState } from "react";

const MovieFinderImages = () => {
  const [index, setIndex] = useState(1);

  const handleLeftClick = () => {
    setIndex(index - 1); // 왼쪽으로 300px 이동
  };

  const handleRightClick = () => {
    setIndex(index + 1); // 오른쪽으로 300px 이동
  };

  return (
    <div className="flex w-full relative flex-col justify-center items-center">
      <div className="max-w-[40rem] w-3/4 aspect-[3/2.7] relative">
        <Image
          src={`/new/moviefinder/moviefinder-pc-${index}.webp`}
          alt="moviefinder-pc"
          fill
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      </div>
      <div className="w-full flex justify-center space-x-5">
        <button
          disabled={index === 1}
          className={`${index === 1 && "text-gray-400"} `}
          onClick={handleLeftClick}
        >
          ◀
        </button>
        <button
          disabled={index === 3}
          className={`${index === 3 && "text-gray-400"} `}
          onClick={handleRightClick}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieFinderImages;
