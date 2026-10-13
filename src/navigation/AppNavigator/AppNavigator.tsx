import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { DetailsScreen } from '../../screens/Details/DetailsScreen';
import type { RootState } from '../../store/store';
import { getNavigationTheme, getTheme, type AppTheme } from '../../theme/theme';
import { BottomTabNavigator } from '../BottomTabNavigator/BottomTabNavigator';
import type { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabsScreen() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return <BottomTabNavigator theme={getTheme(mode)} />;
}

type AppNavigatorProps = {
  theme: AppTheme;
};

export function AppNavigator({ theme }: AppNavigatorProps) {
  return (
    <NavigationContainer theme={getNavigationTheme(theme)}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: theme.colors.background },
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { color: theme.colors.text },
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabsScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Product details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}