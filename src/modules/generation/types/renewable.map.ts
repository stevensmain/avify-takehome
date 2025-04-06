import { Fuel } from './fuel.enum';

export const renewableFuels: Fuel[] = [
  Fuel.BIOMASS,
  Fuel.HYDRO,
  Fuel.SOLAR,
  Fuel.WIND
];

export const nonRenewableFuels: Fuel[] = [
  Fuel.COAL,
  Fuel.GAS,
  Fuel.NUCLEAR,
  Fuel.IMPORTS,
  Fuel.OTHER
];
