import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },

    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
