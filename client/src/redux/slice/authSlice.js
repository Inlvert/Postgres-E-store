import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "auth";

const login = createAsyncThunk(
  `${SLICE_NAME}/login`,
  async (userData, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.login(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const refresh = createAsyncThunk(
  `${SLICE_NAME}/refresh`,
  async (refreshToken, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.refresh(refreshToken);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
)

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlise = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    builder.addCase(refresh.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    });
    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

const { reducer: authReducer, actions } = authSlise;

export { login, refresh};

export default authReducer;
