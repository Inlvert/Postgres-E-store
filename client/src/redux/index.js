import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    user: userReducer,
    auth: authReducer,
    cart: cartReducer
  },
});

export default store;
