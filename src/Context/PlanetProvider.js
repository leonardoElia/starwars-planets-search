import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const tamannhoArray = 10;

function PlanetProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [fetchConcluido, setFerchConcluido] = useState(false);
  const [planetasFilter, setPlanetasFilter] = useState([]);
  const [filtrosNumericos, setFiltrosNumericos] = useState([]);
  const arrayOption = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];
  const [colunaFiltros, setColunaFiltros] = useState(arrayOption);

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
      // setPlanetasFilter(planetas);
    } else {
      setPlanetasFilter(novoArray);
    }
  };

  const filtrandoPorNumero = (colunaTable, operador, valor, arrayFilter) => {
    let arrayFiltrado = [];
    if (operador === 'maior que') {
      arrayFiltrado = arrayFilter.filter((e) => Number(e[colunaTable]) > Number(valor));
      return arrayFiltrado;
    } if (operador === 'menor que') {
      arrayFiltrado = arrayFilter.filter((e) => Number(e[colunaTable]) < Number(valor));
      return arrayFiltrado;
    }
    arrayFiltrado = arrayFilter.filter((e) => Number(e[colunaTable]) === Number(valor));
    return arrayFiltrado;
  };

  const removerColuna = (coluna) => {
    const novoFiltro = colunaFiltros.filter((e) => e !== coluna);
    setColunaFiltros(novoFiltro);
  };

  const filtrarPorNumero = (arrayValores) => {
    const [colunaTable, operador, valor] = arrayValores;
    let novoArray = [];
    if (planetasFilter.length === tamannhoArray) {
      novoArray = filtrandoPorNumero(colunaTable, operador, valor, planetas);
    } else {
      novoArray = filtrandoPorNumero(colunaTable, operador, valor, planetasFilter);
    }

    if (novoArray.length === 0) {
      // setPlanetasFilter(planetas);
    } else {
      setFiltrosNumericos([...filtrosNumericos, { colunaTable, operador, valor }]);
      removerColuna(colunaTable);
      setPlanetasFilter(novoArray);
    }
  };

  const values = useMemo(() => ({
    planetasFilter,
    fetchConcluido,
    filtrosNumericos,
    colunaFiltros,
    adicionarPlanetas,
    concluirFetch,
    filtarPorNome,
    filtrarPorNumero,
  }), [planetas, fetchConcluido, planetasFilter, filtrosNumericos, colunaFiltros]);

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
