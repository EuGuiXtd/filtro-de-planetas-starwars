import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './components/Tabela';
import Contexto from './context/Appcontext';

function App() {
  const { PegaAPI } = useContext(Contexto);
  useEffect(() => {
    PegaAPI();
  });
  return (
    <Table />

  );
}

export default App;
