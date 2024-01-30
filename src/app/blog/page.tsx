import PostCard from "@/components/PostCard/PostCard";
import s from "./Blog.module.css";
import { PostType } from "../../../lib/types";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/api/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className={s.container}>
      {posts.map((post: PostType) => (
        <div className={s.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
