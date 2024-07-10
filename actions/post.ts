"use server";

import clientPromise from "@/lib/db";
import { hashUserPassword } from "@/lib/hash";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Posting(
  prevValue: { message: string },
  formData: FormData
) {
  const writer = formData.get("writer") as string;
  const password = formData.get("password") as string;
  const content = formData.get("content") as string;
  const hashedPassword = await hashUserPassword(password);
  if (writer.trim().length === 0) {
    return { message: "작성자를 입력해주세요." };
  }
  if (password.trim().length === 0) {
    return { message: "비밀번호를 입력해주세요." };
  }
  if (content.trim().length === 0) {
    return { message: "내용을 입력해주세요." };
  }
  let success = false;
  try {
    const client = await clientPromise;
    const portfolio = client.db("portfolio");
    const board = portfolio.collection("board");
    const now = new Date();
    const postingTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC+9 시간대
    const year = postingTime.getUTCFullYear();
    const month = String(postingTime.getUTCMonth() + 1).padStart(2, "0");
    const day = String(postingTime.getUTCDate()).padStart(2, "0");
    const hours = String(postingTime.getUTCHours()).padStart(2, "0");
    const minutes = String(postingTime.getUTCMinutes()).padStart(2, "0");
    const postingTimeString = `${year}-${month}-${day} ${hours}:${minutes}`;

    await board.insertOne({
      writer,
      password: hashedPassword,
      content,
      posting_time: postingTimeString,
    });
    success = true;
  } catch (err) {
    return { message: "게시글 작성 중 에러가 발생하였습니다." };
  }
  if (success) {
    revalidatePath('/board','page')
    redirect("/board");
  }
  return { message: "게시글이 성공적으로 작성되었습니다." };
}
