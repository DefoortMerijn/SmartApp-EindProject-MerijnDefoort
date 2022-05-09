import { StyleSheet } from 'react-native'
import color from './color'

export const CartStyle = StyleSheet.create({
  Price: {
    fontFamily: 'GothamSSm-Medium',
    fontSize: 12,
    paddingLeft: 20,
  },
  OldPrice: {
    color: color.oldPrice,
    fontFamily: 'GothamSSm-Medium',
    fontSize: 12,
    paddingLeft: 20,
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  NewPrice: {
    fontFamily: 'GothamSSm-Medium',
    color: color.newprice,
    fontSize: 12,
  },
  Image: {
    width: 120,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: color.gray[200],
  },
  InfoView: { flexDirection: 'column', width: '65%', padding: 5 },
  PUView: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  Units: {
    color: color.gray[600],
    fontFamily: 'GothamSSm-Light',
    fontSize: 11,
  },
  Remove: {
    fontFamily: 'GothamSSm-Medium',
    fontSize: 12,
    color: color.gray[800],
  },
  Total: {
    color: '#000',
    marginTop: 45,
    marginBottom: 15,
    fontFamily: 'GothamSSm-Light',
  },
  CheckoutButton: {
    backgroundColor: color.dark,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckoutButtonText: {
    color: color.light,
    textAlign: 'center',
    fontFamily: 'GothamSSm-Medium',
  },
  ItemView: {
    marginTop: 15,
    maxHeight: '80%',
  },
})
