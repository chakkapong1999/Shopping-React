import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // const itemToAdd = state.cart.find((value) => {
      //   return value
      // })
      // console.log(itemToAdd.product)
      // console.log(action.payload.product);
      state.cart.push(action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
