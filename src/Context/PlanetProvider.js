import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [fetchConcluido, setFerchConcluido] = useState(false);

  const adicionarPlanetas = (novoArray) => {
    setPlanetas(novoArray);
  };

  const concluirFetch = () => {
    setFerchConcluido(true);
  };

  const values = useMemo(() => ({
    planetas,
    fetchConcluido,
    adicionarPlanetas,
    concluirFetch,
  }), [planetas]);

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
