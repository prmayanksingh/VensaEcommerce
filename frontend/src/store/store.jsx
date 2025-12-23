import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";
import productSlice from "./reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
  },
});
