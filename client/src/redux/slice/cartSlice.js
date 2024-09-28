import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: null,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.cartId = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setCartId, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import * as API from "../../api";

// const SLICE_NAME = "cart";

// const addToCartAsync = createAsyncThunk(
//   `${SLICE_NAME}/addToCart`,
//   async ({ cartId, productId }, thunkAPI) => {
//     try {
//       const response = await API.addProductToCart({ cartId, productId });
//       const {
//         data: {
//           data: { cart },
//         },
//       } = response;

//       console.log(response);

//       return cart;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.data.errors);
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: SLICE_NAME,
//   initialState: {
//     cartId: null,
//     items: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     setCartId: (state, action) => {
//       state.cartId = action.payload;
//     },
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//   },
//   // extraReducers: (builder) => {
//   //   builder
//   //     .addCase(addToCart.pending, (state) => {
//   //       state.status = "loading";
//   //     })
//   //     .addCase(addToCart.fulfilled, (state, action) => {
//   //       state.status = "succeeded";
//   //       state.items = action.payload;
//   //     })
//   //     .addCase(addToCart.rejected, (state, action) => {
//   //       state.status = "failed";
//   //       state.error = action.payload;
//   //     });
//   // },
// });

// const { reducer: cartReducer, actions } = cartSlice;

// export const { setCartId, addToCart } = actions;

// // export { addToCart };

// export default cartReducer;
