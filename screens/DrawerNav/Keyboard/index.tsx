import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../Detail'
import { Keyboards } from './Keyboards'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const KeyboardStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Keyboard" component={Keyboards} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
