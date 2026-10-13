import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../../screens/Home/HomeScreen';
import { SettingsScreen } from '../../screens/Settings/SettingsScreen';
import type { AppTheme } from '../../theme/theme';
import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

type BottomTabNavigatorProps = {
  theme: AppTheme;
};

export function BottomTabNavigator({ theme }: BottomTabNavigatorProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mutedText,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = route.name === 'Home'
            ? focused ? 'home' : 'home-outline'
            : focused ? 'settings' : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}