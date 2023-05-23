import { Stack } from 'expo-router';

const RootLayout = () => {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true, headerTitle: 'Home' }} />
        <Stack.Screen name="game/index" options={{ headerShown: true, headerTitle: 'Game' }} />
        <Stack.Screen name="debug/index" options={{ headerShown: true, headerTitle: 'Debug' }} />
      </Stack>
  )
}

export default RootLayout