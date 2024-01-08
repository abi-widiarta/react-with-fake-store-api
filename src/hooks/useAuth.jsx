import { useEffect } from "react";

const useAuth = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/products");
    }
  }, []);
};

export default useAuth;
