import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    let getMovies = () => {
      axios
        .get(`http://localhost:5000/api/movies`)
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    if (!savedList.includes(movie)) setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
