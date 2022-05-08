import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { Cart } from './Cart'
import { Detail } from './Detail'
import { MainDrawer } from './DrawerNav/MainDrawer'
import { Login } from './Login'
import { Profile } from './Profile'
import { Register } from './Register'

export type StackParamList = {
  Cart: { article: Article } | undefined
  MainDrawer: undefined
  Profile: { user: User }
  Detail: { article: Article }
  Login: undefined
  Register: undefined
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}
