import React from "react";
import {movies} from "../data";

function Movies(){
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => (
      <div>
        <h3>Movie Title: <i>{movie.title}</i></h3>
        <h3>Time: {movie.time} minutes</h3>
        <ul> Genres:
          {movie.genres.map((genre) => (
            <li key={movie.genre}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Movies;