import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          title: 'Pawculator',
          headerStyle: {
            backgroundColor: 'rgba(0, 134, 214, 0.95)',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.8,
            shadowRadius: 7,
            elevation: 5,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: '2em',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="cat" />
        <Stack.Screen name="dog" />
        <Stack.Screen name="result" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
