import React from "react";
import PostingForm from "../_component/posting-form";
import clientPromise from "@/lib/db";
import { GiPencil } from "react-icons/gi";
import PostDeleteButton from "../_component/post-delete-btn";

export default async function Board() {
  const client = await clientPromise;
  const portfolio = client.db("portfolio");
  const board = portfolio.collection("board");
  const posts = await board.find().toArray();

  return (
    <div className="w-full h-full flex justify-center animate-fade">
      <div className="flex flex-col w-[60rem] mt-16 pt-10 ">
        <PostingForm />
        <div>
          <ul className="flex flex-col items-center justify-center w-full h-full border-2 p-5 mt-7 rounded-2xl">
            {posts.length === 0 && (
              <h1 className="text-md font-semibold ">
                게시글이 존재하지 않습니다.
              </h1>
            )}
            {posts.map((post) => (
              <li
                key={post.content}
                className="flex flex-col w-full h-auto bg-white mt-6 p-4 rounded-xl dark:bg-black"
              >
                <div className="flex justify-between text-md mb-3">
                  <div className="flex items-center">
                    <p className="mr-1">
                      <GiPencil />
                    </p>
                    <p>{post.writer}</p>
                  </div>
                  <PostDeleteButton postId={post._id.toString()} />
                </div>
                <div className="h-auto font-bold text-2xl">{post.content}</div>
                <p className="font-light text-sm text-gray-400 self-end">
                  {post.posting_time}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
