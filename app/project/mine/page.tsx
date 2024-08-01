import SkillsIcon from "@/app/_component/skillsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mine = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col p-4">
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
      <div className="w-full pt-5 space-y-7 text-sm md:text-base">
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold mb-2">
            Skills
          </h3>
          <p>
            <strong>- Frontend. </strong> NextJS, Typescript, react-query, zustand
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

        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold">
            Skills
          </h3>
          <p>
            <strong>Frontend. </strong> NextJS, Typescript, react-query, zustand
          </p>
          <p>
            <strong>Backend. </strong> NextJS
          </p>
          <p>
            <strong>Styling. </strong>Tailwind CSS
          </p>
          <p>
            <strong>Database. </strong>MongoDB
          </p>
          <p>
            <strong>Deployment. </strong> Vercel
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold">
            Skills
          </h3>
          <p>
            <strong>Frontend. </strong> NextJS, Typescript, react-query, zustand
          </p>
          <p>
            <strong>Backend. </strong> NextJS
          </p>
          <p>
            <strong>Styling. </strong>Tailwind CSS
          </p>
          <p>
            <strong>Database. </strong>MongoDB
          </p>
          <p>
            <strong>Deployment. </strong> Vercel
          </p>
        </div>
        {/* After Working */}
      </div>
    </div>
  );
};

export default Mine;
