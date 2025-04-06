import { getGenerationData } from '../../../../modules/generation/services';
import { api } from '../../../../lib/api';

jest.mock('../../../../lib/api', () => ({
  api: {
    get: jest.fn()
  }
}));

describe('Generation Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data when API call is successful', async () => {
    const mockData = {
      from: '2023-01-01T12:00:00Z',
      to: '2023-01-01T12:30:00Z',
      generationmix: [{ fuel: 'gas', perc: 20 }]
    };

    const mockResponse = {
      data: {
        data: mockData
      }
    };

    (api.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getGenerationData();

    expect(api.get).toHaveBeenCalledWith('/generation');
    expect(result).toEqual(mockData);
  });

  it('should propagate errors from the API', async () => {
    const errorMessage = 'Network error';
    (api.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(getGenerationData()).rejects.toThrow(errorMessage);
    expect(api.get).toHaveBeenCalledWith('/generation');
  });
});
