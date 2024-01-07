import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  useAuth();
  return (
    <AuthLayout title="Register" type="register">
      <RegisterForm></RegisterForm>
    </AuthLayout>
  );
};

export default RegisterPage;
