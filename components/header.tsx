import {} from 'react-native-vector-icons/AntDesign'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

export default () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Image
        style={{
          width: 120,
          height: 30,
          tintColor: '#fff',
        }}
        source={require('../assets/corsair-logo.png')}
      />

    </View>
  )
}
