const MovieDetail = ({ movieDetail }) => {
  return (
    <section className="movie-details">
      <div className="movie-img">{movieDetail.Poster}</div>

      <div className="movie-info">
        <span className="movie-name">{movieDetail.Title}</span>
        <div className="about-movie post-line">
          {movieDetail.Runtime}| {movieDetail.Genre}| {movieDetail.Released}
        </div>
        <div className="post-line">
          <span>IMDB Rating :</span>
          {movieDetail.imdbRating}
          <span>Metascore : </span> {movieDetail.Metascore}
        </div>
        <div className="post-line">
          <span>Director:</span>&nbsp; Ayan Mukerji
          <br />
          <span>Actor:</span>
          {movieDetail.Director}
        </div>
        {movieDetail.Plot}
      </div>
    </section>
  );
};
