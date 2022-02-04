import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";
import productStore from "./productStore";

export const store = configureStore({
  reducer: {
    user: userStore,
    product: productStore
  },
});
