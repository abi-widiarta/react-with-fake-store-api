import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    } else {
      setUsername(getUsername(localStorage.getItem("token")));
    }
  }, []);

  return username;
};

// const use

export default useLogin;
