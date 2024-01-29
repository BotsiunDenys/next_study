import PostCard from "@/components/PostCard/PostCard";
import s from "./Blog.module.css";
import { getPosts } from "../../../lib/data";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className={s.container}>
      {posts.map((post) => (
        <div className={s.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
