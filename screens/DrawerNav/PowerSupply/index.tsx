import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Detail } from '../../Detail'
import { PowerSupplies } from './PowerSupply'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const PowerSupplyStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="PowerSupply" component={PowerSupplies} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
