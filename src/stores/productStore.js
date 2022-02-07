import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemToAdd = state.cart.find((value) => {
        return value.product.id === action.payload.product.id;
      });
      if (itemToAdd) {
        itemToAdd.amount += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
