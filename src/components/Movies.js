import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesDisplay = movies.map((movie) => {
   return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(movie.genre => <li>{movie.genre}</li>)}
        </ul>
      </div>  
   )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDisplay}
    </div>
  );  
}

export default Movies;
