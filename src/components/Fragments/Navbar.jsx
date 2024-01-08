import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const username = useLogin();
  const [totalCartItem, setTotalCartItem] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);

      setTotalCartItem(sum);
    }
  }, [cart]);

  const handleLogout = () => {
    const isConfirm = confirm("Are you sure want to logout?");
    if (!isConfirm) {
      return;
    }

    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full flex items-center bg-slate-100 px-4 py-2.5 justify-end fixed top-0 left-0">
      <p>{username}</p>
      <Button onClick={handleLogout} variantClass="bg-teal-500 hover:bg-teal-600 text-white ml-4">
        Logout
      </Button>
      <p className="ml-4 px-4 py-2 rounded-lg bg-slate-700 text-white font-medium">{totalCartItem}</p>
    </nav>
  );
};

export default Navbar;
