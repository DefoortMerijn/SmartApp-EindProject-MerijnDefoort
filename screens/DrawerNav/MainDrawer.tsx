import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer'
import { Home } from '../Home'
import 'react-native-gesture-handler'
import { Lights } from './Drawers/Lights' 
import { Ram } from './Drawers/Ram'
import { PowerSupplies } from './Drawers/PowerSupply'
import Header from '../../components/Header'
import { Cooling } from './Drawers/Cooling'
import Icons from '../../components/Icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackParamList } from '../MainStack'
import { Mice } from './Drawers/Mice'
import { Keyboards } from './Drawers/Keyboards'
export type DrawerParamList = {
  Home: undefined
  Keyboards: undefined
  Mice: undefined
  Ram: undefined
  Cooling: undefined
  PowerSupplies: undefined
  Lights: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const MainDrawer = () => {
  const screenoptions = ({
    route,
    navigation,
  }: {
    route: any
    navigation: any
  }) => ({
    drawerStyle: {
      backgroundColor: '#262626',
      paddingTop: 60,
    },
    headerTintColor: '#fff',
    headerPressOpacity: 0.5,
    drawerInactiveTintColor: '#ffffff',
    drawerActiveBackgroundColor: '#E9E600',
    drawerActiveTintColor: '#000000',
    headerRight: () => {
      const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()
      return (
        <Icons
          onPressCart={() => nav.navigate('Cart')}
          onPressProfile={() => nav.navigate('Profile')}
        />
      )
    },
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
  })

  return (
    <Drawer.Navigator screenOptions={screenoptions} defaultStatus="closed">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
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
        name="Mice"
        component={Mice}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Ram"
        component={Ram}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Cooling"
        component={Cooling}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="PowerSupplies"
        component={PowerSupplies}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Lights"
        component={Lights}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  )
}
