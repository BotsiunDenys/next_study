import Image from "next/image";
import { getPost } from "../../../../lib/data";
import s from "./SinglePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/PostUser/PostUser";

interface Props {
  params: {
    slug: string;
  };
}

const SinglePost = async ({ params }: Props) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        {post.img && (
          <Image alt="" src={post.img} sizes="auto" fill className={s.img} />
        )}
      </div>
      <div className={s.textContainer}>
        <h1 className={s.title}>{post.title}</h1>
        <div className={s.detail}>
          {post && (
            <Suspense fallback={<h1>Loading...</h1>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={s.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePost;
