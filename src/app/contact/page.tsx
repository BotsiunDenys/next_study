import Image from "next/image";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image className={s.img} alt="" src="/contact.png" fill />
      </div>
      <div className={s.formContainer}>
        <form action="" className={s.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
