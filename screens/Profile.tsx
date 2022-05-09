import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../context/AuthContext'
import { PageStyle } from '../styles/globalStyles/PageStyle'
import { ProfileStyle } from '../styles/ProfileStyle'
import { StackParamList } from './MainStack'

export const Profile = () => {
  const { user, setUser } = useAuth()
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()

  return (
    <SafeAreaView style={PageStyle.Container}>
      <View style={PageStyle.Header}>
        <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
          <Icon name="close" style={PageStyle.Icon} />
        </TouchableOpacity>

        <Text style={PageStyle.Title}>Profile</Text>
      </View>
      <View style={ProfileStyle.ProfileView}>
        <Image
          source={require('../assets/blank-profile-picture.png')}
          style={ProfileStyle.Image}
        />
        <Text style={ProfileStyle.Title}>Info</Text>
        <View style={{ marginBottom: 15 }}>
          <Text style={ProfileStyle.Label}>UserName</Text>
          <Text style={ProfileStyle.Value}>{user?.name}</Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={ProfileStyle.Label}>Email</Text>
          <Text style={ProfileStyle.Value}>{user?.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setUser(null)
            nav.navigate('Login')
          }}
          style={ProfileStyle.LogoutButton}
        >
          <Text style={ProfileStyle.LogoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
