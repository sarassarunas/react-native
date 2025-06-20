import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" options={{title: 'test'}}/>
          <Stack.Screen name="todos/[id]" options={{headerShown: false}}/>
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
