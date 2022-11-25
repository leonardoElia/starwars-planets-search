import { useContext, useState } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FormFilter() {
  const [buscarNome, setBuscarNome] = useState('');
  const [colunaTable, setColunaTable] = useState('population');
  const [operador, setOperador] = useState('maior que');
  const [valor, setValor] = useState(0);
  const { filtarPorNome, filtrarPorNumero, colunaFiltros } = useContext(PlanetContext);

  const mudarBuscaNome = ({ target }) => {
    const { value } = target;
    setBuscarNome(value);
    filtarPorNome(value);
  };

  const mudarColuna = ({ target }) => {
    const { value } = target;
    setColunaTable(value);
  };

  const mudarOperador = ({ target }) => {
    const { value } = target;
    setOperador(value);
  };

  const mudarValor = ({ target }) => {
    const { value } = target;
    setValor(value);
  };

  const buttonFiltrar = () => {
    const valores = [colunaTable, operador, valor];
    filtrarPorNumero(valores);
    const novoValueSelected = colunaFiltros.filter((e) => e !== colunaTable);
    setColunaTable(novoValueSelected[0]);
    setOperador('maior que');
    setValor(0);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Busque planeta pelo nome"
        value={ buscarNome }
        onChange={ mudarBuscaNome }
        data-testid="name-filter"
      />
      <label htmlFor="coluna">
        Coluna
        <select
          value={ colunaTable }
          data-testid="column-filter"
          onChange={ mudarColuna }
          id="coluna"
        >
          {colunaFiltros.map((e, i) => (
            <option key={ i } value={ e }>{e}</option>
          ))}
        </select>
      </label>

      <label htmlFor="operador">
        Operador
        <select
          value={ operador }
          data-testid="comparison-filter"
          onChange={ mudarOperador }
          id="operador"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <input
        type="number"
        onChange={ mudarValor }
        value={ valor }
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonFiltrar }
      >
        FILTRAR

      </button>
    </form>
  );
}

export default FormFilter;
