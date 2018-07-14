import React from "react";

function MovieEntry(props) {
  return (
    <div>{props.movie.title}</div>
  );
}

export default MovieEntry;