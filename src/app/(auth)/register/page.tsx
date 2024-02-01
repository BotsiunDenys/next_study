import RegisterForm from "@/components/RegisterForm/RegisterForm";
import s from "./Register.module.css";

const Register = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
