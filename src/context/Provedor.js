import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Contexto from './Appcontext';

function Provedor({ children }) {
  const [planets, setplanetas] = useState([]);
  const [filterPlanets, setfilterplanets] = useState('');
  const handleChange = (e) => {
    setfilterplanets(e.target.value);
  };
  async function PegaAPI() {
    const ret = await fetch('https://swapi.dev/api/planets');
    const conteudo = await ret.json();
    const conteudofiltrado = conteudo.results.map((planeta) => {
      delete planeta.residents;
      return planeta;
    });
    setplanetas(conteudofiltrado);
  }

  const capsula = useMemo(
    () => ({ PegaAPI, planets, setfilterplanets, filterPlanets, handleChange }),
    [planets, filterPlanets],
  );

  return (
    <Contexto.Provider value={ capsula }>
      {children}
    </Contexto.Provider>
  );
}

Provedor.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provedor;
