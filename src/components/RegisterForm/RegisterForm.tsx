"use client";
import { useFormState } from "react-dom";
import { register } from "../../../lib/action";
import s from "./RegisterForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

interface RegistrationResult {
  error: string;
  success: boolean;
}

const RegisterForm = () => {
  const handleRegister = async (
    currentState: RegistrationResult,
    formData: FormData
  ) => {
    const result = await register(currentState, formData);
    return result;
  };
  const [state, formAction] = useFormState(handleRegister, {
    error: "",
    success: false,
  });
  const router = useRouter();

  useEffect(() => {
    state.success && router.push("/login");
  }, [state.success, router]);

  return (
    <form className={s.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Repeat password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state.error && <p>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
