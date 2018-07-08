import React from "react";
import "./App.css";
import MovieEntry from "./MovieEntry.js"

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1> Movie List </h1>

//       </div>
//     );
//   }
// }

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props.movies);
    return (
      <div>
          {this.props.movies.map((movie) =>
        <MovieEntry movie={movie} />)}
      </div>
    );
  }
}
export default MovieList;

