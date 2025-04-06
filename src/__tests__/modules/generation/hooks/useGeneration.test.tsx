import { renderHook, waitFor } from '@testing-library/react';
import { useGeneration } from '../../../../modules/generation/hooks';
import { getGenerationData } from '../../../../modules/generation/services';
import { generationApiAdapter } from '../../../../modules/generation/adapters';
import { createQueryClientWrapper } from '../../../test-utils';

jest.mock('../../../../modules/generation/services');
jest.mock('../../../../modules/generation/adapters');

describe('useGeneration', () => {
  it('should fetch generation data and return the processed result', async () => {
    const mockApiData = {
      from: '2023-01-01T12:00:00Z',
      to: '2023-01-01T12:30:00Z',
      generationmix: [{ fuel: 'gas', perc: 20 }]
    };

    const mockGenerationData = {
      from: new Date(mockApiData.from),
      to: new Date(mockApiData.to),
      generationMix: mockApiData.generationmix
    };

    (getGenerationData as jest.Mock).mockResolvedValue(mockApiData);
    (generationApiAdapter as jest.Mock).mockReturnValue(mockGenerationData);

    const { result } = renderHook(() => useGeneration(), {
      wrapper: createQueryClientWrapper()
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(getGenerationData).toHaveBeenCalled();
    expect(generationApiAdapter).toHaveBeenCalledWith(mockApiData);
    expect(result.current.data).toEqual(mockGenerationData);
  });

  it('should handle errors correctly', async () => {
    const errorMessage = 'Error fetching data';
    (getGenerationData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useGeneration(), {
      wrapper: createQueryClientWrapper()
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(getGenerationData).toHaveBeenCalled();
    expect(result.current.error).toBeTruthy();
    expect(result.current.data).toBeUndefined();
  });
});
