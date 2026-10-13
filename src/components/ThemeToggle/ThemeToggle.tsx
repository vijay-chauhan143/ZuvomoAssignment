import { Switch, Text, View } from 'react-native';

import { styles } from './ThemeToggle.styles';
import type { ThemeColors } from '../../theme/colors';

type ThemeToggleProps = {
  isDarkMode: boolean;
  onValueChange: (isDarkMode: boolean) => void;
  colors: ThemeColors;
};

export function ThemeToggle({ isDarkMode, onValueChange, colors }: ThemeToggleProps) {
  return (
    <View style={[styles.container, { borderBottomColor: colors.border }]}>
      <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
      <Switch
        accessibilityLabel="Dark Mode"
        value={isDarkMode}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={colors.surface}
      />
    </View>
  );
}