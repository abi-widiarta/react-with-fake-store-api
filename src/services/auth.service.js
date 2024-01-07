import axios from "axios";
import { jwtDecode } from "jwt-decode";

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then(function (response) {
      callback(true, response.data.token);
    })
    .catch(function (error) {
      callback(false, error.response.data);
    });
};

const getUsername = (token) => {
  const decoded = jwtDecode(token);

  return decoded.user;
};

export { login, getUsername };
