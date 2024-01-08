import { useEffect } from "react";

const useAuth = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/products";
    }
  }, []);
};

export default useAuth;
