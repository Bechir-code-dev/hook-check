import React, { useState } from "react";
import MovieCard from "./MovieCard";
import movies from "../movies";

const MovieList = () => {
    const [film,setFilm]= useState (movies);
   return (
    <>
    {film.map(movie =>
        <MovieCard {...movie}/>
    )}
    </>
   )
}
export default MovieList;