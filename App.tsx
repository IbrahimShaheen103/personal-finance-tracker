import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import { queryClient } from "./src/api/queryClient";
import useTheme from "./src/hooks/useTheme";
import RootNavigator from "./src/navigation/RootNavigator";
export default function App() {
  const { colors } = useTheme();
  useEffect(() => {
    const prepareApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await SplashScreen.hideAsync();
    };
    prepareApp();
  }, []);

  return (
    <View style={{ flex: 1, backgroundClip: colors.background }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
}
