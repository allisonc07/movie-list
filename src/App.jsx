import React from "react";
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import InputMovies from './InputMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      fullMovies: [],
      searchedMovies: [],
      searching: false
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleSearchClick(searchInput) {
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
          movies: this.state.fullMovies, 
          searching: !this.state.searching
        };
      });
    }
  }

  addNewMovie(movieInput) {
    this.setState({
      movies: [...this.state.fullMovies, {title: movieInput}],
      fullMovies: [...this.state.fullMovies, {title: movieInput}]
    });

  }

  componentDidMount() {
    this.setState({
      movies: this.state.fullMovies
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <InputMovies addNewMovie={this.addNewMovie}/>
        <Search handleSearchClick={this.handleSearchClick}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }

}

export default App;