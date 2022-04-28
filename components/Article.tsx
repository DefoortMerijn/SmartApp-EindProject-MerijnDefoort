import { FlatList, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Article = ({
  navigation,
  data,
}: {
  navigation: any
  data: any
}) => {
  const renderItem = ({ item }: { item: Article }) => {
    console.log(item.image)

    const ShowPrice = () => {
      if (item.salePercentage === 0) {
        return (
          <Text style={{ fontFamily: 'HelveticaNeueLTPro-Lt' }}>
            €{item.price.toFixed(2)}
          </Text>
        )
      } else {
        return (
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#bbbbbb',
                fontFamily: 'HelveticaNeueLTPro-Lt',
                textDecorationLine: 'line-through',
                marginRight: 5,
              }}
            >
              €{item.price.toFixed(2)}
            </Text>
            <Text
              style={{ color: '#ff5847', fontFamily: 'HelveticaNeueLTPro-Lt' }}
            >
              €
              {(item.price - (item.price * item.salePercentage) / 100).toFixed(
                2,
              )}
            </Text>
          </View>
        )
      }
    }
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail', {
              payload: item,
            })
          }
        >
          <View
            style={{
              flex: 1 / 2,
              margin: 3,
              width: 190,
              elevation: 2,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#FCFCFC',
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                borderBottomColor: '#1f1f1f1f',
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 200,
                  height: 120,
                  marginVertical: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: 'HelveticaNeueLTPro-Md',
                }}
              >
                {item.name}
              </Text>
              <Text>{ShowPrice()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  )
}
