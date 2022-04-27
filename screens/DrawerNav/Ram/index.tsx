import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../Detail'
import { Ram } from './Ram'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const RamStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Ramm" component={Ram} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
