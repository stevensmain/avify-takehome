import {
  QueryKey,
  useQuery as useRQQuery,
  QueryFunction
} from '@tanstack/react-query';

import { QueryParams } from '../types/api';

interface UseQueryProps<T> {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  refetchInterval?: number;
}

export const useQuery = <T, K = object>({
  queryKey,
  queryFn,
  refetchInterval,
  enabled = true
}: UseQueryProps<T> & Partial<QueryParams<K>>) => {
  const { data, error, isFetching, isLoading, refetch } = useRQQuery<T, Error>({
    queryKey,
    queryFn,
    enabled,
    ...(refetchInterval && { refetchInterval })
  });

  return { data, error, isFetching, isLoading, refetch };
};
