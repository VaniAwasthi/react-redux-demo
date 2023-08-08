import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesData, fetchMoviesDetail } from "../action";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMoviesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  movieDetailReducer: (builder) => {
    builder
      .addCase(fetchMoviesDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMoviesDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
