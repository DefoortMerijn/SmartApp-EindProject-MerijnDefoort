import {
  NavigationProp,
  RouteProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartContext } from '../context/CartContext'
import { CartStyle } from '../styles/CartStyle'
import { PageStyle } from '../styles/PageStyle'
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
  const [total, setTotal] = useState<number | undefined>()
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
      cart.reduce(
        (acc, item) =>
          acc +
          (item.article.price -
            (item.article.price * item.article.salePercentage) / 100) *
            item.quantity,
        0,
      ),
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
      return <Text style={CartStyle.Price}>€{data.price.toFixed(2)}</Text>
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={CartStyle.OldPrice}>€{data.price.toFixed(2)}</Text>
          <Text style={CartStyle.NewPrice}>
            €
            {(data.price - (data.price * data.salePercentage) / 100).toFixed(2)}
          </Text>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={PageStyle.Container}>
      <View style={PageStyle.Header}>
        <TouchableOpacity onPress={() => nav.navigate('MainDrawer')}>
          <Icon name="close" style={PageStyle.Icon} />
        </TouchableOpacity>
        <Text style={PageStyle.Title}>REVIEW YOUR CART</Text>
      </View>
      <ScrollView style={CartStyle.ItemView}>
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
              <View>
                <Image
                  source={{ uri: item.article.image }}
                  style={CartStyle.Image}
                />
              </View>
              <View style={CartStyle.InfoView}>
                <Text
                  style={{
                    fontFamily: 'GothamSSm-Medium',
                  }}
                >
                  {item.article.name}
                </Text>
                <View style={CartStyle.PUView}>
                  <Text style={CartStyle.Units}>Units: {item.quantity}</Text>
                  <Text>{ShowPrice(item.article)}</Text>
                </View>

                <TouchableOpacity onPress={() => removeItem(item)}>
                  <Text style={CartStyle.Remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View>
        <Text style={CartStyle.Total}>
          Total Price:{' '}
          {
            <Text style={{ fontFamily: 'GothamSSm-Bold' }}>
              €{total?.toFixed(2)}
            </Text>
          }
        </Text>
      </View>
      <View style={{ marginBottom: 0 }}>
        <TouchableOpacity
          style={CartStyle.CheckoutButton}
          onPress={() => console.log('Checkout')}
        >
          <Text style={CartStyle.CheckoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
