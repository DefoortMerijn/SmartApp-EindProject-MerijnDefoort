import { StyleSheet } from 'react-native'
import color from './color'

export const LoginServiceStyle = StyleSheet.create({
  FormView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  Label: { marginBottom: 5, fontFamily: 'GothamSSm-Bold' },
  Input: {
    minWidth: '90%',
    height: 40,
    borderColor: color.gray[800],
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontFamily: 'GothamSSm-Light',
  },
  SubmitButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: color.dark,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitButtonText: {
    color: color.light,
    textAlign: 'center',
    fontFamily: 'GothamSSm-Medium',
  },
  Link: { fontFamily: 'GothamSSm-Light', fontSize: 12 },
})
