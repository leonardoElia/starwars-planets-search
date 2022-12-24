import { useContext, useState, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';
import '../style/formulario.css';

function FormFilter() {
  const [buscarNome, setBuscarNome] = useState('');
  const [colunaTable, setColunaTable] = useState('population');
  const [operador, setOperador] = useState('maior que');
  const [valor, setValor] = useState(0);
  const { filtarPorNome, filtrarPorNumero, colunaFiltros,
    removerFiltros } = useContext(PlanetContext);

  useEffect(() => {
    document.body.style.backgroundColor = '#1b1b1b';
    document.body.style.color = 'white';
  }, []);

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
  const removerTodosFiltros = () => {
    removerFiltros();
  };
  return (
    <form>
      <div className="group">
        <svg
          className="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            />
          </g>

        </svg>
        <input
          className="input"
          type="text"
          placeholder="Procurar por nome"
          value={ buscarNome }
          onChange={ mudarBuscaNome }
          data-testid="name-filter"
        />
      </div>
      <div>
        <label htmlFor="coluna">
          Coluna
          <select
            className="inputColuna"
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
            className="inputOperador"
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
          className="inputNumero"
          type="number"
          onChange={ mudarValor }
          value={ valor }
          data-testid="value-filter"
        />

        <button
          className='buttonForm'
          type="button"
          data-testid="button-filter"
          onClick={ buttonFiltrar }
        >
          FILTRAR

        </button>

        <button
          className='buttonForm'
          data-testid="button-remove-filters"
          type="button"
          onClick={ removerTodosFiltros }
        >
          REMOVER FILTROS

        </button>
      </div>
    </form>
  );
}

export default FormFilter;
