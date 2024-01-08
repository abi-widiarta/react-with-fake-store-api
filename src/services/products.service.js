import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => callback(res.data))
    .catch((e) => callback(e));
};

const getProductsDetail = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => callback(true, res.data))
    .catch((err) => callback(false, err));
};

export { getProductsDetail };
export default getProducts;
