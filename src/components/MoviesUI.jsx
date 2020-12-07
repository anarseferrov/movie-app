import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "../Style/movieui.css";

class MoviesUI extends Component {
  render() {
    const cards = this.props.search.map((item) => (
      <MovieCard
        title={item.Title}
        year={item.Year}
        poster={item.Poster}
        key={item.imdbID}
      />
    ));
    return (
      <div className="container">
        {this.props.error ? (
          <h1 className="text-muted">
            Your search result for '{`${this.props.query}`}' not found
          </h1>
        ) : (
          <div className="loading">
            {this.props.isLoading ? (
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              cards
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MoviesUI;
