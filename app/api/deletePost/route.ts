import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const request = await req.json();
  const objectId = ObjectId.createFromHexString(request.postId);
  const client = await clientPromise;
  const db = client.db("portfolio");
  const collection = db.collection("board");
  await collection.deleteOne({ _id: new ObjectId(objectId) });
  return NextResponse.json({ status: 201 });
}
