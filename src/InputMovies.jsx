import React from 'react';

function InputMovies(props) {
  return (
    <div>
      <span>
        <input id="newMovieInputField" type='text'></input>
        <button onClick={() => {props.addNewMovie(document.getElementById('newMovieInputField').value); document.getElementById('newMovieInputField').value = '';}}>Add a movie!</button>
      </span>
    </div>
  );
}

export default InputMovies;
