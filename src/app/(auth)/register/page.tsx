import { register } from "../../../../lib/action";
import s from "./Register.module.css";

const Register = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <form className={s.form} action={register}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Repeat password"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
