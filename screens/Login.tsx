import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext, useAuth } from '../context/AuthContext'
import { Ip } from '../utils/Ip'
import { StackParamList } from './MainStack'

export const Login = () => {
  const { user, setUser } = useAuth()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const isFocused = useIsFocused()
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()

  useEffect(() => {
    console.log(user)
    if (user) {
      nav.navigate('Profile', { user })
    }
  }, [isFocused])

  const LoginTo = async (enteredEmail: string, enteredPassword: string) => {
    console.log(
      'email en password:',
      JSON.stringify({ email: enteredEmail, password: enteredPassword }),
    )
    const res = await fetch(`${Ip.ip}/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    })
    console.log(res.status)
    if (enteredEmail === '' || enteredPassword === '') {
      alert('Please fill all the fields')
    }
    if (res.status === 404) {
      return alert('User not found')
    }
    if (res.status === 400) {
      return alert('Wrong password')
    }
    if (res.status === 500) {
      return alert('Password or email not correct')
    }
    if (res.status === 200) {
      const json = await res.json()
      setUser(json)
      console.log(json)
      nav.navigate('Profile', { user: json })
    }
  }

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
            fontFamily: 'bebas-neue-regular',
            fontSize: 32,
            color: 'black',
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: 10,
        }}
      >
        <View>
          <View>
            <Text style={{ marginBottom: 5, fontFamily: 'GothamSSm-Bold' }}>
              Email
            </Text>
            <TextInput
              placeholder="ex. test@test.com"
              onChangeText={(EmailInput) => setUserEmail(EmailInput)}
              style={{
                minWidth: '90%',
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                padding: 10,
                borderRadius: 5,
                fontFamily: 'GothamSSm-Light',
              }}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 5, fontFamily: 'GothamSSm-Bold' }}>
              Password
            </Text>

            <TextInput
              placeholder="ex. 123456"
              secureTextEntry={true}
              onChangeText={(PasswordInput) => setUserPassword(PasswordInput)}
              style={{
                minWidth: '90%',
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                fontFamily: 'GothamSSm-Light',
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            LoginTo(userEmail, userPassword)
          }}
          style={{
            marginTop: 20,
            marginBottom: 10,
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
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Register')}>
          <Text>Don't have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
