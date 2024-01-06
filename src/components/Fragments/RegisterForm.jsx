import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const RegisterForm = () => {
  return (
    <form className="w-full" action="#">
      <InputForm id="username" title="Username" type="text" placeholder="John Doe" />
      <InputForm id="email" title="Email" type="email" placeholder="email@example.com" />
      <InputForm id="password" title="Password" type="password" placeholder="*****" />
      <Button variantClass="bg-teal-500 hover:bg-teal-600 text-white mt-4">Register</Button>
    </form>
  );
};

export default RegisterForm;
