"use server";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { PostType, UserType } from "./types";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";

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

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (
  _previousState: { error: string; success: boolean },
  formData: FormData
) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match", success: false };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (typeof password !== "string") {
      return { error: "Invalid password", success: false };
    }
    if (user) {
      return { error: "User already exists", success: false };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("saved to db");

    return { success: true, error: "" };
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong", success: false };
  }
};

export const login = async (
  _previousState: { error: string },
  formData: FormData
) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
    return { error: "" };
  } catch (e: any) {
    if (e.message.includes("credentialssignin")) {
      return { error: "Invalid username or password" };
    }
    throw e;
  }
};
