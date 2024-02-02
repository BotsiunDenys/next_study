"use client";
import { useFormState } from "react-dom";
import { login } from "../../../lib/action";
import Link from "next/link";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, {
    error: "",
  });

  return (
    <form className={s.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
