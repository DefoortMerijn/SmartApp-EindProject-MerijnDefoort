import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../Detail'
import { Lights } from './Lights'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const LightStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Light" component={Lights} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
