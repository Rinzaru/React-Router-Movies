import React from "react";
import { Link, NavLink } from "react-router-dom";
const SavedList = (props) => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      <nav>
        {props.list.map((movie, id) => (
          <NavLink className="saved-movie" key={id} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
