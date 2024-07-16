import axios from "axios";
import CONSTANTS from "../constants";

const httpClient = axios.create({
  baseURL: CONSTANTS.HTTP_SERVER_URL,
});

let accessToken = null;

export const clearTokens = () => {
  accessToken = null;
  localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
}

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config) {

    if(accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function (response) {
    if (response?.data?.data?.tokenPair) {
      const { tokenPair } = response.data.data;

      accessToken = tokenPair.accessToken;

      localStorage.setItem(CONSTANTS.REFRESH_TOKEN, tokenPair.refreshToken)
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    
    const { response: { staus } } = error;
    const refreshTokenFronLS = localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    if (refreshTokenFronLS && staus === 419) {
      const {data: {data: {tokenPair}}} = await axios.post(`${CONSTANTS.HTTP_SERVER_URL}/auth/refresh`, {refreshToken: refreshTokenFronLS})

      accessToken = tokenPair.accessToken;

      localStorage.setItem(CONSTANTS.REFRESH_TOKEN, tokenPair.refreshToken)

      error.config.headers['Authorization'] = `Bearer ${accessToken}`

      return httpClient.request(error.config)

    }

    return Promise.reject(error);
  }
);

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
