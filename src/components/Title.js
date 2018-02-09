import React from 'react';

// esta forma de declarar la función es diferente a las clases de react.
// es una arrow function que no tiene acceso al state.
// recibe la prop children como parametro y exporta la función
// para que sea llamada en App.js (mediante llaves).

export const Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)
