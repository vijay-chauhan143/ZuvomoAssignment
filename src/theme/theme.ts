import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

import type { ThemeMode } from '../store/slices/themeSlice';
import { darkColors, lightColors, type ThemeColors } from './colors';

export type AppTheme = {
  mode: ThemeMode;
  colors: ThemeColors;
};

export function getTheme(mode: ThemeMode): AppTheme {
  return {
    mode,
    colors: mode === 'dark' ? darkColors : lightColors,
  };
}

export function getNavigationTheme(theme: AppTheme): Theme {
  const baseTheme = theme.mode === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...baseTheme,
    dark: theme.mode === 'dark',
    colors: {
      ...baseTheme.colors,
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.primary,
    },
  };
}