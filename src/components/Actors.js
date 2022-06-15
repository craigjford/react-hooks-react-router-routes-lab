import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDisplay = actors.map((actor, index) => {
    return (
       <div key={index}>
         <h2>{actor.name}</h2>
         <ul>
           {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
         </ul>
       </div>  
    )
   })
 
   return (
     <main>
       <h1>Actors Page</h1>
       {actorsDisplay}
     </main>
   );  
 }

export default Actors;
