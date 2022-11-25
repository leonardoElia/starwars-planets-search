import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import PlanetProvider from '../Context/PlanetProvider';

describe('Testes do Componente App', () => {
  test('Textando se exibe o texto carregando', () => {
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  });

  test('Testando se formulario esta presente', async () => {
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Carregando...'),
  )
  });
})

