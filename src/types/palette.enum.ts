export const Palette = {
  PRIMARY: '#1150FF',
  PRIMARY_LIGHT: '#1180FF',
  SECONDARY: '#F1F6FD',
  DISABLE: '#757575',
  WHITE: '#F4F4F4',
  WHITE_LIGHT: '#FFFFFF',
  DANGER: '#FF7E7E',
  SUCCESS: '#9FD895',
  WARNING: '#FFD780',
  INFO: '#1150CE',
  PINK: '#A7ACD0',
  AQUA: '#27DDA5',
  SKY: '#C5DEFF'
} as const;
export type Palette = (typeof Palette)[keyof typeof Palette];
