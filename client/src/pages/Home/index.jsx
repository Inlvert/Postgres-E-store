import React from "react";
import Header from "../../components/Header";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { clearTokens } from "../../api";

const HomePage = () => {
  const dispatch = useDispatch();

  const hendleLogout = () => {
    dispatch(logout());
    clearTokens();
  };

  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <h1>HomePage</h1>
        <h1>Hello {user ? `${user.firstName} ${user.lastName}` : "guest"}</h1>
        <button onClick={hendleLogout}>logout</button>
      </div>
      <Header />
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default HomePage;
