import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    user: userReducer
  },
});

export default store;
