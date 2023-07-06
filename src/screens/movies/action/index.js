import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../../redux/api";

const fetchMoviesData = createAsyncThunk("movies/fetchMoviesData", async () => {
  const response = await fetchData("/movies.json", "GET", {});
  return response.movies;
});

export { fetchMoviesData };
