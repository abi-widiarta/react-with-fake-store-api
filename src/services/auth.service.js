import axios from "axios";

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

export default login;
