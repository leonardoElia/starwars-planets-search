import { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

import '../style/table.css';

function Table() {
  const { planetasFilter } = useContext(PlanetContext);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planetasFilter.map((planet, index) => {
          const valores = Object.values(planet);
          return (
            <tr key={ index }>
              {valores.map((el, i) => (
                <td key={ i }>{el}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>

  );
}
export default Table;
