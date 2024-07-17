import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  StockDetail: { symbol: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

export type StockDetailScreenRouteProp = RouteProp<RootStackParamList, 'StockDetail'>;

export interface StockDetailScreenProps {
  route: StockDetailScreenRouteProp;
}
