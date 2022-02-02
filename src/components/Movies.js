import React from "react";
import {movies} from "../data";

function Movies(){
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => (
      <div>
        <h3>{movie.title}</h3>
        <h3>{movie.time}</h3>
        <ul> Genres:
          {movies.map((genres) => (
            <li key={movie.genre}>
              {movies.genres}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Movies;