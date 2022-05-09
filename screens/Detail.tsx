import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native'
import { useEffect } from 'react'
import { Button, Image, Text, View, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {
  FlatList,
  ScrollView as GestureHandlesScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackParamList } from './MainStack'

export const Detail = ({
  route,
  navigation,
}: {
  route: RouteProp<StackParamList, 'Detail'>
  navigation: RouteProp<StackParamList, 'Detail'>
}) => {
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()
  const data = route.params.article

  const GetSpecs = () => {
    return (
      <SafeAreaView>
        {Object.entries(data.specs).map(([key, value]) => {
          return (
            <View
              key={key}
              style={{
                // alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <Text style={{ fontFamily: 'GothamSSm-Bold', fontSize: 11 }}>
                {key}
              </Text>
              <View style={{ maxWidth: '50%' }}>
                <Text
                  style={{
                    fontFamily: 'GothamSSm-Light',
                    fontSize: 10,
                    color: '#777777',
                    textAlign: 'right',
                  }}
                >
                  {value}
                </Text>
              </View>
            </View>
          )
        })}
      </SafeAreaView>
    )
  }
  const ShowPrice = () => {
    if (data.salePercentage === 0) {
      return (
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'GothamSSm-Light',
            paddingLeft: 20,
          }}
        >
          €{data.price.toFixed(2)}
        </Text>
      )
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: '#bbbbbb',
              fontSize: 18,
              fontFamily: 'GothamSSm-Light',
              textDecorationLine: 'line-through',
              marginRight: 5,
            }}
          >
            €{data.price.toFixed(2)}
          </Text>
          <Text
            style={{
              color: '#b30505',
              fontSize: 18,
              fontFamily: 'GothamSSm-Light',
            }}
          >
            €
            {(data.price - (data.price * data.salePercentage) / 100).toFixed(2)}
          </Text>
        </View>
      )
    }
  }
  return (
    <SafeAreaView>
      <View style={{}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="always"
          contentContainerStyle={{
            backgroundColor: '#F0F0F0',
            padding: 15,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
              <Icon
                name="close"
                style={{ alignSelf: 'flex-start', marginBottom: 5 }}
              />
            </TouchableOpacity>

            <View style={{ marginBottom: 10 }}>
              <Image
                source={{ uri: data.image }}
                style={{
                  width: 500,
                  height: 250,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 24,

                fontFamily: 'GothamSSm-Medium',
              }}
            >
              {data.name}
            </Text>
            <Text>{ShowPrice()}</Text>

            <Text
              style={{
                marginTop: 20,
                fontSize: 10,

                color: '#777',
                fontFamily: 'GothamSSm-Light',
              }}
            >
              {data.description}
            </Text>

            <TouchableOpacity
              onPress={() => {
                nav.navigate('Cart', { article: data })
              }}
              style={{
                marginTop: 20,
                marginBottom: 20,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#E9E600',
                alignItems: 'center',
                width: '70%',
                alignSelf: 'center',
                elevation: 2,
              }}
            >
              <Text style={{ fontFamily: 'GothamSSm-Bold', fontSize: 14 }}>
                Add To Cart
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                textDecorationLine: 'underline',
                fontFamily: 'GothamSSm-Medium',
                color: '#777',
              }}
            >
              Specs
            </Text>
            <View>{GetSpecs()}</View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
