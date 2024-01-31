import Link from "next/link";
import Links from "./Links/Links";
import { auth } from "../../../lib/auth";
import s from "./Navbar.module.css";

const Navbar = async () => {
  const session = await auth();
  
  return (
    <div className={s.container}>
      <Link href="/" className={s.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
