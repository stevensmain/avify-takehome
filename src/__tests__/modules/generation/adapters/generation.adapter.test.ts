import { generationApiAdapter } from '../../../../modules/generation/adapters';
import { APIGenerationData } from '../../../../modules/generation/types';

describe('generationApiAdapter', () => {
  it('should convert API data to application data', () => {
    const mockDate = '2023-01-01T12:00:00Z';
    const mockAPIData: APIGenerationData = {
      from: mockDate,
      to: mockDate,
      generationmix: [
        { fuel: 'gas', perc: 25.5 },
        { fuel: 'solar', perc: 10.2 }
      ]
    };

    const result = generationApiAdapter(mockAPIData);

    expect(result.from).toEqual(new Date(mockDate));
    expect(result.to).toEqual(new Date(mockDate));
    expect(result.generationMix).toEqual(mockAPIData.generationmix);
  });
});
