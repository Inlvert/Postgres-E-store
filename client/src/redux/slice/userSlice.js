import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const createUser = createAsyncThunk(
  `${SLICE_NAME}/create`,
  async (userData, thunkAPI) => {
    try {
      const response = await API.createUser(userData);

      const {
        data: { data: user },
      } = response;

      return user;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);


const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

const { reducer: userReducer } = userSlice;


export { createUser };

export default userReducer;