import { useEffect, useState } from 'react'
import { Image, ImageBackground, Linking, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { HomeStyle } from '../styles/HomeStyle'
import { PageStyle } from '../styles/globalStyles/PageStyle'
import { Ip } from '../utils/Ip'

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
      style={HomeStyle.Bg}
    >
      <View style={PageStyle.Container}>
        <ScrollView style={{ marginTop: 10 }}>
          <Text style={HomeStyle.Title}>Welcome</Text>
          <Text style={HomeStyle.Text}>
            Thank you for using the Corsair Store on your mobile device.
          </Text>
          <View style={HomeStyle.Line}></View>
          <View style={HomeStyle.ImageContainer}>
            <TouchableOpacity
              onPress={() =>
                toLink(
                  'https://elgato.com/?utm_source=corsair&utm_medium=referral&utm_campaign=corsair_homepage_corsair_in_action&utm_term=evolve_your_content&utm_content=elgato',
                )
              }
            >
              <Image
                source={require('../assets/elgato-banner.png')}
                style={HomeStyle.Image}
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
                style={HomeStyle.Image}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <Image
                source={require('../assets/OriginPC-banner.png')}
                style={HomeStyle.Image}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
