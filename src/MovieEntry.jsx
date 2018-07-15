import React from "react";
import $ from 'jquery';
import './MovieEntry.css';
const config = require('../config.js');

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      infoToggle: false,
      releaseDate: '',
      popularity: 0,
      runtime: 0
    };
    this.toggleWatched = this.toggleWatched.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  } 

  toggleWatched() {
    this.setState({
      watched: !this.state.watched
    });
    console.log('toggle to watched' + this.state.watched);
  }

  toggleInfo(movie) {
    console.log(movie);
    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie`,
      data: {
        api_key: config.TOKEN,
        query: movie
      },
      success: (data) => {
        console.log(data);
        $.ajax({
          url: `https://api.themoviedb.org/3/movie/${data.results[0].id}`,
          data: {
            api_key: config.TOKEN
          },
          success: (movieData) => {
            console.log(movieData);
            this.setState({
              infoToggle: !this.state.infoToggle,
              releaseDate: movieData.release_date,
              popularity: movieData.popularity,
              runtime: movieData.runtime
            }); 
          }
        })
      }
    });
  }
  render() {
    if ((this.state.watched && this.props.tab === 'watched')) {
      return (
        <div>
          <span onClick={() => {this.toggleInfo(this.props.movie.title);}}>{this.props.movie.title}</span>
          <span><button className='watched' onClick={this.toggleWatched}>Watched</button></span>
          {this.state.infoToggle && 
            <div>
              <p>Release Date: {this.state.releaseDate}</p>
              <p>Popularity: {this.state.popularity}</p>
              <p>Runtime: {this.state.runtime}</p>
            </div>
          }
        </div>
      );
    } else if (!this.state.watched && this.props.tab === 'to watch') {
      return (
        <div>
          <span onClick={() => {this.toggleInfo(this.props.movie.title);}}>{this.props.movie.title}</span>
          <span><button onClick={this.toggleWatched}>Watched</button></span>
          {this.state.infoToggle && 
            <div>
              <p>Release Date: {this.state.releaseDate}</p>
              <p>Popularity: {this.state.popularity}</p>
              <p>Runtime: {this.state.runtime}</p>
            </div>
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MovieEntry;