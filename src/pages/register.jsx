import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <RegisterForm></RegisterForm>
    </AuthLayout>
  );
};

export default RegisterPage;
