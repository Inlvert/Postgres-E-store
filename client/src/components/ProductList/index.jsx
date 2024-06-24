import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";

const ProductList = (props) => {
  const products = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <ol>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <li key={index}>
              <div>
                <h1>{`${product.name}, ${product.category}, ${product.price} - price, ${product.quantity} - quantity`}</h1>
                <h3>{`${product.manufacturer} manufacturer`}</h3>
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
