import { Fuel } from './fuel.enum';

export interface APIGenerationResponse {
  data: APIGenerationData;
}

export interface APIGenerationData {
  from: string;
  to: string;
  generationmix: GenerationMix[];
}

export interface GenerationData {
  from: Date;
  to: Date;
  generationMix: GenerationMix[];
}

export interface GenerationMix {
  fuel: Fuel;
  perc: number;
}
