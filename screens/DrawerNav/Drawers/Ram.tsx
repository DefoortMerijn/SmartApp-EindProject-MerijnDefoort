import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Article } from '../../../components/Article'
import { DrawerStyle } from '../../../styles/DrawerStyle'
import { PageStyle } from '../../../styles/globalStyles/PageStyle'
import { Ip } from '../../../utils/Ip'

export const Ram = () => {
  const [data, setData] = useState<Article[]>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${Ip.ip}/articles/category/Ram`)
      const json = await res.json()
      // console.log(json)
      setData(json)
    }
    fetchData()
  }, [])

  return (
    <View style={DrawerStyle.Background}>
      <Text style={DrawerStyle.Title}>Ram</Text>
      <Article data={data} />
    </View>
  )
}
