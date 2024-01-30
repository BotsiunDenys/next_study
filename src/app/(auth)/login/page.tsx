import { signIn } from "../../../../lib/auth";

const Login = () => {
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
