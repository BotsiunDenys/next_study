"use client";
import { useFormState } from "react-dom";
import { login } from "../../../lib/action";
import s from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

interface LoginResult {
  error: string;
  success: boolean;
}

const LoginForm = () => {
  const handleLogin = async (currentState: LoginResult, formData: FormData) => {
    const result = await login(currentState, formData);
    return result;
  };
  const [state, formAction] = useFormState(handleLogin, {
    error: "",
    success: false,
  });
  const router = useRouter();

  return (
    <form className={s.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state.error && <p>{state.error}</p>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
