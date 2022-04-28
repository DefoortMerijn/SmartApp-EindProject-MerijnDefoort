import { View } from 'react-native'
import { Badge, Icon, withBadge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default (navigation: any) => {
  const Cart = () => console.log('Cart')
  const Profile = () => console.log('Profile')

  const BadgedIcon = withBadge(1)(Icon)
  return (
    <View
      style={{
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={Cart}>
        <Icon
          name="shopping-cart"
          color={'white'}
          reverseColor={'black'}
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={Profile} style={{ marginLeft: 20 }}>
        <Icon name="person" color={'white'} reverseColor={'black'} size={30} />
      </TouchableOpacity>
    </View>
  )
}
