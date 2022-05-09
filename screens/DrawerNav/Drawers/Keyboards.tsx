import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Article } from '../../../components/Article'
import { DrawerStyle } from '../../../styles/DrawerStyle'
import { Ip } from '../../../utils/Ip'

export const Keyboards = () => {
  const [data, setData] = useState<Article[]>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${Ip.ip}/articles/category/Keyboard`)
      const json = await res.json()
      // console.log(json)
      setData(json)
    }
    fetchData()
  }, [])

  return (
    <View style={DrawerStyle.Background}>
      <Text style={DrawerStyle.Title}>Keyboards</Text>
      <Article data={data} />
    </View>
  )
}
