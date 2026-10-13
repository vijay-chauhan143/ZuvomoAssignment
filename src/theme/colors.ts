export type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  border: string;
  error: string;
};

export const lightColors: ThemeColors = {
  background: '#F6F8F7',
  surface: '#FFFFFF',
  text: '#1B2723',
  mutedText: '#66756F',
  primary: '#18765D',
  border: '#DCE4E0',
  error: '#B42318',
};

export const darkColors: ThemeColors = {
  background: '#121A17',
  surface: '#1B2621',
  text: '#F0F5F2',
  mutedText: '#A6B5AE',
  primary: '#72D1A9',
  border: '#36453E',
  error: '#FF9385',
};