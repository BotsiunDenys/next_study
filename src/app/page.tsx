import Image from "next/image";
import s from "./Home.module.css";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h1 className={s.title}>Creative Thoughts Agency.</h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={s.buttons}>
          <button className={s.button}>Learn More</button>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.brands}>
          <Image className={s.brandImg} src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className={s.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={s.heroImg} />
      </div>
    </div>
  );
}
