import React from 'react';
import { getByRole, getByTestId, getByText, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import PlanetProvider from '../Context/PlanetProvider';
import mock from './fetchMock';
import dados from './dadosTable';
import userEvent from '@testing-library/user-event';

const cedulas = ['Name','Rotation Period','Orbital Period','Diameter','Climate','Gravity','Terrain','Surface Water','Population','Created','Edited','URL']
const operadores = ['maior que', 'menor que', 'igual a']
const colunas = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']

describe('Testes do Componente App', () => {
  test('Textando se exibe o texto carregando', () => {
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  });

  test('Testando se formulario esta presente', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )
  expect(screen.getByPlaceholderText('Procurar por nome')).toBeInTheDocument()
  expect(screen.getByLabelText('Coluna')).toBeInTheDocument()
  expect(screen.getByLabelText('Operador')).toBeInTheDocument()
  expect(screen.getByTestId('value-filter')).toBeInTheDocument()
  expect(screen.getByRole('button', {name: 'FILTRAR'})).toBeInTheDocument()
  expect(screen.getByRole('button', {name: 'REMOVER FILTROS'})).toBeInTheDocument()
  });

  test('Testando as opção dos selecteds', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )
const selectedColuna = screen.getByLabelText('Coluna')
const selectedOperador = screen.getByLabelText('Operador')

operadores.forEach((e) => {
  userEvent.selectOptions(selectedOperador, e)
})

colunas.forEach((e) => {
  userEvent.selectOptions(selectedColuna, e)
})



  });

  test('Testando se tabela esta presente', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )

  cedulas.forEach((e) => {
    expect(screen.getByText(e)).toBeInTheDocument()
  })
  });

  test('Testando dados da tabela', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )
dados.forEach((e) => {
  expect(screen.getByText(e.name)).toBeInTheDocument()
  expect(screen.getByText(e.diameter)).toBeInTheDocument()
  expect(screen.getByText(e.orbital_period)).toBeInTheDocument()
  expect(screen.getByText(e.terrain)).toBeInTheDocument()
  expect(screen.getByText(e.created)).toBeInTheDocument()
  expect(screen.getByText(e.edited)).toBeInTheDocument()
  expect(screen.getByText(e.url)).toBeInTheDocument()
  expect(screen.getAllByText(e.rotation_period))
  expect(screen.getAllByText(e.diameter))
  expect(screen.getAllByText(e.climate))
  expect(screen.getAllByText(e.gravity))
})
  });

  test('Testando fazer uma filtragem por numero', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )
const selectedColuna = screen.getByLabelText('Coluna')
const selectedOperador = screen.getByLabelText('Operador')
const inputNumber = screen.getByTestId('value-filter')
const buttonFiltrar = screen.getByRole('button', {name: 'FILTRAR'})

userEvent.selectOptions(selectedColuna, 'population')
userEvent.selectOptions(selectedOperador, 'igual a')
userEvent.type(inputNumber, '1000')
userEvent.click(buttonFiltrar)

expect(screen.getByText('Yavin IV')).toBeInTheDocument()
const buttonX = screen.getByText('x')
userEvent.click(buttonX)

dados.forEach((e) => {
  expect(screen.getByText(e.name)).toBeInTheDocument()
  expect(screen.getByText(e.diameter)).toBeInTheDocument()
  expect(screen.getByText(e.orbital_period)).toBeInTheDocument()
  expect(screen.getByText(e.terrain)).toBeInTheDocument()
  expect(screen.getByText(e.created)).toBeInTheDocument()
  expect(screen.getByText(e.edited)).toBeInTheDocument()
  expect(screen.getByText(e.url)).toBeInTheDocument()
  expect(screen.getAllByText(e.rotation_period))
  expect(screen.getAllByText(e.diameter))
  expect(screen.getAllByText(e.climate))
  expect(screen.getAllByText(e.gravity))
})

userEvent.selectOptions(selectedColuna, 'population')
userEvent.selectOptions(selectedOperador, 'igual a')
userEvent.type(inputNumber, '1000')
userEvent.click(buttonFiltrar)

expect(screen.getByText('Yavin IV')).toBeInTheDocument()
const buttonALL = screen.getByText('REMOVER FILTROS')
userEvent.click(buttonALL)

dados.forEach((e) => {
  expect(screen.getByText(e.name)).toBeInTheDocument()
  expect(screen.getByText(e.diameter)).toBeInTheDocument()
  expect(screen.getByText(e.orbital_period)).toBeInTheDocument()
  expect(screen.getByText(e.terrain)).toBeInTheDocument()
  expect(screen.getByText(e.created)).toBeInTheDocument()
  expect(screen.getByText(e.edited)).toBeInTheDocument()
  expect(screen.getByText(e.url)).toBeInTheDocument()
  expect(screen.getAllByText(e.rotation_period))
  expect(screen.getAllByText(e.diameter))
  expect(screen.getAllByText(e.climate))
  expect(screen.getAllByText(e.gravity))
})

  });

  test('Testando Fazer filtro por texto', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )
  const inputBusca = screen.getByPlaceholderText('Procurar por nome')
  userEvent.type(inputBusca, 'Tatooine')
  expect(screen.getByText('Tatooine')).toBeInTheDocument()
  userEvent.type(inputBusca, 'TATOOINE')
  expect(screen.getByText('Tatooine')).toBeInTheDocument()
  
  });

  test('Testando Fazer dois filtros por numero', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })
    render(
      <PlanetProvider>
        <App />
      </PlanetProvider>
    );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading...'),
  )

const selectedColuna = screen.getByLabelText('Coluna')
const selectedOperador = screen.getByLabelText('Operador')
const inputNumber = screen.getByTestId('value-filter')
const buttonFiltrar = screen.getByRole('button', {name: 'FILTRAR'})

userEvent.selectOptions(selectedColuna, 'rotation_period')
userEvent.selectOptions(selectedOperador, 'igual a')
userEvent.type(inputNumber, '23')
userEvent.click(buttonFiltrar)

expect(screen.getByText('Tatooine')).toBeInTheDocument()
expect(screen.getByText('Hoth')).toBeInTheDocument()
expect(screen.getByText('Dagobah')).toBeInTheDocument()

userEvent.selectOptions(selectedColuna, 'orbital_period')
userEvent.selectOptions(selectedOperador, 'igual a')
userEvent.type(inputNumber, '304')
userEvent.click(buttonFiltrar)

expect(screen.getByText('Tatooine')).toBeInTheDocument()
const buttonX = screen.getAllByText('x')
userEvent.click(buttonX[1])

expect(screen.getByText('Tatooine')).toBeInTheDocument()
expect(screen.getByText('Hoth')).toBeInTheDocument()
expect(screen.getByText('Dagobah')).toBeInTheDocument()
  
  });
})

