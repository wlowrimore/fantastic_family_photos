import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  // fetch
  try {
    await connect()

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    return new NextResponse("Server Error", { status: 500 })
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  // fetch
  try {
    await connect()

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post successfully deleted", { status: 200 })
  } catch (err) {
    return new NextResponse("Server Error", { status: 500 })
  }
};