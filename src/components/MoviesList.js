import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { results } = this.props
    return (
      <div className="movie-list">
      {
        results.map( movie => {
          return (
            <div key={movie.imdbID} className="movie-list__item">
              <Movie
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster} />
            </div>
          )
        })
      }
      </div>
    )
  }
}
