"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const completionWord = "안녕하세요.1머머하는 개발자1황서연입니다.";
  const [display, setDisplay] = useState(""); // display 되는 텍스트
  const [count, setCount] = useState(0); // 현재 타이핑의 카운트
  const [end, setEnd] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplay((prevTitleValue) => {
        if (end) {
          clearInterval(typingInterval);
          return prevTitleValue;
        }

        let result = prevTitleValue
          ? prevTitleValue + completionWord[count] // 이전 텍스트 + 새로운 글자
          : completionWord[count]; // 타이핑이 처음이라면 첫 글자

        setCount(count + 1);

        if (completionWord[count] === "1") {
          return "";
        }

        if (count >= completionWord.length - 1) {
          setEnd(true);
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplay(""); // 일정 시간 후에 display 초기화
          }, 1000); // 1초 후에 텍스트 초기화
        }

        return result;
      });
    }, 200);

    // 0.2초마다 result를 return
    return () => {
      clearInterval(typingInterval);
    };
  }, [count, end]); // count와 end가 변경될 때마다 useEffect 실행

  useEffect(() => {
    setInterval(() => {
      setVisibleContent(true);
    }, 5800);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-6xl font-extrabold">{display}</h1>
      {visibleContent ? <div className="animate-fade">content!!!!</div> : ""}
    </div>
  );
}
