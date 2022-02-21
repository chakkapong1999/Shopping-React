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
        return value.product.productId === action.payload.product.productId;
      });
      if (itemToAdd) {
        itemToAdd.amount += 1;
        return;
      }
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.find((value) => {
        return value.product.id === action.payload.product.id
      })
      if(removeItem.amount > 1) {
        removeItem.amount -= 1;
      } else {
        removeItem.amount = 0
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { ...productActions } = productSlice.actions;
export default productSlice.reducer;
