import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, type, children } = props;

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="w-60 mx-auto ">
        <h1 className="text-4xl font-bold text-teal-500 mb-4">{title}</h1>
        <p className="font-medium mb-8 text-gray-500">Welcome!, Please fill your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;

  if (type == "login") {
    return (
      <div className="text-center mt-6">
        <p className="text-sm font-medium text-gray-500">Don't have an account?</p>
        <Link to="/register" className="text-teal-500 font-semibold text-sm">
          Register here
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-6">
        <p className="text-sm font-medium text-gray-500">Have an account?</p>
        <Link to="/login" className="text-teal-500 font-semibold text-sm">
          Login here
        </Link>
      </div>
    );
  }
};

export default AuthLayout;
