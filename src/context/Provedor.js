import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Contexto from './Appcontext';

function Provedor({ children }) {
  const [planets, setplanetas] = useState([]);
  async function PegaAPI() {
    const ret = await fetch('https://swapi.dev/api/planets');
    const conteudo = await ret.json();
    const conteudofiltrado = conteudo.results.map((planeta) => {
      delete planeta.residents;
      return planeta;
    });
    setplanetas(conteudofiltrado);
  }

  const capsula = useMemo(() => ({ PegaAPI, planets }), [planets]);

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
