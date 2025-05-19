// app/_layout.tsx
import { Stack, useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#007aff' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#f2f2f2' },
        headerRight: () => (
            <View style={{ display: 'flex', flexDirection: 'row', margin: 15}}>
            <Button
              onPress={() => router.push('/Estados')}
              title="Estados"
              color="#007aff"
            />

            <Button
              onPress={() => router.push('/')}
              title="Home"
              color="#007aff"
            />
            </View>
        ),
      }}
    />
  );
}
