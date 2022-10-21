import React, { useContext } from 'react';
import Contexto from '../context/Appcontext';

function Filtro() {
  const { handleChange } = useContext(Contexto);
  return (
    <input
      data-testid="name-filter"
      placeholder="busca planetas"
      onChange={ handleChange }
    />
  );
}

export default Filtro;
