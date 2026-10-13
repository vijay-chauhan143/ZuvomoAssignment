import { ActivityIndicator, Pressable, Text } from 'react-native';

import { styles } from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void | Promise<void>;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  title,
  onPress,
  backgroundColor,
  textColor,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={loading ? `${title}, loading` : title}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.button, { backgroundColor, opacity: isDisabled ? 0.6 : 1 }]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.label, { color: textColor }]}>{title}</Text>
      )}
    </Pressable>
  );
}