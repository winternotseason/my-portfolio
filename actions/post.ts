"use server";

import clientPromise from "@/lib/db";
import { hashUserPassword } from "@/lib/hash";

export default async function Posting(formData: FormData) {
  const writer = formData.get("writer");
  const password = formData.get("password") as string;
  const content = formData.get("content");
  const hashedPassword = await hashUserPassword(password);
  try {
    const client = await clientPromise;
    const portfolio = client.db("portfolio");
    const board = portfolio.collection("board");
    await board.insertOne({ writer, password: hashedPassword, content });
    console.log("입력 완료!");
  } catch (err) {
    console.error(err);
  }
}
