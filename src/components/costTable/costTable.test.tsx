import { render, screen } from '@testing-library/react';
import CostTable from './costTable';
import { ServiceCostTable } from '../../type/costType';

const mockData: {
  cost: ServiceCostTable;
  minCost: ServiceCostTable;
  minMaxCost: ServiceCostTable;
} = {
  cost: {
    id: '1',
    name: 'Тестовая стрижка',
    services: [
      {
        id: '0',
        name: 'Женская стрижка короткая/средняя',
        cost: 1,
      },
    ],
  },
  minCost: {
    id: '1',
    name: 'Тестовая стрижка',
    services: [
      {
        id: '0',
        name: 'Женская стрижка короткая/средняя',
        minCost: 1,
      },
    ],
  },
  minMaxCost: {
    id: '1',
    name: 'Тестовая стрижка',
    services: [
      {
        id: '0',
        name: 'Женская стрижка короткая/средняя',
        minCost: 1,
        maxCost: 1,
      },
    ],
  },
};

test('service has cost ', () => {
  const { id, name, services } = mockData.cost;
  render(<CostTable id={id} name={name} services={services} />);

  expect(screen.getByTestId('service-cost').innerHTML).toBe('1 руб.');
});

test('service has minCost ', () => {
  const { id, name, services } = mockData.minCost;
  render(<CostTable id={id} name={name} services={services} />);

  expect(screen.getByTestId('service-cost').innerHTML).toBe('от 1 руб.');
});

test('service has minMaxCost ', () => {
  const { id, name, services } = mockData.minMaxCost;
  render(<CostTable id={id} name={name} services={services} />);

  expect(screen.getByTestId('service-cost').innerHTML).toBe('1-1 руб.');
});

test('show name', () => {
  const { id, name, services } = mockData.cost;
  render(<CostTable id={id} name={name} services={services} />);

  expect(screen.getByText(name)).toBeInTheDocument();
});
