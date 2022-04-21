import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer'
import { Home } from './DrawerNav/Home'
import 'react-native-gesture-handler'
import { Keyboards } from './DrawerNav/Keyboards'
import { Mouse } from './DrawerNav/Mouse'
import { Image } from 'react-native'
import Header from '../components/header'

const Drawer = createDrawerNavigator()

export const MainDrawer = () => {
  const screenoptions: DrawerNavigationOptions = {
    drawerStyle: {
      backgroundColor: '#262626',
    },
    drawerInactiveTintColor: '#ffffff',
    drawerActiveBackgroundColor: '#E9E600',
    drawerActiveTintColor: '#000000',
    headerStyle: {
      backgroundColor: '#E9E600',
    },
  }

  return (
    <Drawer.Navigator screenOptions={screenoptions}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <Header />,
        }}
      />
      <Drawer.Screen
        name="Keyboards"
        component={Keyboards}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Mouse"
        component={Mouse}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  )
}
