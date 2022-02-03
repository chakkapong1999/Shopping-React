import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore";
import productReducer from "./productStore";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  },
});
