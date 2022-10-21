import React, { useContext } from 'react';
import Contexto from '../context/Appcontext';

function Table() {
  // eslint-disable-next-line no-unused-vars
  const { PegaAPI, planets } = useContext(Contexto);
  return (
    <table border="1">
      <thead>
        <tr>
          <th> name </th>
          <th>rotation period</th>
          <th>orbital period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((x) => (
          <tr key={ planets.name }>
            <td>{x.name}</td>
            <td>{x.rotation_period}</td>
            <td>{x.orbital_period}</td>
            <td>{x.diameter}</td>
            <td>{x.climate}</td>
            <td>{x.gravity}</td>
            <td>{x.terrain}</td>
            <td>{x.surface_water}</td>
            <td>{x.population}</td>
            <td>{x.films}</td>
            <td>{x.created}</td>
            <td>{x.edited}</td>
            <td>{x.url}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
