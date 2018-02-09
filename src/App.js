import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    results: [],
    usedSearch: false
  }

  _handleResults = (results) => {
    this.setState(
      {
        results,
        usedSearch: true
      }
    )
  }

  _renderResults() {
    return this.state.results.length === 0
      ?
      <article className="message is-warning">
        <div className="message-body">Ninguna película coincide con esos términos de busqueda</div>
      </article>
      : <MoviesList results={this.state.results} />
  }

  render() {
    return (
      <div className="app">
        <Title>Buscador de películas</Title>
        <div className="search-form">
          <SearchForm onResults={this._handleResults}/>
        </div>

        {this.state.usedSearch === false
          ? <small>Haz una busqueda en el formulario</small>
          : this._renderResults()
        }
      </div>
    );
  }
}

export default App;
