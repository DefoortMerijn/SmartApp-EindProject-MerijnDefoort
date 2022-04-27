import { useEffect } from 'react'
import { Button, Image, Text, View, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {
  FlatList,
  ScrollView as GestureHandlesScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Detail = ({
  route,
  navigation,
}: {
  route: any
  navigation: any
}) => {
  const { payload }: { payload: Article } = route.params

  // type DetailScreenProp = CompositeNavigationProp<
  //   StackNavigationProp<ParamListBase, 'KeyboardStack'>,
  //   DrawerNavigationProp<ParamListBase, 'MainDrawer'>
  // >

  // const navigation = useNavigation<DetailScreenProp>()
  // useEffect(() => {
  //   navigation?.getParent()?.setOptions({ title: payload.name })
  // }, [])
  const onPressLearnMore = () => {
    console.log('pressed')
    for (const [key, value] of Object.entries(payload.specs)) {
      console.log('value: ', value)
      console.log('key: ', key)
    }
    console.log(payload.specs)
  }
  const GetSpecs = () => {
    return (
      <SafeAreaView>
        <GestureHandlesScrollView
          style={{ maxHeight: '61%', marginBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          {Object.entries(payload.specs).map(([key, value]) => {
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
        </GestureHandlesScrollView>
      </SafeAreaView>
    )
  }
  const ShowPrice = () => {
    if (payload.salePercentage === 0) {
      return (
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'GothamSSm-Light',
            paddingLeft: 20,
          }}
        >
          €{payload.price.toFixed(2)}
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
            €{payload.price.toFixed(2)}
          </Text>
          <Text
            style={{
              color: '#ff5847',
              fontSize: 18,
              fontFamily: 'GothamSSm-Light',
            }}
          >
            €
            {(
              payload.price -
              (payload.price * payload.salePercentage) / 100
            ).toFixed(2)}
          </Text>
        </View>
      )
    }
  }
  return (
    <View
      style={{
        backgroundColor: '#F0F0F0',
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          style={{ alignSelf: 'flex-start', marginBottom: 10 }}
        />
      </TouchableOpacity>

      <Image
        source={{ uri: payload.image }}
        style={{
          width: 180,
          height: 180,
        }}
      />

      <Text
        style={{
          fontSize: 24,

          fontFamily: 'GothamSSm-Medium',
        }}
      >
        {payload.name}
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
        {payload.description}
      </Text>

      <TouchableOpacity
        onPress={onPressLearnMore}
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
  )
}
