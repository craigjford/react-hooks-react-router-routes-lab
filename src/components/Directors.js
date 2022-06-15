import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDisplay = directors.map((director, index) => {
    return (
       <div key={index}>
         <h2>{director.name}</h2>
         <ul>
           {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
         </ul>
       </div>  
    )
   })

  return (
    <main>
      <h1>Directors Page</h1>
      {directorsDisplay}
    </main>
  );  
}  


export default Directors;
