import React from 'react';

function FiltroNumerico() {
  return (
    <>
      <select data-testid="column-filter">
        <option value="population">population </option>
        <option value="orbital period" selected>orbital period </option>
        <option value="rotation period">rotation period </option>
        <option value="surface water">surface water </option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que </option>
        <option value="menor que" selected>menor que </option>
        <option value="igual a">igual a </option>
      </select>
      <input data-testid="value-filter" placeholder="valor imaginado" type="number" />
      <button data-testid="button-filter" type="button">Filtrar</button>
    </>
  );
}

export default FiltroNumerico;
