import Image from "next/image";
import s from "./SinglePost.module.css";

const SinglePost = () => {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image alt="" src="/post.png" fill className={s.img} />
      </div>
      <div className={s.textContainer}>
        <h1 className={s.title}>Title</h1>
        <div className={s.detail}>
          <Image src="/noavatar.png" width={50} height={50} alt="" className={s.avatar} />
          <div className={s.detailText}>
            <span className={s.detailTitle}>Author</span>
            <span className={s.detailValue}>Terry Jefferson</span>
          </div>
          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={s.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus
          necessitatibus sunt aliquid, eius possimus veniam animi a ad autem
          exercitationem ea error libero quos ut sint fugit suscipit
          praesentium?
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
