import React from 'react';
import { render, screen } from '@testing-library/react';
import { Fuel } from '../../../../modules/generation/types/fuel.enum';
import { GenerationMix } from '../../../../modules/generation/types';

jest.mock('@/components/ui/card', () => ({
  Card: ({ children }) => <div data-testid="card">{children}</div>,
  CardHeader: ({ children }) => <div data-testid="card-header">{children}</div>,
  CardTitle: ({ className, children }) => (
    <div data-testid="card-title" className={className}>
      {children}
    </div>
  ),
  CardContent: ({ className, children }) => (
    <div data-testid="card-content" className={className}>
      {children}
    </div>
  )
}));

jest.mock('@/components/charts/doughnut', () => ({
  DoughnutChart: ({ data, labels, backgroundColor }) => (
    <div data-testid="doughnut-chart">
      <div data-testid="chart-data">{JSON.stringify(data)}</div>
      <div data-testid="chart-labels">{JSON.stringify(labels)}</div>
      <div data-testid="chart-colors">{JSON.stringify(backgroundColor)}</div>
    </div>
  )
}));

jest.mock('../../../../utils/text.util', () => ({
  capitalizeFirstLetter: (text) => `Capitalized-${text}`
}));

jest.mock('../../../../modules/generation/utils', () => ({
  getFuelColor: (fuel) => `color-for-${fuel}`
}));

const { GenerationsByFuel } = jest.requireActual(
  '../../../../modules/generation/components'
);

describe('GenerationsByFuel', () => {
  const createTestData = (items: Partial<GenerationMix>[]): GenerationMix[] => {
    return items.map((item) => ({
      fuel: item.fuel || Fuel.GAS,
      perc: item.perc || 0
    }));
  };

  it('should render the title correctly', () => {
    render(<GenerationsByFuel data={[]} />);
    expect(screen.getByText('Generations by fuel')).toBeInTheDocument();
  });

  it('should pass generation data to the chart component', () => {
    const mockData = createTestData([
      { fuel: Fuel.GAS, perc: 30 },
      { fuel: Fuel.SOLAR, perc: 15 },
      { fuel: Fuel.WIND, perc: 25 }
    ]);

    render(<GenerationsByFuel data={mockData} />);

    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument();

    const chartData = JSON.parse(
      screen.getByTestId('chart-data').textContent || ''
    );
    expect(chartData).toEqual([30, 15, 25]);
  });
});
