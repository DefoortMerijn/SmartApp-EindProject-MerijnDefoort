import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../../Detail'
import { Cooling } from './Cooling'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const CoolingStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Cooler" component={Cooling} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
