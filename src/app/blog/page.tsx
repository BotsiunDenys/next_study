import PostCard from "@/components/PostCard/PostCard";
import s from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={s.container}>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default Blog;
