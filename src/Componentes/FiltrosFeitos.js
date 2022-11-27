import { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FiltrosFeitos() {
  const { filtrosNumericos, adicionarColuna } = useContext(PlanetContext);

  const apagarFiltro = ({ target }) => {
    const { name } = target;
    adicionarColuna(name);
  };
  return (
    <>
      {filtrosNumericos.map((e, i) => (
        <div key={ i } data-testid="filter">
          <span>{`${e.colunaTable} ${e.operador} ${e.valor} `}</span>
          <button
            type="button"
            name={ e.colunaTable }
            onClick={ apagarFiltro }
          >
            X

          </button>
        </div>))}
    </>
  );
}

export default FiltrosFeitos;
