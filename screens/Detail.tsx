import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native'
import { Image, Text, View, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DetailStyle } from '../styles/DetailStyle'
import { PageStyle } from '../styles/PageStyle'
import { StackParamList } from './MainStack'

export const Detail = ({
  route,
}: {
  route: RouteProp<StackParamList, 'Detail'>
}) => {
  const nav = useNavigation<NavigationProp<StackParamList, 'MainDrawer'>>()
  const data = route.params.article

  const GetSpecs = () => {
    return (
      <SafeAreaView>
        {Object.entries(data.specs).map(([key, value]) => {
          return (
            <View key={key} style={DetailStyle.SpecsView}>
              <Text style={DetailStyle.SpecsKey}>{key}</Text>
              <View style={{ maxWidth: '50%' }}>
                <Text style={DetailStyle.SpecsValue}>{value}</Text>
              </View>
            </View>
          )
        })}
      </SafeAreaView>
    )
  }
  const ShowPrice = () => {
    if (data.salePercentage === 0) {
      return <Text style={DetailStyle.Price}>€{data.price.toFixed(2)}</Text>
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={DetailStyle.OldPrice}>€{data.price.toFixed(2)}</Text>
          <Text style={DetailStyle.NewPrice}>
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
        <Text style={PageStyle.Title}>Info</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={DetailStyle.Content}
      >
        <View>
          <View style={{ marginBottom: 10 }}>
            <Image source={{ uri: data.image }} style={DetailStyle.Image} />
          </View>

          <Text style={DetailStyle.Name}>{data.name}</Text>
          <Text>{ShowPrice()}</Text>

          <Text style={DetailStyle.Description}>{data.description}</Text>

          <TouchableOpacity
            onPress={() => {
              nav.navigate('Cart', { article: data })
            }}
            style={DetailStyle.AddButton}
          >
            <Text style={DetailStyle.AddButtonText}>Add To Cart</Text>
          </TouchableOpacity>

          <Text style={DetailStyle.SpecsTitle}>Specs</Text>
          <View style={DetailStyle.Line}></View>
          <View>{GetSpecs()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
