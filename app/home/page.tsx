"use client";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 6000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center px-5">
      <div
        className={`self-start font-extrabold text-3xl mt-10 ${
          start ? "animate-pulse" : ""
        }`}
      >
        <p>FrontEnd</p>
        <p>Developer.</p>
        <p className="mt-3">Seoyeon&apos;s Portfolio</p>
      </div>
    </div>
  );
};

export default Home;
