import { NextRequest, NextResponse } from "next/server";
import { Post } from "../../../../../lib/models";
import { PostType } from "../../../../../lib/types";
import { connectToDb } from "../../../../../lib/utils";

interface Props {
  params: {
    slug: string;
  };
}

export const GET = async (
  request: NextRequest,
  { params }: Props
): Promise<NextResponse<PostType>> => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch post");
  }
};
