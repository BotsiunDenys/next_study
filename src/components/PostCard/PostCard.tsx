import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../../lib/types";
import s from "./PostCard.module.css";

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.imgContainer}>
          {post.img && <Image alt="" fill sizes="auto" src={post.img} className={s.img} />}
        </div>
        <span className={s.date}>01.01.2024</span>
      </div>
      <div className={s.bottom}>
        <h1 className={s.title}>{post.title}</h1>
        <p className={s.desc}>{post.desc}</p>
        <Link className={s.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
