"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleDevice from "./ToggleDevice";

const MovieFinderImages = () => {
  const [index, setIndex] = useState(1);
  const [isPhone, setIsPhone] = useState(false);
  const handleLeftClick = () => {
    setIndex(index - 1);
  };

  const handleRightClick = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <div className="flex w-full md:w-1/2 relative flex-col justify-between items-center h-[30rem] md:h-[600px]">
        <ToggleDevice isPhone={isPhone} setIsPhone={setIsPhone} />
        <div
                  className={`${
                    isPhone
                      ? "aspect-[1/1.8] w-1/2 max-w-[14rem] md:min-w-[10rem]"
                      : "aspect-[1.2/1] w-full"
                  } relative border-[1px] border-dotted`}
        >
          {isPhone ? (
            <Image
              src={`/moviefinder/moviefinder-mobile-${index}.webp`}
              alt="mine-pc"
              fill
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          ) : (
            <Image
              src={`/moviefinder/moviefinder-pc-${index}.webp`}
              alt="mine-pc"
              fill
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          )}
        </div>
        <div className="w-full flex justify-center space-x-5 mt-3">
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
    </>
  );
};

export default MovieFinderImages;
