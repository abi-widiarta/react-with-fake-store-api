import { Suspense, useEffect, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import getProducts from "../services/products.service";
import { getUsername } from "../services/auth.service";
import useLogin from "../hooks/useLogin";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    getProducts((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="flex w-full min-h-screen pt-20 pb-4 px-4">
      <nav className="w-full flex items-center bg-slate-100 px-4 py-2.5 justify-end fixed top-0 left-0">
        <p>{username}</p>
        <Button onClick={handleLogout} variantClass="bg-teal-500 hover:bg-teal-600 text-white ml-4">
          Logout
        </Button>
      </nav>
      <div className="w-full flex flex-wrap">
        <div className="w-3/4 flex flex-wrap gap-6">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header url="#" img={product.image}></CardProduct.Header>
                  <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                  <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
