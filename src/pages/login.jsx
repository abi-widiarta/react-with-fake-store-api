import { useEffect } from "react";
import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  useAuth();
  return (
    <AuthLayout title="Login" type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
