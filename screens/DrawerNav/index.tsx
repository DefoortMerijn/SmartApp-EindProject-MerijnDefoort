import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer'
import { Home } from '../Home'
import 'react-native-gesture-handler'
import { KeyboardStack } from './Keyboard/index'
import { MouseStack } from './Mouse/index'
import { LightStack } from './Lights/index'
import { RamStack } from './Ram'
import { PowerSupplyStack } from './PowerSupply'
import Header from '../../components/Header'
import { CoolingStack } from './Cooling'
import Icons from '../../components/Icons'

const Drawer = createDrawerNavigator()

export const MainDrawer = () => {
  const screenoptions: DrawerNavigationOptions = {
    drawerStyle: {
      backgroundColor: '#262626',
      paddingTop: 60,
    },
    headerTintColor: '#fff',
    headerPressOpacity: 0.5,
    drawerInactiveTintColor: '#ffffff',
    drawerActiveBackgroundColor: '#E9E600',
    drawerActiveTintColor: '#000000',
    headerRight: () => <Icons  />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
    drawerLabelStyle: {
      fontFamily: 'bebas-neue-regular',
      fontSize: 18,
    },
    headerStyle: {
      backgroundColor: '#262626',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
  }

  return (
    <Drawer.Navigator screenOptions={screenoptions}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Keyboards"
        component={KeyboardStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Mice"
        component={MouseStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Ram"
        component={RamStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Cooling"
        component={CoolingStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Power Supplies"
        component={PowerSupplyStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Lights"
        component={LightStack}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  )
}
