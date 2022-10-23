import React, { useContext, useEffect, useState } from 'react';
import Contexto from '../context/Appcontext';

function Table() {
  const { planets, filterPlanets } = useContext(Contexto);
  const coluna = [
    'population',
    'orbital_period',
    'rotation_period',
    'surface_water',
    'diameter',
  ];

  const [filtros, setFiltros] = useState([]);
  const [filtrosUsados, setFiltrosUsados] = useState([]);
  const [collumnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  function filtrar(planeta) {
    const resultado = filtros.map((filtroAtual) => {
      const valor = planeta[filtroAtual.collumnFilter];
      return ((Number(valor)
      > Number(filtroAtual.valueFilter)
      && filtroAtual.comparisonFilter === 'maior que')
           || (Number(valor)
           < Number(filtroAtual.valueFilter)
           && filtroAtual.comparisonFilter === 'menor que')
           || (Number(valor)
           === Number(filtroAtual.valueFilter)
           && filtroAtual.comparisonFilter === 'igual a'));
    });
    let resuladoFInal = true;
    resultado.forEach((r) => { if (!r) { resuladoFInal = false; } });
    return resuladoFInal;
  }
  useEffect(() => {
    const col = [
      'population',
      'orbital_period',
      'rotation_period',
      'surface_water',
      'diameter',
    ];

    setColumnFilter(col.filter((c) => !filtrosUsados.includes(c))[0]);
  }, [filtrosUsados]);
  return (
    <>
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
          {planets.filter((planeta) => planeta.name.toLowerCase()
            .includes(filterPlanets.toLowerCase())
            && (filtros === []
              || filtrar(planeta)))
            .map((x) => (
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
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {coluna.filter((y) => (!filtrosUsados.includes(y)))
          .map((x) => (<option key={ x } value={ x }>{x}</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        placeholder="valor imaginado"
        type="number"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          const novoFiltros = Array.from(filtros);
          novoFiltros.push({
            collumnFilter,
            comparisonFilter,
            valueFilter,
          });
          setFiltros(novoFiltros);
          const newFiltroUsados = Array.from(filtrosUsados);
          newFiltroUsados.push(collumnFilter);
          setFiltrosUsados(newFiltroUsados);
        } }
      >
        Filtrar

      </button>
      <div>
        {filtros.map((f) => f.collumnFilter)}
      </div>
    </>
  );
}

export default Table;
