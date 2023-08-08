import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";
import { fetchMoviesData } from "../action";
import api from "../../../redux/api";
import { APIkey } from "../../../redux/apiKey";
import "./styles.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    return state.movies?.data;
  });
  const isLoading = useSelector((state) => state.movies.loading);

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
  let mainData = [];
  // const fetchMovieData = async () => {
  //   for (let i = 0; i < movieList.length; i++) {
  //     try {
  //       const response = await fetch(
  //         `https://www.omdbapi.com/?t=${movieList[i]}&apikey=6812b0d`
  //       );
  //       const data = await response.json();
  //       mainData.push(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   console.log(mainData);
  // };
  const movieText = "Harry";

  const fetchMovieData = async () => {
    const response = await api
      .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("moviedata", response);
  };

  useEffect(() => {
    fetchMovieData();
    dispatch(fetchMoviesData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="movie-list">
        {mainData.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
        {/* {movieList.map((test) => {
          return test.title;
        })} */}
      </div>
    </div>
  );
};

export default MovieList;
