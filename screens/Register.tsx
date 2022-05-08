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
          Register
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
              Name
            </Text>
            <TextInput
              placeholder="ex. Bob"
              onChangeText={(NameInput) => setUserName(NameInput)}
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
              Email
            </Text>
            <TextInput
              placeholder="ex. test@test.com"
              onChangeText={(EmailInput) => setUserEmail(EmailInput)}
              textContentType="emailAddress"
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
              passwordRules="{minLength:8}"
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
            RegisterTo(userEmail, userPassword, userName)
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
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Text>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
