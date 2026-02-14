import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

const initialState = {
  cart: [],
  totalPrice: 0,
  quantity: 1,
};

export const cartAction = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = products.find((el) => el.id === action.payload.id);
      const inCart = state.cart.find((el) => el.id === item.id);
      if (inCart) {
        inCart.quantity += state.quantity;
        inCart.total = inCart.quantity * inCart.price;
      } else {
        const product = {
          ...action.payload,
          quantity: state.quantity,
          total: item.price * state.quantity,
        };
        state.cart.push(product);
      }
      state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.total, 0);
    },
    deletefromcart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.total, 0);
    },
    incQuantity: (state, action) => {
      const inCart = products.find((el) => el.id === action.payload);
      if (inCart) {
        state.quantity += 1;
      }
      state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.total, 0);
    },
    decQuantity: (state, action) => {
      const inCart = products.find((el) => el.id === action.payload);

      if (state.quantity || inCart.quantity <= 1) return;
      state.quantity -= 1;
      state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.total, 0);
    },
    resetQuantity: (state) => {
      state.quantity = 1;
    },
  },
});

export default cartAction.reducer;
export const {
  addToCart,
  deletefromcart,
  incQuantity,
  decQuantity,
  resetQuantity,
} = cartAction.actions;
