import { api } from '@/lib/api';
import { APIGenerationResponse } from '../types';

export const getGenerationData = async () => {
  const { data } = await api.get<APIGenerationResponse>('/generation');
  return data.data;
};
