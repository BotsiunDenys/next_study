import Image from "next/image";
import s from "./about.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.subTitle}>About Agency</h2>
        <h1 className={s.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={s.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's Out
          Special Team best consultng & finance solution provider. Wide range of
          web and software development and services.
        </p>
        <div className={s.boxes}>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={s.imgContainer}>
        <Image className={s.img} src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default About;
