"use client";

import React, { useState } from "react";
import Posting from "@/actions/post";
import { useFormState } from "react-dom";

const PostingForm = () => {
  const [formState, formAction] = useFormState(Posting, { message: "" });
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="flex flex-col relative" action={formAction}>
      <div className="flex mb-2">
        <input
          placeholder="작성자"
          type="text"
          id="writer"
          name="writer"
          value={writer}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
          className="mr-2 outline-none border-[1px] border-gray-400 p-2"
        />
        <input
          placeholder="비밀번호"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="outline-none border-[1px] border-gray-400 p-2"
        />
      </div>
      <textarea
        className="h-32 resize-none outline-none border-[1px] border-gray-400 p-2"
        cols={100}
        id="content"
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="한마디를 남겨보세요."
      />
      <button className="w-20 h-10 self-end mt-2 bg-gray-800 text-white">
        작성
      </button>
    </form>
  );
};

export default PostingForm;
