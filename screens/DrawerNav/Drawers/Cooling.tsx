import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Article } from '../../../components/Article'
import { Ip } from '../../../utils/Ip'
import { DrawerStyle } from '../../../styles/DrawerStyle'

export const Cooling = () => {
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
    <View style={DrawerStyle.Background}>
      <Text style={DrawerStyle.Title}>Cooling</Text>
      <Article data={data} />
    </View>
  )
}
