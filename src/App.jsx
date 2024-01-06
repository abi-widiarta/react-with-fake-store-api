import Button from "./components/Elements/Button/Button";
import InputLogin from "./components/Elements/Input";
import LoginForm from "./components/Fragments/LoginForm";

function App() {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="w-60 mx-auto ">
          <h1 className="text-3xl font-bold text-teal-500 mb-2">Login</h1>
          <p className="font-medium mb-8 text-gray-600">Welcome!, Please fill your details</p>
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
}

export default App;
