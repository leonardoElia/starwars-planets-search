import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [fetchConcluido, setFerchConcluido] = useState(false);
  const [planetasFilter, setPlanetasFilter] = useState([]);

  const adicionarPlanetas = (novoArray) => {
    setPlanetas(novoArray);
    setPlanetasFilter(novoArray);
  };

  const concluirFetch = () => {
    setFerchConcluido(true);
  };

  const filtarPorNome = (planetNome) => {
    const novoArray = planetas.filter(
      (e) => e.name.toLowerCase().includes(planetNome.toLowerCase()),
    );
    if (novoArray.length === 0) {
      setPlanetasFilter(planetas);
    } else {
      setPlanetasFilter(novoArray);
    }
  };

  const values = useMemo(() => ({
    planetasFilter,
    fetchConcluido,
    adicionarPlanetas,
    concluirFetch,
    filtarPorNome,
  }), [planetas, fetchConcluido, planetasFilter]);

  return (
    <PlanetContext. Provider value={ values }>
      {children}
    </PlanetContext. Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetProvider;
