import React from 'react';
import { render } from '@testing-library/react';
import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Contexto from '../context/Appcontext';

function Provedor({ children }) {
  const [planets, setplanetas] = useState([
      {
          "name": "Tatooine", 
          "rotation_period": "23", 
          "orbital_period": "304", 
          "diameter": "10465", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
              "https://swapi.dev/api/people/1/", 
              "https://swapi.dev/api/people/2/", 
              "https://swapi.dev/api/people/4/", 
              "https://swapi.dev/api/people/6/", 
              "https://swapi.dev/api/people/7/", 
              "https://swapi.dev/api/people/8/", 
              "https://swapi.dev/api/people/9/", 
              "https://swapi.dev/api/people/11/", 
              "https://swapi.dev/api/people/43/", 
              "https://swapi.dev/api/people/62/"
          ], 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/4/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "created": "2014-12-09T13:50:49.641000Z", 
          "edited": "2014-12-20T20:58:18.411000Z", 
          "url": "https://swapi.dev/api/planets/1/"
      }, 
      {
          "name": "Alderaan", 
          "rotation_period": "24", 
          "orbital_period": "364", 
          "diameter": "12500", 
          "climate": "temperate", 
          "gravity": "1 standard", 
          "terrain": "grasslands, mountains", 
          "surface_water": "40", 
          "population": "2000000000", 
          "residents": [
              "https://swapi.dev/api/people/5/", 
              "https://swapi.dev/api/people/68/", 
              "https://swapi.dev/api/people/81/"
          ], 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "created": "2014-12-10T11:35:48.479000Z", 
          "edited": "2014-12-20T20:58:18.420000Z", 
          "url": "https://swapi.dev/api/planets/2/"
      }
  ]);
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

export default function RenderWithProvider(children) {
  return {
    ...render(
      <Provedor>
        { children }
      </Provedor>
    ),
  };
}
