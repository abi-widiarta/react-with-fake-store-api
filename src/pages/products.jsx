import { useEffect, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import getProducts from "../services/products.service";
import useLogin from "../hooks/useLogin";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../redux/slices/cartSlices";
import Navbar from "../components/Fragments/Navbar";
import HomeLayout from "../components/Layouts/HomeLayout";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      const totalPrice = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id);
        const sum = acc + product.price * item.qty;
        return sum;
      }, 0);
      setTotalPrice(totalPrice);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  useEffect(() => {
    getProducts((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <HomeLayout>
      <div className="w-full flex flex-wrap">
        <div className="w-3/4 flex flex-wrap gap-6">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header url={`/products/${product.id}`} img={product.image}></CardProduct.Header>
                  <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                  <CardProduct.Footer handleAddToCart={() => dispatch(addToCart({ id: product.id, qty: 1 }))} price={product.price}></CardProduct.Footer>
                </CardProduct>
              );
            })}
        </div>

        <div className="w-1/4">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-bold">Cart</h2>
            <Button
              onClick={() => {
                dispatch(clearCart());
              }}
              variantClass="bg-red-500 hover:bg-red-600 text-white"
            >
              Clear
            </Button>
          </div>

          <table className="border-collapse border-spacing-4 border-slate-500">
            <thead>
              <tr>
                <th className="text-start">Produk name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item, index) => {
                  const product = products.find((product) => product.id == item.id);
                  return (
                    <tr key={index}>
                      <td>{product.title}</td>
                      <td>{item.qty}</td>
                      <td>{product.price * item.qty}</td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={2} className="font-medium">
                  Total
                </td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProductsPage;
