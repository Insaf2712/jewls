import { configureStore } from "@reduxjs/toolkit";
import cartAction from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartAction,
  },
});
