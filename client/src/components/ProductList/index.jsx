import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, nextPage, prevPage } from "../../redux/slice/productSlice";

const ProductList = (props) => {
  
  const products = useSelector((state) => state.product.product);
  const page = useSelector((state) => state.product.page)
  
  
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  const handlePrevPage = () => {
    if(page > 1) {
      dispatch(prevPage())
    }
  };
 
  const handleNextPage = () => {
    if(products.length > 0) {
      dispatch(nextPage());
    }
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <ol>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <li key={index}>
              <div>
                <h3>{`${product.name}, ${product.category}, ${product.price} - price, ${product.quantity} - quantity`}</h3>
                <h5>{`${product.manufacturer} manufacturer`}</h5>
              </div>
            </li>
          ))
        ) : (
          <li>No products available.</li>
        )}
      </ol>
    </div>
  );
};

export default ProductList;
