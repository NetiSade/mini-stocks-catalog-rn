import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Stock } from "@/data/stocks";

export type RootStackParamList = {
  Home: undefined;
  StockDetail: { stock: Stock };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

