import { Post, User } from "./models";
import { PostType, UserType } from "./types";
import { connectToDb } from "./utils";

export const getPosts = async (): Promise<PostType[]> => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get posts");
  }
};

export const getPost = async (slug: string): Promise<PostType> => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get post");
  }
};

export const getUser = async (id: string): Promise<UserType> => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get posts");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get posts");
  }
};
