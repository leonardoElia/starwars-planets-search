import { useContext, useState } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FormFilter() {
  const [buscarNome, setBuscarNome] = useState('');
  const { filtarPorNome } = useContext(PlanetContext);

  const mudarBuscaNome = ({ target }) => {
    const { value } = target;
    setBuscarNome(value);
    filtarPorNome(value);
  };
  return (
    <input
      type="text"
      placeholder="Digite seu Nome"
      value={ buscarNome }
      onChange={ mudarBuscaNome }
      data-testid="name-filter"
    />
  );
}

export default FormFilter;
