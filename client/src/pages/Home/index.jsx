import React from "react";
import Header from "../../components/Header";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>HomePage</h1>
      </div>
      <Header />
      <ProductForm/>
      <ProductList/>
    </div>
  );
};

export default HomePage;
