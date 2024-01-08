import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ProductDetailPage from "./pages/productDetail.jsx";
import HomePage from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Opps Not Found</div>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider basename="https://659bb956b111702f8848d3d6--wondrous-panda-74cdac.netlify.app/" router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
