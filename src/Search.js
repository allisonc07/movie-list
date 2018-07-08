import React from "react";

function Search(props) {
  return (
    <span>
      <input type='text' id='searchInput'></input>
      <button onClick={() => {props.handleClick(document.getElementById('searchInput').value)}}>Search!</button>
    </span>
  );
}

export default Search;