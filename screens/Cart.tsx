import {
  NavigationProp,
  RouteProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native'
import { Cross } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartContext } from '../context/CartContext'
import { StackParamList } from './MainStack'

export const Cart = ({
  route,
  navigation,
}: {
  route: RouteProp<StackParamList, 'Cart'>
  navigation: NavigationProp<StackParamList, 'Cart'>
}) => {
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()
  const { cart, setCart } = useCartContext()
  const [total, setTotal] = useState<number>()
  const isFocused = useIsFocused()
  let index = 0

  useEffect(() => {
    const article = route.params?.article
    // Get Local IP

    if (article) {
      // try and find article in cart
      const cartItem = cart.find((item) => item.article.id === article.id)
      // if article is in cart, increase quantity
      // else add article to cart
      cartItem ? cartItem.quantity++ : cart.push({ article, quantity: 1 })
      // update cart state
      setCart([...cart])
      // set params to undefined
      navigation.setParams({ article: undefined })
    }
    // update total
    setTotal(
      cart.reduce((acc, item) => acc + item.article.price * item.quantity, 0),
    )
    console.log('cart: ', cart)
  }, [isFocused])

  const removeItem = (article: CartItem) => {
    // remove article from cart
    console.log('removeItem: ', article)
    if (article) {
      // if article is in cart, decrease quantity
      // if quantity is 0, remove article from cart
      if (article.quantity === 1) {
        //find the articles index number
        const index = cart.findIndex(
          (item) => item.article.id === article.article.id,
        )
        // remove article from cart
        cart.splice(index, 1)
      } else {
        // decrease quantity
        article.quantity--
      }
    }
    // update cart state
    setTotal(
      cart.reduce((acc, item) => acc + item.article.price * item.quantity, 0),
    )
    setCart([...cart])
  }

  const ShowPrice = (data: Article) => {
    if (data.salePercentage === 0) {
      return (
        <Text
          style={{
            fontFamily: 'GothamSSm-Medium',
            fontSize: 12,
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
              fontFamily: 'GothamSSm-Medium',
              textDecorationLine: 'line-through',
              marginRight: 5,
            }}
          >
            €{data.price.toFixed(2)}
          </Text>
          <Text
            style={{
              fontFamily: 'GothamSSm-Medium',
              color: '#ff5847',
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
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Icon
            name="close"
            style={{ alignSelf: 'flex-start', marginBottom: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'bebas-neue-regular', fontSize: 32 }}>
          REVIEW YOUR CART
        </Text>
      </View>

      <ScrollView
        style={{
          marginTop: 15,
          maxHeight: '80%',
        }}
      >
        {cart.map((item) => {
          index++
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  backgroundColor: '#E4E5E7',
                  alignItems: 'center',
                  marginRight: 10,
                  height: 100,
                  width: 100,
                }}
              >
                <Image
                  source={{ uri: item.article.image }}
                  style={{
                    width: 120,
                    height: 80,
                    marginVertical: 5,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{ flexDirection: 'column', width: '70%', padding: 5 }}
              >
                <Text
                  style={{
                    fontFamily: 'GothamSSm-Medium',
                  }}
                >
                  {item.article.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: 'grey',
                      fontFamily: 'GothamSSm-Light',
                      fontSize: 11,
                    }}
                  >
                    Units: {item.quantity}
                  </Text>
                  <Text>{ShowPrice(item.article)}</Text>
                </View>

                <TouchableOpacity onPress={() => removeItem(item)}>
                  <Text
                    style={{
                      fontFamily: 'GothamSSm-Medium',
                      fontSize: 12,
                      color: 'grey',
                    }}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 45,
            marginBottom: 15,
            fontFamily: 'GothamSSm-Light',
          }}
        >
          Total Price: €{total}
        </Text>
      </View>
      <View style={{ marginBottom: 0 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Checkout')}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'GothamSSm-Medium',
            }}
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
