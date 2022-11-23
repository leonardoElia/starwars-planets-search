import React, { useContext, useEffect } from 'react';
import './App.css';
import PlanetContext from './Context/PlanetContext';
import Table from './Componentes/Table';
import FormFilter from './Componentes/FormFilter';
import FiltrosFeitos from './Componentes/FiltrosFeitos';

function App() {
  const { adicionarPlanetas, fetchConcluido, concluirFetch } = useContext(PlanetContext);
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
        adicionarPlanetas(novoArray);
        concluirFetch();
      });
  }, []);

  if (fetchConcluido === false) {
    return (<p>Carregando...</p>);
  }
  return (
    <>
      <FormFilter />
      <FiltrosFeitos />
      <Table />
    </>

  );
}

export default App;
