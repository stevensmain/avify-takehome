import { Palette } from '@/types/palette.enum';
import { Fuel } from '../types';

const FUEL_COLORS: Record<Fuel | 'default', Palette> = {
  biomass: Palette.INFO,
  coal: Palette.AQUA,
  imports: Palette.WARNING,
  gas: Palette.SKY,
  nuclear: Palette.DANGER,
  other: Palette.PRIMARY,
  hydro: Palette.PINK,
  solar: Palette.SUCCESS,
  wind: Palette.DISABLE,
  default: Palette.WHITE
};

export const getFuelColor = (fuel: string): Palette => {
  if (fuel in FUEL_COLORS) {
    return FUEL_COLORS[fuel as Fuel | 'default'];
  }
  return FUEL_COLORS.default;
};
