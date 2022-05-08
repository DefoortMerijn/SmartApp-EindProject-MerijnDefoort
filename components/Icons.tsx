import { View } from 'react-native'
import { Badge, Icon, withBadge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({
  onPressCart,
  onPressProfile,
}: {
  onPressCart: () => void
  onPressProfile: () => void
}) => {
  const Profile = () => console.log('Profile')

  return (
    <View
      style={{
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={onPressCart}>
        <Icon
          name="shopping-cart"
          color={'white'}
          reverseColor={'black'}
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressProfile} style={{ marginLeft: 20 }}>
        <Icon name="person" color={'white'} reverseColor={'black'} size={30} />
      </TouchableOpacity>
    </View>
  )
}
