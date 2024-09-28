import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "products";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  page: 1,
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
  async (page, thunkAPI) => {
    try {
      const response = await API.getProducts(page);

      const {
        data: { data: product },
      } = response;

      console.log(response);

      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

// const addProductToCart = createAsyncThunk(
//   `${SLICE_NAME}/add`,
//   async (productData, thunkAPI) => {
//     try {
//       const response = await API.addProductToCart(productData);
//       const {
//         data: { data: foundProduct },
//       } = response;

//       return foundProduct;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.data.errors);
//     }
//   }
// );

const addProductToCart = createAsyncThunk(
  `${SLICE_NAME}/addToCart`,
  async (productData, thunkAPI) => {
    const { userId, cartId, productId } = productData;

    console.log("Adding product to cart:", { userId, cartId, productId });

    // Перевірка наявності необхідних даних перед виконанням запиту
    if (!userId || !cartId || !productId) {
      console.error("Missing data for request:", { userId, cartId, productId });
      return thunkAPI.rejectWithValue("Missing data for adding product to cart.");
    }

    try {
      const response = await API.addProductToCart({ userId, cartId, productId });

      const {
        data: { data: product },
      } = response;

      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);
//
const deleteProduct = createAsyncThunk(
  `${SLICE_NAME}/delete`,
  async (productId, thunkAPI) => {
    try {
      const response = await API.deleteProduct(productId);
      const {
        data: { data: product },
      } = response;
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page += 1;
    },
    prevPage: (state, action) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
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
    builder.addCase(addProductToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    });
    builder.addCase(addProductToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: productsReducer, actions } = productSlice;

export const { nextPage, prevPage } = actions;

export { createProduct, getProducts, deleteProduct, addProductToCart };

export default productsReducer;
