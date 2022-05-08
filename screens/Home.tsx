import { Image, ImageBackground, Linking, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
export const Home = () => {
  const toLink = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url)
    })
  }
  return (
    <ImageBackground
      source={require('../assets/Corsair_bg.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View style={{ padding: 10, maxHeight: '99%' }}>
        <Text
          style={{
            marginTop: 10,
            fontFamily: 'GothamSSm-Bold',
            color: '#fff',
            fontSize: 24,
          }}
        >
          Welcome
        </Text>
        <ScrollView style={{ marginTop: 10 }}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() =>
                toLink(
                  'https://elgato.com/?utm_source=corsair&utm_medium=referral&utm_campaign=corsair_homepage_corsair_in_action&utm_term=evolve_your_content&utm_content=elgato',
                )
              }
            >
              <Image
                source={require('../assets/elgato-banner.png')}
                style={{
                  width: 500,
                  height: 220,
                  marginTop: 10,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() =>
                toLink('https://www.corsair.com/us/en/gamer-sensei')
              }
            >
              <Image
                source={require('../assets/gamerCoach-banner.png')}
                style={{ width: 550, height: 220, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <Image
                source={require('../assets/OriginPC-banner.png')}
                style={{ width: 500, height: 220, resizeMode: 'contain' }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
