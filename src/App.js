import React, { useEffect, useState } from 'react';
import './App.css';
import PlanetContext from './Context/PlanetContext';
import Table from './Componentes/Table';

function App() {
  const [planetas, setPlanetas] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((retornoAPI) => retornoAPI.json())
      .then((data) => {
        const { results } = data;
        const novoArray = results.map((e) => {
          delete e.residents;
          return {
            ...e,
          };
        });
        setPlanetas(novoArray);
      });
  }, []);

  if (planetas.length === 0) {
    return (<p>Carregando...</p>);
  }
  return (
    <PlanetContext.Provider value={ planetas }>
      <Table />
    </PlanetContext.Provider>
  );
}

export default App;
