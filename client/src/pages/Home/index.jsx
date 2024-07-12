import React from "react";
import Header from "../../components/Header";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <h1>HomePage</h1>
        <h1>Hello {user ? `${user.firstName} ${user.lastName}` : 'guest'}</h1>
      </div>
      <Header />
      <ProductForm/>
      <ProductList/>

    </div>
  );
};

export default HomePage;
