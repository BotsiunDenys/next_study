import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin } from "../../../../lib/action";
import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <form action={handleGithubLogin}>
          <button className={s.github}>login</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
