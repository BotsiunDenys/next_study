import { handleGithubLogin, login } from "../../../../lib/action";

const Login = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>login</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
