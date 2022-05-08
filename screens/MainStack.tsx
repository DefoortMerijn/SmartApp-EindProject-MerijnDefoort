import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import Icons from '../components/Icons'
import { Cart } from './Cart'
import { Detail } from './Detail'
import { MainDrawer } from './DrawerNav/MainDrawer'
import { Profile } from './Profile'

export type StackParamList = {
  Cart: { article: Article } | undefined
  MainDrawer: undefined
  Profile: undefined
  Detail: { article: Article }
}

const Stack = createStackNavigator<StackParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}
export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
