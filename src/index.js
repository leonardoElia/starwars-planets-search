import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlanetProvider from './Context/PlanetProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetProvider>
      <App />
    </PlanetProvider>,

  );
