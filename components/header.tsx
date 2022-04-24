import { Image, View } from 'react-native'

export default () => {
  return (
    <View>
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
