import React, { Component } from 'react';

const API_KEY = "44b530c5"

export class SearchForm extends Component {
  state = {
    inputMovie: ""
  }

  // creamos un arrow function para acceder al contexto de THIS
  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  // creamos un arrow function para acceder al contexto de THIS
  _handleSubmit = (e) => {
    e.preventDefault()
    // deconstruimos el state para ser más declarativos.
    const { inputMovie } = this.state
    // petición externa
    // http://www.omdbapi.com/?i=tt3896198&apikey=44b530c5
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(data => {
        // obtenemos los resultados pero no queremos mostrar aquí la respuesta.
        // este componente debe encargarse del buscador y no de los resultados.
        // en nuestra App.js incluimos un state con la respuesta de la API.
        // en ES6 ponemos como valor por defecto al Search un array vacio para
        // que no de error al hacer una busqueda que no existe.
        const { Search = []} = data
        this.props.onResults(Search)
      })
  }
  //http://www.omdbapi.com/?i=tt3896198&apikey=44b530c5

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleChange}
              className="input"
              type="text"
              placeholder="Buscar película..."/>
          </div>
          <div className="control">
            <button className="button is-info">
              Buscar
            </button>
          </div>
        </div>
      </form>
    )
  }
}
