import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, fetchDetails } from "../../../redux/api";

const movieList = [
  "titanic",
  "avengers",
  "Harry Potter",
  "Mind Hunter",
  "avengers",
  "batman",
  "superman",
  "spiderman",
];

const fetchMoviesData = createAsyncThunk("movies/fetchMoviesData", async () => {
  const response = await fetchData("/movies.json", "GET", {});
  return response.movies;
});

const fetchMoviesDetail = createAsyncThunk("", async () => {
  const response = await fetchDetails("?i=tt3896198&apikey=6812b0d", "GET", {});
  return response.movie;
});

export { fetchMoviesData, fetchMoviesDetail };
