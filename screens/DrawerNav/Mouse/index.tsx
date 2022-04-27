import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../Detail'
import { Mice } from './Mice'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const MouseStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Mouse" component={Mice} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
