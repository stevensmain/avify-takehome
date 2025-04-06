export const Fuel = {
  BIOMASS: 'biomass',
  COAL: 'coal',
  IMPORTS: 'imports',
  GAS: 'gas',
  NUCLEAR: 'nuclear',
  OTHER: 'other',
  HYDRO: 'hydro',
  SOLAR: 'solar',
  WIND: 'wind'
} as const;
export type Fuel = (typeof Fuel)[keyof typeof Fuel];
