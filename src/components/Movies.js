import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesDisplay = movies.map((movie, index) => {
   return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>  
   )
  })

  return (
    <main>
      <h1>Movies Page</h1>
      {moviesDisplay}
    </main>
  );  
}

export default Movies;
