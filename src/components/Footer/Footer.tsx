import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>lamadev</div>
      <div className={s.text}>
        Lama creative thoughts agency &copy; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
