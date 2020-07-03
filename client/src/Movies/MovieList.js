import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  return (
    <div className="movie-card">
      <MovieCard movie={movie} />
    </div>
  );
}

export default MovieList;
