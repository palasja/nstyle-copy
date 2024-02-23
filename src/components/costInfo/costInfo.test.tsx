import { render, screen } from '@testing-library/react';
import CostInfo from '.';
import { vi } from 'vitest';

const fullMockData = {
  data: {
    name: 'СТРИЖКА',
    tables: [
      {
        id: 1,
        name: 'Тестовая стрижка',
        services: [
          {
            id: 0,
            name: 'Женская стрижка короткая/средняя',
            minCost: 35,
          },
        ],
      },
    ],
  },
};
const noNameMockData = {
  data: {
    tables: [
      {
        id: 1,
        name: 'Тестовая стрижка',
        services: [
          {
            id: 0,
            name: 'Женская стрижка короткая/средняя',
            minCost: 35,
          },
        ],
      },
    ],
  },
};

test('show full info', async () => {
  vi.mock('../../../db/operations', () => ({
    getServiceByType: vi.fn().mockImplementation(() => fullMockData.data),
  }));
  render(<CostInfo id={'1'} showCostHeaedr={true} />);
  expect(await screen.findByText('Тестовая стрижка'));
  expect(await screen.findByText('Стоимость услуг'));
});

test('hide cost header', () => {
  render(<CostInfo id={'1'} />);
  expect(screen.queryByRole('h3')).not.toBeInTheDocument();
});

test('render without name', () => {
  vi.mock('../../../db/operations', () => ({
    getServiceByType: vi.fn().mockImplementation(() => noNameMockData.data),
  }));
  render(<CostInfo id={'1'} />);
  expect(screen.queryByRole('h4')).not.toBeInTheDocument();
});
