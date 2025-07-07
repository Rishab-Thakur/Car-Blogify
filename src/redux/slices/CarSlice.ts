import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "@/API/API_CAll";
import { CarPost } from "@/Interface/CarSliceInterface";

interface PostsState {
  posts: CarPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Thunk to fetch posts
export const fetchCarPosts = createAsyncThunk<CarPost[]>(
  "posts/fetchCarPosts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchPosts();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCarPosts.fulfilled,
        (state, action: PayloadAction<CarPost[]>) => {
          state.posts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCarPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postsSlice.reducer;
