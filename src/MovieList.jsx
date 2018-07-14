import React from "react";
import MovieEntry from "./MovieEntry.jsx"



class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
          {this.props.movies.map((movie) =>
        <MovieEntry movie={movie} />)}
      </div>
    );
  }
}
export default MovieList;

