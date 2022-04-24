import { ImageBackground, Text, View } from 'react-native'

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/Corsair_bg.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View>
        <Text>Home</Text>
      </View>
    </ImageBackground>
  )
}
