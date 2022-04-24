import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MainDrawer } from './screens/index'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="#E9E600" />
        <MainDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
