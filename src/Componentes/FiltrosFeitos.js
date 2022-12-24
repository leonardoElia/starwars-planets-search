import { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';
import '../style/filtrosFeitos.css';

function FiltrosFeitos() {
  const { filtrosNumericos, adicionarColuna } = useContext(PlanetContext);

  const apagarFiltro = ({ target }) => {
    const { name } = target;
    adicionarColuna(name);
  };
  return (
    <div>
      {filtrosNumericos.map((e, i) => (
        <div key={ i } className="filter">
          <span>{`${e.colunaTable} ${e.operador} ${e.valor} `}</span>
          <button
            className="buttonExcluir"
            type="button"
            name={ e.colunaTable }
            onClick={ apagarFiltro }
          >

            x
          </button>
        </div>))}
    </div>
  );
}

export default FiltrosFeitos;
