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

export const createUser = async (userData) => {
  const response = await httpClient.post("/users", userData);
  return response;
};

export const getUsers = async (page) => {
  const response = await httpClient.get(`/users?page=${page}&results=5`);
  return response;
};

export const login = async (userData) => {
  const response = await httpClient.post("/auth/login", userData);
  return response;
};

export const registration = async (userData) => {
  const response = await httpClient.post("/auth/registartion", userData);
  return response;
};

export const refresh = async (refreshToken) => {
  const response = await httpClient.post("/auth/refresh", { refreshToken });
  return response;
};
