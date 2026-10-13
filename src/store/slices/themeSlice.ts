import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

type ThemeState = {
  mode: ThemeMode;
  isManual: boolean;
};

const initialState: ThemeState = {
  mode: 'light',
  isManual: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      state.isManual = true;
    },
    setSystemTheme(state, action: PayloadAction<ThemeMode>) {
      if (!state.isManual) state.mode = action.payload;
    },
    hydrateTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      state.isManual = true;
    },
  },
});

export const { hydrateTheme, setSystemTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;