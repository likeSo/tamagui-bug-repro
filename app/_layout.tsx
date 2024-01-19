import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { TamaguiProvider, Button, Text } from 'tamagui';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
    <TamaguiProvider config={config} defaultTheme='orange'>
      <Stack>
        <Stack.Screen name="index"  />
        <Stack.Screen
          name="details"
          options={{ title: 'Details' }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
