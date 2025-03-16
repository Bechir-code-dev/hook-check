import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ ourMovies, title, rating }) => {
  return (
    <div className="movie-list">
      {ourMovies
        .filter((movie) =>
          movie.title.toUpperCase().includes(title.toUpperCase())
        )
        .filter((movie) => movie.rating >= rating)
        .map((movie) => (
          <MovieCard {...movie} />
        ))}
    </div>
  );
};
export default MovieList;
