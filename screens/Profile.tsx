import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackParamList } from './MainStack'

export const Profile = () => {
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icon
          name="arrow-back"
          style={{ alignSelf: 'flex-start', marginBottom: 5 }}
        />
      </TouchableOpacity>
      <Text style={{ color: 'black' }}>Profile</Text>
    </SafeAreaView>
  )
}
