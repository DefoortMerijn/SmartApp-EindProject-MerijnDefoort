import { StyleSheet } from 'react-native'
import color from './globalStyles/color'

export const DetailStyle = StyleSheet.create({
  Image: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Name: {
    fontSize: 24,
    fontFamily: 'GothamSSm-Medium',
  },
  Description: {
    marginTop: 20,
    fontSize: 10,
    color: '#777',
    fontFamily: 'GothamSSm-Light',
  },
  AddButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'GothamSSm-Medium',
  },
  Content: { marginTop: 15, maxHeight: '100%' },
  SpecsTitle: {
    fontSize: 24,
    fontFamily: 'GothamSSm-Medium',
    color: '#777',
  },
  Line: { borderColor: '#777', borderWidth: 1 },
  SpecsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  SpecsKey: { fontFamily: 'GothamSSm-Bold', fontSize: 11 },
  SpecsValue: {
    fontFamily: 'GothamSSm-Light',
    fontSize: 10,
    color: '#777777',
    textAlign: 'right',
  },
  Price: {
    fontSize: 18,
    fontFamily: 'GothamSSm-Light',
    paddingLeft: 20,
  },
  OldPrice: {
    color: color.oldPrice,
    fontSize: 18,
    fontFamily: 'GothamSSm-Light',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  NewPrice: {
    color: color.newprice,
    fontSize: 18,
    fontFamily: 'GothamSSm-Light',
  },
})
