import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../context/AuthContext'

import { Ip } from '../utils/Ip'
import { StackParamList } from './MainStack'

export const Profile = ({
  route,
  navigation,
}: {
  route: RouteProp<StackParamList, 'Profile'>
  navigation: RouteProp<StackParamList, 'Profile'>
}) => {
  const { user, setUser } = useAuth()
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 60,
        }}
      >
        <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
          <Icon
            name="close"
            style={{
              alignSelf: 'flex-start',
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: 'black',
            fontFamily: 'bebas-neue-regular',
            fontSize: 32,
          }}
        >
          Profile
        </Text>
      </View>
      <View style={{ flex: 1, marginTop: 20, padding: 10 }}>
        <Image
          source={require('../assets/blank-profile-picture.png')}
          style={{
            width: 150,
            height: 150,
            marginTop: 10,
            borderRadius: 100,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            fontFamily: 'GothamSSm-Bold',
            fontSize: 24,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 10,
            color: '#262626',
          }}
        >
          Info
        </Text>
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontFamily: 'GothamSSm-Medium',
              fontSize: 16,
              color: 'black',
            }}
          >
            UserName
          </Text>
          <Text
            style={{
              fontFamily: 'GothamSSm-Light',
              fontSize: 14,
              color: '#767676',
            }}
          >
            {user?.name}
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontFamily: 'GothamSSm-Medium',
              fontSize: 16,
              color: 'black',
            }}
          >
            Email
          </Text>
          <Text
            style={{
              fontFamily: 'GothamSSm-Light',
              fontSize: 14,
              color: '#767676',
            }}
          >
            {user?.email}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setUser(null)
            nav.navigate('Login')
          }}
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#E9E600',
            alignItems: 'center',
            width: '70%',
            alignSelf: 'center',
            elevation: 2,
          }}
        >
          <Text style={{ fontFamily: 'GothamSSm-Bold', fontSize: 14 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
