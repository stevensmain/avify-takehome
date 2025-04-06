import React from 'react';
import { render, screen } from '@testing-library/react';
import { useGeneration } from '../../../../modules/generation/hooks';
import { Fuel } from '../../../../modules/generation/types/fuel.enum';
import { formatDate, formatTime } from '../../../../utils/date.util';

jest.mock('../../../../modules/generation/hooks', () => ({
  useGeneration: jest.fn()
}));

jest.mock('../../../../modules/generation/components', () => ({
  GenerationsByFuel: ({ data }) => (
    <div data-testid="generations-by-fuel">{JSON.stringify(data)}</div>
  ),
  GenerationPageSkeleton: () => <div data-testid="skeleton">Loading...</div>
}));

jest.mock('../../../../utils/date.util', () => ({
  formatDate: jest.fn((date) => `formatted-date-${date.toISOString()}`),
  formatTime: jest.fn((date) => `formatted-time-${date.toISOString()}`)
}));

jest.mock('../../../../components/error-feedback', () => ({
  ErrorFeedback: ({ error }) => (
    <div data-testid="error-feedback">{error?.message || 'Unknown error'}</div>
  )
}));

const { GenerationPage } = jest.requireActual(
  '../../../../modules/generation/pages'
);

describe('GenerationPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading skeleton when data is loading', () => {
    (useGeneration as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
      error: null
    });

    render(<GenerationPage />);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('should render error component when there is an error', () => {
    const mockError = new Error('API Error');
    (useGeneration as jest.Mock).mockReturnValue({
      isLoading: false,
      data: null,
      error: mockError
    });

    render(<GenerationPage />);

    expect(screen.getByTestId('error-feedback')).toBeInTheDocument();
    expect(screen.getByText('API Error')).toBeInTheDocument();
  });

  it('should render generation data when loading is complete', () => {
    const mockDate = new Date('2023-01-01T12:00:00Z');
    const mockData = {
      from: mockDate,
      to: mockDate,
      generationMix: [
        { fuel: Fuel.GAS, perc: 30 },
        { fuel: Fuel.SOLAR, perc: 15 }
      ]
    };

    (useGeneration as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockData,
      error: null
    });

    render(<GenerationPage />);

    expect(screen.getByText('Generation Mix')).toBeInTheDocument();

    expect(formatDate).toHaveBeenCalledWith(mockDate);
    expect(formatTime).toHaveBeenCalledWith(mockDate);

    const generationsByFuelData = JSON.parse(
      screen.getByTestId('generations-by-fuel').textContent || ''
    );
    expect(generationsByFuelData).toEqual(mockData.generationMix);
  });
});
