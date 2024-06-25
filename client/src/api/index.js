import axios from "axios";
import CONSTANTS from "../constants";

const httpClient = axios.create({
  baseURL: CONSTANTS.HTTP_SERVER_URL,
});

export const createProduct = async (productData) => {
  const response = await httpClient.post("/products", productData);
  return response;
};

export const getProducts = async (page) => {
  const response = await httpClient.get(`/products?page=${page}&results=5`);
  return response;
};