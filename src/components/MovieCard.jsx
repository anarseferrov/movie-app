import React, { Component } from "react";
import "../Style/moviecard.css";

class MovieCard extends Component {
  render() {
    return (
      <div className="card movie_card">
        <img
          src={this.props.poster}
          className="card-img-top"
          alt={`${this.props.title}`}
        />
        <div className="card-body">
          <i
            className="fas fa-play play_button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Play Trailer"
          ></i>
          <h5 className="card-title"> {this.props.title} </h5>
          <span className="movie_info"> {this.props.year} </span>
          <span className="movie_info float-right">
            <i className="fas fa-star"></i> 9 / 10
          </span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
