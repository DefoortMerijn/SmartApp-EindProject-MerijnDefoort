import { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Article } from '../../../components/Article'
import { Ip } from '../../../utils/Ip'

export const Cooling = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<Article[]>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${Ip.ip}/articles/category/Cooling`)
      const json = await res.json()
      // console.log(json)
      setData(json)
    }
    fetchData()
  }, [])
  return (
    <View style={{ backgroundColor: '#ffffff', height: '100%' }}>
      <Text
        style={{
          fontFamily: 'GothamSSm-Bold',
          marginBottom: 10,
          fontSize: 24,
          padding: 5,
        }}
      >
        Cooling
      </Text>

      <Article navigation={navigation} data={data} />
    </View>
  )
}
