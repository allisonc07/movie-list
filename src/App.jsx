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
      searching: false,
      tab: 'to watch'
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.changeTabToWatch = this.changeTabToWatch.bind(this);
    this.changeTabToToWatch = this.changeTabToToWatch.bind(this);
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

  changeTabToWatch() {
    console.log('changed to watch');
    this.setState({
      tab: 'watched'
    });
  }

  changeTabToToWatch() {
    this.setState({
      tab: 'to watch'
    })
  }

  componentDidMount() {
    this.setState({
      movies: this.state.fullMovies
    })
  }

  render() {
    console.log('rerendering');
    console.log(this.state.tab)
    return (
      <div>
        <h1>Movie List</h1>
        <InputMovies addNewMovie={this.addNewMovie}/>
        <Search handleSearchClick={this.handleSearchClick}/>
        <button onClick={this.changeTabToWatch}>Watched</button>
        <button onClick={this.changeTabToToWatch}>To Watch</button>
        <MovieList movies={this.state.movies} watchedTab={this.state.tab}/>
      </div>
    );
  }

}

export default App;