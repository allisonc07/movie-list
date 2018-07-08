import React from "react";
import MovieList from './MovieList.js';
import Search from './Search.js';
import InputMovies from './InputMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      searchedMovies: [],
      searching: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(searchInput) {
    let newSearchedMovies = this.state.movies.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    if (!this.state.searching) {
      this.setState((prevState) => {
        return {
          movies: newSearchedMovies, 
          searching: !this.state.searching
        };
      });
    } else if (this.state.searching) {
      this.setState((prevState) => {
        return {
          movies: this.props.movies, 
          searching: !this.state.searching
        };
      });
    }
  }

  render() {
    console.log('rerendering');
    return (
      <div>
        <h1>Movie List</h1>
        <InputMovies />
        <Search handleClick={this.handleClick}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }

}

export default App;