import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
