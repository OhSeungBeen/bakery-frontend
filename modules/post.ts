import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import * as api from '../lib/api/post';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const getPosts = createAsyncThunk(
  'get/posts',
  async (data, thunkApi) => {
    try {
      const response = await api.getPosts();
      return response.data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

const initialState: PostState = {
  loading: false,
  error: null,
  data: [],
};

const post = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getPosts.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = initialState.data;
    },
  },
});

export default post;
