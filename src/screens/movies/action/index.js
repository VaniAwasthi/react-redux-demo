import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from "../../../redux/api";

const fetchMoviesData = createAsyncThunk('movies/fetchMoviesData', async () => {
  const response = await fetchMovies();
  return response.movies;
});

export { fetchMoviesData };