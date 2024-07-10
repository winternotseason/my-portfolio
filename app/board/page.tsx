import Posting from "@/actions/post";
import React from "react";

const Board = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-center w-[60rem] mt-16 pt-10">
        <form className="flex flex-col" action={Posting}>
          <div className="flex mb-2">
            <input
              placeholder="작성자"
              type="text"
              id="writer"
              name="writer"
              className="mr-2 outline-none border-[1px] border-gray-400 p-2"
            />
            <input
              placeholder="비밀번호"
              type="password"
              id="password"
              name="password"
              className="outline-none border-[1px] border-gray-400 p-2"
            />
          </div>
          <textarea
            className="h-32 resize-none outline-none border-[1px] border-gray-400 p-2"
            cols={100}
            id="content"
            name="content"
            placeholder="한마디를 남겨보세요."
          />
          <button className="w-20 h-10 self-end mt-2 bg-gray-800 text-white">
            작성
          </button>
        </form>
      </div>
      <div>
        게시글 목록
      </div>
    </div>
  );
};

export default Board;
