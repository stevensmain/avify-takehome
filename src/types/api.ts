export interface QueryOptions {
  showSuccess?: boolean;
  showError?: boolean;
  enabled?: boolean;
  mutationKey?: string[];
}

export interface QueryParams<T = object> extends QueryOptions {
  params?: T;
}
