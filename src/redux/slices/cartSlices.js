import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id == action.payload.id);
      if (itemInCart) {
        return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item));
      } else {
        return [...state, action.payload];
      }
    },
    clearCart: () => {
      const isConfirm = confirm("Anda yakin akan menghapus semua item ?");
      if (isConfirm) {
        return [];
      } else {
        return;
      }
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
