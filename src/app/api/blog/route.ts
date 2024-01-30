import { NextRequest, NextResponse } from "next/server";
import { Post } from "../../../../lib/models";
import { PostType } from "../../../../lib/types";
import { connectToDb } from "../../../../lib/utils";

export const GET = async (request: NextRequest): Promise<NextResponse<PostType[]>> => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch posts");
  }
};
