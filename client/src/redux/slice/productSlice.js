import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "products";

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

const createProduct = createAsyncThunk(
  `${SLICE_NAME}/create`,
  async (productData, thunkAPI) => {
    try {
      const response = await API.createProduct(productData);

      const {
        data: { data: product },
      } = response;

      return product;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const getProducts = createAsyncThunk(
  `${SLICE_NAME}/get`,
  async (productData, thunkAPI) => {
    try {
      const response = await API.getProducts(productData);

      const {
        data: { data: products },
      } = response;

      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: productsReducer, actions } = productSlice;

export { createProduct, getProducts };

export default productsReducer;
