import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
// import { SharedUserData } from '../../components/SharedUserData/SharedUserData';
import { setTheme } from '../../store/slices/themeSlice';
import type { AppDispatch, RootState } from '../../store/store';
import { getTheme } from '../../theme/theme';
import { styles } from './SettingsScreen.styles';

export function SettingsScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(mode);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>Settings</Text>
      <ThemeToggle
        isDarkMode={mode === 'dark'}
        onValueChange={(isDarkMode) => dispatch(setTheme(isDarkMode ? 'dark' : 'light'))}
        colors={theme.colors}
      />
      {/* <SharedUserData /> */}
    </SafeAreaView>
  );
}