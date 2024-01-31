"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./Links.module.css";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "../../../../lib/action";
import { Session } from "next-auth";

const links = [
  { name: "Homepage", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

interface Props {
  session: Session | null;
}

const Links = ({ session }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={s.container}>
      <div className={s.links}>
        {links.map((link) => (
          <Link
            className={`${s.link} ${pathname === link.path && s.active}`}
            key={link.name}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
        {session?.user ? (
          <>
            {session?.user && (
              <Link
                className={`${s.link} ${pathname === "/admin" && s.active}`}
                href="/admin"
              >
                Admin
              </Link>
            )}
            <form action={handleLogout}>
              <button className={s.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Link
            className={`${s.link} ${pathname === "/login" && s.active}`}
            href="/login"
          >
            Login
          </Link>
        )}
      </div>
      <Image
        onClick={() => setOpen((prev) => !prev)}
        className={s.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
      />
      {open && (
        <div className={s.mobileLinks}>
          {links.map((link) => (
            <Link
              className={`${s.link} ${pathname === link.path && s.active}`}
              key={link.name}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
          {session?.user ? (
            <>
              {session.user && (
                <Link
                  className={`${s.link} ${pathname === "/admin" && s.active}`}
                  href="/admin"
                >
                  Admin
                </Link>
              )}
              <form action={handleLogout}>
                <button className={s.logout}>Logout</button>
              </form>
            </>
          ) : (
            <Link
              className={`${s.link} ${pathname === "/login" && s.active}`}
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
