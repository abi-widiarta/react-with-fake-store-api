import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";
import { useState } from "react";
import { login } from "../../services/auth.service";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState();
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginFailed(response);
      }
    });
  };

  return (
    <form onSubmit={handleLogin} className="w-full" method="post">
      <InputForm id="username" title="Username" type="text" placeholder="John Doe" />
      <InputForm id="password" title="Password" type="password" placeholder="*****" />
      <Button variantClass="bg-teal-500 hover:bg-teal-600 text-white mt-4" type="submit">
        Login
      </Button>

      {loginFailed && <p className="text-red-500 font-medium mt-4 text-center">{loginFailed}</p>}
    </form>
  );
};

export default LoginForm;
