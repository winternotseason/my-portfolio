import React from "react";
import PostingForm from "../_component/posting-form";
import clientPromise from "@/lib/db";

export default async function Board() {
  const client = await clientPromise;
  const portfolio = client.db("portfolio");
  const board = portfolio.collection("board");
  const posts = await board.find().toArray();

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col w-[60rem] mt-16 pt-10 ">
        <PostingForm />
        <div>
          <ul className="w-full h-full bg-gray-200 p-5 mt-3">
            {posts.map((post) => (
              <li
                key={post.content}
                className="w-full h-auto bg-white mt-6 p-4"
              >
                <p className="text-md">{post.writer}</p>
                <p className="font-bold text-2xl">{post.content}</p>
                <p className="font-thin text-sm">{post.posting_time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
