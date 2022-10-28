import React from "react";
import { actors } from "../data";

function Actors() {

  const listOfActors = actors.map((actor) => {
    return (
    <div>
      {actor.name}
      <ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {listOfActors}
    </div>
  );
}

export default Actors;
