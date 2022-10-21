import React, { useContext, useEffect } from 'react';
import './App.css';
import Filtro from './components/Filtro';
import Table from './components/Tabela';
import Contexto from './context/Appcontext';
import FiltroNumerico from './components/FiltroNumerico';

function App() {
  const { PegaAPI } = useContext(Contexto);
  useEffect(() => {
    PegaAPI();
  });
  return (
    <>
      <Table />
      <Filtro />
      <FiltroNumerico />
    </>

  );
}

export default App;
