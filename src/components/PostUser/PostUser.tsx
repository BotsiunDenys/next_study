import Image from "next/image";
import s from "./PostUser.module.css";
import { getUser } from "../../../lib/data";

interface Props {
  userId: string;
}

const PostUser = async ({ userId }: Props) => {
  const user = await getUser(userId);

  return (
    <div className={s.detail}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        width={50}
        height={50}
        alt=""
        className={s.avatar}
      />
      <div className={s.detailText}>
        <span className={s.detailTitle}>Author</span>
        <span className={s.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
