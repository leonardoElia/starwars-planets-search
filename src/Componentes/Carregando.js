import { useEffect } from 'react';
import '../style/carregando.css';

function Carregando() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);
  return (
    <main>
      <div className="loader">
        <span>Loading...</span>
      </div>
    </main>

  );
}

export default Carregando;
