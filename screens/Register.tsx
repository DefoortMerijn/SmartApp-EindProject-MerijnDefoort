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
import { PageStyle } from '../styles/PageStyle'
import { Ip } from '../utils/Ip'
import { StackParamList } from './MainStack'

export const Register = () => {
  const { user, setUser } = useAuth()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const isFocused = useIsFocused()
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()

  useEffect(() => {
    console.log(user)
    if (user) {
      nav.navigate('Profile', { user })
    }
  }, [isFocused])

  const RegisterTo = async (
    enteredEmail: string,
    enteredPassword: string,
    enteredName: string,
  ) => {
    console.log(enteredEmail, enteredPassword, enteredName)
    const res = await fetch(`${Ip.ip}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    })
    console.log(res.status)
    if (
      enteredEmail === '' ||
      enteredPassword === '' ||
      enteredName === '' ||
      res.status === 400
    ) {
      alert('Please fill all the fields')
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)) {
      console.log('email not valid')
      alert('Please enter a valid email')
    }
    if (enteredPassword.length < 6) {
      alert('Password must be at least 6 characters')
    }
    if (res.status === 500) {
      return alert('Server error')
    }

    if (res.status === 201) {
      nav.navigate('Login')
    }
  }

  return (
    <SafeAreaView style={PageStyle.Container}>
      <View style={PageStyle.Header}>
        <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
          <Icon name="close" style={PageStyle.Icon} />
        </TouchableOpacity>

        <Text style={PageStyle.Title}>Register</Text>
      </View>
      <View style={LoginServiceStyle.FormView}>
        <View>
          <View>
            <Text style={LoginServiceStyle.Label}>Name</Text>
            <TextInput
              placeholder="ex. Bob"
              onChangeText={(NameInput) => setUserName(NameInput)}
              style={LoginServiceStyle.Input}
            />
          </View>
          <View>
            <Text style={LoginServiceStyle.Label}>Email</Text>
            <TextInput
              placeholder="ex. test@test.com"
              onChangeText={(EmailInput) => setUserEmail(EmailInput)}
              textContentType="emailAddress"
              style={LoginServiceStyle.Input}
            />
          </View>
          <View>
            <Text style={LoginServiceStyle.Label}>Password</Text>

            <TextInput
              placeholder="ex. 123456"
              secureTextEntry={true}
              passwordRules="{minLength:8}"
              onChangeText={(PasswordInput) => setUserPassword(PasswordInput)}
              style={LoginServiceStyle.Input}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            RegisterTo(userEmail, userPassword, userName)
          }}
          style={LoginServiceStyle.SubmitButton}
        >
          <Text style={LoginServiceStyle.SubmitButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Text style={LoginServiceStyle.Link}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
