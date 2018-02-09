import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.string,
  }

  render() {

    const { title, year, image } = this.props

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={title}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
