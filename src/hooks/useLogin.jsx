import axios from "axios";

const useLogin = (url, data, callback) => {
  axios
    .post(url, data)
    .then(function (response) {
      callback(true, response.data.token);
    })
    .catch(function (error) {
      callback(false, error.response.data);
    });
};

export default useLogin;
