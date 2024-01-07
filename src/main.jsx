import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
