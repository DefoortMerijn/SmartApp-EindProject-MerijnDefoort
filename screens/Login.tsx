import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../context/AuthContext'
import { LoginServiceStyle } from '../styles/LoginServiceStyle'
import { PageStyle } from '../styles/globalStyles/PageStyle'
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

  const LoginTo = async () => {
    const res = await fetch(`${Ip.ip}/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
    console.log(res.status)
    if (userEmail === '' || userPassword === '') {
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
    <SafeAreaView style={PageStyle.Container}>
      <View style={PageStyle.Header}>
        <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
          <Icon name="close" style={PageStyle.Icon} />
        </TouchableOpacity>

        <Text style={PageStyle.Title}>Login</Text>
      </View>
      <View style={LoginServiceStyle.FormView}>
        <View>
          <View>
            <Text style={LoginServiceStyle.Label}>Email</Text>
            <TextInput
              placeholder="ex. test@test.com"
              onChangeText={(EmailInput) => setUserEmail(EmailInput)}
              style={LoginServiceStyle.Input}
            />
          </View>
          <View>
            <Text style={LoginServiceStyle.Label}>Password</Text>

            <TextInput
              placeholder="ex. 123456"
              secureTextEntry={true}
              onChangeText={(PasswordInput) => setUserPassword(PasswordInput)}
              style={LoginServiceStyle.Input}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            LoginTo()
          }}
          style={LoginServiceStyle.SubmitButton}
        >
          <Text style={LoginServiceStyle.SubmitButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Register')}>
          <Text style={LoginServiceStyle.Link}>Don't have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
