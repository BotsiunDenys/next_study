import Image from "next/image";
import s from "./PostCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.imgContainer}>
          <Image alt="" fill src="/post.png" className={s.img} />
        </div>
        <span className={s.date}>01.01.2024</span>
      </div>
      <div className={s.bottom}>
        <h1 className={s.title}>Title</h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ratione voluptate error porro temporibus eligendi reprehenderit.
          Doloribus ex, dignissimos fuga illum tenetur vitae facilis omnis autem
          reiciendis veniam eos hic?
        </p>
        <Link className={s.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
