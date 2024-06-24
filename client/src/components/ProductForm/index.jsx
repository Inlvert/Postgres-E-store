import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import "./style.css";
import { createProduct } from "../../redux/slice/productSlice";
import { useDispatch } from "react-redux";

const PRODUCT_SCHEMA = yup.object({
  name: yup.string().required(),
  category: yup.string(),
  description: yup.string(),
  manufacturer: yup.string(),
  price: yup.number().required(),
  quantity: yup.number(),
});

const initialValues = {
  name: "",
  category: "electronic",
  description: "lorem ipsum dolars",
  manufacturer: "",
  price: 55000,
  quantity: 1,
};

const ProductForm = (props) => {

  const dispatch = useDispatch()

  const createProductRequest = (productData) => {
    dispatch(createProduct(productData))
  }


  const handleSubmit = (values, formikBag) => {
    const productData = {
      ...values,
    };
    formikBag.resetForm();

    createProductRequest(productData);
  };

  return (
    <div>
      <h3>ProductForm</h3>
      <div className="cover">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={PRODUCT_SCHEMA}
        >
          <Form>
            <Field name="name" placeholder="name" />
            <Field name="category" as="select">
              <option value="food">food</option>
              <option value="electronic">electronic</option>
              <option value="sport">sport</option>
            </Field>
            <Field name="description" type="textarea" placeholder="name" />
            <Field name="manufacturer" as="select">
              <option value="UA">UA</option>
              <option value="EU">EU</option>
              <option value="USA">USA</option>
            </Field>
            <Field name="price" type="number" placeholder="price" />
            <Field name="quantity" type="number" placeholder="quantity" />
            <button type="submit">Add new Product</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ProductForm;
