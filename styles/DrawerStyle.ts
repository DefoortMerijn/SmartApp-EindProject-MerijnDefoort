import { StyleSheet } from 'react-native'
import color from './color'

export const DrawerStyle = StyleSheet.create({
  Title: {
    fontFamily: 'GothamSSm-Bold',
    marginBottom: 10,
    fontSize: 24,
    padding: 5,
  },
  Background: {
    backgroundColor: color.light,
    height: '100%',
    padding: 10,
  },
})
