import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ ourMovies, title, rating }) => {
  return (
    <>
      {ourMovies
        .filter((movie) =>
          movie.title.toUpperCase().includes(title.toUpperCase())
        )
        .filter((movie) => movie.rating >= rating)
        .map((movie) => (
          <MovieCard {...movie} />
        ))}
    </>
  );
};
export default MovieList;
