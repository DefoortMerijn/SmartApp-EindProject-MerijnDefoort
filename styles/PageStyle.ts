import { StyleSheet } from 'react-native'

export const PageStyle = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 35,
  },
  Container: { flex: 1, padding: 15 },
  Title: { fontFamily: 'bebas-neue-regular', fontSize: 32 },
  Icon: { alignSelf: 'flex-start' },
})
