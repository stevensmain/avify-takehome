import { APIGenerationData, GenerationData } from '../types/generation';

export const generationApiAdapter = (
  data: APIGenerationData
): GenerationData => ({
  from: new Date(data.from),
  to: new Date(data.to),
  generationMix: data.generationmix
});
