import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
  Image: {
    width: 500,
    height: 220,
    resizeMode: 'contain',
  },
  ImageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  Line: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  Text: {
    marginTop: 10,
    fontFamily: 'GothamSSm-Light',
    color: '#fff',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  Title: {
    marginTop: 10,
    fontFamily: 'bebas-neue-regular',
    color: '#fff',
    fontSize: 32,
    alignSelf: 'center',
  },
  Bg: {
    width: '100%',
    height: '100%',
  },
})
