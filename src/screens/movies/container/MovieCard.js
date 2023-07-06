import "./styles.css"

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" key={movie.id}>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-release-year">Release Year: {movie.releaseYear}</p>
    </div>
  );
};

export default MovieCard;