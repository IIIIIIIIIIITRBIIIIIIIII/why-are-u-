import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import productSlice from "./productSlice/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product:productSlice
  },
});
