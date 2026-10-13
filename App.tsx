import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { AppNavigator } from './src/navigation/AppNavigator/AppNavigator';
import { hydrateTheme, setSystemTheme, type ThemeMode } from './src/store/slices/themeSlice';
import { store, type AppDispatch, type RootState } from './src/store/store';
import { getTheme } from './src/theme/theme';

const THEME_STORAGE_KEY = 'assignment-theme';

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function ThemedApp() {
  const dispatch = useDispatch<AppDispatch>();
  const { mode, isManual } = useSelector((state: RootState) => state.theme);
  const systemColorScheme = useColorScheme();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const theme = getTheme(mode);

  useEffect(() => {
    dispatch(setSystemTheme(systemColorScheme === 'dark' ? 'dark' : 'light'));
  }, [dispatch, systemColorScheme]);

  useEffect(() => {
    let isMounted = true;

    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((savedTheme) => {
        if (!isMounted) return;
        if (isThemeMode(savedTheme)) dispatch(hydrateTheme(savedTheme));
        setIsThemeLoaded(true);
      })
      .catch(() => {
        if (isMounted) setIsThemeLoaded(true);
      });

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    if (isManual) {
      AsyncStorage.setItem(THEME_STORAGE_KEY, mode).catch((error: unknown) => {
        console.warn('Unable to save the selected theme.', error);
      });
    }
  }, [isManual, mode]);

  if (!isThemeLoaded) {
    return <View style={[styles.loading, { backgroundColor: theme.colors.background }]} />;
  }

  return (
    <>
      <StatusBar
        style={mode === 'dark' ? 'light' : 'dark'}
        animated
      />
      <AppNavigator theme={theme} />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
});