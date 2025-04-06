import { useQuery } from '@/hooks/useQuery';
import { getGenerationData } from '../services';
import { generationApiAdapter } from '../adapters';
import { GenerationData } from '../types';

export const useGeneration = () => {
  return useQuery<GenerationData>({
    queryKey: ['generation'],
    queryFn: async () => {
      const data = await getGenerationData();
      const generationData = generationApiAdapter(data);
      return generationData;
    }
  });
};
