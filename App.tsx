import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MainDrawer } from './screens/DrawerNav/index'
import { useFonts } from 'expo-font'
import { Text } from 'react-native'

export default function App() {
  let [fontsLoader] = useFonts({
    'bebas-neue-regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'GothamSSm-Bold': require('./assets/fonts/GothamSSm-Bold.otf'),
    'GothamSSm-Medium': require('./assets/fonts/GothamSSm-Medium.otf'),
    'GothamSSm-Light': require('./assets/fonts/GothamSSm-Light.otf'),
    'HelveticaNeueLTPro-Bold': require('./assets/fonts/HelveticaNeueLTPro-Bd.otf'),
    'HelveticaNeueLTPro-Lt': require('./assets/fonts/HelveticaNeueLTPro-Lt.otf'),
    'HelveticaNeueLTPro-Md': require('./assets/fonts/HelveticaNeueLTPro-Md.otf'),
    'HelveticaNeueLTPro-It': require('./assets/fonts/HelveticaNeueLTPro-It.otf'),
  })

  if (!fontsLoader) {
    return <Text>Loading...</Text>
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="#E9E600" />
        <MainDrawer/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
