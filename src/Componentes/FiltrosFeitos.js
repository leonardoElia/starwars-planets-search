import { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FiltrosFeitos() {
  const { filtrosNumericos } = useContext(PlanetContext);
  return (
    <>
      {filtrosNumericos.map((e, i) => (
        <div key={ i }>
          <span>{`${e.colunaTable} ${e.operador} ${e.valor} `}</span>
          <button type="button">APAGAR FILTRO</button>
        </div>))}
    </>
  );
}

export default FiltrosFeitos;
