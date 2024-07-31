"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
const SideMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <>
      {/* 백드롭 */}
      {isMenuOpen && (
        <div className="fixed top-[63px] left-0 w-screen h-screen bg-black/20 z-40" />
      )}
      <div
        className={`p-6  fixed z-50 w-full md:w-1/2 right-0 top-[63px] h-screen bg-primary transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex flex-col space-y-3 font-light">
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            href="/home"
            className="w-full rounded-lg font-semibold p-3 hover:bg-gray-200 transition-colors duration-200"
          >
            About ME
          </Link>
          <hr />
          <h1 className="font-semibold pt-2">PROJECTS</h1>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            href="/"
          >
            MINE
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            href="/"
          >
            MOVIE FINDER
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            href="/"
          >
            PORTFOLIO
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
