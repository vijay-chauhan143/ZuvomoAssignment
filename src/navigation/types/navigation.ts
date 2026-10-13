import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<RootTabParamList> | undefined;
  Details: {
    productId: number;
  };
};