export enum Units {
  SECONDS = 'seconds',
  MILLISECONDS = 'milliseconds',
  MINUTES = 'minutes',
  HOURS = 'hours',
  DAYS = 'days'
}

const MULTIPLIER = {
  [Units.SECONDS]: 1000,
  [Units.MILLISECONDS]: 1,
  [Units.MINUTES]: 1000 * 60,
  [Units.HOURS]: 1000 * 60 * 60,
  [Units.DAYS]: 1000 * 60 * 60 * 24
};

export const toMiliseconds = (value: number, unit: Units = Units.SECONDS) => {
  return value * MULTIPLIER[unit];
};
