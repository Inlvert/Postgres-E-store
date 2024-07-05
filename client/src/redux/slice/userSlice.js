import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  page: 1,
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

const getUsers = createAsyncThunk(
  `${SLICE_NAME}/get`,
  async (page, thunkAPI) => {
    try {
      const response = await API.getUsers(page);

      const {
        data: { data: user },
      } = response;

      return user
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page += 1
    },
    prevPage: (state, action) => {
      state.page -= 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

const { reducer: userReducer, actions } = userSlice;

export const {nextPage, prevPage} = actions;

export { createUser, getUsers };

export default userReducer;
