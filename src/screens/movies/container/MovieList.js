import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchMoviesData } from '../action';
import "./styles.css"

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    return state.movies?.data
  });
  const isLoading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>

  );
};



export default MovieList;

