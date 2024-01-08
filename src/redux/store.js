import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import { addToCart } from "./slices/cartSlices";

const store = configureStore({ reducer: { cart: cartSlices } });
console.log("on store create : ", store.getState());

store.subscribe(() => {
  console.log("tes", store.getState());
});

export default store;
