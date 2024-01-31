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

export const register = async (formData: FormData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (typeof password !== "string") {
      return "Invalid password";
    }
    if (user) {
      return "User already exists";
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("saved to db");
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong" };
  }
};

export const login = async (formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong" };
  }
};
