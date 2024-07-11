"use client";

import React from "react";

const PostDeleteButton = ({ postId }: { postId: string }) => {
  const handlePostDelete = async () => {
    try {
      const response = await fetch(`/api/deletePost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });
      const result = await response.json();
      if (result.status === 201) {
        // location.reload() 좀 아닌 것 같음... 다시 생각해봐
        location.reload();
      } else {
        console.log("게시글 삭제 오류");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return <button onClick={handlePostDelete}>X</button>;
};

export default PostDeleteButton;
