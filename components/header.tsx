import { Image, View } from 'react-native'

export default () => {
  return (
    <View>
      <Image
        style={{
          width: 20,
          height: 10,
          resizeMode: 'contain',
          borderColor: 'black',
          borderWidth: 1,
        }}
        source={require('../assets/corsair-logo.svg')}
      />
    </View>
  )
}
