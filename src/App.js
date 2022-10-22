import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Filtro from './components/Filtro';
import Table from './components/Tabela';
import Contexto from './context/Appcontext';

function App() {
  const { PegaAPI } = useContext(Contexto);
  const [leu, setLeu] = useState(false);
  useEffect(() => {
    if (!leu) {
      PegaAPI();
      setLeu(true);
    }
  }, [PegaAPI, leu, setLeu]);
  return (
    <>
      <Table />
      <Filtro />
    </>

  );
}

export default App;
