import { Circle, CircleSlashed, ShoppingCart, Square } from 'lucide-react'
import { ImageBackground, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
export const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/Corsair_bg.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View></View>
    </ImageBackground>
  )
}
