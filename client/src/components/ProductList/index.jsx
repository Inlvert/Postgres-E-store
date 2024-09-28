import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  nextPage,
  prevPage,
  addProductToCart,
  deleteProduct,
} from "../../redux/slice/productSlice";
// import { addToCart } from "../../redux/slice/cartSlice";

const ProductList = (props) => {
  const products = useSelector((state) => state.product.product);
  const page = useSelector((state) => state.product.page);
  const cart = useSelector((state) => state.cart.cartId);
  // const cartId = useSelector((state) => state.cart.cartId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(prevPage());
    }
  };

  const handleNextPage = () => {
    if (products.length > 0) {
      dispatch(nextPage());
    }
  };

  // const handleAddToCart = (product,cartId) => {
  //   dispatch(addProductToCart({ productId: product.id, cartId }));
  // };

  const handleAddToCart = ( productId) => {
    dispatch(addProductToCart(productId));
    // console.log(productId)
    // console.log(cartId)
    // console.log(userId)
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    console.log(productId)
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
                <button onClick={() => handleAddToCart(product.id)}>
                  Add to cart
                </button>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  delete prod
                </button>
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
